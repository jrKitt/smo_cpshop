const { GoogleSpreadsheet } = require("google-spreadsheet");
const { JWT } = require("google-auth-library");

const SHEETS_CONFIG = {
  SPREADSHEET_ID:
    process.env.GOOGLE_SPREADSHEET_ID ||
    "1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs74OgvE2upms",

  SERVICE_ACCOUNT_EMAIL: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
  SERVICE_ACCOUNT_PRIVATE_KEY: process.env.GOOGLE_SERVICE_ACCOUNT_PRIVATE_KEY,

  ORDERS_SHEET_NAME: "Orders",

  ORDER_COLUMNS: [
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
    "slip_data",
    "slip_filename",
    "slip_type",
    "tracking_code",
    "order_status",
    "created_at",
    "updated_at",
  ],
};

class GoogleSheetsService {
  constructor() {
    this.doc = null;
    this.ordersSheet = null;
  }

  async initialize() {
    try {
      const serviceAccountAuth = new JWT({
        email: SHEETS_CONFIG.SERVICE_ACCOUNT_EMAIL,
        key: SHEETS_CONFIG.SERVICE_ACCOUNT_PRIVATE_KEY?.replace(/\\n/g, "\n"),
        scopes: ["https://www.googleapis.com/auth/spreadsheets"],
      });

      this.doc = new GoogleSpreadsheet(
        SHEETS_CONFIG.SPREADSHEET_ID,
        serviceAccountAuth
      );
      await this.doc.loadInfo();

      console.log("Connected to Google Sheets:", this.doc.title);

      this.ordersSheet =
        this.doc.sheetsByTitle[SHEETS_CONFIG.ORDERS_SHEET_NAME];

      if (!this.ordersSheet) {
        console.log("Creating Orders sheet...");
        this.ordersSheet = await this.doc.addSheet({
          title: SHEETS_CONFIG.ORDERS_SHEET_NAME,
          headerValues: SHEETS_CONFIG.ORDER_COLUMNS,
        });
      } else {
        await this.ordersSheet.loadHeaderRow();
        if (this.ordersSheet.headerValues.length === 0) {
          await this.ordersSheet.setHeaderRow(SHEETS_CONFIG.ORDER_COLUMNS);
        }
      }

      console.log("Google Sheets service initialized successfully");
      return true;
    } catch (error) {
      console.error(
        "Failed to initialize Google Sheets service:",
        error.message
      );
      throw error;
    }
  }

  async addOrder(orderData) {
    try {
      if (!this.ordersSheet) {
        await this.initialize();
      }

      const currentTime = new Date().toISOString();

      const rowData = {
        order_ref: orderData.orderRef,
        package_name: orderData.packageName,
        firstname: orderData.firstname,
        lastname: orderData.lastname,
        email: orderData.email,
        phone: orderData.phone,
        status: orderData.status || "student-in",
        year: orderData.year || "",
        major: orderData.major || "",
        faculty: orderData.faculty || "",
        student_id: orderData.studentId || "",
        delivery_type: orderData.deliveryType,
        address: orderData.address || "",
        total_amount: orderData.totalAmount,
        items: JSON.stringify(orderData.items),
        notes: orderData.notes || "",
        slip_url: orderData.slipUrl || "",
        tracking_code: orderData.trackingCode || "",
        order_status: "pending",
        created_at: currentTime,
        updated_at: currentTime,
      };

      const newRow = await this.ordersSheet.addRow(rowData);

      console.log(
        "Order added to Google Sheets successfully:",
        orderData.orderRef
      );

      return {
        success: true,
        rowNumber: newRow.rowNumber,
        orderRef: orderData.orderRef,
        trackingCode: orderData.trackingCode,
      };
    } catch (error) {
      console.error(" Error adding order to Google Sheets:", error.message);
      throw error;
    }
  }

  async getOrder(orderRef) {
    try {
      if (!this.ordersSheet) {
        await this.initialize();
      }

      const rows = await this.ordersSheet.getRows();

      const orderRow = rows.find((row) => row.get("order_ref") === orderRef);

      if (!orderRow) {
        return null;
      }

      return {
        orderNumber: orderRow.get("order_ref"),
        packageName: orderRow.get("package_name"),
        customerName: `${orderRow.get("firstname")} ${orderRow.get(
          "lastname"
        )}`,
        firstname: orderRow.get("firstname"),
        lastname: orderRow.get("lastname"),
        email: orderRow.get("email"),
        phone: orderRow.get("phone"),
        deliveryType: orderRow.get("delivery_type"),
        totalAmount: parseFloat(orderRow.get("total_amount")),
        status: orderRow.get("order_status"),
        trackingCode: orderRow.get("tracking_code"),
        orderDate: orderRow.get("created_at"),
        lastUpdate: orderRow.get("updated_at"),
        items: orderRow.get("items") ? JSON.parse(orderRow.get("items")) : [],
        notes: orderRow.get("notes"),
        rowNumber: orderRow.rowNumber,
      };
    } catch (error) {
      console.error("Error getting order from Google Sheets:", error.message);
      throw error;
    }
  }

  async updateOrderStatus(orderRef, newStatus, trackingCode = null) {
    try {
      if (!this.ordersSheet) {
        await this.initialize();
      }

      // โหลดข้อมูลทั้งหมดจาก sheet
      const rows = await this.ordersSheet.getRows();

      // หาคำสั่งซื้อตาม order reference
      const orderRow = rows.find((row) => row.get("order_ref") === orderRef);

      if (!orderRow) {
        return { success: false, error: "ไม่พบหมายเลขการสั่งซื้อนี้ในระบบ" };
      }

      // อัปเดตข้อมูล
      orderRow.set("order_status", newStatus);
      orderRow.set("updated_at", new Date().toISOString());

      if (trackingCode) {
        orderRow.set("tracking_code", trackingCode);
      }

      // บันทึกการเปลี่ยนแปลง
      await orderRow.save();

      console.log(
        "Order status updated in Google Sheets:",
        orderRef,
        "->",
        newStatus
      );

      return { success: true, message: "อัปเดตสถานะเรียบร้อยแล้ว" };
    } catch (error) {
      console.error(
        "❌ Error updating order status in Google Sheets:",
        error.message
      );
      throw error;
    }
  }

  async getOrderByRef(orderRef) {
    try {
      if (!this.ordersSheet) {
        await this.initialize();
      }

      const rows = await this.ordersSheet.getRows();
      const orderRow = rows.find((row) => row.get("order_ref") === orderRef);

      if (!orderRow) {
        return null;
      }

      // Use order_status as primary status field, fallback to delivery_type or status
      const orderStatus = orderRow.get("order_status") || orderRow.get("delivery_type") || orderRow.get("status") || "pending";
      
      return {
        orderRef: orderRow.get("order_ref"),
        packageName: orderRow.get("package_name"),
        firstname: orderRow.get("firstname"),
        lastname: orderRow.get("lastname"),
        email: orderRow.get("email"),
        phone: orderRow.get("phone"),
        status: orderStatus,
        userStatus: orderRow.get("status"),
        year: orderRow.get("year"),
        major: orderRow.get("major"),
        faculty: orderRow.get("faculty"),
        studentId: orderRow.get("student_id"),
        deliveryType: orderRow.get("delivery_type"),
        address: orderRow.get("address"),
        totalAmount: parseFloat(orderRow.get("total_amount")),
        items: orderRow.get("items"),
        notes: orderRow.get("notes"),
        slipUrl: orderRow.get("slip_url"),
        trackingCode: orderRow.get("tracking_code"),
        orderStatus: orderStatus,
        orderDate: orderRow.get("created_at"),
        updatedAt: orderRow.get("updated_at"),
        rowNumber: orderRow.rowNumber,
      };
    } catch (error) {
      console.error(
        "❌ Error getting order by ref from Google Sheets:",
        error.message
      );
      throw error;
    }
  }

  async getAllOrders() {
    try {
      if (!this.ordersSheet) {
        await this.initialize();
      }

      const rows = await this.ordersSheet.getRows();

      return rows.map((row) => ({
        orderNumber: row.get("order_ref"),
        packageName: row.get("package_name"),
        customerName: `${row.get("firstname")} ${row.get("lastname")}`,
        email: row.get("email"),
        phone: row.get("phone"),
        deliveryType: row.get("delivery_type"),
        totalAmount: parseFloat(row.get("total_amount")),
        status: row.get("order_status"),
        trackingCode: row.get("tracking_code"),
        orderDate: row.get("created_at"),
        lastUpdate: row.get("updated_at"),
        rowNumber: row.rowNumber,
      }));
    } catch (error) {
      console.error(
        "❌ Error getting all orders from Google Sheets:",
        error.message
      );
      throw error;
    }
  }

  async uploadSlip(orderRef, base64Data, fileName, fileType) {
    try {
      if (!this.ordersSheet) {
        await this.initialize();
      }

      console.log("Uploading slip to Google Sheets for order:", orderRef);

      // หาคำสั่งซื้อตาม orderRef
      const rows = await this.ordersSheet.getRows();
      const orderRow = rows.find((row) => row.get("order_ref") === orderRef);

      if (!orderRow) {
        throw new Error(`Order ${orderRef} not found in Google Sheets`);
      }

      // อัปเดตข้อมูลสลิป - ใช้ orderRef ในชื่อไฟล์เพื่อให้ตรงกัน
      const slipFileName = `${orderRef}_${fileName}`;
      orderRow.set("slip_data", base64Data);
      orderRow.set("slip_filename", slipFileName);
      orderRow.set("slip_type", fileType);
      orderRow.set("slip_url", `/api/slip-file/${slipFileName}`);
      orderRow.set("updated_at", new Date().toISOString());

      await orderRow.save();

      console.log("Slip uploaded to Google Sheets successfully:", fileName);

      return {
        success: true,
        message: "Slip uploaded to Google Sheets successfully",
        orderRef: orderRef,
      };
    } catch (error) {
      console.error("Error uploading slip to Google Sheets:", error.message);
      throw error;
    }
  }

  async getSlips() {
    try {
      if (!this.ordersSheet) {
        await this.initialize();
      }

      const rows = await this.ordersSheet.getRows();

      // กรองเฉพาะออร์เดอร์ที่มีสลิป
      const slips = rows
        .filter((row) => row.get("slip_data") && row.get("slip_data").trim())
        .map((row) => ({
          orderRef: row.get("order_ref"),
          fileName: row.get("slip_filename") || "unknown.jpg",
          originalFileName: row.get("slip_filename") || "unknown.jpg",
          uploadDate: row.get("updated_at") || row.get("created_at"),
          fileType: row.get("slip_type") || "image/jpeg",
          base64Data: row.get("slip_data"),
          customerName: `${row.get("firstname")} ${row.get("lastname")}`,
          packageName: row.get("package_name"),
          totalAmount: row.get("total_amount"),
        }));

      console.log("Retrieved", slips.length, "slips from Google Sheets");
      return slips;
    } catch (error) {
      console.error("Error getting slips from Google Sheets:", error.message);
      throw error;
    }
  }
}

module.exports = {
  GoogleSheetsService,
  SHEETS_CONFIG,
};
