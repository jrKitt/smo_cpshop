const { GoogleDriveService } = require("./config/drive");

async function createSlipFolder() {
  console.log("Creating new slip folder...");

  const driveService = new GoogleDriveService();

  try {
    await driveService.initialize();

    // Create a new folder
    const folderMetadata = {
      name: "SMO_CP_Slips",
      mimeType: "application/vnd.google-apps.folder",
    };

    const folder = await driveService.drive.files.create({
      resource: folderMetadata,
      fields: "id, name, webViewLink",
    });

    console.log("✅ New folder created!");
    console.log("📁 Folder ID:", folder.data.id);
    console.log("📂 Folder Name:", folder.data.name);
    console.log("🔗 Folder Link:", folder.data.webViewLink);

    console.log("\n🔧 Update your .env file:");
    console.log(`GOOGLE_DRIVE_SLIP_FOLDER_ID=${folder.data.id}`);
  } catch (error) {
    console.error("❌ Failed to create folder:", error.message);
  }
}

createSlipFolder();
