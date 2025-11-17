const { GoogleSpreadsheet } = require("google-spreadsheet");
const { JWT } = require("google-auth-library");
require("dotenv").config();

async function testConnection() {
  console.log("🔧 Testing Google Sheets Connection...");
  console.log("=====================================");

  try {
    const SPREADSHEET_ID = process.env.GOOGLE_SPREADSHEET_ID;
    const SERVICE_ACCOUNT_EMAIL = process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL;
    const PRIVATE_KEY = process.env.GOOGLE_SERVICE_ACCOUNT_PRIVATE_KEY;

    console.log("📊 Spreadsheet ID:", SPREADSHEET_ID);
    console.log("📧 Service Account:", SERVICE_ACCOUNT_EMAIL);
    console.log("🔑 Private Key Length:", PRIVATE_KEY ? PRIVATE_KEY.length : 0);

    // Create JWT auth
    const serviceAccountAuth = new JWT({
      email: SERVICE_ACCOUNT_EMAIL,
      key: PRIVATE_KEY?.replace(/\\n/g, "\n"),
      scopes: ["https://www.googleapis.com/auth/spreadsheets"],
    });

    // Connect to spreadsheet
    const doc = new GoogleSpreadsheet(SPREADSHEET_ID, serviceAccountAuth);

    console.log("\n📡 Connecting to Google Sheets...");
    await doc.loadInfo();

    console.log("✅ Connection successful!");
    console.log("📋 Title:", doc.title);
    console.log("📄 Sheet count:", doc.sheetCount);
    console.log("👤 Author:", doc.author?.name || "Unknown");

    // List existing sheets
    console.log("\n📝 Existing sheets:");
    Object.values(doc.sheetsByIndex).forEach((sheet, index) => {
      console.log(
        `   ${index + 1}. ${sheet.title} (${sheet.rowCount} rows, ${
          sheet.columnCount
        } columns)`
      );
    });

    // Check for Orders sheet
    const ordersSheet = doc.sheetsByTitle["Orders"];
    if (ordersSheet) {
      console.log('\n✅ "Orders" sheet found!');
      await ordersSheet.loadHeaderRow();

      if (ordersSheet.headerValues.length > 0) {
        console.log("📊 Headers:", ordersSheet.headerValues.join(", "));
      } else {
        console.log("⚠️  No headers found in Orders sheet");
      }
    } else {
      console.log('\n⚠️  "Orders" sheet not found');
      console.log('💡 You need to create a sheet named "Orders"');
    }

    console.log("\n🎉 Test completed successfully!");
    console.log(
      "🔗 URL:",
      `https://docs.google.com/spreadsheets/d/${SPREADSHEET_ID}/edit`
    );

    return true;
  } catch (error) {
    console.log("\n❌ Test failed:", error.message);

    if (error.message.includes("permission")) {
      console.log("\n💡 SOLUTION:");
      console.log("1. Make sure you shared the spreadsheet with:");
      console.log(
        "   smocp-sheets-service@valiant-sanctum-465609-m0.iam.gserviceaccount.com"
      );
      console.log("2. Give Editor permission to the service account");
    }

    if (error.message.includes("Unable to parse")) {
      console.log("\n💡 SOLUTION:");
      console.log("1. Check the Spreadsheet ID is correct");
      console.log("2. Make sure the spreadsheet exists");
    }

    return false;
  }
}

testConnection().then((success) => {
  process.exit(success ? 0 : 1);
});
