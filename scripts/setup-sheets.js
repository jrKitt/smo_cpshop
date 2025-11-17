const { GoogleSpreadsheet } = require("google-spreadsheet");
const { JWT } = require("google-auth-library");
require("dotenv").config();

// Configuration for the specific sheet
const SPREADSHEET_ID = "1rAsxU_2qi5OML9_rWZPr4bZKkTGwDuRCJA8jVmmsWfo";
const ORDERS_SHEET_NAME = "Orders";

const ORDER_COLUMNS = [
  "order_ref",
  "package_name",
  "firstname",
  "lastname",
  "email",
  "phone",
  "status",
  "year",
  "major",
  "faculty",
  "student_id",
  "delivery_type",
  "address",
  "total_amount",
  "items",
  "notes",
  "slip_url",
  "tracking_code",
  "order_status",
  "created_at",
  "updated_at",
];

async function setupGoogleSheets() {
  try {
    console.log("🔧 Setting up Google Sheets for CPSHOP...");
    console.log(`📊 Spreadsheet ID: ${SPREADSHEET_ID}`);

    // For now, we'll use a temporary service account (you'll need to replace this)
    const serviceAccountAuth = new JWT({
      email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
      key: process.env.GOOGLE_SERVICE_ACCOUNT_PRIVATE_KEY?.replace(
        /\\n/g,
        "\n"
      ),
      scopes: ["https://www.googleapis.com/auth/spreadsheets"],
    });

    const doc = new GoogleSpreadsheet(SPREADSHEET_ID, serviceAccountAuth);

    console.log("📡 Connecting to Google Sheets...");
    await doc.loadInfo();

    console.log(`✅ Connected to: "${doc.title}"`);
    console.log(`📄 Created by: ${doc.author?.name || "Unknown"}`);

    // Check if Orders sheet exists
    let ordersSheet = doc.sheetsByTitle[ORDERS_SHEET_NAME];

    if (!ordersSheet) {
      console.log(`📋 Creating "${ORDERS_SHEET_NAME}" sheet...`);
      ordersSheet = await doc.addSheet({
        title: ORDERS_SHEET_NAME,
        headerValues: ORDER_COLUMNS,
      });
      console.log("✅ Orders sheet created successfully!");
    } else {
      console.log(`📋 "${ORDERS_SHEET_NAME}" sheet already exists`);

      // Load and check headers
      await ordersSheet.loadHeaderRow();

      if (ordersSheet.headerValues.length === 0) {
        console.log("📝 Setting up headers...");
        await ordersSheet.setHeaderRow(ORDER_COLUMNS);
        console.log("✅ Headers added successfully!");
      } else {
        console.log("📊 Current headers:", ordersSheet.headerValues);

        // Check if headers match
        const missingColumns = ORDER_COLUMNS.filter(
          (col) => !ordersSheet.headerValues.includes(col)
        );

        if (missingColumns.length > 0) {
          console.log("⚠️  Missing columns:", missingColumns);
          console.log(
            "💡 You may need to add these columns manually or recreate the sheet"
          );
        } else {
          console.log("✅ All required columns are present!");
        }
      }
    }

    // Add sample data if sheet is empty
    const rows = await ordersSheet.getRows();
    if (rows.length === 0) {
      console.log("📝 Adding sample data...");

      const sampleOrder = {
        order_ref: "SAMPLE001",
        package_name: "Full Collection",
        firstname: "ทดสอบ",
        lastname: "ระบบ",
        email: "test@example.com",
        phone: "0812345678",
        status: "student-in",
        year: "3",
        major: "cs",
        faculty: "",
        student_id: "123456789",
        delivery_type: "shipping",
        address: "123 ถนนทดสอบ อำเภอเมือง จังหวัดขอนแก่น 40002",
        total_amount: "1289",
        items: JSON.stringify([
          { name: "Full Collection", quantity: 1, price: 1289 },
        ]),
        notes: "ข้อมูลตัวอย่างสำหรับทดสอบระบบ",
        slip_url: "",
        tracking_code: "",
        order_status: "pending",
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString(),
      };

      await ordersSheet.addRow(sampleOrder);
      console.log("✅ Sample data added successfully!");
    }

    // Display sheet information
    console.log("\n📊 SHEET SETUP COMPLETE");
    console.log("================================");
    console.log(`📋 Sheet Name: ${ORDERS_SHEET_NAME}`);
    console.log(`📊 Total Columns: ${ORDER_COLUMNS.length}`);
    console.log(`📄 Total Rows: ${rows.length + 1} (including sample)`);
    console.log(
      `🔗 Sheet URL: https://docs.google.com/spreadsheets/d/${SPREADSHEET_ID}/edit`
    );

    console.log("\n📝 NEXT STEPS:");
    console.log("1. ✅ Google Sheets structure is ready");
    console.log("2. 🔧 Set up Google Service Account credentials");
    console.log("3. 🔑 Update .env file with your credentials");
    console.log("4. 🚀 Start the server: npm start");

    return true;
  } catch (error) {
    console.error("❌ Setup failed:", error.message);

    if (error.message.includes("Unable to parse range")) {
      console.log("\n💡 TROUBLESHOOTING:");
      console.log("- Make sure the Spreadsheet ID is correct");
      console.log("- Check that the spreadsheet exists and is accessible");
      console.log(
        `- URL should be: https://docs.google.com/spreadsheets/d/${SPREADSHEET_ID}/edit`
      );
    } else if (error.message.includes("permission")) {
      console.log("\n💡 TROUBLESHOOTING:");
      console.log("- Set up Google Service Account credentials");
      console.log("- Share the spreadsheet with your service account email");
      console.log("- Make sure the service account has Editor permissions");
    }

    return false;
  }
}

// Run setup if this file is executed directly
if (require.main === module) {
  setupGoogleSheets()
    .then((success) => {
      if (success) {
        console.log("\n🎉 Setup completed successfully!");
        process.exit(0);
      } else {
        console.log("\n💥 Setup failed. Please check the errors above.");
        process.exit(1);
      }
    })
    .catch((error) => {
      console.error("💥 Unexpected error:", error);
      process.exit(1);
    });
}

module.exports = { setupGoogleSheets, SPREADSHEET_ID, ORDER_COLUMNS };
