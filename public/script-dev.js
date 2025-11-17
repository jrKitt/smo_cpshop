// ก่อน Deploy
// javascript-obfuscator public/script.js --output public/script.js --compact true --control-flow-flattening true

let selectedPackage = "";
let quantity = 1;
let individualItems = {
  polo: { price: 359, quantity: 0 },
  jacket: { price: 790, quantity: 0 },
  belt: { price: 129, quantity: 0 },
  tung: { price: 119, quantity: 0 },
  tie: { price: 119, quantity: 0 },
};
let totalAmount = 0;
let selectedSizes = {
  polo: [],
  jacket: [],
};
// Package prices
const packages = {
  individual: { name: "ซื้อแยกชิ้น", price: 0, originalPrice: 0, items: [] },
  "cpset-m1": {
    name: "CPSET M1",
    price: 199,
    originalPrice: 248,
    items: ["ที่หนีบเนคไท", "หัวเข็มขัด"],
  },
  "cpset-w1": {
    name: "CPSET W1",
    price: 199,
    originalPrice: 248,
    items: ["ตุ้งติ้ง", "หัวเข็มขัด"],
  },
  "dekcom-set": {
    name: "Dekcom SET",
    price: 999,
    originalPrice: 1149,
    items: ["เสื้อโปโล", "เสื้อแจ็คเก็ต"],
  },
  "full-collection": {
    name: "Full Collection",
    price: 1289,
    originalPrice: 1516,
    items: [
      "เสื้อโปโล",
      "เสื้อแจ็คเก็ต",
      "หัวเข็มขัด",
      "ตุ้งติ้ง",
      "ที่หนีบเนคไท",
    ],
  },
};

const patterns = {
  email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
  phone: /^[0-9]{9,10}$/,
  name: /^[ก-๏a-zA-Z\s]{2,}$/,
};

document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll('input[name="package"]').forEach((radio) => {
    radio.addEventListener("change", function () {
      selectedPackage = this.value;
      updatePackageSelection();
      showSelectionDetails();
    });
  });
  document.getElementById("individual-items-selection").style.display = "none";
});

function updatePackageSelection() {
  document.querySelectorAll(".package-card").forEach((card) => {
    card.classList.remove("selected");
  });
  const selectedCard = document.querySelector(`[data-package="${selectedPackage}"]`);
  if (selectedCard) {
    selectedCard.classList.add("selected");
  }
}

function showSelectionDetails() {
  const detailsSection = document.getElementById("selection-details");
  const quantitySection = document.getElementById("quantity-section");
  const individualItemsSection = document.getElementById("individual-items-selection");
  const poloSizesContainer = document.getElementById("polo-sizes-container");
  const jacketSizesContainer = document.getElementById("jacket-sizes-container");
  const poloSizeSection = document.getElementById("polo-size-section");
  const jacketSizeSection = document.getElementById("jacket-size-section");

  detailsSection.style.display = "block";

  selectedSizes = {
    polo: [],
    jacket: [],
  };

  document.querySelectorAll(".size-btn").forEach((item) => {
    item.classList.remove("selected");
  });

  quantitySection.style.display = "none";
  poloSizeSection.style.display = "none";
  jacketSizeSection.style.display = "none";
  individualItemsSection.style.display = "none";
  poloSizesContainer.innerHTML = "";
  jacketSizesContainer.innerHTML = "";

  if (selectedPackage === "individual") {
    individualItemsSection.style.display = "block";
    document.querySelectorAll(".individual-item-select").forEach((select) => {
      select.value = "0";
    });
    individualItems = {
      polo: { price: 359, quantity: 0 },
      jacket: { price: 790, quantity: 0 },
      belt: { price: 129, quantity: 0 },
      tung: { price: 119, quantity: 0 },
      tie: { price: 119, quantity: 0 },
    };
    updateIndividualItems();
  } else {
    quantitySection.style.display = "block";
    const packageItems = packages[selectedPackage].items;

    if (packageItems.includes("เสื้อโปโล")) {
      poloSizeSection.style.display = "block";
      selectedSizes.polo = [null];
    }

    if (packageItems.includes("เสื้อแจ็คเก็ต")) {
      jacketSizeSection.style.display = "block";
      selectedSizes.jacket = [null];
    }
  }

  updateTotal();
  detailsSection.scrollIntoView({ behavior: "smooth" });
}

function selectSize(type, size) {
  selectedSizes[type][0] = size;
  const sectionId = type === "polo" ? "polo-size-section" : "jacket-size-section";
  const section = document.getElementById(sectionId);

  section.querySelectorAll(".size-btn").forEach((item) => {
    item.classList.remove("selected");
  });

  const selectedButton = section.querySelector(`.size-btn[data-size="${size}"]`);
  if (selectedButton) {
    selectedButton.classList.add("selected");
  }
}

function updateSizeSelectors(type) {
  const container = document.getElementById(`${type}-sizes-container`);
  const quantity = individualItems[type].quantity;

  container.innerHTML = ""; // ล้างเนื้อหาเก่า

  selectedSizes[type] = [];

  if (quantity <= 0) {
    container.style.display = "none";
    return;
  }

  container.style.display = "block";

  for (let i = 0; i < quantity; i++) {
    const sizeSelector = document.createElement("div");
    sizeSelector.className = "card bg-light mb-3 p-3";

    const label = document.createElement("label");
    label.className = "form-label fw-bold";
    label.textContent = `${type === "polo" ? "เสื้อโปโล" : "เสื้อแจ็คเก็ต"} ตัวที่ ${i + 1}:`;
    sizeSelector.appendChild(label);

    const rowDiv = document.createElement("div");
    rowDiv.className = "row row-cols-2 row-cols-sm-3 row-cols-md-6 g-3";
    rowDiv.setAttribute("data-type", type);
    rowDiv.setAttribute("data-index", i);

    const sizes = ["SSS", "SS", "S", "M", "L", "XL", "XXL", "3XL", "4XL", "5XL"];
    sizes.forEach((size) => {
      const colDiv = document.createElement("div");
      colDiv.className = "col";

      const button = document.createElement("button");
      button.type = "button";
      button.className = "size-btn";
      button.setAttribute("data-size", size);
      button.textContent = size;
      button.addEventListener("click", () => selectMultiSize(type, i, size));
      colDiv.appendChild(button);
      rowDiv.appendChild(colDiv);
    });

    sizeSelector.appendChild(rowDiv);
    container.appendChild(sizeSelector);

    selectedSizes[type][i] = null;
  }
}

function selectMultiSize(type, index, size) {
  selectedSizes[type][index] = size;

  const sizeGrid = document.querySelector(`[data-type="${type}"][data-index="${index}"]`);

  sizeGrid.querySelectorAll(".size-btn").forEach((item) => {
    item.classList.remove("selected");
  });

  const selectedButton = sizeGrid.querySelector(`.size-btn[data-size="${size}"]`);
  if (selectedButton) {
    selectedButton.classList.add("selected");
  }
}

function updateIndividualItems() {
  individualItems.polo.quantity = parseInt(document.getElementById("polo-select").value) || 0;
  individualItems.jacket.quantity = parseInt(document.getElementById("jacket-select").value) || 0;
  individualItems.belt.quantity = parseInt(document.getElementById("belt-select").value) || 0;
  individualItems.tung.quantity = parseInt(document.getElementById("tung-select").value) || 0;
  individualItems.tie.quantity = parseInt(document.getElementById("tie-select").value) || 0;

  updateSizeSelectors("polo");
  updateSizeSelectors("jacket");

  let total = 0;
  for (const item in individualItems) {
    total += individualItems[item].price * individualItems[item].quantity;
  }

  packages["individual"].price = total;

  packages["individual"].items = [];
  if (individualItems.polo.quantity > 0) packages["individual"].items.push("เสื้อโปโล");
  if (individualItems.jacket.quantity > 0) packages["individual"].items.push("เสื้อแจ็คเก็ต");
  if (individualItems.belt.quantity > 0) packages["individual"].items.push("หัวเข็มขัด");
  if (individualItems.tung.quantity > 0) packages["individual"].items.push("ตุ้งติ้ง");
  if (individualItems.tie.quantity > 0) packages["individual"].items.push("ที่หนีบเนคไท");

  updateTotal();
}

document.getElementById("quantity").addEventListener("input", function (e) {
  if (/[^0-9]/.test(this.value)) {
    alert("กรุณากรอกตัวเลขเท่านั้น");
    this.value = this.value.replace(/[^0-9]/g, "");
  }
});

function changeQuantity(change) {
  const quantityInput = document.getElementById("quantity");
  let newQuantity = parseInt(quantityInput.value) + change;

  if (newQuantity < 1) newQuantity = 1;
  if (newQuantity > 10) newQuantity = 10;

  quantityInput.value = newQuantity;
  quantity = newQuantity;
  updateTotal();
}

function updateTotal() {
  if (!selectedPackage) return;

  if (selectedPackage === "individual") {
    totalAmount = packages[selectedPackage].price;
  } else {
    const basePrice = packages[selectedPackage].price;
    totalAmount = basePrice * quantity;
  }

  const totalDisplay = document.getElementById("total-display");
  if (totalDisplay) {
    totalDisplay.textContent = `${totalAmount.toLocaleString()} บาท`;
  }
}

document.querySelectorAll('.delivery-option input[type="radio"]').forEach((radio) => {
  radio.addEventListener("change", (e) => {
    selectDelivery(e.target.value);
  });
});

function selectDelivery(type) {
  deliveryType = type;

  document.querySelectorAll(".delivery-option").forEach((option) => {
    option.classList.remove("selected");
  });
  document.querySelector(`[data-delivery="${type}"]`).classList.add("selected");

  document.getElementById("product-btn").style.display = "none";
  document.getElementById("customer-form").style.display = "block";

  const addressSection = document.getElementById("address-section");
  if (type === "shipping") {
    addressSection.style.display = "block";
    addressSection.querySelector("textarea").required = true;
  } else {
    addressSection.style.display = "none";
    addressSection.querySelector("textarea").required = false;
  }

  updateFinalSummary();
}

function toggleYearSelection() {
  const status = document.getElementById("status").value;
  const yearSelection = document.getElementById("year-selection");
  const yearSelect = document.getElementById("year");
  const majorSection = document.getElementById("major-section");
  const facultySection = document.getElementById("faculty-section");
  const studentIdSection = document.getElementById("student-id-section");

  if (status === "student-in") {
    yearSelection.style.display = "block";
    yearSelect.required = true;
    majorSection.style.display = "block";
    studentIdSection.style.display = "block";
    facultySection.style.display = "none";
  } else if (status === "student-out") {
    yearSelection.style.display = "block";
    yearSelect.required = true;
    facultySection.style.display = "block";
    studentIdSection.style.display = "block";
    majorSection.style.display = "none";
  } else {
    yearSelection.style.display = "none";
    yearSelect.required = false;
    yearSelect.value = "";
    majorSection.style.display = "none";
    facultySection.style.display = "none";
    studentIdSection.style.display = "none";
  }
}

function validateEmail(email) {
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return { valid: false, error: "รูปแบบอีเมลไม่ถูกต้อง" };
  }
  
  const allowedDomains = ["kkumail.com", "kku.ac.th", "gmail.com", "hotmail.com"];
  const domain = email.split('@')[1].toLowerCase();
  
  if (!allowedDomains.includes(domain)) {
    return { 
      valid: false, 
      error: "กรุณาใช้อีเมลที่ลงท้ายด้วย kkumail.com, kku.ac.th, gmail.com หรือ hotmail.com เท่านั้น" 
    };
  }
  
  return { valid: true, error: "" };
}

function validateForm() {
  let isValid = true;
  const errors = {};

  const email = document.getElementById("email").value.trim();
  if (!email) {
    errors.email = "กรุณากรอกอีเมล";
    isValid = false;
  } else {
    const emailValidation = validateEmail(email);
    if (!emailValidation.valid) {
      errors.email = emailValidation.error;
      isValid = false;
    }
  }

  const firstname = document.getElementById("firstname").value.trim();
  if (!firstname) {
    errors.firstname = "กรุณากรอกชื่อ";
    isValid = false;
  } else if (!patterns.name.test(firstname)) {
    errors.firstname = "ชื่อต้องมีอย่างน้อย 2 ตัวอักษร";
    isValid = false;
  }

  const lastname = document.getElementById("lastname").value.trim();
  if (!lastname) {
    errors.lastname = "กรุณากรอกนามสกุล";
    isValid = false;
  } else if (!patterns.name.test(lastname)) {
    errors.lastname = "นามสกุลต้องมีอย่างน้อย 2 ตัวอักษร";
    isValid = false;
  }

  const phone = document.getElementById("phone").value.trim();
  if (!phone) {
    errors.phone = "กรุณากรอกเบอร์โทรศัพท์";
    isValid = false;
  } else if (!patterns.phone.test(phone)) {
    errors.phone = "เบอร์โทรศัพท์ต้องเป็นตัวเลข 9-10 หลัก";
    isValid = false;
  }

  if (deliveryType === "shipping") {
    const address = document.getElementById("address").value.trim();
    if (!address) {
      errors.address = "กรุณากรอกที่อยู่สำหรับจัดส่ง";
      isValid = false;
    } else if (address.length < 20) {
      errors.address = "กรุณากรอกที่อยู่ให้ครบถ้วน";
      isValid = false;
    }
  }

  const slip = document.getElementById("slip").files[0];
  if (!slip) {
    errors.slip = "กรุณาอัปโหลดสลิปการโอนเงิน";
    isValid = false;
  }

  const status = document.getElementById("status").value;
  if (status === "student-in" || status === "student-out") {
    const major = document.getElementById("major").value;
    if (status === "student-in" && !major) {
      errors.major = "กรุณาเลือกสาขา";
      isValid = false;
    }
    const faculty = document.getElementById("faculty").value;
    if (status === "student-out" && !faculty) {
      errors.faculty = "กรุณาเลือกคณะ";
      isValid = false;
    }

    const studentId = document.getElementById("student-id").value.trim();
    if (!studentId) {
      errors.studentId = "กรุณากรอกรหัสนักศึกษา";
      isValid = false;
    }
  }

  Object.keys(errors).forEach((field) => {
    const errorDiv = document.getElementById(`${field}-error`);
    if (errorDiv) {
      errorDiv.textContent = errors[field];
    }
  });

  [
    "email", "firstname", "lastname", "phone", "address", "slip", "major", "studentId",
  ].forEach((field) => {
    if (!errors[field]) {
      const errorDiv = document.getElementById(`${field}-error`);
      if (errorDiv) {
        errorDiv.textContent = "";
      }
    }
  });

  if (!isValid) {
    if (Object.keys(errors).length === 1 && errors.email) {
      Swal.fire({
        title: "รูปแบบอีเมลไม่ถูกต้อง!",
        text: errors.email,
        icon: "warning",
        showCancelButton: false,
        confirmButtonColor: "#3085d6",
        confirmButtonText: "ตกลง",
      });
      document.getElementById("email").focus();
    } else {
      Swal.fire({
        title: "คำเตือน!",
        text: "กรุณากรอกข้อมูลให้ครบถ้วน!",
        icon: "warning",
        showCancelButton: false,
        confirmButtonColor: "#3085d6",
        confirmButtonText: "ตกลง",
      });
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }

  return isValid;
}

function proceedToCheckout() {
  document.getElementById("customer-form").scrollIntoView({ behavior: "smooth" });
  window.scrollTo({ top: 0, behavior: "smooth" });

  if (!selectedPackage) {
    alert("กรุณาเลือกแพ็คเกจ");
    return;
  }

  if (selectedPackage === "individual") {
    const hasItems = Object.values(individualItems).some((item) => item.quantity > 0);
    if (!hasItems) {
      alert("กรุณาเลือกสินค้าอย่างน้อย 1 ชิ้น");
      return;
    }

    if (individualItems.polo.quantity > 0) {
      const allPoloSizesSelected = selectedSizes.polo.every((size) => size !== null);
      if (!allPoloSizesSelected) {
        alert("กรุณาเลือกไซส์เสื้อโปโลให้ครบทุกตัว");
        return;
      }
    }

    if (individualItems.jacket.quantity > 0) {
      const allJacketSizesSelected = selectedSizes.jacket.every((size) => size !== null);
      if (!allJacketSizesSelected) {
        alert("กรุณาเลือกไซส์เสื้อแจ็คเก็ตให้ครบทุกตัว");
        return;
      }
    }
  } else {
    const packageItems = packages[selectedPackage].items;
    if (packageItems.includes("เสื้อโปโล") && !selectedSizes.polo[0]) {
      alert("กรุณาเลือกไซส์เสื้อโปโล");
      return;
    }
    if (packageItems.includes("เสื้อแจ็คเก็ต") && !selectedSizes.jacket[0]) {
      alert("กรุณาเลือกไซส์เสื้อแจ็คเก็ต");
      return;
    }
  }

  document.getElementById("shopping-section").style.display = "none";
  document.getElementById("product-btn").style.display = "none";
  document.getElementById("checkout-section").style.display = "block";
  document.getElementById("checkout-section").scrollTo({ behavior: "smooth" });
}

function updateFinalSummary() {
  const summaryDiv = document.getElementById("final-summary");
  let finalTotal = totalAmount;
  if (deliveryType) {
    document.getElementById("customer-form").style.display = "block";
  }
  if (deliveryType === "shipping") {
    finalTotal += 50;
  }

  summaryDiv.innerHTML = ""; // ล้างเนื้อหาเก่า

  const packageInfo = packages[selectedPackage];
  const packageDiv = document.createElement("div");
  packageDiv.style.marginBottom = "15px";

  const strong = document.createElement("strong");
  strong.textContent = packageInfo.name;
  packageDiv.appendChild(strong);
  packageDiv.appendChild(document.createElement("br"));

  if (selectedPackage === "individual") {
    if (individualItems.polo.quantity > 0) {
      const poloDiv = document.createElement("div");
      poloDiv.textContent = `เสื้อโปโล: ${individualItems.polo.quantity} ชิ้น`;
      packageDiv.appendChild(poloDiv);
      for (let i = 0; i < individualItems.polo.quantity; i++) {
        const sizeDiv = document.createElement("div");
        sizeDiv.textContent = `   - ตัวที่ ${i + 1}: ไซส์ ${selectedSizes.polo[i]}`;
        packageDiv.appendChild(sizeDiv);
      }
    }
    if (individualItems.jacket.quantity > 0) {
      const jacketDiv = document.createElement("div");
      jacketDiv.textContent = `เสื้อแจ็คเก็ต: ${individualItems.jacket.quantity} ชิ้น`;
      packageDiv.appendChild(jacketDiv);
      for (let i = 0; i < individualItems.jacket.quantity; i++) {
        const sizeDiv = document.createElement("div");
        sizeDiv.textContent = `   - ตัวที่ ${i + 1}: ไซส์ ${selectedSizes.jacket[i]}`;
        packageDiv.appendChild(sizeDiv);
      }
    }
    if (individualItems.belt.quantity > 0) {
      const beltDiv = document.createElement("div");
      beltDiv.textContent = `หัวเข็มขัด: ${individualItems.belt.quantity} ชิ้น`;
      packageDiv.appendChild(beltDiv);
    }
    if (individualItems.tung.quantity > 0) {
      const tungDiv = document.createElement("div");
      tungDiv.textContent = `ตุ้งติ้ง: ${individualItems.tung.quantity} ชิ้น`;
      packageDiv.appendChild(tungDiv);
    }
    if (individualItems.tie.quantity > 0) {
      const tieDiv = document.createElement("div");
      tieDiv.textContent = `ที่หนีบเนคไท: ${individualItems.tie.quantity} ชิ้น`;
      packageDiv.appendChild(tieDiv);
    }
  } else {
    const quantityDiv = document.createElement("div");
    quantityDiv.textContent = `จำนวน: ${quantity} แพ็คเกจ`;
    packageDiv.appendChild(quantityDiv);

    if (selectedSizes.polo[0]) {
      const poloSizeDiv = document.createElement("div");
      poloSizeDiv.textContent = `ไซส์เสื้อโปโล: ${selectedSizes.polo[0]}`;
      packageDiv.appendChild(poloSizeDiv);
    }
    if (selectedSizes.jacket[0]) {
      const jacketSizeDiv = document.createElement("div");
      jacketSizeDiv.textContent = `ไซส์เสื้อแจ็คเก็ต: ${selectedSizes.jacket[0]}`;
      packageDiv.appendChild(jacketSizeDiv);
    }
  }

  summaryDiv.appendChild(packageDiv);

  if (deliveryType) {
    const deliveryDiv = document.createElement("div");
    deliveryDiv.style.marginBottom = "10px";
    deliveryDiv.textContent = `วิธีรับสินค้า: ${deliveryType === "pickup" ? "รับที่วิทยาลัย" : "จัดส่งทางไปรษณีย์"}`;
    summaryDiv.appendChild(deliveryDiv);

    if (deliveryType === "shipping") {
      const shippingDiv = document.createElement("div");
      shippingDiv.textContent = "ค่าจัดส่ง: +50 บาท";
      summaryDiv.appendChild(shippingDiv);
    }
  }

  const totalAlert = document.createElement("div");
  totalAlert.className = "alert alert-primary";
  totalAlert.style.cssText = "font-size: 1.7em; font-weight: bold; color: #0d6efd;";
  totalAlert.textContent = `รวมทั้งสิ้น: ${finalTotal.toLocaleString()} บาท`;
  summaryDiv.appendChild(totalAlert);
}

function generateEmailHTML(orderData) {
  const orderDate = new Date();
  
  let emailHTML = `
    <div style="max-width: 600px; margin: 0 auto; font-family: 'Sarabun', Arial, sans-serif; background-color: #f8f9fa; padding: 20px;">
        <div style="background-color: white; border-radius: 15px; padding: 30px; box-shadow: 0 4px 6px rgba(0,0,0,0.1);">
            <div style="text-align: center; margin-bottom: 30px;">
                <h1 style="color: #333; font-size: 24px; margin: 0; font-weight: bold;">คำสั่งซื้อสำเร็จ!</h1>
                <p style="color: #666; margin: 10px 0 0 0;">ขอบคุณสำหรับการสั่งซื้อ<br>หากไม่ได้รับอีเมลยืนยันคำสั่งซื้อ กรุณาติดต่อ Facebook สโมสรนักศึกษาอย่างเร็วที่สุด</p>
            </div>
            <div style="background-color: #f8f9fa; border-radius: 10px; padding: 25px; margin-bottom: 20px;">
                <h2 style="color: #007bff; font-size: 18px; margin: 0 0 20px 0; font-weight: bold;">สรุปการสั่งซื้อ</h2>
                <div style="margin-bottom: 15px;">
                    <strong style="color: #333;">หมายเลขอ้างอิง:</strong> <span style="color: #666;">${sanitizeText(orderData.orderRef)}</span>
                </div>
                <div style="margin-bottom: 15px;">
                    <strong style="color: #333;">แพ็คเก็จ:</strong> <span style="color: #666;">${sanitizeText(orderData.packageName)}</span>
                </div>`;

  if (selectedPackage === "individual") {
    if (orderData.items.polo > 0) {
      emailHTML += `<div style="margin-bottom: 10px;"><strong style="color: #333;">เสื้อโปโล:</strong> <span style="color: #666;">${orderData.items.polo} ชิ้น</span></div>`;
      for (let i = 0; i < orderData.items.polo; i++) {
        if (orderData.sizes.polo && orderData.sizes.polo[i]) {
          emailHTML += `<div style="margin-left: 20px; margin-bottom: 5px; color: #666;">- ตัวที่ ${i + 1}: ไซส์ ${sanitizeText(orderData.sizes.polo[i])}</div>`;
        }
      }
    }
    // ทำเช่นเดียวกันสำหรับ items อื่น ๆ
  } else {
    emailHTML += `<div style="margin-bottom: 15px;"><strong style="color: #333;">จำนวน:</strong> <span style="color: #666;">${orderData.quantity} แพ็คเก็จ</span></div>`;
    if (orderData.sizes.polo && orderData.sizes.polo.length > 0 && orderData.sizes.polo[0]) {
      emailHTML += `<div style="margin-bottom: 15px;"><strong style="color: #333;">ไซส์เสื้อโปโล:</strong> <span style="color: #666;">${sanitizeText(orderData.sizes.polo[0])}</span></div>`;
    }
    if (orderData.sizes.jacket && orderData.sizes.jacket.length > 0 && orderData.sizes.jacket[0]) {
      emailHTML += `<div style="margin-bottom: 15px;"><strong style="color: #333;">ไซส์เสื้อแจ็คเก็ต:</strong> <span style="color: #666;">${sanitizeText(orderData.sizes.jacket[0])}</span></div>`;
    }
  }

  emailHTML += `
                <div style="margin-bottom: 15px;">
                    <strong style="color: #333;">วันที่สั่งซื้อ:</strong> <span style="color: #666;">${orderDate.toLocaleDateString("th-TH", { year: "numeric", month: "long", day: "numeric" })}</span>
                </div>
                <div style="margin-bottom: 15px;">
                    <strong style="color: #333;">ชื่อ-นามสกุล:</strong> <span style="color: #666;">${sanitizeText(orderData.firstname)} ${sanitizeText(orderData.lastname)}</span>
                </div>
                <div style="margin-bottom: 15px;">
                    <strong style="color: #333;">อีเมล:</strong> <span style="color: #666;">${sanitizeText(orderData.email)}</span>
                </div>
                <div style="margin-bottom: 15px;">
                    <strong style="color: #333;">เบอร์โทร:</strong> <span style="color: #666;">${sanitizeText(orderData.phone)}</span>
                </div>
                <div style="margin-bottom: 15px;">
                    <strong style="color: #333;">วิธีรับสินค้า:</strong> <span style="color: #666;">${orderData.deliveryType === "pickup" ? "รับที่วิทยาลัย" : "จัดส่งทางไปรษณีย์"}</span>
                </div>
                <div style="background-color: #e3f2fd; padding: 15px; border-radius: 8px; margin-top: 20px;">
                    <strong style="color: #1976d2; font-size: 18px;">ยอดรวม: ${orderData.totalAmount.toLocaleString()} บาท</strong>
                </div>
                <p><strong>หมายเหตุ:</strong> ${sanitizeText(orderData.notes)}</p>
            </div>
            <div style="text-align: center; padding-top: 20px; border-top: 1px solid #eee; color: #666;">
                <p style="margin: 0;">หากมีข้อสงสัยใดๆ กรุณาติดต่อเรา</p>
                <p style="margin: 5px 0 0 0; font-size: 14px;">ขอบคุณที่ใช้บริการ</p>
            </div>
        </div>
    </div>`;
  return emailHTML;
}

// ฟังก์ชัน sanitize ข้อมูลเพื่อป้องกัน XSS
function sanitizeText(text) {
  if (!text) return "";
  // ใช้การแทนที่อักขระที่อาจเป็นอันตราย
  return text
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function generateItemsSummary() {
  if (selectedPackage === "individual") {
    return {
      polo: individualItems.polo.quantity,
      jacket: individualItems.jacket.quantity,
      belt: individualItems.belt.quantity,
      tung_ting: individualItems.tung.quantity,
      tie_clip: individualItems.tie.quantity,
    };
  } else {
    const packageItems = packages[selectedPackage].items;
    return {
      polo: packageItems.includes("เสื้อโปโล") ? quantity : 0,
      jacket: packageItems.includes("เสื้อแจ็คเก็ต") ? quantity : 0,
      belt: packageItems.includes("หัวเข็มขัด") ? quantity : 0,
      tung_ting: packageItems.includes("ตุ้งติ้ง") ? quantity : 0,
      tie_clip: packageItems.includes("ที่หนีบเนคไท") ? quantity : 0,
    };
  }
}

async function uploadSlipViaServer(file, base64Data) {
  try {
    const uploadData = {
      file: base64Data,
      fileName: `ORDER_${Date.now()}_${sanitizeText(document.getElementById("firstname").value.trim())}_${sanitizeText(document.getElementById("lastname").value.trim())}`,
      type: "image/jpeg",
    };

    const response = await fetch("https://cpshop.vercel.app/upload-slip", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(uploadData),
    });

    if (!response.ok) {
      throw new Error(`HTTP status ${response.status}`);
    }

    const result = await response.json();
    return result;
  } catch (error) {
    console.error("Error uploading slip via server:", error);
    return {
      status: "error",
      message: error.message || "Unknown error occurred",
    };
  }
}

let originalSubmitButtonHTML = "";

function resetSubmitButtonState() {
  const submitButton = document.getElementById("submit-order-btn");
  if (submitButton) {
    submitButton.disabled = false;
    if (originalSubmitButtonHTML) {
      submitButton.innerHTML = originalSubmitButtonHTML;
    } else {
      submitButton.innerHTML = '<i class="fas fa-check-circle me-2"></i> สั่งซื้อสินค้า';
    }
  }
}

function compressImage(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = function (event) {
      const img = new Image();
      img.src = event.target.result;
      img.onload = function () {
        const maxWidth = 512;
        const maxHeight = 512;
        let width = img.width;
        let height = img.height;

        if (width > maxWidth) {
          height = Math.round((height * maxWidth) / width);
          width = maxWidth;
        }
        if (height > maxHeight) {
          width = Math.round((width * maxHeight) / height);
          height = maxHeight;
        }

        const canvas = document.createElement("canvas");
        canvas.width = width;
        canvas.height = height;

        const ctx = canvas.getContext("2d");
        ctx.drawImage(img, 0, 0, width, height);

        const compressedDataUrl = canvas.toDataURL("image/jpeg", 0.5);
        resolve(compressedDataUrl);
      };
    };
    reader.onerror = (error) => reject(error);
  });
}

async function submitOrder() {
  const submitButton = document.getElementById("submit-order-btn");
  if (!originalSubmitButtonHTML) {
    originalSubmitButtonHTML = submitButton.innerHTML;
  }
  if (submitButton.disabled) {
    return;
  }
  if (!validateForm()) {
    return;
  }

  const orderData = {
    package: selectedPackage,
    packageName: packages[selectedPackage].name,
    quantity: selectedPackage === "individual" ? 1 : quantity,
    sizes: selectedSizes,
    notes: sanitizeText(document.getElementById("notes").value.trim()),
    email: sanitizeText(document.getElementById("email").value.trim()),
    firstname: sanitizeText(document.getElementById("firstname").value.trim()),
    lastname: sanitizeText(document.getElementById("lastname").value.trim()),
    phone: sanitizeText(document.getElementById("phone").value.trim()),
    status: sanitizeText(document.getElementById("status").value),
    year: sanitizeText(document.getElementById("year").value),
    major: sanitizeText(document.getElementById("major").value),
    faculty: sanitizeText(document.getElementById("faculty").value),
    studentId: sanitizeText(document.getElementById("student-id").value.trim()),
    address: deliveryType === "shipping" ? sanitizeText(document.getElementById("address").value.trim()) : "",
    deliveryType: deliveryType,
    totalAmount: deliveryType === "shipping" ? totalAmount + 50 : totalAmount,
    items: generateItemsSummary(),
    orderRef: generateOrderRef(),
  };

  let summaryText = `แพ็คเกจ: ${orderData.packageName}\n`;
  if (selectedPackage === "individual") {
    if (orderData.items.polo > 0) summaryText += `เสื้อโปโล: ${orderData.items.polo} ชิ้น\n`;
    if (orderData.items.jacket > 0) summaryText += `เสื้อแจ็คเก็ต: ${orderData.items.jacket} ชิ้น\n`;
    if (orderData.items.belt > 0) summaryText += `หัวเข็มขัด: ${orderData.items.belt} ชิ้น\n`;
    if (orderData.items.tung_ting > 0) summaryText += `ตุ้งติ้ง: ${orderData.items.tung_ting} ชิ้น\n`;
    if (orderData.items.tie_clip > 0) summaryText += `ที่หนีบเนคไท: ${orderData.items.tie_clip} ชิ้น\n`;
  } else {
    summaryText += `จำนวน: ${orderData.quantity} แพ็คเกจ\n`;
  }
  summaryText += `\nชื่อ-นามสกุล: ${orderData.firstname} ${orderData.lastname}\n`;
  summaryText += `อีเมล: ${orderData.email}\n`;
  summaryText += `เบอร์โทร: ${orderData.phone}\n`;
  summaryText += `วิธีรับสินค้า: ${orderData.deliveryType === "pickup" ? "รับที่วิทยาลัย" : "จัดส่งทางไปรษณีย์"}\n`;
  summaryText += `รวมทั้งหมด: ${orderData.totalAmount.toLocaleString()} บาท\n\n`;
  summaryText += orderData.notes ? `หมายเหตุ: ${orderData.notes}` : "";

  const result = await Swal.fire({
    title: "กรุณาตรวจสอบข้อมูล",
    html: `<pre style="text-align: left;">${sanitizeText(summaryText).replace(/\n/g, "<br>")}</pre>`,
    icon: "info",
    showCancelButton: true,
    confirmButtonText: "ยืนยันสั่งซื้อ",
    cancelButtonText: "แก้ไขข้อมูล",
    width: 600,
    customClass: {
      popup: 'swal2-popup-custom'
    }
  });

  if (!result.isConfirmed) {
    return;
  }

  const slip = document.getElementById("slip").files[0];
  if (!slip) {
    alert("กรุณาเลือกรูปภาพสลิปการโอนเงิน");
    document.getElementById("slip-error").textContent = "กรุณาอัปโหลดสลิปการโอนเงิน";
    return;
  }
  document.getElementById("slip-error").textContent = "";

  submitButton.disabled = true;
  submitButton.innerHTML = '<i class="fas fa-spinner fa-spin me-2"></i> กำลังดำเนินการ...';

  showLoadingMessage("กำลังตรวจสอบข้อมูล...");

  const reader = new FileReader();
  reader.onload = async function (e) {
    try {
      const compressedImage = await compressImage(slip);
      showLoadingMessage("กำลังโหลด...");
      const imageUploadResult = await uploadSlipViaServer(slip, compressedImage);

      if (imageUploadResult.status === "success") {
        orderData.slipUrl = imageUploadResult.fileUrl;
        showLoadingMessage("กำลังส่งข้อมูลคำสั่งซื้อ...");
        sendToGoogleForms(orderData);
      } else {
        throw new Error(imageUploadResult.message || "Image upload failed");
      }
    } catch (error) {
      console.error("❌ Error uploading slip or during process:", error);
      hideLoadingMessage();
      resetSubmitButtonState();

      const continueAnyway = confirm(
        "ไม่สามารถอัปโหลดรูปภาพสลิปได้: " +
        error.message +
        "\n\nต้องการดำเนินการส่งคำสั่งซื้อต่อหรือไม่? (คุณสามารถส่งรูปสลิปทาง Email ได้)"
      );

      if (continueAnyway) {
        orderData.slipUrl = "ไม่สามารถอัปโหลดสลิปได้";
        showLoadingMessage("กำลังส่งข้อมูลคำสั่งซื้อ...");
        sendToGoogleForms(orderData);
      }
    }
  };
  reader.onerror = function () {
    console.error("❌ Error reading slip file.");
    hideLoadingMessage();
    resetSubmitButtonState();
    alert("เกิดข้อผิดพลาดในการอ่านไฟล์สลิป");
  };
  reader.readAsDataURL(slip);
}

function generateOrderRef() {
  const orderDate = new Date();
  const timestamp = orderDate.getTime();
  return `SMO${orderDate.getFullYear()}${(orderDate.getMonth() + 1).toString().padStart(2, "0")}${timestamp}`;
}

function showSuccessPage(orderData) {
  window.scrollTo({ top: 0, behavior: "smooth" });
  document.getElementById("checkout-section").style.display = "none";
  document.getElementById("success-section").style.display = "block";

  const summaryDiv = document.getElementById("order-summary-display");
  summaryDiv.innerHTML = ""; // ล้างเนื้อหาเก่า

  const refP = document.createElement("p");
  refP.textContent = `หมายเลขอ้างอิง: ${orderData.orderRef}`;
  summaryDiv.appendChild(refP);

  const packageP = document.createElement("p");
  packageP.textContent = `แพ็คเกจ: ${orderData.packageName}`;
  summaryDiv.appendChild(packageP);

  if (selectedPackage === "individual") {
    if (orderData.items.polo > 0) {
      const poloP = document.createElement("p");
      poloP.textContent = `เสื้อโปโล: ${orderData.items.polo} ชิ้น`;
      summaryDiv.appendChild(poloP);
      for (let i = 0; i < orderData.items.polo; i++) {
        if (orderData.sizes.polo && orderData.sizes.polo[i]) {
          const sizeP = document.createElement("p");
          sizeP.className = "ms-3";
          sizeP.textContent = `- ตัวที่ ${i + 1}: ไซส์ ${orderData.sizes.polo[i]}`;
          summaryDiv.appendChild(sizeP);
        }
      }
    }
    // ทำเช่นเดียวกันสำหรับ items อื่น ๆ
  } else {
    const qtyP = document.createElement("p");
    qtyP.textContent = `จำนวน: ${orderData.quantity} แพ็คเกจ`;
    summaryDiv.appendChild(qtyP);
    if (orderData.sizes.polo && orderData.sizes.polo.length > 0 && orderData.sizes.polo[0]) {
      const poloSizeP = document.createElement("p");
      poloSizeP.textContent = `ไซส์เสื้อโปโล: ${orderData.sizes.polo[0]}`;
      summaryDiv.appendChild(poloSizeP);
    }
    if (orderData.sizes.jacket && orderData.sizes.jacket.length > 0 && orderData.sizes.jacket[0]) {
      const jacketSizeP = document.createElement("p");
      jacketSizeP.textContent = `ไซส์เสื้อแจ็คเก็ต: ${orderData.sizes.jacket[0]}`;
      summaryDiv.appendChild(jacketSizeP);
    }
  }

  const orderDate = new Date();
  const dateP = document.createElement("p");
  dateP.textContent = `วันที่สั่งซื้อ: ${orderDate.toLocaleDateString("th-TH", { year: "numeric", month: "long", day: "numeric" })}`;
  summaryDiv.appendChild(dateP);

  const nameP = document.createElement("p");
  nameP.textContent = `ชื่อ-นามสกุล: ${orderData.firstname} ${orderData.lastname}`;
  summaryDiv.appendChild(nameP);

  const emailP = document.createElement("p");
  emailP.textContent = `อีเมล: ${orderData.email}`;
  summaryDiv.appendChild(emailP);

  const phoneP = document.createElement("p");
  phoneP.textContent = `เบอร์โทร: ${orderData.phone}`;
  summaryDiv.appendChild(phoneP);

  const deliveryP = document.createElement("p");
  deliveryP.textContent = `วิธีรับสินค้า: ${orderData.deliveryType === "pickup" ? "รับที่วิทยาลัย" : "จัดส่งทางไปรษณีย์"}`;
  summaryDiv.appendChild(deliveryP);

  const totalP = document.createElement("p");
  totalP.textContent = `ยอดรวม: ${orderData.totalAmount.toLocaleString()} บาท`;
  summaryDiv.appendChild(totalP);

  const notesP = document.createElement("p");
  notesP.textContent = `หมายเหตุ: ${orderData.notes}`;
  summaryDiv.appendChild(notesP);
}

function sendToGoogleForms(orderData) {
  try {
    const orderDate = new Date();
    const orderRef = generateOrderRef();
    orderData.orderRef = orderRef;

    const formData = new URLSearchParams();
    formData.append("entry.493187188", orderData.email);
    formData.append("entry.860126842", orderData.studentId);
    formData.append("entry.414628070", orderData.major);
    formData.append("entry.1165197944", orderData.firstname);
    formData.append("entry.1585905821", orderData.lastname);
    formData.append("entry.255833612", orderData.phone);
    formData.append("entry.1374099402", orderData.status);
    formData.append("entry.78520341", orderData.address);
    formData.append("entry.1721129538", orderData.deliveryType);
    formData.append("entry.205304480", orderData.packageName);
    formData.append("entry.1157770445", orderData.totalAmount.toString());
    formData.append("entry.1925197763", JSON.stringify(orderData.items));
    formData.append("entry.1588158376", orderData.year);
    formData.append("entry.1495796670", orderData.quantity.toString());
    formData.append("entry.1910776706", JSON.stringify(orderData.sizes));
    formData.append("entry.1777038163", orderData.notes);
    formData.append(
      "entry.1563599931",
      orderData.slipUrl || "ไม่สามารถอัปโหลดรูปภาพได้"
    );
    formData.append("entry.1901532350", orderData.orderRef);
    formData.append("entry.2084244129", orderData.faculty);

    fetch("https://cpshop.vercel.app/submit-to-google-form", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: formData.toString(),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP status ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        hideLoadingMessage();
        if (data.success) {
          showSuccessPage(orderData);
          sendConfirmationEmail(orderData);
        } else {
          throw new Error("Google Form submission failed (server response)");
        }
      })
      .catch((error) => {
        hideLoadingMessage();
        resetSubmitButtonState();
        alert(
          "เกิดข้อผิดพลาดในการส่งคำสั่งซื้อ กรุณารีเฟรชหน้าเว็บไซต์: " +
            error.message
        );
      });
  } catch (error) {
    console.error("Error preparing form data:", error);
    hideLoadingMessage();
    resetSubmitButtonState();
    alert(
      "เกิดข้อผิดพลาดในการเตรียมข้อมูล กรุณาลองใหม่อีกครั้ง: " + error.message
    );
  }
}

function sendConfirmationEmail(orderData) {
  const emailHTML = generateEmailHTML(orderData);

  fetch("https://cpshop.vercel.app/send-confirmation-email", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      to: orderData.email,
      subject: "ยืนยันคำสั่งซื้อของคุณ - " + orderData.orderRef,
      html: emailHTML,
    }),
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return response.json();
    })
    .then((data) => {
      console.log("สิเอาส่ำนี่บ่ชีวิตสิหาแต่แนวเกรียนเว็บบ่หล่า");
    })
    .catch((err) => {
      console.error("❌ Failed to send confirmation email:", err);
      hideLoadingMessage();
      resetSubmitButtonState();
      alert(
        "เกิดข้อผิดพลาดในการส่งอีเมลยืนยัน กรุณาลองใหม่อีกครั้ง: " + err.message
      );
    });
}

function showLoadingMessage(message) {
  hideLoadingMessage();
  const loadingDiv = document.createElement("div");
  loadingDiv.id = "loading-message";
  loadingDiv.style.cssText = `
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background: rgba(0, 0, 0, 0.8);
        color: white;
        padding: 20px 40px;
        border-radius: 10px;
        font-size: 16px;
        z-index: 9999;
        display: flex;
        align-items: center;
        gap: 15px;
    `;

  const spinner = document.createElement("div");
  spinner.style.cssText = `
        width: 20px;
        height: 20px;
        border: 2px solid #ffffff50;
        border-top: 2px solid white;
        border-radius: 50%;
        animation: spin 1s linear infinite;
    `;

  if (!document.getElementById("spinner-style")) {
    const style = document.createElement("style");
    style.id = "spinner-style";
    style.textContent = `
            @keyframes spin {
                0% { transform: rotate(0deg); }
                100% { transform: rotate(360deg); }
            }
        `;
    document.head.appendChild(style);
  }

  loadingDiv.appendChild(spinner);
  const textNode = document.createTextNode(message);
  loadingDiv.appendChild(textNode);
  document.body.appendChild(loadingDiv);
}

function hideLoadingMessage() {
  const loadingElement = document.getElementById("loading-message");
  if (loadingElement) {
    loadingElement.remove();
  }
}

function resetOrder() {
  selectedPackage = null;
  selectedSizes = { polo: null, jacket: null };
  quantity = 1;
  deliveryType = null;
  totalAmount = 0;
  individualItems = {
    polo: { price: 359, quantity: 0 },
    jacket: { price: 790, quantity: 0 },
    belt: { price: 129, quantity: 0 },
    tung: { price: 119, quantity: 0 },
    tie: { price: 119, quantity: 0 },
  };

  slip = null;

  document
    .querySelectorAll('input[type="radio"]')
    .forEach((radio) => (radio.checked = false));
  document
    .querySelectorAll(
      'input[type="text"], input[type="email"], input[type="tel"], textarea'
    )
    .forEach((input) => (input.value = ""));
  document
    .querySelectorAll("select")
    .forEach((select) => (select.selectedIndex = 0));
  document.getElementById("quantity").value = 1;

  const slipInput = document.getElementById("slip");
  if (slipInput) {
    slipInput.value = "";
  }

  document
    .querySelectorAll(".package-card")
    .forEach((card) => card.classList.remove("selected"));
  document
    .querySelectorAll(".delivery-option")
    .forEach((option) => option.classList.remove("selected"));
  document
    .querySelectorAll(".size-item")
    .forEach((item) => item.classList.remove("selected"));

  document.getElementById("selection-details").style.display = "none";
  document.getElementById("checkout-section").style.display = "none";
  document.getElementById("success-section").style.display = "none";
  document.getElementById("shopping-section").style.display = "block";
  document.getElementById("individual-items-selection").style.display = "none";

  document
    .querySelectorAll(".error")
    .forEach((error) => (error.textContent = ""));

  setTimeout(() => {
    window.location.href = "/shop";
    window.scrollTo({ top: 0, behavior: "smooth" });
    document
      .getElementById("shopping-section")
      .scrollIntoView({ behavior: "smooth" });
  }, 1000);
}

document.addEventListener("DOMContentLoaded", function () {
  const slipInput = document.getElementById("slip");
  const slipErrorDiv = document.getElementById("slip-error");
  const slipThumbnailContainer = document.getElementById(
    "slip-thumbnail-container"
  );
  const slipThumbnailImg = document.getElementById("slip-thumbnail-img");
  const slipEnlargedViewer = document.getElementById("slip-enlarged-viewer");
  const slipEnlargedImg = document.getElementById("slip-enlarged-img");
  const closeEnlargedViewerBtn = document.getElementById(
    "close-enlarged-viewer-btn"
  );

  let uploadedSlipDataUrl = "";

  if (
    !slipInput ||
    !slipErrorDiv ||
    !slipThumbnailContainer ||
    !slipThumbnailImg ||
    !slipEnlargedViewer ||
    !slipEnlargedImg ||
    !closeEnlargedViewerBtn
  ) {
    console.error(
      "Error: One or more required slip-related elements are missing from the DOM."
    );
    return;
  }

  slipInput.addEventListener("change", function () {
    hideEnlargedSlip();
    if (slipInput.files && slipInput.files[0]) {
      const file = slipInput.files[0];

      if (!file.type.startsWith("image/")) {
        slipErrorDiv.textContent = "กรุณาเลือกไฟล์รูปภาพเท่านั้น";
        slipInput.value = "";
        uploadedSlipDataUrl = "";
        slipThumbnailImg.src = "";
        slipThumbnailContainer.style.display = "none";
        return;
      }
      slipErrorDiv.textContent = "";

      const reader = new FileReader();
      reader.onload = function (e) {
        uploadedSlipDataUrl = e.target.result;
        slipThumbnailImg.src = uploadedSlipDataUrl;
        slipThumbnailContainer.style.display = "block";
      };
      reader.readAsDataURL(file);
    } else {
      uploadedSlipDataUrl = "";
      slipThumbnailImg.src = "";
      slipThumbnailContainer.style.display = "none";
    }
  });

  slipThumbnailImg.addEventListener("click", function () {
    if (uploadedSlipDataUrl) {
      showEnlargedSlip();
    }
  });

  closeEnlargedViewerBtn.addEventListener("click", hideEnlargedSlip);

  function showEnlargedSlip() {
    if (uploadedSlipDataUrl) {
      slipEnlargedImg.src = uploadedSlipDataUrl;
      slipEnlargedViewer.style.display = "block";
    }
  }

  function hideEnlargedSlip() {
    slipEnlargedViewer.style.display = "none";
  }
});

function filterProducts(type) {
  const rows = document.querySelectorAll(".row.g-4 .col-md-6");

  rows.forEach((row) => {
    const packageType = row
      .querySelector(".package-card")
      .getAttribute("data-package");
    if (type === "all") {
      row.style.display = "block";
    } else if (type === "individual" && packageType === "individual") {
      row.style.display = "block";
    } else if (type === "set" && packageType !== "individual") {
      row.style.display = "block";
    } else {
      row.style.display = "none";
    }
  });

  document.querySelectorAll('input[name="package"]').forEach((radio) => {
    radio.checked = false;
  });

  if (type === "individual") {
    const radioIndividual = document.querySelector(
      'input[name="package"][value="individual"]'
    );
    if (radioIndividual) {
      radioIndividual.checked = true;
    }
    selectedPackage = "individual";
    updatePackageSelection();
    showSelectionDetails();
  } else {
    selectedPackage = null;
    document.getElementById("selection-details").style.display = "none";
  }

  const buttons = document.querySelectorAll('#product-btn button');
  buttons.forEach(button => {
    button.classList.remove('btn-primary');
    button.classList.add('btn-outline-primary');
  });

  let activeBtn;
  if (type === 'all') {
    activeBtn = document.querySelector('#product-btn button:nth-child(1)');
  } else if (type === 'individual') {
    activeBtn = document.querySelector('#product-btn button:nth-child(2)');
  } else if (type === 'set') {
    activeBtn = document.querySelector('#product-btn button:nth-child(3)');
  }

  if (activeBtn) {
    activeBtn.classList.add('btn-primary');
    activeBtn.classList.remove('btn-outline-primary');
  }
}

function showCustomerForm() {
  document.getElementById("checkout-section").style.display = "block";
  document.getElementById("shopping-section").style.display = "none";
  hideProductButtons();
}

function hideProductButtons() {
  const buttons = document.querySelectorAll(".product-btn");
  buttons.forEach((button) => {
    button.style.display = "none";
  });
}

function showProductButtons() {
  const buttons = document.querySelectorAll(".product-btn");
  buttons.forEach((button) => {
    button.style.display = "inline-block";
  });
}

document.addEventListener("DOMContentLoaded", function () {
  const lastShown = localStorage.getItem("carouselModalLastShown");
  const now = new Date().getTime();

  if (!lastShown || now - parseInt(lastShown) > 60 * 60 * 1000) {
    const carouselModal = new bootstrap.Modal(
      document.getElementById("carouselModal")
    );
    carouselModal.show();

    const carousel = new bootstrap.Carousel(
      document.getElementById("announcementCarousel"),
      {
        interval: 3000,
        wrap: true,
      }
    );
  }

  document
    .getElementById("carouselModal")
    .addEventListener("hidden.bs.modal", function () {
      if (document.getElementById("dontShowAgain").checked) {
        localStorage.setItem("carouselModalLastShown", new Date().getTime());
      }
    });
});

document.addEventListener('DOMContentLoaded', function () {
  const textarea = document.getElementById('notes');
  if (textarea) {
    textarea.addEventListener('keydown', function(event) {
      if (event.key === 'Enter') {
        event.preventDefault();
      }
    });
  }
});

function goBack() {
  document.getElementById('checkout-section').style.display = 'none';
  document.getElementById('shopping-section').style.display = 'block';
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

const carousel = document.querySelector('#carouselIndividual');
const bsCarousel = new bootstrap.Carousel(carousel, {
  interval: 1500,
  ride: 'carousel'
});