const { GoogleSpreadsheet } = require("google-spreadsheet");
const { JWT } = require("google-auth-library");
require("dotenv").config();

const ORDER_COLUMNS = [
  "order_ref", // หมายเลขคำสั่งซื้อ
  "package_name", // ชื่อแพ็คเก็จ
  "firstname", // ชื่อ
  "lastname", // นามสกุล
  "email", // อีเมล
  "phone", // เบอร์โทรศัพท์
  "status", // สถานะผู้ซื้อ
  "year", // ชั้นปี
  "major", // สาขา
  "faculty", // คณะ
  "student_id", // รหัสนักศึกษา
  "delivery_type", // วิธีการรับสินค้า
  "address", // ที่อยู่
  "total_amount", // ยอดรวม
  "items", // รายการสินค้า (JSON)
  "notes", // หมายเหตุ
  "slip_url", // URL ของสลิป
  "tracking_code", // รหัสติดตามพัสดุ
  "order_status", // สถานะคำสั่งซื้อ
  "created_at", // วันที่สร้าง
  "updated_at", // วันที่อัปเดตล่าสุด
];

async function createOrdersSheet() {
  console.log("🔧 Setting up Orders Sheet...");
  console.log("=============================");

  try {
    const SPREADSHEET_ID = process.env.GOOGLE_SPREADSHEET_ID;
    const SERVICE_ACCOUNT_EMAIL = process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL;
    const PRIVATE_KEY = process.env.GOOGLE_SERVICE_ACCOUNT_PRIVATE_KEY;

    // Create JWT auth
    const serviceAccountAuth = new JWT({
      email: SERVICE_ACCOUNT_EMAIL,
      key: PRIVATE_KEY?.replace(/\\n/g, "\n"),
      scopes: ["https://www.googleapis.com/auth/spreadsheets"],
    });

    // Connect to spreadsheet
    const doc = new GoogleSpreadsheet(SPREADSHEET_ID, serviceAccountAuth);
    await doc.loadInfo();

    console.log("📊 Connected to:", doc.title);

    // Check if Orders sheet exists
    let ordersSheet = doc.sheetsByTitle["Orders"];

    if (ordersSheet) {
      console.log("📋 Orders sheet already exists");

      // Load headers to check if they're correct
      await ordersSheet.loadHeaderRow();

      if (ordersSheet.headerValues.length === 0) {
        console.log("📝 Setting headers...");
        await ordersSheet.setHeaderRow(ORDER_COLUMNS);
        console.log("✅ Headers added!");
      } else {
        console.log(
          "📊 Current headers:",
          ordersSheet.headerValues.length,
          "columns"
        );

        // Check if we need to update headers
        const currentHeaders = ordersSheet.headerValues;
        const needsUpdate = ORDER_COLUMNS.some(
          (col) => !currentHeaders.includes(col)
        );

        if (needsUpdate) {
          console.log("⚠️  Headers need updating...");
          await ordersSheet.setHeaderRow(ORDER_COLUMNS);
          console.log("✅ Headers updated!");
        } else {
          console.log("✅ Headers are correct!");
        }
      }
    } else {
      console.log("📋 Creating Orders sheet...");
      ordersSheet = await doc.addSheet({
        title: "Orders",
        headerValues: ORDER_COLUMNS,
      });
      console.log("✅ Orders sheet created!");
    }

    // Add sample data if empty
    const rows = await ordersSheet.getRows();
    if (rows.length === 0) {
      console.log("📝 Adding sample data...");

      const sampleData = {
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
        tracking_code: "SMO12345678",
        order_status: "pending",
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString(),
      };

      await ordersSheet.addRow(sampleData);
      console.log("✅ Sample data added!");
    } else {
      console.log("📄 Sheet has", rows.length, "existing rows");
    }

    console.log("\n🎉 Setup Complete!");
    console.log("==================");
    console.log("📋 Sheet Name: Orders");
    console.log("📊 Columns:", ORDER_COLUMNS.length);
    console.log("📄 Rows:", (await ordersSheet.getRows()).length + 1); // +1 for header
    console.log(
      "🔗 URL:",
      `https://docs.google.com/spreadsheets/d/${SPREADSHEET_ID}/edit#gid=${ordersSheet.sheetId}`
    );

    console.log("\n✅ Ready to use!");
    console.log("Next steps:");
    console.log("1. Start server: npm start");
    console.log("2. Visit: http://localhost:3000/shop");
    console.log("3. Test order submission");

    return true;
  } catch (error) {
    console.log("\n❌ Setup failed:", error.message);
    return false;
  }
}

createOrdersSheet().then((success) => {
  process.exit(success ? 0 : 1);
});
