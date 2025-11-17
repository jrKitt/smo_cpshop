const express = require("express");
const axios = require("axios");
const bodyParser = require("body-parser");
const cors = require("cors");
const path = require("path");
require("dotenv").config(); // โหลด .env
const fs = require("fs");
const csv = require("csv-parser");
const { GoogleSheetsService } = require("./config/sheets");
const { MockGoogleSheetsService } = require("./config/mock-sheets"      console.log("✅ Server initialized successfully");
      console.log("📊 Database service ready");
      console.log("📁 Drive service ready for slip uploads");

      if (sheetsService instanceof MockGoogleSheetsService) {
        console.log("🧪 Running in DEVELOPMENT MODE with mock data");
        console.log("📋 Please set up Google Sheets credentials for production");
        console.log("📖 See GOOGLE_SHEETS_SETUP.md for instructions");
      } { GoogleDriveService } = require("./config/drive");
const app = express();
const PORT = process.env.PORT || 3000;

// Initialize Google Sheets service with fallback to mock
let sheetsService;
// Initialize Google Drive service
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

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "home.html"));
});
app.get("/shop", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "shop.html"));
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

// Route สำหรับอัปโหลดสลิปไป Google Drive
app.post("/upload-slip", async (req, res) => {
  console.log("📸 Received slip upload request");

  try {
    const { file, fileName, type, orderRef } = req.body;

    if (!file || !fileName || !type) {
      return res.status(400).json({
        success: false,
        message: "Missing required fields: file, fileName, or type",
      });
    }

    console.log("🔍 Uploading slip to Google Drive:", fileName);

    // Convert base64 to buffer
    const base64Data = file.replace(/^data:image\/[a-z]+;base64,/, "");
    const fileBuffer = Buffer.from(base64Data, 'base64');

    // Upload to Google Drive
    const result = await driveService.uploadSlip(
      fileBuffer, 
      fileName, 
      type, 
      orderRef || 'UNKNOWN'
    );

    console.log("✅ Slip uploaded successfully:", result.fileName);

    res.status(200).json(result);
  } catch (error) {
    console.error("❌ Error uploading slip:", error.message);

    res.status(500).json({
      success: false,
      message: error.message || "ไม่สามารถอัปโหลดสลิปได้",
    });
  }
});

// Route สำหรับดูสลิปตาม Order Reference
app.get("/slip/:orderRef", async (req, res) => {
  try {
    const { orderRef } = req.params;
    const slip = await driveService.getSlipByOrderRef(orderRef);
    
    if (slip) {
      res.status(200).json({
        success: true,
        slip: slip
      });
    } else {
      res.status(404).json({
        success: false,
        message: "ไม่พบสลิปสำหรับคำสั่งซื้อนี้"
      });
    }
  } catch (error) {
    console.error("❌ Error getting slip:", error.message);
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
});

// Route สำหรับดูสลิปทั้งหมด (Admin)
app.get("/admin/slips", async (req, res) => {
  try {
    const limit = parseInt(req.query.limit) || 50;
    const slips = await driveService.listSlips(limit);
    
    res.status(200).json({
      success: true,
      slips: slips
    });
  } catch (error) {
    console.error("❌ Error listing slips:", error.message);
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
});

app.post("/submit-order", async (req, res) => {
  console.log("📝 Received order submission from frontend");
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

    // Generate tracking code for shipped orders
    const trackingCode =
      deliveryType === "shipping"
        ? `SMO${Date.now().toString().slice(-8)}${Math.floor(
            Math.random() * 100
          )}`
        : null;

    // Prepare order data for Google Sheets
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

    // Save order to Google Sheets
    const result = await sheetsService.addOrder(orderData);

    console.log("✅ Order saved to Google Sheets successfully:", orderRef);

    res.status(200).json({
      success: true,
      orderId: result.rowNumber,
      orderRef: orderRef,
      trackingCode: trackingCode,
      message: "คำสั่งซื้อถูกบันทึกเรียบร้อยแล้ว",
    });
  } catch (error) {
    console.error("❌ Error saving order to Google Sheets:", error.message);
    console.error("❌ Full error:", error);

    // Handle duplicate order reference
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

app.get("/track-order/:orderRef", async (req, res) => {
  try {
    const { orderRef } = req.params;

    if (!orderRef) {
      return res.status(400).json({
        success: false,
        error: "กรุณาระบุหมายเลขการสั่งซื้อ",
      });
    }

    // Get order from Google Sheets
    const order = await sheetsService.getOrder(orderRef);

    if (!order) {
      return res.status(404).json({
        success: false,
        error: "ไม่พบหมายเลขการสั่งซื้อนี้ในระบบ",
      });
    }

    res.status(200).json({
      success: true,
      order: {
        orderNumber: order.orderNumber,
        packageName: order.packageName,
        customerName: order.customerName,
        email: order.email,
        phone: order.phone,
        deliveryType: order.deliveryType,
        totalAmount: order.totalAmount,
        status: order.status,
        trackingCode: order.trackingCode,
        orderDate: order.orderDate,
        lastUpdate: order.lastUpdate,
      },
    });
  } catch (error) {
    console.error("❌ Error tracking order:", error.message);
    res.status(500).json({
      success: false,
      error: "เกิดข้อผิดพลาดในการค้นหาข้อมูล",
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

    // Update order status in Google Sheets
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
    console.error("❌ Error updating order status:", error.message);
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

// Admin endpoint to get all orders
app.get("/admin/orders", async (req, res) => {
  try {
    const orders = await sheetsService.getAllOrders();

    res.status(200).json({
      success: true,
      orders: orders,
    });
  } catch (error) {
    console.error("❌ Error getting all orders:", error.message);
    res.status(500).json({
      success: false,
      error: "เกิดข้อผิดพลาดในการดึงข้อมูล",
    });
  }
});

async function startServer() {
  try {
    console.log("🔄 Initializing services...");

    // Initialize Google Sheets service first
    try {
      sheetsService = new GoogleSheetsService();
      await sheetsService.initialize();
      console.log("✅ Real Google Sheets service connected successfully");
    } catch (googleError) {
      console.warn("⚠️  Google Sheets connection failed:", googleError.message);
      console.log(
        "🔄 Falling back to Mock Google Sheets Service for development..."
      );

      sheetsService = new MockGoogleSheetsService();
      await sheetsService.initialize();
      console.log("✅ Mock Google Sheets service initialized for development");
    }

    // Initialize Google Drive service
    try {
      await driveService.initialize();
      console.log("✅ Google Drive service connected successfully");
      console.log("📁 Slip uploads will go to: https://drive.google.com/drive/folders/1PE0WV-awieF6mXGIbAdRaU-57Zy_BFnQ");
    } catch (driveError) {
      console.warn("⚠️  Google Drive connection failed:", driveError.message);
      console.log("📁 Slip uploads may not work properly");
    }

    app.listen(PORT, () => {
      console.log(`🚀 Server is running at http://localhost:${PORT}`);
      console.log("✅ Server initialized successfully");
      console.log("📊 Database service ready");

      if (sheetsService instanceof MockGoogleSheetsService) {
        console.log("🧪 Running in DEVELOPMENT MODE with mock data");
        console.log("� Please set up Google Sheets credentials for production");
        console.log("� See GOOGLE_SHEETS_SETUP.md for instructions");
      }
    });
  } catch (error) {
    console.error("❌ Failed to start server:", error.message);
    process.exit(1);
  }
}

startServer();
