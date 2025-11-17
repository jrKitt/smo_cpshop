// ข้อมูลสำหรับการตั้งค่า Google Sheets ด้วยตนเอง
// Google Spreadsheet ID: 1rAsxU_2qi5OML9_rWZPr4bZKkTGwDuRCJA8jVmmsWfo

console.log("📋 CPSHOP Google Sheets Setup Instructions");
console.log("===========================================");
console.log("");

console.log("🔗 Your Google Sheets URL:");
console.log(
  "https://docs.google.com/spreadsheets/d/1rAsxU_2qi5OML9_rWZPr4bZKkTGwDuRCJA8jVmmsWfo/edit"
);
console.log("");

console.log("📊 Required Sheet Structure:");
console.log("");
console.log('1️⃣  Sheet Name: "Orders"');
console.log("");
console.log("2️⃣  Column Headers (เรียงตามลำดับ):");

const headers = [
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

headers.forEach((header, index) => {
  const columnLetter = String.fromCharCode(65 + index); // A, B, C, ...
  console.log(`   ${columnLetter}1: ${header}`);
});

console.log("");
console.log("📝 Manual Setup Steps:");
console.log("");
console.log("1. เปิด Google Sheets URL ด้านบน");
console.log('2. สร้าง Sheet ชื่อ "Orders" (ถ้ายังไม่มี)');
console.log("3. ใส่ headers ในแถวที่ 1 ตามรายการด้านบน");
console.log("4. ตั้งค่า Google Service Account (ดู GOOGLE_SHEETS_SETUP.md)");
console.log("5. แชร์ sheet กับ service account email");
console.log("6. อัปเดต .env file ด้วย credentials จริง");
console.log("");

console.log("🔧 Quick Setup (Copy & Paste):");
console.log("");
console.log("Copy headers นี้ไปใส่ในแถว 1 ของ Google Sheets:");
console.log("");
console.log(headers.join("\t"));
console.log("");

console.log("📋 Sample Data (แถว 2):");
const sampleData = [
  "SAMPLE001", // order_ref
  "Full Collection", // package_name
  "ทดสอบ", // firstname
  "ระบบ", // lastname
  "test@example.com", // email
  "0812345678", // phone
  "student-in", // status
  "3", // year
  "cs", // major
  "", // faculty
  "123456789", // student_id
  "shipping", // delivery_type
  "123 ถนนทดสอบ อำเภอเมือง จังหวัดขอนแก่น 40002", // address
  "1289", // total_amount
  '[{"name":"Full Collection","quantity":1,"price":1289}]', // items
  "ข้อมูลตัวอย่างสำหรับทดสอบระบบ", // notes
  "", // slip_url
  "", // tracking_code
  "pending", // order_status
  new Date().toISOString(), // created_at
  new Date().toISOString(), // updated_at
];

console.log(sampleData.join("\t"));
console.log("");

console.log("✅ Next Steps:");
console.log("1. Set up the Google Sheets structure above");
console.log("2. Configure Google Service Account (see GOOGLE_SHEETS_SETUP.md)");
console.log("3. Test with: npm start");
console.log("4. Visit: http://localhost:3000/shop");
console.log("");

console.log("📖 For detailed instructions, see:");
console.log("   - GOOGLE_SHEETS_SETUP.md");
console.log("   - SHEETS_TABLE_SETUP.md");
console.log("");
