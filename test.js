const express = require("express");
const axios = require("axios");
const bodyParser = require("body-parser");
const cors = require("cors");
const path = require("path");
require("dotenv").config(); // โหลด .env
const fs = require("fs");
const csv = require("csv-parser");
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(
  cors({
    origin: [
      "https://smocp.com",
      "https://cpshop.vercel.app",
      "http://localhost:3000",
    ],
    methods: ["GET", "POST"],
    allowedHeaders: ["Content-Type"],
  })
);
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

// ✅ ใช้ API ที่แยกไว้
const sendConfirmationEmail = require("./api/sendConfirmationEmail");
app.use("/send-confirmation-email", sendConfirmationEmail);

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Server is running at http://localhost:${PORT}`);
});
// ใน Express.js
app.use((req, res, next) => {
  res.setHeader(
    "Content-Security-Policy",
    "default-src 'self'; " +
      "script-src 'self' 'unsafe-inline' https://cdn.jsdelivr.net https://cdnjs.cloudflare.com; " +
      "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com https://cdn.jsdelivr.net https://cdnjs.cloudflare.com; " +
      "font-src 'self' https://fonts.gstatic.com https://cdnjs.cloudflare.com; " +
      "img-src 'self' data: https:; " +
      "connect-src 'self'"
  );
  res.setHeader('X-Frame-Options', 'DENY');
res.setHeader('X-Content-Type-Options', 'nosniff');
res.setHeader('Referrer-Policy', 'strict-origin-when-cross-origin');
  next();
});
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

app.post("/upload-slip", async (req, res) => {
  console.log("📸 Received image upload request");

  try {
    const { file, fileName, type } = req.body;

    if (!file || !fileName || !type) {
      return res.status(400).json({
        status: "error",
        message: "Missing required fields: file, fileName, or type",
      });
    }

    console.log("🔍 Uploading image to Google Drive:", fileName);

    const uploadData = {
      file: file,
      fileName: fileName,
      type: type,
    };

    // ส่งข้อมูลไปยัง Google Apps Script
    const response = await axios({
      method: "post",
      url: "https://script.google.com/macros/s/AKfycbxSO8LsQWMsEBqspjFik14wKey8g1moW7Kq4Ig8LjVEIzdG80twA5TILcbLqxmDanfC/exec",
      headers: {
        "Content-Type": "application/json",
      },
      data: JSON.stringify(uploadData),
      timeout: 30000, // 30 seconds timeout
    });

    console.log("✅ Google Apps Script response:", response.data);

    // ส่งผลลัพธ์กลับไปยัง frontend
    res.status(200).json(response.data);
  } catch (error) {
    console.error("❌ Error uploading image:", error.message);

    // หาก Google Apps Script ตอบกลับด้วย error
    if (error.response && error.response.data) {
      return res.status(500).json(error.response.data);
    }

    res.status(500).json({
      status: "error",
      message: error.message || "Internal server error",
    });
  }
});

app.post("/submit-to-google-form", async (req, res) => {
  console.log("📝 Received POST request from frontend");
  console.log("Form data:", req.body);

  const googleFormUrl =
    "https://docs.google.com/forms/d/e/1FAIpQLSfZIGVLzaYHfRZR7QbKMzBh68FOPtJJkLLU4ZRD6LkfR1ZOVg/formResponse";

  try {
    const formParams = new URLSearchParams();

    Object.keys(req.body).forEach((key) => {
      if (key.startsWith("entry.")) {
        formParams.append(key, req.body[key]);
      }
    });

    console.log("🔍 Sending data to Google Form:", formParams.toString());

    try {
      const response = await axios({
        method: "post",
        url: googleFormUrl,
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        data: formParams.toString(),
        maxRedirects: 5,
      });

      console.log("Google Form response status:", response.status);
      return res.status(200).json({ success: true });
    } catch (axiosError) {
      if (axiosError.response && axiosError.response.status === 302) {
        console.log(
          "Google Form redirected (302) - submission likely successful"
        );
        return res.status(200).json({ success: true });
      }
      throw axiosError;
    }
  } catch (error) {
    console.error("Error submitting to Google Form:", error.message);
    return res.status(500).json({ success: false, error: error.message });
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

app.listen(3000, () => {
  console.log("🚀 Backend running on http://localhost:3000");
});
