const SHEET_NAME = "Orders";
const HEADERS = [
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

/**
 * ฟังก์ชันหลักสำหรับตั้งค่า Google Sheets
 */
function setupCPShopSheets() {
  try {
    const spreadsheet = SpreadsheetApp.getActiveSpreadsheet();

    // สร้างหรือหา Sheet ที่ชื่อ Orders
    let sheet = spreadsheet.getSheetByName(SHEET_NAME);

    if (!sheet) {
      // สร้าง Sheet ใหม่ถ้ายังไม่มี
      sheet = spreadsheet.insertSheet(SHEET_NAME);
      console.log("Created new sheet: " + SHEET_NAME);
    }

    // ตั้งค่า Headers
    setupHeaders(sheet);

    // จัดรูปแบบ
    formatSheet(sheet);

    // ตั้งค่า Data Validation
    setupDataValidation(sheet);

    // Freeze header row
    sheet.setFrozenRows(1);

    console.log("✅ CPSHOP Sheets setup completed successfully!");

    // แสดงข้อความสำเร็จ
    SpreadsheetApp.getUi().alert(
      "สำเร็จ!",
      "ตั้งค่า Google Sheets สำหรับระบบ CPSHOP เสร็จสิ้นแล้ว\n\n" +
        "Sheet: " +
        SHEET_NAME +
        "\n" +
        "คอลัมน์: " +
        HEADERS.length +
        " คอลัมน์\n\n" +
        "ตอนนี้คุณสามารถใช้งานระบบได้แล้ว!",
      SpreadsheetApp.getUi().ButtonSet.OK
    );
  } catch (error) {
    console.error("❌ Error setting up sheets:", error);
    SpreadsheetApp.getUi().alert(
      "เกิดข้อผิดพลาด",
      error.toString(),
      SpreadsheetApp.getUi().ButtonSet.OK
    );
  }
}

/**
 * ตั้งค่า Headers
 */
function setupHeaders(sheet) {
  // ใส่ Headers ในแถวแรก
  const headerRange = sheet.getRange(1, 1, 1, HEADERS.length);
  headerRange.setValues([HEADERS]);

  console.log("Headers set successfully");
}

/**
 * จัดรูปแบบ Sheet
 */
function formatSheet(sheet) {
  const maxRows = 1000; // กำหนดจำนวนแถวสูงสุด

  // จัดรูปแบบ Header
  const headerRange = sheet.getRange(1, 1, 1, HEADERS.length);
  headerRange.setBackground("#4285F4");
  headerRange.setFontColor("#FFFFFF");
  headerRange.setFontWeight("bold");
  headerRange.setHorizontalAlignment("center");

  // ตั้งค่าความกว้างของคอลัมน์
  const columnWidths = {
    1: 120, // order_ref
    2: 150, // package_name
    3: 100, // firstname
    4: 100, // lastname
    5: 200, // email
    6: 120, // phone
    7: 100, // status
    8: 60, // year
    9: 80, // major
    10: 150, // faculty
    11: 120, // student_id
    12: 100, // delivery_type
    13: 300, // address
    14: 100, // total_amount
    15: 200, // items
    16: 150, // notes
    17: 150, // slip_url
    18: 120, // tracking_code
    19: 100, // order_status
    20: 150, // created_at
    21: 150, // updated_at
  };

  // ตั้งความกว้างคอลัมน์
  for (const [col, width] of Object.entries(columnWidths)) {
    sheet.setColumnWidth(parseInt(col), width);
  }

  // จัดรูปแบบคอลัมน์ยอดเงิน (total_amount)
  const amountColumn = sheet.getRange(2, 14, maxRows - 1, 1);
  amountColumn.setNumberFormat('#,##0" บาท"');
  amountColumn.setHorizontalAlignment("right");

  // จัดรูปแบบคอลัมน์วันที่
  const createdAtColumn = sheet.getRange(2, 20, maxRows - 1, 1);
  const updatedAtColumn = sheet.getRange(2, 21, maxRows - 1, 1);

  createdAtColumn.setNumberFormat("dd/mm/yyyy hh:mm:ss");
  updatedAtColumn.setNumberFormat("dd/mm/yyyy hh:mm:ss");

  console.log("Sheet formatting completed");
}

/**
 * ตั้งค่า Data Validation
 */
function setupDataValidation(sheet) {
  const maxRows = 1000;

  // Status validation (คอลัมน์ G)
  const statusValidation = SpreadsheetApp.newDataValidation()
    .requireValueInList(["student-in", "student-out", "other"])
    .setAllowInvalid(false)
    .setHelpText("เลือกสถานะผู้ซื้อ")
    .build();

  const statusRange = sheet.getRange(2, 7, maxRows - 1, 1);
  statusRange.setDataValidation(statusValidation);

  // Order Status validation (คอลัมน์ S)
  const orderStatusValidation = SpreadsheetApp.newDataValidation()
    .requireValueInList([
      "pending",
      "confirmed",
      "preparing",
      "shipping",
      "delivered",
    ])
    .setAllowInvalid(false)
    .setHelpText("เลือกสถานะคำสั่งซื้อ")
    .build();

  const orderStatusRange = sheet.getRange(2, 19, maxRows - 1, 1);
  orderStatusRange.setDataValidation(orderStatusValidation);

  // Delivery Type validation (คอลัมน์ L)
  const deliveryValidation = SpreadsheetApp.newDataValidation()
    .requireValueInList(["shipping", "pickup"])
    .setAllowInvalid(false)
    .setHelpText("เลือกวิธีการรับสินค้า")
    .build();

  const deliveryRange = sheet.getRange(2, 12, maxRows - 1, 1);
  deliveryRange.setDataValidation(deliveryValidation);

  console.log("Data validation setup completed");
}

/**
 * สร้าง Conditional Formatting สำหรับสถานะ
 */
function setupConditionalFormatting(sheet) {
  const maxRows = 1000;
  const orderStatusRange = sheet.getRange(2, 19, maxRows - 1, 1);

  // สร้างกฎสีสำหรับแต่ละสถานะ
  const rules = [
    {
      condition: SpreadsheetApp.newConditionalFormatRule()
        .whenTextEqualTo("pending")
        .setBackground("#FFD54F")
        .setRanges([orderStatusRange])
        .build(),
    },
    {
      condition: SpreadsheetApp.newConditionalFormatRule()
        .whenTextEqualTo("confirmed")
        .setBackground("#42A5F5")
        .setRanges([orderStatusRange])
        .build(),
    },
    {
      condition: SpreadsheetApp.newConditionalFormatRule()
        .whenTextEqualTo("preparing")
        .setBackground("#AB47BC")
        .setRanges([orderStatusRange])
        .build(),
    },
    {
      condition: SpreadsheetApp.newConditionalFormatRule()
        .whenTextEqualTo("shipping")
        .setBackground("#FF7043")
        .setRanges([orderStatusRange])
        .build(),
    },
    {
      condition: SpreadsheetApp.newConditionalFormatRule()
        .whenTextEqualTo("delivered")
        .setBackground("#66BB6A")
        .setRanges([orderStatusRange])
        .build(),
    },
  ];

  sheet.setConditionalFormatRules(rules.map((rule) => rule.condition));

  console.log("Conditional formatting setup completed");
}

/**
 * สร้างตัวอย่างข้อมูลสำหรับทดสอบ
 */
function insertSampleData() {
  const sheet =
    SpreadsheetApp.getActiveSpreadsheet().getSheetByName(SHEET_NAME);
  if (!sheet) {
    SpreadsheetApp.getUi().alert(
      "กรุณาตั้งค่า Sheets ก่อน",
      "ใช้ฟังก์ชัน setupCPShopSheets() ก่อน",
      SpreadsheetApp.getUi().ButtonSet.OK
    );
    return;
  }

  const sampleData = [
    [
      "SMO001",
      "Full Collection",
      "สมชาย",
      "ใจดี",
      "somchai@email.com",
      "0812345678",
      "student-in",
      "2",
      "cs",
      "วิทยาลัยการคอมพิวเตอร์",
      "663040001-2",
      "shipping",
      "123 ถ.มิตรภาพ อ.เมือง จ.ขอนแก่น 40002",
      1289,
      '[{"name":"เสื้อโปโล","qty":1},{"name":"เสื้อแจ็คเก็ต","qty":1}]',
      "ขอไซส์ M",
      "",
      "SMO20241234567",
      "pending",
      new Date(),
      new Date(),
    ],
    [
      "SMO002",
      "CPSET M1",
      "สมหญิง",
      "รักเรียน",
      "somying@email.com",
      "0823456789",
      "student-in",
      "1",
      "it",
      "วิทยาลัยการคอมพิวเตอร์",
      "663040002-1",
      "shipping",
      "456 ถ.ศรีจันทร์ อ.เมือง จ.ขอนแก่น 40002",
      199,
      '[{"name":"ที่หนีบเนคไท","qty":1},{"name":"หัวเข็มขัด","qty":1}]',
      "ขอให้รีบส่ง",
      "",
      "SMO20241234568",
      "confirmed",
      new Date(),
      new Date(),
    ],
  ];

  const dataRange = sheet.getRange(2, 1, sampleData.length, HEADERS.length);
  dataRange.setValues(sampleData);

  SpreadsheetApp.getUi().alert(
    "สำเร็จ!",
    "เพิ่มข้อมูลตัวอย่าง " + sampleData.length + " รายการแล้ว",
    SpreadsheetApp.getUi().ButtonSet.OK
  );
}

/**
 * ลบข้อมูลทั้งหมด (ยกเว้น headers)
 */
function clearAllData() {
  const ui = SpreadsheetApp.getUi();
  const response = ui.alert(
    "ยืนยันการลบข้อมูล",
    "คุณต้องการลบข้อมูลทั้งหมดในตาราง Orders หรือไม่?\n(Headers จะยังคงอยู่)",
    ui.ButtonSet.YES_NO
  );

  if (response === ui.Button.YES) {
    const sheet =
      SpreadsheetApp.getActiveSpreadsheet().getSheetByName(SHEET_NAME);
    if (sheet && sheet.getLastRow() > 1) {
      sheet.deleteRows(2, sheet.getLastRow() - 1);
      ui.alert("สำเร็จ!", "ลบข้อมูลทั้งหมดแล้ว", ui.ButtonSet.OK);
    }
  }
}

/**
 * ฟังก์ชันสำหรับสร้างเมนู
 */
function onOpen() {
  const ui = SpreadsheetApp.getUi();
  ui.createMenu("🛒 CPSHOP Tools")
    .addItem("📋 ตั้งค่า Sheets อัตโนมัติ", "setupCPShopSheets")
    .addSeparator()
    .addItem("📊 เพิ่มข้อมูลตัวอย่าง", "insertSampleData")
    .addItem("🗑️ ลบข้อมูลทั้งหมด", "clearAllData")
    .addSeparator()
    .addItem("🎨 ตั้งค่าสีสถานะ", "setupConditionalFormatting")
    .addToUi();
}

/**
 * ฟังก์ชันสำหรับดูข้อมูลสถิติ
 */
function showStatistics() {
  const sheet =
    SpreadsheetApp.getActiveSpreadsheet().getSheetByName(SHEET_NAME);
  if (!sheet) return;

  const lastRow = sheet.getLastRow();
  if (lastRow <= 1) {
    SpreadsheetApp.getUi().alert(
      "ไม่มีข้อมูล",
      "ยังไม่มีคำสั่งซื้อในระบบ",
      SpreadsheetApp.getUi().ButtonSet.OK
    );
    return;
  }

  const statusRange = sheet.getRange(2, 19, lastRow - 1, 1);
  const statusValues = statusRange.getValues().flat();

  const statusCount = {};
  statusValues.forEach((status) => {
    statusCount[status] = (statusCount[status] || 0) + 1;
  });

  let message = "สถิติคำสั่งซื้อ:\n\n";
  for (const [status, count] of Object.entries(statusCount)) {
    message += `${status}: ${count} รายการ\n`;
  }
  message += `\nรวมทั้งหมด: ${lastRow - 1} รายการ`;

  SpreadsheetApp.getUi().alert(
    "📊 สถิติ",
    message,
    SpreadsheetApp.getUi().ButtonSet.OK
  );
}
