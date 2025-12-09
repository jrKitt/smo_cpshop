const express = require("express");
const axios = require("axios");
const bodyParser = require("body-parser");
const cors = require("cors");
const path = require("path");
require("dotenv").config();
const fs = require("fs");
const csv = require("csv-parser");
const { GoogleSheetsService } = require("./config/sheets");
const { MockGoogleSheetsService } = require("./config/mock-sheets");
const { GoogleDriveService } = require("./config/drive");
const app = express();
const PORT = process.env.PORT || 3000;
let sheetsService;
const driveService = new GoogleDriveService();

app.use(cors());
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

const sendConfirmationEmail = require("./api/sendConfirmationEmail");
app.use("/send-confirmation-email", sendConfirmationEmail);

app.use(
  cors({
    origin: "*",
    methods: ["GET", "POST"],
    allowedHeaders: ["Content-Type"],
  })
);

app.use(express.json({ limit: "100mb" }));
app.use(express.urlencoded({ extended: true, limit: "100mb" }));

app.use(express.static(path.join(__dirname, "public")));
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "home.html"));
});
app.get("/shop", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "shop.html"));
});

app.get("/tracking", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "tracking.html"));
});

app.get("/size", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "size.html"));
});
app.get("/test", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "test.html"));
});
app.get("/admin", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "admin/admin.html"));
});
app.get("/admin/generateKey", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "admin/generate.html"));
});
app.get("/admin/orders", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "admin-orders-sheets.html"));
});

app.post("/upload-slip", async (req, res) => {
  console.log("Received slip upload request");

  try {
    const { file, fileName, type, orderRef } = req.body;

    if (!file || !fileName || !type) {
      return res.status(400).json({
        success: false,
        message: "Missing required fields: file, fileName, or type",
      });
    }

    // ตรวจสอบประเภทไฟล์ - รับเฉพาะ PNG และ JPEG เท่านั้น
    const allowedTypes = ["image/png", "image/jpeg", "image/jpg"];
    if (!allowedTypes.includes(type.toLowerCase())) {
      return res.status(400).json({
        success: false,
        message:
          "รองรับเฉพาะไฟล์ PNG และ JPEG เท่านั้น กรุณาแปลงไฟล์ให้อยู่ในรูปแบบที่รองรับ",
      });
    }

    // ลบ data URL prefix ที่ครอบคลุมทุก format และรองรับ + และ /
    let base64Data = file.replace(/^data:image\/[a-z0-9+]+;base64,/i, "");

    // ตรวจสอบว่าเป็น base64 ที่ถูกต้อง
    if (!base64Data || base64Data === file) {
      console.log("Failed to remove data URL prefix:", file.substring(0, 50));
      return res.status(400).json({
        success: false,
        message: "Invalid file format. Expected base64 image data.",
      });
    }

    // ทำความสะอาด base64 string (ลบ whitespace และ newlines)
    base64Data = base64Data.replace(/\s/g, "");

    try {
      const fileBuffer = Buffer.from(base64Data, "base64");

      // ตรวจสอบขนาดไฟล์ว่าสมเหตุสมผล
      if (fileBuffer.length === 0) {
        throw new Error("Empty file buffer");
      }

      console.log(
        `Base64 length: ${base64Data.length}, Buffer length: ${fileBuffer.length}`
      );
    } catch (bufferError) {
      console.error("Buffer creation error:", bufferError);
      return res.status(400).json({
        success: false,
        message: "Invalid base64 data.",
      });
    }

    const fileBuffer = Buffer.from(base64Data, "base64");

    // ตรวจสอบ magic bytes เฉพาะ PNG และ JPEG เท่านั้น
    const allowedImageSignatures = {
      "image/jpeg": [0xff, 0xd8, 0xff],
      "image/png": [0x89, 0x50, 0x4e, 0x47],
    };

    let detectedType = null;
    for (const [mimeType, signature] of Object.entries(
      allowedImageSignatures
    )) {
      if (fileBuffer.length >= signature.length) {
        const match = signature.every(
          (byte, index) => fileBuffer[index] === byte
        );
        if (match) {
          detectedType = mimeType;
          console.log(`Detected image type: ${mimeType}`);
          break;
        }
      }
    }

    if (!detectedType) {
      const magicBytes = Array.from(fileBuffer.slice(0, 8))
        .map((b) => "0x" + b.toString(16).padStart(2, "0"))
        .join(" ");
      console.log("File magic bytes:", magicBytes);

      return res.status(400).json({
        success: false,
        message:
          "ไฟล์ที่อัปโหลดไม่ใช่รูปภาพ PNG หรือ JPEG ที่ถูกต้อง กรุณาตรวจสอบไฟล์และลองใหม่อีกครั้ง",
      });
    }

    // ตรวจสอบและเพิ่ม extension เฉพาะ PNG และ JPEG
    const mimeToExt = {
      "image/jpeg": ".jpg",
      "image/jpg": ".jpg",
      "image/png": ".png",
    };

    const extension = mimeToExt[type] || ".jpg";

    // ตรวจสอบว่า fileName มี extension แล้วหรือไม่
    let processedFileName = fileName;
    if (!path.extname(fileName)) {
      processedFileName = fileName + extension;
    }

    // สร้างชื่อไฟล์ที่ใช้ orderRef เป็นหลัก
    const timestamp = new Date().toISOString().replace(/[:.]/g, "-");
    const finalFileName = orderRef
      ? `${orderRef}_${processedFileName}`
      : `${timestamp}_${processedFileName}`;

    // เก็บไฟล์ใน /tmp directory สำหรับ Vercel (writable directory)
    const uploadsDir = process.env.VERCEL
      ? "/tmp/slips"
      : path.join(__dirname, "public", "slips");
    if (!fs.existsSync(uploadsDir)) {
      fs.mkdirSync(uploadsDir, { recursive: true });
    }

    const filePath = path.join(uploadsDir, finalFileName);
    fs.writeFileSync(filePath, fileBuffer);

    // Debug: ตรวจสอบไฟล์ที่ถูกสร้าง
    console.log(`File created: ${filePath}`);
    console.log(`File size: ${fileBuffer.length} bytes`);
    console.log(`Content type: ${type}`);
    console.log(`Final filename: ${finalFileName}`);

    // เก็บข้อมูลสลิปใน JSON file
    const slipDataPath = process.env.VERCEL
      ? "/tmp/slips.json"
      : path.join(__dirname, "public", "slips", "slips.json");
    let slipsData = [];

    if (fs.existsSync(slipDataPath)) {
      const existingData = fs.readFileSync(slipDataPath, "utf8");
      slipsData = JSON.parse(existingData);
    }

    slipsData.push({
      orderRef: orderRef || "UNKNOWN",
      fileName: finalFileName,
      originalFileName: fileName,
      uploadDate: new Date().toISOString(),
      fileType: type,
      filePath: process.env.VERCEL
        ? `/api/slip-file/${finalFileName}`
        : `/slips/${finalFileName}`,
      localPath: filePath,
    });

    fs.writeFileSync(slipDataPath, JSON.stringify(slipsData, null, 2));

    console.log("Slip saved successfully:", finalFileName);

    // อัปโหลดสลิปลง Google Sheets (primary method)
    let uploadedToSheets = false;
    if (orderRef) {
      try {
        const uploadResult = await sheetsService.uploadSlip(
          orderRef,
          base64Data,
          processedFileName, // ใช้ชื่อไฟล์เดิมที่ไม่มี orderRef ซ้ำ
          type
        );

        console.log(
          "Slip uploaded to Google Sheets successfully:",
          uploadResult
        );
        uploadedToSheets = true;

        return res.status(200).json({
          success: true,
          status: "success",
          fileName: finalFileName,
          orderRef: orderRef,
          base64Data: base64Data,
          fileType: type,
          uploadMethod: "google_sheets",
          message: "อัปโหลดสลิปลง Google Sheets สำเร็จ",
        });
      } catch (sheetsError) {
        console.log(
          "Google Sheets upload failed, falling back to local storage:",
          sheetsError.message
        );
      }
    } else {
      console.log("No orderRef provided - using local storage only");
    }

    // พยายามอัพโหลดไปยัง Google Drive ด้วย (backup) - เฉพาะ local development
    let driveUploadResult = null;
    if (!process.env.VERCEL) {
      try {
        driveUploadResult = await driveService.uploadSlip(
          fileBuffer,
          finalFileName,
          type,
          orderRef || "UNKNOWN"
        );
        console.log("Also uploaded to Google Drive as backup:", driveUploadResult);
      } catch (driveError) {
        console.log(
          "Google Drive backup failed, but local save succeeded:",
          driveError.message
        );
      }
    } else {
      console.log("Vercel environment - skipping Google Drive backup");
    }

    // บันทึก metadata ลง slips.json เสมอ (เป็น fallback เมื่อ Sheets ไม่พร้อม)
    const slipJsonPath = path.join(__dirname, "public", "slips", "slips.json");
    let existingSlips = [];
    
    try {
      if (fs.existsSync(slipJsonPath)) {
        const data = fs.readFileSync(slipJsonPath, "utf8");
        existingSlips = JSON.parse(data);
      }
    } catch (readError) {
      console.log("Could not read existing slips.json:", readError.message);
      existingSlips = [];
    }

    // ลบ entry เก่าที่มี orderRef เดียวกัน (ถ้ามี)
    existingSlips = existingSlips.filter(s => s.orderRef !== orderRef);

    // เพิ่ม entry ใหม่
    const slipMetadata = {
      orderRef: orderRef || "UNKNOWN",
      fileName: driveUploadResult ? driveUploadResult.fileName : finalFileName,
      originalFileName: fileName,
      uploadDate: new Date().toISOString(),
      fileType: type,
      filePath: driveUploadResult ? driveUploadResult.viewLink : `/uploads/slips/${driveUploadResult ? driveUploadResult.fileName : finalFileName}`,
      localPath: driveUploadResult ? driveUploadResult.localPath : filePath,
    };

    existingSlips.push(slipMetadata);

    try {
      fs.writeFileSync(slipJsonPath, JSON.stringify(existingSlips, null, 2), "utf8");
      console.log("Updated slips.json with new slip metadata");
    } catch (writeError) {
      console.error("Could not write to slips.json:", writeError.message);
    }

    res.status(200).json({
      success: true,
      status: "success",
      fileName: slipMetadata.fileName,
      fileUrl: slipMetadata.filePath,
      message: "อัปโหลดสลิปสำเร็จ",
    });
  } catch (error) {
    console.error("Error uploading slip:", error.message);

    res.status(500).json({
      success: false,
      message: error.message || "ไม่สามารถอัปโหลดสลิปได้",
    });
  }
});

// API สำหรับดูสลิปทั้งหมด
app.get("/api/slips", async (req, res) => {
  try {
    // ดึงสลิปจาก Google Sheets
    const slipsFromSheets = await sheetsService.getSlips();

    // ถ้าไม่มีข้อมูลใน Sheets ให้ fallback ไปที่ local file
    if (slipsFromSheets && slipsFromSheets.length > 0) {
      res.json(slipsFromSheets);
      return;
    }

    // Fallback: อ่านจาก local JSON file
    const slipDataPath = process.env.VERCEL
      ? "/tmp/slips.json"
      : path.join(__dirname, "public", "slips", "slips.json");

    if (!fs.existsSync(slipDataPath)) {
      return res.json([]);
    }

    const slipsData = JSON.parse(fs.readFileSync(slipDataPath, "utf8"));
    res.json(slipsData);
  } catch (error) {
    console.error("Error reading slips:", error);
    res.status(500).json({ error: "ไม่สามารถอ่านข้อมูลสลิปได้" });
  }
});

// API สำหรับค้นหาสลิปตาม orderRef
app.get("/api/slips/:orderRef", async (req, res) => {
  try {
    const { orderRef } = req.params;

    // ค้นหาจาก Google Sheets ก่อน
    try {
      const slipsFromSheets = await sheetsService.getSlips();
      const slip = slipsFromSheets.find((s) => s.orderRef === orderRef);

      if (slip) {
        res.json(slip);
        return;
      }
    } catch (sheetsError) {
      console.log(
        "Google Sheets search failed, trying local file:",
        sheetsError.message
      );
    }

    // Fallback: ค้นหาจาก local JSON file
    const slipDataPath = process.env.VERCEL
      ? "/tmp/slips.json"
      : path.join(__dirname, "public", "slips", "slips.json");

    if (!fs.existsSync(slipDataPath)) {
      return res.status(404).json({ error: "ไม่พบสลิป" });
    }

    const slipsData = JSON.parse(fs.readFileSync(slipDataPath, "utf8"));
    const slip = slipsData.find((s) => s.orderRef === orderRef);

    if (slip) {
      res.json(slip);
    } else {
      res.status(404).json({ error: "ไม่พบสลิปสำหรับคำสั่งซื้อนี้" });
    }
  } catch (error) {
    console.error("Error finding slip:", error);
    res.status(500).json({ error: "ไม่สามารถค้นหาสลิปได้" });
  }
});

// API สำหรับให้บริการไฟล์สลิปใน Vercel - รองรับทั้ง file และ base64 จาก Sheets
app.get("/api/slip-file/:fileName", async (req, res) => {
  try {
    const { fileName } = req.params;

    // พยายามดึงข้อมูลจาก Google Sheets ก่อน (สำหรับไฟล์ที่เก็บเป็น base64)
    try {
      // แยก orderRef จาก fileName (format: orderRef_originalFileName)
      const orderRef = fileName.split("_")[0];

      if (orderRef && orderRef.startsWith("SMO")) {
        const slipsFromSheets = await sheetsService.getSlips();
        const slip = slipsFromSheets.find((s) => s.orderRef === orderRef);

        if (slip && slip.base64Data) {
          // ส่งรูปภาพจาก base64 data
          const buffer = Buffer.from(slip.base64Data, "base64");
          const contentType = slip.fileType || "image/jpeg";

          res.setHeader("Content-Type", contentType);
          res.setHeader("Cache-Control", "public, max-age=3600");
          return res.send(buffer);
        }
      }
    } catch (sheetsError) {
      console.log(
        "Google Sheets lookup failed, trying local file:",
        sheetsError.message
      );
    }

    // Fallback: ดึงจากไฟล์ local
    const filePath = process.env.VERCEL
      ? path.join("/tmp/slips", fileName)
      : path.join(__dirname, "public", "slips", fileName);

    if (!fs.existsSync(filePath)) {
      return res.status(404).json({ error: "ไม่พบไฟล์" });
    }

    // ตรวจสอบ MIME type - รองรับเฉพาะ PNG และ JPEG
    const ext = path.extname(fileName).toLowerCase();
    const allowedMimeTypes = {
      ".jpg": "image/jpeg",
      ".jpeg": "image/jpeg",
      ".png": "image/png",
    };

    const contentType = allowedMimeTypes[ext];
    if (!contentType) {
      return res.status(400).json({
        error:
          "ไฟล์ประเภทนี้ไม่ได้รับการรองรับ รองรับเฉพาะ PNG และ JPEG เท่านั้น",
      });
    }
    res.setHeader("Content-Type", contentType);
    res.setHeader("Cache-Control", "public, max-age=3600"); // Cache 1 hour

    const fileStream = fs.createReadStream(filePath);
    fileStream.pipe(res);
  } catch (error) {
    console.error("Error serving slip file:", error);
    res.status(500).json({ error: "ไม่สามารถให้บริการไฟล์ได้" });
  }
});

// หน้าเว็บสำหรับดูสลิป
app.get("/slips", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "slips-viewer.html"));
});

app.get("/slip/:orderRef", async (req, res) => {
  try {
    const { orderRef } = req.params;
    const slip = await driveService.getSlipByOrderRef(orderRef);

    if (slip) {
      res.status(200).json({
        success: true,
        slip: slip,
      });
    } else {
      res.status(404).json({
        success: false,
        message: "ไม่พบสลิปสำหรับคำสั่งซื้อนี้",
      });
    }
  } catch (error) {
    console.error("Error getting slip:", error.message);
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
});

app.get("/admin/slips", async (req, res) => {
  try {
    const limit = parseInt(req.query.limit) || 50;
    const slips = await driveService.listSlips(limit);

    res.status(200).json({
      success: true,
      slips: slips,
    });
  } catch (error) {
    console.error("Error listing slips:", error.message);
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
});

app.get("/track-order/:orderRef", async (req, res) => {
  try {
    const { orderRef } = req.params;
    console.log(`Tracking order: ${orderRef}`);

    const order = await sheetsService.getOrderByRef(orderRef);

    if (order) {
      res.status(200).json({
        success: true,
        order: {
          orderRef: order.orderRef,
          packageName: order.packageName,
          firstname: order.firstname,
          lastname: order.lastname,
          email: order.email,
          phone: order.phone,
          totalAmount: order.totalAmount,
          orderDate: order.orderDate,
          status: order.status || "pending",
          trackingCode: order.trackingCode || null,
          deliveryType: order.deliveryType,
          address: order.address,
          items: order.items ? JSON.parse(order.items) : [],
        },
      });
    } else {
      res.status(404).json({
        success: false,
        message: "ไม่พบคำสั่งซื้อที่ระบุ",
      });
    }
  } catch (error) {
    console.error("Error tracking order:", error.message);
    res.status(500).json({
      success: false,
      message: "เกิดข้อผิดพลาดในการติดตามคำสั่งซื้อ",
    });
  }
});

app.post("/submit-order", async (req, res) => {
  console.log("Received order submission from frontend");
  console.log("Order data:", req.body);

  try {
    const {
      orderRef,
      packageName,
      firstname,
      lastname,
      email,
      phone,
      status,
      year,
      major,
      faculty,
      studentId,
      deliveryType,
      address,
      totalAmount,
      items,
      notes,
      slipUrl,
    } = req.body;

    if (
      !orderRef ||
      !packageName ||
      !firstname ||
      !lastname ||
      !email ||
      !phone ||
      !deliveryType ||
      !totalAmount
    ) {
      return res.status(400).json({
        success: false,
        error: "Missing required fields",
      });
    }

    const trackingCode =
      deliveryType === "shipping"
        ? `SMO${Date.now().toString().slice(-8)}${Math.floor(
            Math.random() * 100
          )}`
        : null;

    const orderData = {
      orderRef,
      packageName,
      firstname,
      lastname,
      email,
      phone,
      status: status || "student-in",
      year: year || "",
      major: major || "",
      faculty: faculty || "",
      studentId: studentId || "",
      deliveryType,
      address: address || "",
      totalAmount,
      items,
      notes: notes || "",
      slipUrl: slipUrl || "",
      trackingCode,
    };

    const result = await sheetsService.addOrder(orderData);

    console.log("Order saved to Google Sheets successfully:", orderRef);

    res.status(200).json({
      success: true,
      orderId: result.rowNumber,
      orderRef: orderRef,
      trackingCode: trackingCode,
      message: "คำสั่งซื้อถูกบันทึกเรียบร้อยแล้ว",
    });
  } catch (error) {
    console.error("Error saving order to Google Sheets:", error.message);
    console.error("Full error:", error);

    if (
      error.message.includes("already exists") ||
      error.message.includes("duplicate")
    ) {
      return res.status(400).json({
        success: false,
        error: "หมายเลขคำสั่งซื้อนี้มีอยู่ในระบบแล้ว",
      });
    }

    res.status(500).json({
      success: false,
      error: "เกิดข้อผิดพลาดในการบันทึกข้อมูล: " + error.message,
    });
  }
});

app.put("/update-order-status/:orderRef", async (req, res) => {
  try {
    const { orderRef } = req.params;
    const { status, trackingCode } = req.body;

    if (!orderRef || !status) {
      return res.status(400).json({
        success: false,
        error: "กรุณาระบุหมายเลขการสั่งซื้อและสถานะ",
      });
    }

    const result = await sheetsService.updateOrderStatus(
      orderRef,
      status,
      trackingCode
    );

    if (!result.success) {
      return res.status(404).json({
        success: false,
        error: result.error,
      });
    }

    res.status(200).json({
      success: true,
      message: result.message,
    });
  } catch (error) {
    console.error("Error updating order status:", error.message);
    res.status(500).json({
      success: false,
      error: "เกิดข้อผิดพลาดในการอัปเดตข้อมูล",
    });
  }
});

app.get("/data", (req, res) => {
  const results = [];
  fs.createReadStream("data/backend.csv")
    .pipe(csv())
    .on("data", (data) => results.push(data))
    .on("end", () => {
      res.json(results);
    });
});

app.get("/admin/orders", async (req, res) => {
  try {
    const orders = await sheetsService.getAllOrders();

    res.status(200).json({
      success: true,
      orders: orders,
    });
  } catch (error) {
    console.error("Error getting all orders:", error.message);
    res.status(500).json({
      success: false,
      error: "เกิดข้อผิดพลาดในการดึงข้อมูล",
    });
  }
});

async function startServer() {
  try {
    console.log("Initializing services...");

    try {
      sheetsService = new GoogleSheetsService();
      await sheetsService.initialize();
      console.log("Real Google Sheets service connected successfully");
    } catch (googleError) {
      console.warn("Google Sheets connection failed:", googleError.message);
      console.log(
        "Falling back to Mock Google Sheets Service for development..."
      );

      sheetsService = new MockGoogleSheetsService();
      await sheetsService.initialize();
      console.log("Mock Google Sheets service initialized for development");
    }

    try {
      await driveService.initialize();
      console.log("Google Drive service connected successfully");
      console.log(
        "Slip uploads will go to: https://drive.google.com/drive/folders/1PE0WV-awieF6mXGIbAdRaU-57Zy_BFnQ"
      );
    } catch (driveError) {
      console.warn("Google Drive connection failed:", driveError.message);
      console.log("Slip uploads may not work properly");
    }

    app.listen(PORT, () => {
      console.log(`Server is running at http://localhost:${PORT}`);
      console.log("Server initialized successfully");
      console.log("Database service ready");
      console.log("Drive service ready for slip uploads");

      if (sheetsService instanceof MockGoogleSheetsService) {
        console.log("Running in DEVELOPMENT MODE with mock data");
        console.log("Please set up Google Sheets credentials for production");
        console.log("See GOOGLE_SHEETS_SETUP.md for instructions");
      }
    });
  } catch (error) {
    console.error("Failed to start server:", error.message);
    process.exit(1);
  }
}

startServer();
