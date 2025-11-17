const axios = require("axios");

// สร้าง base64 ของรูปภาพเล็กๆ (1x1 pixel PNG) - รองรับ
const testPngBase64 =
  "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8/5+hHgAHggJ/PchI7wAAAABJRU5ErkJggg==";

// สร้าง base64 ของ JPEG เล็กๆ (1x1 pixel) - รองรับ
const testJpegBase64 =
  "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEAYABgAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k=";

// GIF ที่ไม่รองรับ - สำหรับทดสอบการปฏิเสธ
const testGifBase64 =
  "data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==";

async function testSlipUpload() {
  // ทดสอบ PNG (ควรสำเร็จ)
  console.log("=== Testing PNG upload (should succeed) ===");
  try {
    const response = await axios.post("http://localhost:3000/upload-slip", {
      file: testPngBase64,
      fileName: "test-image.png",
      type: "image/png",
      orderRef: "TEST_PNG_" + Date.now(),
    });

    console.log("✅ PNG Upload successful!");
    console.log("Response:", response.data);
  } catch (error) {
    console.error("❌ PNG Test failed:");
    console.error("Status:", error.response?.status);
    console.error("Data:", error.response?.data);
  }

  // ทดสอบ JPEG (ควรสำเร็จ)
  console.log("\n=== Testing JPEG upload (should succeed) ===");
  try {
    const response = await axios.post("http://localhost:3000/upload-slip", {
      file: testJpegBase64,
      fileName: "test-image.jpg",
      type: "image/jpeg",
      orderRef: "TEST_JPEG_" + Date.now(),
    });

    console.log("✅ JPEG Upload successful!");
    console.log("Response:", response.data);
  } catch (error) {
    console.error("❌ JPEG Test failed:");
    console.error("Status:", error.response?.status);
    console.error("Data:", error.response?.data);
  }

  // ทดสอบ GIF (ควรถูกปฏิเสธ)
  console.log("\n=== Testing GIF upload (should be rejected) ===");
  try {
    const response = await axios.post("http://localhost:3000/upload-slip", {
      file: testGifBase64,
      fileName: "test-image.gif",
      type: "image/gif",
      orderRef: "TEST_GIF_" + Date.now(),
    });

    console.log(
      "❌ GIF Upload unexpectedly succeeded (should have been rejected)!"
    );
    console.log("Response:", response.data);
  } catch (error) {
    console.log("✅ GIF Upload correctly rejected:");
    console.log("Status:", error.response?.status);
    console.log("Message:", error.response?.data?.message);
  }
}

testSlipUpload();
