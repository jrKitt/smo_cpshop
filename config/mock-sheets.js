class MockGoogleSheetsService {
  constructor() {
    this.orders = [];
    this.initialized = false;
  }

  async initialize() {
    if (this.orders.length === 0) {
      const sampleOrders = [
        {
          orderRef: "SMO2025TEST001",
          packageName: "Full Collection",
          firstname: "สมชาย",
          lastname: "ใจดี",
          email: "somchai@example.com",
          phone: "0812345678",
          status: "student-in",
          deliveryType: "shipping",
          address:
            "123 หมู่บ้านทดสอบ ตำบลทดสอบ อำเภอเมือง จังหวัดขอนแก่น 40000",
          totalAmount: 1289,
          items: JSON.stringify([{ name: "Full Collection", quantity: 1 }]),
          notes: "ทดสอบระบบ",
          trackingCode: "TH123456789",
          order_status: "shipping",
          created_at: "2025-01-10T10:30:00.000Z",
          updated_at: "2025-01-12T14:45:00.000Z",
        },
        {
          orderRef: "SMO2025TEST002",
          packageName: "CPSET M1",
          firstname: "สมหญิง",
          lastname: "รักเรียน",
          email: "somying@example.com",
          phone: "0823456789",
          status: "student-in",
          deliveryType: "shipping",
          address: "456 ถนนมิตรภาพ ตำบลในเมือง อำเภอเมือง จังหวัดขอนแก่น 40000",
          totalAmount: 199,
          items: JSON.stringify([{ name: "CPSET M1", quantity: 1 }]),
          notes: "รีบใช้งาน",
          trackingCode: null,
          order_status: "confirmed",
          created_at: "2025-01-11T09:15:00.000Z",
          updated_at: "2025-01-12T11:20:00.000Z",
        },
      ];

      sampleOrders.forEach((order, index) => {
        order.rowNumber = index + 1;
        this.orders.push(order);
      });
    }

    this.initialized = true;
    return true;
  }

  async addOrder(orderData) {
    if (!this.initialized) {
      await this.initialize();
    }

    const currentTime = new Date().toISOString();

    const order = {
      ...orderData,
      order_status: "pending",
      created_at: currentTime,
      updated_at: currentTime,
      rowNumber: this.orders.length + 1,
    };

    this.orders.push(order);

    console.log("✅ Mock order added:", orderData.orderRef);

    return {
      success: true,
      rowNumber: order.rowNumber,
      orderRef: orderData.orderRef,
      trackingCode: orderData.trackingCode,
    };
  }

  async getOrder(orderRef) {
    if (!this.initialized) {
      await this.initialize();
    }

    const order = this.orders.find((o) => o.orderRef === orderRef);

    if (!order) {
      return null;
    }

    return {
      orderNumber: order.orderRef,
      packageName: order.packageName,
      customerName: `${order.firstname} ${order.lastname}`,
      firstname: order.firstname,
      lastname: order.lastname,
      email: order.email,
      phone: order.phone,
      deliveryType: order.deliveryType,
      totalAmount: parseFloat(order.totalAmount),
      status: order.order_status || "pending",
      trackingCode: order.trackingCode,
      orderDate: order.created_at,
      lastUpdate: order.updated_at,
      items: order.items || [],
      notes: order.notes,
      rowNumber: order.rowNumber,
    };
  }

  async updateOrderStatus(orderRef, newStatus, trackingCode = null) {
    if (!this.initialized) {
      await this.initialize();
    }

    const orderIndex = this.orders.findIndex((o) => o.orderRef === orderRef);

    if (orderIndex === -1) {
      return { success: false, error: "ไม่พบหมายเลขการสั่งซื้อนี้ในระบบ" };
    }

    this.orders[orderIndex].order_status = newStatus;
    this.orders[orderIndex].updated_at = new Date().toISOString();

    if (trackingCode) {
      this.orders[orderIndex].trackingCode = trackingCode;
    }

    console.log("✅ Mock order status updated:", orderRef, "->", newStatus);

    return { success: true, message: "อัปเดตสถานะเรียบร้อยแล้ว" };
  }

  async getOrderByRef(orderRef) {
    if (!this.initialized) {
      await this.initialize();
    }

    const order = this.orders.find((o) => o.orderRef === orderRef);

    if (!order) {
      return null;
    }

    return {
      orderRef: order.orderRef,
      packageName: order.packageName,
      firstname: order.firstname,
      lastname: order.lastname,
      email: order.email,
      phone: order.phone,
      status: order.status,
      year: order.year,
      major: order.major,
      faculty: order.faculty,
      studentId: order.studentId,
      deliveryType: order.deliveryType,
      address: order.address,
      totalAmount: order.totalAmount,
      items: order.items,
      notes: order.notes,
      slipUrl: order.slipUrl,
      trackingCode: order.trackingCode,
      orderStatus: order.order_status || "pending",
      orderDate: order.created_at,
      updatedAt: order.updated_at,
      rowNumber: order.rowNumber,
    };
  }

  async getAllOrders() {
    if (!this.initialized) {
      await this.initialize();
    }

    return this.orders.map((order) => ({
      orderNumber: order.orderRef,
      packageName: order.packageName,
      customerName: `${order.firstname} ${order.lastname}`,
      email: order.email,
      phone: order.phone,
      deliveryType: order.deliveryType,
      totalAmount: parseFloat(order.totalAmount),
      status: order.order_status || "pending",
      trackingCode: order.trackingCode,
      orderDate: order.created_at,
      lastUpdate: order.updated_at,
      rowNumber: order.rowNumber,
    }));
  }
}

module.exports = {
  MockGoogleSheetsService,
};
