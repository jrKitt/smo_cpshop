const { GoogleDriveService } = require("./config/drive");

async function testDriveUpload() {
  console.log("🧪 Testing Google Drive Upload...");

  const driveService = new GoogleDriveService();

  try {
    await driveService.initialize();

    // Create a test file
    const testData = Buffer.from("This is a test slip upload", "utf8");
    const testFileName = "test-slip.txt";
    const testOrderRef = "TEST" + Date.now();

    console.log("📤 Uploading test file...");

    const result = await driveService.uploadSlip(
      testData,
      testFileName,
      "text/plain",
      testOrderRef
    );

    console.log("✅ Upload successful!");
    console.log("📁 File ID:", result.fileId);
    console.log("🔗 View Link:", result.viewLink);
    console.log("📥 Download Link:", result.downloadLink);

    // Verify the file location
    console.log("🔍 Verifying file location...");

    if (result.fileId.startsWith("local_")) {
      console.log("� File saved locally");
      console.log("🎯 Local path:", result.localPath);

      const fs = require("fs");
      if (fs.existsSync(result.localPath)) {
        console.log("✅ File exists in local directory!");
      } else {
        console.log("❌ File NOT found in local directory!");
      }
    } else {
      const fileInfo = await driveService.drive.files.get({
        fileId: result.fileId,
        fields: "id, name, parents",
      });

      console.log("📂 File parents (folders):", fileInfo.data.parents);
      console.log("🎯 Expected folder:", driveService.FOLDER_ID);

      if (
        fileInfo.data.parents &&
        fileInfo.data.parents.includes(driveService.FOLDER_ID)
      ) {
        console.log("✅ File uploaded to correct folder!");
      } else {
        console.log("❌ File NOT in expected folder!");
      }
    }
  } catch (error) {
    console.error("❌ Test failed:", error.message);
  }
}

testDriveUpload();
