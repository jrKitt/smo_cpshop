// Tracking page JavaScript functions
let currentOrderRef = null;
let autoRefreshInterval = null;

async function trackOrder(orderRef = null) {
  // If no orderRef provided, get from input field
  if (!orderRef) {
    const inputElement = document.querySelector("#tracking-number");
    if (inputElement) {
      orderRef = inputElement.value.trim();
    }
  }

  // Store current order ref for refresh
  currentOrderRef = orderRef;

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
      
      // Start auto-refresh every 30 seconds
      startAutoRefresh();
    } else {
      // Stop auto-refresh if order not found
      stopAutoRefresh();
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
    stopAutoRefresh();
  }
}

// Start auto-refresh
function startAutoRefresh() {
  // Clear existing interval
  stopAutoRefresh();
  
  console.log("Starting auto-refresh every 30 seconds...");
  
  // Refresh every 30 seconds
  autoRefreshInterval = setInterval(() => {
    if (currentOrderRef) {
      console.log("Auto-refreshing order status...");
      trackOrder(currentOrderRef);
    }
  }, 30000); // 30 seconds
}

// Stop auto-refresh
function stopAutoRefresh() {
  if (autoRefreshInterval) {
    clearInterval(autoRefreshInterval);
    autoRefreshInterval = null;
    console.log("Auto-refresh stopped");
  }
}

// Manual refresh function
function refreshOrderStatus() {
  if (currentOrderRef) {
    console.log("Manual refresh triggered");
    trackOrder(currentOrderRef);
  } else {
    alert("กรุณาค้นหาคำสั่งซื้อก่อน");
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
  const orderStatusEl = document.getElementById("order-status-display");

  if (orderNumberEl) orderNumberEl.textContent = orderData.orderNumber;
  if (orderDateEl) orderDateEl.textContent = orderData.orderDate;
  if (orderTotalEl)
    orderTotalEl.textContent = parseFloat(orderData.total).toLocaleString();
  if (trackingCodeEl) trackingCodeEl.textContent = orderData.trackingCode;

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

  const currentStatus = statusMap[orderData.status] || statusMap.pending;
  
  // Update status badge
  if (orderStatusEl) {
    orderStatusEl.textContent = currentStatus.text;
    orderStatusEl.className = `badge ${currentStatus.class} fs-6`;
  }

  // Define all timeline steps with their details
  const timelineSteps = [
    {
      id: "pending",
      title: "รอการยืนยัน",
      description: "รอทีมงานตรวจสอบและยืนยันคำสั่งซื้อ",
      dotClass: "bg-warning"
    },
    {
      id: "confirmed",
      title: "ยืนยันคำสั่งซื้อแล้ว",
      description: "ทีมงานได้รับคำสั่งซื้อและยืนยันแล้ว",
      dotClass: "bg-info"
    },
    {
      id: "preparing",
      title: "กำลังเตรียมสินค้า",
      description: "ทีมงานกำลังเตรียมสินค้าตามคำสั่งซื้อ",
      dotClass: "bg-primary"
    },
    {
      id: "shipping",
      title: "จัดส่งแล้ว",
      description: "สินค้าถูกส่งไปยังที่อยู่ที่ระบุแล้ว",
      dotClass: "bg-warning",
      showTracking: true
    },
    {
      id: "delivered",
      title: "จัดส่งสำเร็จ",
      description: "สินค้าถูกจัดส่งถึงผู้รับเรียบร้อยแล้ว",
      dotClass: "bg-success"
    }
  ];

  const statusOrder = ["pending", "confirmed", "preparing", "shipping", "delivered"];
  const currentIndex = statusOrder.indexOf(currentStatus.activeStep);

  // Debug logs
  console.log("=== Order Tracking Debug ===");
  console.log("Order status from API:", orderData.status);
  console.log("Current status object:", currentStatus);
  console.log("Current index in timeline:", currentIndex);
  console.log("Will show steps 0 to", currentIndex);

  // Build timeline HTML - show only completed and current steps
  const timelineContainer = document.querySelector(".timeline");
  if (timelineContainer) {
    let timelineHTML = "";
    
    for (let i = 0; i <= currentIndex; i++) {
      const step = timelineSteps[i];
      const isCompleted = i < currentIndex;
      const isActive = i === currentIndex;
      const isLast = i === currentIndex; // แสดงเฉพาะถึงขั้นตอนปัจจุบัน
      
      timelineHTML += `
        <div class="timeline-item ${isCompleted ? 'completed' : ''} ${isActive ? 'active' : ''}" id="${step.id}">
          <div class="timeline-dot ${isCompleted ? 'bg-success' : step.dotClass}"></div>
          <div class="timeline-content">
            <h6 class="mb-1 fw-bold">${step.title}</h6>
            <small class="text-muted">${step.description}</small>
            ${step.showTracking && isActive ? `
              <div class="mt-2">
                <span class="badge bg-primary fs-6">
                  <i class="fas fa-truck me-1"></i>
                  หมายเลขพัสดุ: <span id="tracking-code-inline">${orderData.trackingCode}</span>
                </span>
              </div>
            ` : ''}
          </div>
        </div>
      `;
    }
    
    timelineContainer.innerHTML = timelineHTML;
  }

  // Update last refresh time
  updateLastRefreshTime();

  // Scroll to results
  document.getElementById("tracking-results").scrollIntoView({
    behavior: "smooth",
    block: "start",
  });
}

// Update last refresh time display
function updateLastRefreshTime() {
  const now = new Date();
  const timeString = now.toLocaleTimeString('th-TH', {
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit'
  });
  
  let refreshTimeEl = document.getElementById('last-refresh-time');
  if (!refreshTimeEl) {
    // Create element if doesn't exist
    const resultsContainer = document.getElementById('tracking-results');
    if (resultsContainer) {
      refreshTimeEl = document.createElement('div');
      refreshTimeEl.id = 'last-refresh-time';
      refreshTimeEl.className = 'text-center text-muted small mt-3';
      resultsContainer.appendChild(refreshTimeEl);
    }
  }
  
  if (refreshTimeEl) {
    refreshTimeEl.innerHTML = `
      <i class="fas fa-sync-alt me-1"></i>
      อัปเดตล่าสุด: ${timeString}
      <button class="btn btn-sm btn-link text-primary" onclick="refreshOrderStatus()">
        <i class="fas fa-redo me-1"></i>รีเฟรช
      </button>
    `;
  }
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
