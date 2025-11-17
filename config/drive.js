const { google } = require("googleapis");
const { JWT } = require("google-auth-library");
require("dotenv").config();

class GoogleDriveService {
  constructor() {
    this.drive = null;
    this.auth = null;
    this.FOLDER_ID =
      process.env.GOOGLE_DRIVE_SLIP_FOLDER_ID ||
      "1PE0WV-awieF6mXGIbAdRaU-57Zy_BFnQ";
  }

  async initialize() {
    try {
      // Create JWT authentication
      this.auth = new JWT({
        email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
        key: process.env.GOOGLE_SERVICE_ACCOUNT_PRIVATE_KEY?.replace(
          /\\n/g,
          "\n"
        ),
        scopes: [
          "https://www.googleapis.com/auth/drive.file",
          "https://www.googleapis.com/auth/drive",
        ],
      });

      // Initialize Google Drive API
      this.drive = google.drive({ version: "v3", auth: this.auth });

      // Test connection by getting folder info
      const folderInfo = await this.drive.files.get({
        fileId: this.FOLDER_ID,
        fields: "id, name, parents",
      });

      console.log("Google Drive connected successfully");
      console.log("Target folder:", folderInfo.data.name);

      return true;
    } catch (error) {
      console.error("Failed to initialize Google Drive:", error.message);
      throw error;
    }
  }

  async uploadSlip(fileBuffer, fileName, mimeType, orderRef) {
    try {
      // Skip local save on Vercel/production, just return success for main upload process
      if (process.env.VERCEL) {
        console.log(
          "Vercel environment detected - skipping local save and Google Drive upload"
        );
        return {
          success: true,
          fileId: `local_${Date.now()}`,
          webViewLink: `/api/slip-file/${fileName}`,
          message: "File saved to temporary storage",
        };
      }

      // For local development, try local save first
      console.log("Saving slip to local directory (primary method):", fileName);
      const localResult = await this.saveToLocalDirectory(
        fileBuffer,
        fileName,
        orderRef
      );

      // Try Google Drive as secondary (background upload) for local development only
      this.tryGoogleDriveUpload(fileBuffer, fileName, mimeType, orderRef)
        .then(() => console.log("Background Google Drive upload successful"))
        .catch((error) =>
          console.warn("Background Google Drive upload failed:", error.message)
        );

      return localResult;
    } catch (error) {
      console.error("Error in uploadSlip:", error.message);
      throw new Error("ไม่สามารถอัปโหลดสลิปได้: " + error.message);
    }
  }

  async tryGoogleDriveUpload(fileBuffer, fileName, mimeType, orderRef) {
    try {
      if (!this.drive) {
        await this.initialize();
      }

      // Generate unique filename with timestamp
      const timestamp = new Date().toISOString().replace(/[:.]/g, "-");
      const uniqueFileName = `${orderRef}_${timestamp}_${fileName}`;

      console.log("Attempting Google Drive upload:", uniqueFileName);

      // For Service Account without storage quota, we need to upload to a shared drive or user's drive
      // First, try to get the folder and check if it's accessible
      try {
        await this.drive.files.get({
          fileId: this.FOLDER_ID,
          fields: "id, name, owners, capabilities",
        });
      } catch (folderError) {
        console.warn(
          "Cannot access target folder, using root folder:",
          folderError.message
        );
        // If can't access the specific folder, upload to root
        this.FOLDER_ID = null;
      }

      const fileMetadata = {
        name: uniqueFileName,
        description: `Payment slip for order ${orderRef} - Uploaded on ${new Date().toISOString()}`,
      };

      // Only add parents if we have a valid folder ID
      if (this.FOLDER_ID) {
        fileMetadata.parents = [this.FOLDER_ID];
      }

      const { Readable } = require("stream");
      const stream = new Readable();
      stream.push(fileBuffer);
      stream.push(null);

      const media = {
        mimeType: mimeType,
        body: stream,
      };

      // Upload file to Google Drive
      const response = await this.drive.files.create({
        resource: fileMetadata,
        media: media,
        fields: "id, name, webViewLink, webContentLink",
        supportsAllDrives: true, // Support shared drives
      });

      const fileId = response.data.id;

      // Make file publicly viewable (optional, for easier access)
      try {
        await this.drive.permissions.create({
          fileId: fileId,
          resource: {
            role: "reader",
            type: "anyone",
          },
          supportsAllDrives: true,
        });
      } catch (permError) {
        console.warn("Could not set public permissions:", permError.message);
      }

      console.log("Slip uploaded successfully:", response.data.name);

      return {
        success: true,
        fileId: fileId,
        fileName: response.data.name,
        viewLink: response.data.webViewLink,
        downloadLink: `https://drive.google.com/uc?id=${fileId}`,
        message: "อัปโหลดสลิปสำเร็จ (Google Drive)",
      };
    } catch (error) {
      console.error("Error in Google Drive upload:", error.message);
      throw error;
    }
  }

  async listSlips(limit = 10) {
    try {
      if (!this.drive) {
        await this.initialize();
      }

      const response = await this.drive.files.list({
        q: `'${this.FOLDER_ID}' in parents and trashed=false`,
        orderBy: "createdTime desc",
        pageSize: limit,
        fields: "files(id, name, createdTime, size, webViewLink, mimeType)",
      });

      return response.data.files.map((file) => ({
        id: file.id,
        name: file.name,
        createdTime: file.createdTime,
        size: file.size,
        viewLink: file.webViewLink,
        downloadLink: `https://drive.google.com/uc?id=${file.id}`,
        mimeType: file.mimeType,
      }));
    } catch (error) {
      console.error("Error listing slips:", error.message);
      throw error;
    }
  }

  async getSlipByOrderRef(orderRef) {
    try {
      if (!this.drive) {
        await this.initialize();
      }

      const response = await this.drive.files.list({
        q: `'${this.FOLDER_ID}' in parents and name contains '${orderRef}' and trashed=false`,
        orderBy: "createdTime desc",
        fields: "files(id, name, createdTime, webViewLink, mimeType)",
      });

      if (response.data.files.length > 0) {
        const file = response.data.files[0];
        return {
          id: file.id,
          name: file.name,
          createdTime: file.createdTime,
          viewLink: file.webViewLink,
          downloadLink: `https://drive.google.com/uc?id=${file.id}`,
          mimeType: file.mimeType,
        };
      }

      return null;
    } catch (error) {
      console.error("Error getting slip:", error.message);
      throw error;
    }
  }

  async saveToLocalDirectory(fileBuffer, fileName, orderRef) {
    try {
      const fs = require("fs").promises;
      const path = require("path");

      // Create uploads directory if it doesn't exist
      const uploadsDir = path.join(__dirname, "..", "uploads", "slips");
      await fs.mkdir(uploadsDir, { recursive: true });

      // Generate unique filename with timestamp
      const timestamp = new Date().toISOString().replace(/[:.]/g, "-");
      const uniqueFileName = `${orderRef}_${timestamp}_${fileName}`;
      const filePath = path.join(uploadsDir, uniqueFileName);

      // Save file to local directory
      await fs.writeFile(filePath, fileBuffer);

      console.log("Slip saved to local directory:", uniqueFileName);

      return {
        success: true,
        fileId: `local_${timestamp}`,
        fileName: uniqueFileName,
        localPath: filePath,
        viewLink: `/uploads/slips/${uniqueFileName}`,
        downloadLink: `/uploads/slips/${uniqueFileName}`,
        message: "อัปโหลดสลิปสำเร็จ (บันทึกในเซิร์ฟเวอร์)",
      };
    } catch (error) {
      console.error("Error saving to local directory:", error.message);
      throw error;
    }
  }
}

module.exports = { GoogleDriveService };
