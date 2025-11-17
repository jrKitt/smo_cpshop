// Tracking page JavaScript functions
async function trackOrder(orderRef = null) {
  // If no orderRef provided, get from input field
  if (!orderRef) {
    const inputElement = document.querySelector("#tracking-number");
    if (inputElement) {
      orderRef = inputElement.value.trim();
    }
  }

  // Validate input
  if (!orderRef) {
    displayTrackingResult("error", "กรุณาใส่หมายเลขคำสั่งซื้อ");
    return;
  }

  if (orderRef.length < 5) {
    displayTrackingResult("error", "หมายเลขคำสั่งซื้อไม่ถูกต้อง");
    return;
  }

  try {
    const resultsContainer = document.getElementById("tracking-results");
    if (resultsContainer) {
      resultsContainer.style.display = "block";
    }

    displayTrackingResult("loading", "กำลังค้นหาข้อมูล...");

    const response = await fetch(`/track-order/${orderRef}`);
    const result = await response.json();

    if (result.success) {
      const order = result.order;
      displayTrackingResult("success", null, order);
    } else {
      displayTrackingResult(
        "error",
        "ไม่พบคำสั่งซื้อด้วยหมายเลขที่ระบุ กรุณาตรวจสอบและลองใหม่อีกครั้ง"
      );
    }
  } catch (error) {
    console.error("Error tracking order:", error);
    displayTrackingResult(
      "error",
      "ไม่สามารถติดตามคำสั่งซื้อได้ในขณะนี้ กรุณาลองใหม่อีกครั้ง"
    );
  }
}

function displayTrackingResult(type, message, order = null) {
  const resultsContainer = document.getElementById("tracking-results");
  if (!resultsContainer) return;

  if (type === "loading") {
    // Show loading in the existing timeline area
    const timelineContainer = resultsContainer.querySelector(".timeline");
    if (timelineContainer) {
      timelineContainer.innerHTML = `
        <div class="text-center py-4">
          <div class="spinner-border text-primary" role="status">
            <span class="visually-hidden">กำลังโหลด...</span>
          </div>
          <div class="mt-2">${message}</div>
        </div>
      `;
    }
    return;
  }

  if (type === "error") {
    // Show error in the existing timeline area
    const timelineContainer = resultsContainer.querySelector(".timeline");
    if (timelineContainer) {
      timelineContainer.innerHTML = `
        <div class="alert alert-warning text-center" role="alert">
          <i class="fas fa-exclamation-triangle me-2"></i>
          ${message}
        </div>
      `;
    }
    return;
  }

  if (type === "success" && order) {
    // Update the existing elements with order data
    const orderData = {
      orderNumber: order.orderRef || order.orderNumber,
      orderDate: new Date(order.orderDate).toLocaleDateString("th-TH"),
      status: order.status,
      total: order.totalAmount,
      trackingCode: order.trackingCode || "ยังไม่มีรหัสติดตาม",
    };

    showTrackingResults(orderData);
  }
}

function showTrackingResults(orderData) {
  // Update order information
  const orderNumberEl = document.getElementById("order-number-display");
  const orderDateEl = document.getElementById("order-date-display");
  const orderTotalEl = document.getElementById("order-total-display");
  const trackingCodeEl = document.getElementById("tracking-code");
  const orderStatusEl = document.getElementById("order-display");

  if (orderNumberEl) orderNumberEl.textContent = orderData.orderNumber;
  if (orderDateEl) orderDateEl.textContent = orderData.orderDate;
  if (orderTotalEl)
    orderTotalEl.textContent = parseFloat(orderData.total).toLocaleString();
  if (trackingCodeEl) trackingCodeEl.textContent = orderData.trackingCode;

  // Reset all timeline items to restore original timeline
  const timelineContainer = document.querySelector(".timeline");
  if (timelineContainer) {
    timelineContainer.innerHTML = `
      <div class="timeline-item" id="pending">
        <div class="timeline-dot bg-warning"></div>
        <div class="timeline-content">
          <h6 class="mb-1 fw-bold">รอการยืนยัน</h6>
          <small class="text-muted">รอทีมงานตรวจสอบและยืนยันคำสั่งซื้อ</small>
        </div>
      </div>
      <div class="timeline-item" id="confirmed">
        <div class="timeline-dot bg-info"></div>
        <div class="timeline-content">
          <h6 class="mb-1 fw-bold">ยืนยันคำสั่งซื้อแล้ว</h6>
          <small class="text-muted">ทีมงานได้รับคำสั่งซื้อและยืนยันแล้ว</small>
        </div>
      </div>
      <div class="timeline-item" id="preparing">
        <div class="timeline-dot bg-primary"></div>
        <div class="timeline-content">
          <h6 class="mb-1 fw-bold">กำลังเตรียมสินค้า</h6>
          <small class="text-muted">ทีมงานกำลังเตรียมสินค้าตามคำสั่งซื้อ</small>
        </div>
      </div>
      <div class="timeline-item" id="shipping">
        <div class="timeline-dot bg-warning"></div>
        <div class="timeline-content">
          <h6 class="mb-1 fw-bold">จัดส่งแล้ว</h6>
          <small class="text-muted">สินค้าถูกส่งไปยังที่อยู่ที่ระบุแล้ว</small>
          <div class="mt-2">
            <span class="badge bg-primary fs-6">
              <i class="fas fa-truck me-1"></i>
              หมายเลขพัสดุ: <span id="tracking-code">${orderData.trackingCode}</span>
            </span>
          </div>
        </div>
      </div>
      <div class="timeline-item" id="delivered">
        <div class="timeline-dot bg-success"></div>
        <div class="timeline-content">
          <h6 class="mb-1 fw-bold">จัดส่งสำเร็จ</h6>
          <small class="text-muted">สินค้าถูกจัดส่งถึงผู้รับเรียบร้อยแล้ว</small>
        </div>
      </div>
    `;
  }

  // Now reset and set the appropriate status
  const timelineItems = document.querySelectorAll(".timeline-item");
  timelineItems.forEach((item) => {
    item.classList.remove("active", "completed");
  });

  // Status mapping
  const statusMap = {
    pending: {
      text: "รอการยืนยัน",
      class: "bg-warning",
      activeStep: "pending",
    },
    confirmed: {
      text: "ยืนยันแล้ว",
      class: "bg-info",
      activeStep: "confirmed",
    },
    preparing: {
      text: "กำลังเตรียมสินค้า",
      class: "bg-primary",
      activeStep: "preparing",
    },
    shipping: {
      text: "จัดส่งแล้ว",
      class: "bg-warning",
      activeStep: "shipping",
    },
    delivered: {
      text: "จัดส่งสำเร็จ",
      class: "bg-success",
      activeStep: "delivered",
    },
  };

  const currentStatus = statusMap[orderData.status];
  if (currentStatus && orderStatusEl) {
    orderStatusEl.textContent = currentStatus.text;
    orderStatusEl.className = `badge ${currentStatus.class} fs-6`;
  }

  // Update timeline
  const statusOrder = [
    "pending",
    "confirmed",
    "preparing",
    "shipping",
    "delivered",
  ];
  const currentIndex = statusOrder.indexOf(currentStatus.activeStep);

  // Mark completed steps
  for (let i = 0; i < currentIndex; i++) {
    const element = document.getElementById(statusOrder[i]);
    if (element) element.classList.add("completed");
  }

  // Mark current active step
  const activeElement = document.getElementById(currentStatus.activeStep);
  if (activeElement) activeElement.classList.add("active");

  // Scroll to results
  document.getElementById("tracking-results").scrollIntoView({
    behavior: "smooth",
    block: "start",
  });
}

// ฟังก์ชันจัดรูปแบบวันที่
function formatDate(dateString) {
  if (!dateString) return "-";

  const date = new Date(dateString);
  return date.toLocaleDateString("th-TH", {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });
}

// ฟังก์ชันจัดรูปแบบราคา
function formatPrice(price) {
  if (!price) return "0";
  return Number(price).toLocaleString("th-TH");
}

function getProgressWidth(status) {
  const progressMap = {
    pending: 20,
    confirmed: 40,
    preparing: 60,
    shipping: 80,
    delivered: 100,
  };
  return progressMap[status] || 20;
}
