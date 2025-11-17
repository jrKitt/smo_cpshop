const a0_0x9acab = a0_0x5b7c;
(function (_0x1ce6d9, _0x1086a4) {
  const _0x139949 = a0_0x5b7c,
    _0x497e40 = _0x1ce6d9();
  while (!![]) {
    try {
      const _0x23d26b =
        parseInt(_0x139949(0x1d0)) / 0x1 +
        parseInt(_0x139949(0x187)) / 0x2 +
        (-parseInt(_0x139949(0x210)) / 0x3) *
          (-parseInt(_0x139949(0x207)) / 0x4) +
        -parseInt(_0x139949(0x32d)) / 0x5 +
        (parseInt(_0x139949(0x35f)) / 0x6) *
          (-parseInt(_0x139949(0x1aa)) / 0x7) +
        (parseInt(_0x139949(0x3a3)) / 0x8) *
          (parseInt(_0x139949(0x36d)) / 0x9) +
        parseInt(_0x139949(0x3ac)) / 0xa;
      if (_0x23d26b === _0x1086a4) break;
      else _0x497e40["push"](_0x497e40["shift"]());
    } catch (_0x41c4e2) {
      _0x497e40["push"](_0x497e40["shift"]());
    }
  }
})(a0_0x40cc, 0xcebd6);
let selectedPackage = "",
  quantity = 0x1,
  individualItems = {
    polo: { price: 0x167, quantity: 0x0 },
    jacket: { price: 0x316, quantity: 0x0 },
    jersey: { price: 0x103, quantity: 0x0 },
    belt: { price: 0x81, quantity: 0x0 },
    tung: { price: 0x77, quantity: 0x0 },
    tie: { price: 0x77, quantity: 0x0 },
  },
  totalAmount = 0x0,
  selectedSizes = { polo: [], jacket: [], jersey: [] };
const packages = {
    individual: {
      name: "ซื้อแยกชิ้น",
      price: 0x0,
      originalPrice: 0x0,
      items: [],
    },
  },
  patterns = {
    email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
    phone: /^[0-9]{9,10}$/,
    name: /^[ก-๏a-zA-Z\s]{2,}$/,
  };
function a0_0x40cc() {
  const _0x5b49c1 = [
    "GdphO",
    "VXbSW",
    "input[name=\x22package\x22]",
    "selectedIndex",
    "cssText",
    "HTTP\x20status\x20",
    "Dcqoy",
    "JOpvo",
    "year-selection",
    "IQaDK",
    "getContext",
    "FnVMa",
    "bLKCr",
    "ZfQBS",
    "JAmsf",
    "กรุณาเลือกไซส์เสื้อโปโลให้ครบทุกตัว",
    "JXwGK",
    "</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20style=\x22margin-bottom:\x2015px;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<strong\x20style=\x22color:\x20#333;\x22>วิธีรับสินค้า:</strong>\x20<span\x20style=\x22color:\x20#666;\x22>",
    "kkumail.com",
    "OgqZy",
    "aBJWk",
    "data-size",
    "yJcPv",
    "<i\x20class=\x22fas\x20fa-spinner\x20fa-spin\x20me-2\x22></i>\x20กำลังดำเนินการ...",
    "GvJoN",
    "change",
    "every",
    "\x20แพ็คเกจ",
    "carousel",
    "polo-select",
    "ชื่อต้องมีอย่างน้อย\x202\x20ตัวอักษร",
    "row\x20row-cols-2\x20row-cols-sm-3\x20row-cols-md-6\x20g-3",
    "notes",
    "4096mhAuCd",
    "ยืนยันคำสั่งซื้อของคุณ\x20-\x20",
    "createTextNode",
    "font-size:\x201.7em;\x20font-weight:\x20bold;\x20color:\x20#0d6efd;",
    "\x20บาท",
    "\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20style=\x22margin-bottom:\x2015px;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<strong\x20style=\x22color:\x20#333;\x22>วันที่สั่งซื้อ:</strong>\x20<span\x20style=\x22color:\x20#666;\x22>",
    "OWJsQ",
    "iZkaJ",
    "Accjk",
    "2388100hmcets",
    "&#039;",
    "xNtEk",
    "IiRRH",
    "querySelectorAll",
    "QuBkv",
    "classList",
    "wiGUY",
    "firstname",
    "vOGIZ",
    "height",
    "bg-info",
    "SqlkL",
    "iITOE",
    "\x20ชิ้น</span></div>",
    "\x20บาท</strong>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<p><strong>หมายเหตุ:</strong>\x20",
    "FjLXz",
    "<i\x20class=\x22fas\x20fa-check-circle\x20me-2\x22></i>\x20สั่งซื้อสินค้า",
    ".row.g-4\x20.col-md-6",
    "UGDYW",
    "toLowerCase",
    "HvHjR",
    "</div>",
    "VKudc",
    "WuaQw",
    "yfCSH",
    "คำเตือน!",
    "swal2-popup-custom",
    "EIxcZ",
    "-error",
    "btn-primary",
    "\x0aชื่อ-นามสกุล:\x20",
    "ZiZLP",
    "files",
    "trackingCode",
    "application/json",
    "KtCdK",
    "DOMContentLoaded",
    "eqPhq",
    "TpBuA",
    "cVvrr",
    "carouselModal",
    "head",
    "qsGRc",
    "innerHTML",
    "Error\x20reading\x20slip\x20file.",
    "ORDER_",
    "AFsVW",
    "gfdMg",
    "hbUBV",
    "กรุณากรอกตัวเลขเท่านั้น",
    "nKeQi",
    "PQREf",
    "btn-outline-primary",
    "reduce",
    "</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20style=\x22margin-bottom:\x2015px;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<strong\x20style=\x22color:\x20#333;\x22>เบอร์โทร:</strong>\x20<span\x20style=\x22color:\x20#666;\x22>",
    "style",
    "VzEMf",
    "cUAgk",
    "vHfwH",
    "strong",
    "lFHLK",
    "bESWd",
    "qVBLc",
    "ncTtz",
    "Khewn",
    "LrwIs",
    "belt-select",
    "form-label\x20fw-bold",
    "oxIYh",
    "แพ็คเกจ:\x20",
    "pOJTE",
    "smooth",
    "</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>",
    "<div\x20style=\x22margin-bottom:\x2015px;\x22><strong\x20style=\x22color:\x20#333;\x22>ไซส์เสื้อแจ็คเก็ต:</strong>\x20<span\x20style=\x22color:\x20#666;\x22>",
    "hoDMF",
    "<strong>รหัสติดตาม:</strong>\x20<span\x20class=\x22badge\x20bg-primary\x22>",
    "&quot;",
    "required",
    "MCERF",
    "ToRpd",
    "announcementCarousel",
    "hEujx",
    "TiTNO",
    "getMonth",
    "eUkEY",
    "mwCKF",
    "vuoJH",
    "RfhPg",
    "bg-secondary",
    "zeOFG",
    "gdmxM",
    "tie-select",
    "hidden.bs.modal",
    "รูปแบบอีเมลไม่ถูกต้อง!",
    "eHVnQ",
    "submit-order-btn",
    "round",
    "wkGYp",
    "BxZzc",
    "href",
    "\x20ชิ้น\x0a",
    "uVVnY",
    "OvGtB",
    "NmjCq",
    "ToaIh",
    "checked",
    "Database\x20submission\x20failed",
    "cJmlt",
    "dontShowAgain",
    "tBjmH",
    "wPkza",
    "add",
    "fOvsH",
    "cSUNh",
    "804298zTbwxm",
    "FlFmd",
    "jUSzj",
    "กรุณากรอกรหัสนักศึกษา",
    "name",
    "กรุณาเลือกแพ็คเกจ",
    "SDjdu",
    ".package-card",
    "all",
    "preventDefault",
    "hkiTB",
    "ค่าจัดส่ง:\x20+50\x20บาท",
    "SOxKd",
    "&lt;",
    "bDTuk",
    "JWHbK",
    "XaVig",
    "IrAtf",
    "StzUQ",
    "tFXPp",
    "yWpzK",
    "GSsbc",
    "mHuhz",
    "zBAyr",
    "นามสกุลต้องมีอย่างน้อย\x202\x20ตัวอักษร",
    "CgtPR",
    "jgNMi",
    "pXcUb",
    "jWGVJ",
    "ujGMS",
    "data-index",
    "jersey-select",
    "รับที่วิทยาลัย",
    "CmQmn",
    "UlfUP",
    "98399EbakBs",
    "QkkKU",
    "quantity-section",
    "getElementById",
    "Zemsn",
    "tUuYH",
    "ftxKI",
    "Error\x20preparing\x20form\x20data:",
    "disabled",
    ":\x20ไซส์\x20",
    "eCXjo",
    "LAvgO",
    ".size-item",
    "student-out",
    "zAABL",
    "ที่หนีบเนคไท:\x20",
    "กรุณาเลือกไซส์เสื้อ\x20JERSEY\x20ให้ครบทุกตัว",
    "SMO",
    "\x0a\x20\x20\x20\x20<div\x20style=\x22max-width:\x20600px;\x20margin:\x200\x20auto;\x20font-family:\x20\x27Sarabun\x27,\x20Arial,\x20sans-serif;\x20background-color:\x20#f8f9fa;\x20padding:\x2020px;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20style=\x22background-color:\x20white;\x20border-radius:\x2015px;\x20padding:\x2030px;\x20box-shadow:\x200\x204px\x206px\x20rgba(0,0,0,0.1);\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20style=\x22text-align:\x20center;\x20margin-bottom:\x2030px;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<h1\x20style=\x22color:\x20#333;\x20font-size:\x2024px;\x20margin:\x200;\x20font-weight:\x20bold;\x22>คำสั่งซื้อสำเร็จ!</h1>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<p\x20style=\x22color:\x20#666;\x20margin:\x2010px\x200\x200\x200;\x22>ขอบคุณสำหรับการสั่งซื้อ<br>หากไม่ได้รับอีเมลยืนยันคำสั่งซื้อ\x20กรุณาติดต่อ\x20Facebook\x20สโมสรนักศึกษาอย่างเร็วที่สุด</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20style=\x22background-color:\x20#f8f9fa;\x20border-radius:\x2010px;\x20padding:\x2025px;\x20margin-bottom:\x2020px;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<h2\x20style=\x22color:\x20#007bff;\x20font-size:\x2018px;\x20margin:\x200\x200\x2020px\x200;\x20font-weight:\x20bold;\x22>สรุปการสั่งซื้อ</h2>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20style=\x22margin-bottom:\x2015px;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<strong\x20style=\x22color:\x20#333;\x22>หมายเลขอ้างอิง:</strong>\x20<span\x20style=\x22color:\x20#666;\x22>",
    "afeIh",
    "UlIFk",
    "YvzyT",
    "yOOjS",
    "PqsBx",
    "PxZGg",
    "replace",
    "TqNue",
    "vNaWp",
    "GfSvO",
    "total-display",
    "EZNAw",
    "tie",
    "eNkBD",
    "dlipL",
    "scrollIntoView",
    "xzRLt",
    "mDSYi",
    "FOPey",
    "729842oxOull",
    "selected",
    "เสื้อแจ็คเก็ต",
    "oIlPJ",
    "WxSBO",
    "valid",
    "result",
    "gSnEp",
    "วิธีรับสินค้า:\x20",
    "ZWEYI",
    "yihSl",
    "#product-btn\x20button:nth-child(2)",
    "LGJcA",
    "polo-size-section",
    "data-type",
    "/submit-order",
    "XFONd",
    "รูปแบบอีเมลไม่ถูกต้อง",
    "MHqDU",
    "VwZfQ",
    "</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20style=\x22margin-bottom:\x2015px;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<strong\x20style=\x22color:\x20#333;\x22>อีเมล:</strong>\x20<span\x20style=\x22color:\x20#666;\x22>",
    "aUdnb",
    "HqFcV",
    "jersey",
    "LGBuC",
    "EwYhK",
    "gmail.com",
    "VVmTP",
    "NpXdq",
    "hcFNH",
    "spinner-style",
    "setAttribute",
    "หัวเข็มขัด",
    "quantity",
    "bOcah",
    "target",
    "VFnEQ",
    ".size-btn[data-size=\x22",
    "uOOkp",
    "tvYGG",
    "belt",
    "HvLmM",
    "vyUPF",
    "tkpOa",
    "PRNsi",
    "/send-confirmation-email",
    "hotmail.com",
    "<div\x20style=\x22margin-bottom:\x2015px;\x22><strong\x20style=\x22color:\x20#333;\x22>ไซส์เสื้อโปโล:</strong>\x20<span\x20style=\x22color:\x20#666;\x22>",
    "<div\x20style=\x22margin-bottom:\x2010px;\x22><strong\x20style=\x22color:\x20#333;\x22>เสื้อโปโล:</strong>\x20<span\x20style=\x22color:\x20#666;\x22>",
    "MCfZV",
    "-select",
    "tung_ting",
    "Failed\x20to\x20send\x20confirmation\x20email:",
    "afcIL",
    "cGiFZ",
    "4SZIMKK",
    "ymZZR",
    "kTrNp",
    "data-package",
    "PKZiE",
    "select",
    "กรุณาใช้อีเมลที่ลงท้ายด้วย\x20kkumail.com,\x20kku.ac.th,\x20gmail.com\x20หรือ\x20hotmail.com\x20เท่านั้น",
    "POST",
    "catch",
    "930099oBWWJk",
    ".product-btn",
    "กรุณาเลือกคณะ",
    "เกิดข้อผิดพลาดในการอ่านไฟล์สลิป",
    "3|2|4|0|5|1",
    "remove",
    "1|3|0|4|2",
    "address",
    "isConfirmed",
    "BBIVw",
    "vPfCK",
    "RyiKE",
    "student-in",
    "fEpIl",
    "BonFk",
    "mZcaL",
    "RbgYV",
    "checkout-section",
    "xLOBV",
    "width",
    "/upload-slip",
    "เบอร์โทรศัพท์ต้องเป็นตัวเลข\x209-10\x20หลัก",
    "PWvSk",
    "lIxlm",
    "3XL",
    "product-btn",
    "HmKbP",
    "hXMhU",
    "kku.ac.th",
    "pickup",
    "jersey-size-section",
    "LQQNS",
    "hkber",
    "badge\x20fs-6\x20",
    "behjd",
    "</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20style=\x22text-align:\x20center;\x20padding-top:\x2020px;\x20border-top:\x201px\x20solid\x20#eee;\x20color:\x20#666;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<p\x20style=\x22margin:\x200;\x22>หากมีข้อสงสัยใดๆ\x20กรุณาติดต่อเรา</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<p\x20style=\x22margin:\x205px\x200\x200\x200;\x20font-size:\x2014px;\x22>ขอบคุณที่ใช้บริการ</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20</div>",
    "เกินจำนวนที่กำหนด",
    "iMcRk",
    "OPcvq",
    "กรุณากรอกเบอร์โทรศัพท์",
    "Image\x20upload\x20failed",
    "yqqBr",
    "RoYpI",
    "IBvtx",
    "HgqVL",
    "Gvfec",
    "Error:\x20One\x20or\x20more\x20required\x20slip-related\x20elements\x20are\x20missing\x20from\x20the\x20DOM.",
    "</pre>",
    "onload",
    "jersey-sizes-container",
    "shipping",
    "mGshj",
    "DoyDf",
    ".delivery-option\x20input[type=\x22radio\x22]",
    "bWhtu",
    "-sizes-container",
    "xiiRx",
    "5XL",
    "shopping-section",
    "gfefA",
    "yDWXw",
    "PXlXX",
    "\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20@keyframes\x20spin\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x200%\x20{\x20transform:\x20rotate(0deg);\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20100%\x20{\x20transform:\x20rotate(360deg);\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20",
    "split",
    "student-id",
    "slipUrl",
    "close-enlarged-viewer-btn",
    "Error\x20uploading\x20slip\x20or\x20during\x20process:",
    "hRKeJ",
    "ตกลง",
    "getTime",
    "createElement",
    "values",
    "Unknown\x20error\x20occurred",
    "UfGxi",
    "hrOqp",
    "\x20แพ็คเก็จ</span></div>",
    "selection-details",
    "หมายเหตุ:\x20",
    "whkra",
    "กำลังตรวจสอบข้อมูล...",
    "key",
    "CFErL",
    "กรุณากรอกนามสกุล",
    "HFAPm",
    "dAGBr",
    "กรุณากรอกข้อมูลให้ครบถ้วน!",
    "now",
    "ตุ้งติ้ง:\x20",
    "stringify",
    "length",
    "message",
    "hUlsL",
    "tOzEr",
    "puZCU",
    "jNrVt",
    "Carousel",
    "เสื้อ\x20JERSEY",
    "KjkEb",
    "ZTJQG",
    "padStart",
    "กรุณาเลือกรูปภาพสลิปการโอนเงิน",
    "รวมทั้งหมด:\x20",
    "long",
    "AkKwR",
    "display",
    "<pre\x20style=\x22text-align:\x20left;\x22>",
    "IAWkG",
    "dYxOu",
    "กรุณากรอกที่อยู่สำหรับจัดส่ง",
    "packageName",
    "mzwTE",
    "FHqRT",
    "JmLMN",
    "\x0a\x20\x20\x20\x20\x20\x20\x20\x20position:\x20fixed;\x0a\x20\x20\x20\x20\x20\x20\x20\x20top:\x2050%;\x0a\x20\x20\x20\x20\x20\x20\x20\x20left:\x2050%;\x0a\x20\x20\x20\x20\x20\x20\x20\x20transform:\x20translate(-50%,\x20-50%);\x0a\x20\x20\x20\x20\x20\x20\x20\x20background:\x20rgba(0,\x200,\x200,\x200.8);\x0a\x20\x20\x20\x20\x20\x20\x20\x20color:\x20white;\x0a\x20\x20\x20\x20\x20\x20\x20\x20padding:\x2020px\x2040px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20border-radius:\x2010px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20font-size:\x2016px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20z-index:\x209999;\x0a\x20\x20\x20\x20\x20\x20\x20\x20display:\x20flex;\x0a\x20\x20\x20\x20\x20\x20\x20\x20align-items:\x20center;\x0a\x20\x20\x20\x20\x20\x20\x20\x20gap:\x2015px;\x0a\x20\x20\x20\x20",
    "sWfdk",
    "prhoR",
    "forEach",
    "input[type=\x22text\x22],\x20input[type=\x22email\x22],\x20input[type=\x22tel\x22],\x20textarea",
    "json",
    "label",
    "อีเมล:\x20",
    "card\x20bg-light\x20mb-3\x20p-3",
    "dINKV",
    "sizes",
    "BvfWk",
    "TDzJc",
    "เสื้อ\x20JERSEY:\x20",
    "QiAEd",
    "etumV",
    "OIQza",
    "readAsDataURL",
    "เบอร์โทร:\x20",
    "div",
    "info",
    "dRbEN",
    "\x22][data-index=\x22",
    "customer-form",
    "zZHXl",
    "KXwiz",
    "-\x20ตัวที่\x20",
    "major",
    "polo-sizes-container",
    "กรุณากรอกอีเมล",
    "Svvje",
    "QBJLm",
    "4XL",
    "evUDw",
    "Dmlyf",
    "ไซส์เสื้อโปโล:\x20",
    "numeric",
    "cuJSt",
    "<div\x20style=\x22margin-bottom:\x2015px;\x22><strong\x20style=\x22color:\x20#333;\x22>จำนวน:</strong>\x20<span\x20style=\x22color:\x20#666;\x22>",
    "nNDXk",
    "</span></div>",
    "success-section",
    "includes",
    "3|4|0|2|5|1",
    "cyCuK",
    "EdlTP",
    "TBxMR",
    "qFeWa",
    "\x0a\x20\x20\x20\x20\x20\x20\x20\x20width:\x2020px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20height:\x2020px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20border:\x202px\x20solid\x20#ffffff50;\x0a\x20\x20\x20\x20\x20\x20\x20\x20border-top:\x202px\x20solid\x20white;\x0a\x20\x20\x20\x20\x20\x20\x20\x20border-radius:\x2050%;\x0a\x20\x20\x20\x20\x20\x20\x20\x20animation:\x20spin\x201s\x20linear\x20infinite;\x0a\x20\x20\x20\x20",
    "drawImage",
    "CtEFa",
    "hfaPW",
    "QTVMc",
    "nDojM",
    "zxfzv",
    "trim",
    "GtzGD",
    "tmvWS",
    "dABuL",
    "button",
    "จัดส่งทางไปรษณีย์",
    "marginBottom",
    "VGKzK",
    "test",
    "OfaZO",
    "NMEZR",
    "กรุณาเลือกสาขา",
    "กรุณากรอกชื่อ",
    "querySelector",
    "getFullYear",
    "JpnGJ",
    "wKTxn",
    "DJdhC",
    "JUFmO",
    "none",
    "Modal",
    "nbYXw",
    "RjFKy",
    "กำลังโหลด...",
    "individual-items-selection",
    "กำลังส่งข้อมูลคำสั่งซื้อ...",
    ".size-btn",
    "log",
    "phone",
    "rFEoS",
    "JJPpr",
    "KgyEd",
    "เสื้อแจ็คเก็ต:\x20",
    "block",
    "WoccI",
    "Xjtlc",
    "sSRrB",
    "getAttribute",
    "viAhs",
    "fuVNu",
    "polo",
    "lSDRf",
    "กรุณาอัปโหลดสลิปการโอนเงิน",
    "xDinR",
    "GJXMF",
    "slip-enlarged-img",
    "location",
    "hsQcx",
    ".error",
    "hBmoa",
    "src",
    "gALlc",
    "faculty",
    "BXwYz",
    "some",
    "&gt;",
    "email",
    "<div\x20style=\x22margin-left:\x2020px;\x20margin-bottom:\x205px;\x20color:\x20#666;\x22>-\x20ตัวที่\x20",
    "pXAFM",
    "jacket",
    "Error\x20uploading\x20slip\x20via\x20server:",
    "15px",
    "กรุณาเลือกไฟล์รูปภาพเท่านั้น",
    "error",
    "th-TH",
    "xlsRR",
    "ไม่สามารถอัปโหลดรูปภาพสลิปได้:\x20",
    "studentId",
    "กรุณาเลือกไซส์เสื้อแจ็คเก็ตให้ครบทุกตัว",
    "เสื้อโปโล:\x20",
    "#carouselIndividual",
    "[data-package=\x22",
    "individual",
    "ไซส์เสื้อแจ็คเก็ต:\x20",
    "toString",
    "keys",
    "toLocaleDateString",
    "value",
    "RDlBw",
    "YkKFj",
    "qJUJT",
    "onerror",
    "getItem",
    "GKzic",
    "cTyhM",
    "addEventListener",
    "carouselModalLastShown",
    "UZhNk",
    "MHPoq",
    "qRuKj",
    "jacket-size-section",
    "className",
    "lSFKr",
    "activeElement",
    "warning",
    "loading-message",
    "kZkQy",
    "ffALX",
    "slip-error",
    "xwrir",
    "orderRef",
    "bQrsn",
    "alert\x20alert-primary",
    "rbXoi",
    "scrollTo",
    ".delivery-option",
    "HTTP\x20error!\x20status:\x20",
    "lastname",
    "bg-danger",
    "appendChild",
    "DHmSI",
    "keydown",
    "YpkTj",
    "MVLgb",
    "GFODj",
    "ที่หนีบเนคไท",
    "3310550OxmnAQ",
    "หัวเข็มขัด:\x20",
    "npbaN",
    "คำสั่งซื้อหนึ่งครั้งสั่งได้ไม่เกิน\x203\x20ชิ้น",
    "MOZaP",
    "QYtMD",
    "tie_clip",
    "canvas",
    "fire",
    "yGPXC",
    "dhZtq",
    "zDLpm",
    "deliveryType",
    "PahHO",
    "LIdLW",
    "bg-warning",
    "SkFZO",
    "eOhet",
    "XXL",
    "shirt-counter",
    "click",
    "</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20style=\x22background-color:\x20#e3f2fd;\x20padding:\x2015px;\x20border-radius:\x208px;\x20margin-top:\x2020px;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<strong\x20style=\x22color:\x20#1976d2;\x20font-size:\x2018px;\x22>ยอดรวม:\x20",
    "lbfHA",
    "URzsQ",
    "IzgiQ",
    "SSS",
    "items",
    "status",
    "then",
    "oLYyg",
    "TiHNR",
    "bdlzQ",
    "ewPpW",
    "\x20\x20\x20-\x20ตัวที่\x20",
    "WhTfK",
    "NhvtL",
    "ybDhb",
    "FRvce",
    "ADjJj",
    "HZezm",
    "input[name=\x22package\x22][value=\x22individual\x22]",
    "เกิดข้อผิดพลาดในการส่งอีเมลยืนยัน\x20กรุณาลองใหม่อีกครั้ง:\x20",
    "image/jpeg",
    "EuZpj",
    "jacket-select",
    "push",
    "KDUoj",
    "</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20style=\x22margin-bottom:\x2015px;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<strong\x20style=\x22color:\x20#333;\x22>ชื่อ-นามสกุล:</strong>\x20<span\x20style=\x22color:\x20#666;\x22>",
    "ifdlf",
    "slip",
    "564krnQOl",
    "order-summary-display",
    "MMXQM",
    "รวมทั้งสิ้น:\x20",
    "YFcCH",
    "tung",
    "jzjWo",
    "toLocaleString",
    "เสื้อ\x20(โปโล\x20+\x20แจ็คเก็ต\x20+\x20เจอร์ซี่)\x20รวมกันสั่งได้ไม่เกิน\x203\x20ชิ้น",
    "textContent",
    "toDataURL",
    "type",
    "piQbU",
    "BHbSP",
    "20205qHDuex",
    "แก้ไขข้อมูล",
    "qXTdG",
    "MoZrh",
    "success",
    "\x20ชิ้น",
    "เสื้อโปโล",
    "textarea",
    "LjsSi",
    "KoGCF",
    "UJaMB",
    "price",
    "rPLiP",
    "totalAmount",
    "input[type=\x22radio\x22]",
    "tllLl",
    "RtIUs",
    "Dxnlr",
    "wOiOZ",
    "year",
    "ms-3",
  ];
  a0_0x40cc = function () {
    return _0x5b49c1;
  };
  return a0_0x40cc();
}
document[a0_0x9acab(0x30e)](a0_0x9acab(0x3d1), function () {
  const _0x3e8630 = a0_0x9acab,
    _0x2f740f = {
      hbUBV: function (_0x262e33) {
        return _0x262e33();
      },
      xLOBV: "input[name=\x22package\x22]",
      PxZGg: _0x3e8630(0x2d1),
      PahHO: _0x3e8630(0x2cc),
    };
  document[_0x3e8630(0x3b0)](_0x2f740f[_0x3e8630(0x222)])[_0x3e8630(0x285)](
    (_0x21a781) => {
      const _0x46e4a6 = _0x3e8630;
      _0x21a781[_0x46e4a6(0x30e)](_0x46e4a6(0x39b), function () {
        const _0x5475f4 = _0x46e4a6;
        (selectedPackage = this[_0x5475f4(0x306)]),
          _0x2f740f[_0x5475f4(0x3dd)](updatePackageSelection),
          _0x2f740f["hbUBV"](showSelectionDetails);
      });
    }
  ),
    (document[_0x3e8630(0x1ad)](_0x2f740f[_0x3e8630(0x1c2)])[_0x3e8630(0x3e4)][
      _0x3e8630(0x279)
    ] = _0x2f740f[_0x3e8630(0x33a)]);
});
function updatePackageSelection() {
  const _0x1a377d = a0_0x9acab,
    _0x490c87 = { dYxOu: "selected", VVmTP: ".package-card" };
  document["querySelectorAll"](_0x490c87[_0x1a377d(0x1eb)])[_0x1a377d(0x285)](
    (_0x4eec72) => {
      const _0x156ec3 = _0x1a377d;
      _0x4eec72[_0x156ec3(0x3b2)][_0x156ec3(0x215)](
        _0x490c87[_0x156ec3(0x27c)]
      );
    }
  );
  const _0x291c27 = document[_0x1a377d(0x2c6)](
    _0x1a377d(0x300) + selectedPackage + "\x22]"
  );
  _0x291c27 &&
    _0x291c27[_0x1a377d(0x3b2)][_0x1a377d(0x184)](_0x490c87[_0x1a377d(0x27c)]);
}
function a0_0x5b7c(_0x174ac5, _0x29b3a0) {
  const _0x40cc10 = a0_0x40cc();
  return (
    (a0_0x5b7c = function (_0x5b7cb3, _0x1c922e) {
      _0x5b7cb3 = _0x5b7cb3 - 0x163;
      let _0x67f423 = _0x40cc10[_0x5b7cb3];
      return _0x67f423;
    }),
    a0_0x5b7c(_0x174ac5, _0x29b3a0)
  );
}
function showSelectionDetails() {
  const _0x4205ea = a0_0x9acab,
    _0xf8dafd = {
      ymZZR: _0x4205ea(0x25d),
      iMcRk: _0x4205ea(0x1ac),
      EjONN: _0x4205ea(0x2d1),
      Dxnlr: _0x4205ea(0x29e),
      MpuuU: "jacket-sizes-container",
      mQvlk: _0x4205ea(0x313),
      oLYyg: "block",
      FARyw: _0x4205ea(0x2d3),
      nDojM: _0x4205ea(0x2cc),
      aCrot: _0x4205ea(0x241),
      DoyDf: function (_0x3c7242, _0x22c326) {
        return _0x3c7242 === _0x22c326;
      },
      Dmlyf: "individual",
      EiYOM: ".individual-item-select",
      etumV: function (_0x2fd45c) {
        return _0x2fd45c();
      },
      odKdm: _0x4205ea(0x3f4),
    },
    _0x1348e0 = document["getElementById"](_0xf8dafd[_0x4205ea(0x208)]),
    _0x411ba0 = document[_0x4205ea(0x1ad)](_0xf8dafd[_0x4205ea(0x235)]),
    _0x260b59 = document[_0x4205ea(0x1ad)](_0xf8dafd["EjONN"]),
    _0x3211e8 = document[_0x4205ea(0x1ad)](_0xf8dafd[_0x4205ea(0x37e)]),
    _0x50240b = document[_0x4205ea(0x1ad)](_0xf8dafd["MpuuU"]),
    _0x1a0ca3 = document[_0x4205ea(0x1ad)](_0x4205ea(0x1dd)),
    _0x5a08bd = document[_0x4205ea(0x1ad)](_0xf8dafd["mQvlk"]),
    _0x5265dd = document[_0x4205ea(0x1ad)](_0x4205ea(0x22e));
  (_0x1348e0[_0x4205ea(0x3e4)][_0x4205ea(0x279)] = _0xf8dafd[_0x4205ea(0x34a)]),
    (selectedSizes = { polo: [], jacket: [], jersey: [] }),
    document[_0x4205ea(0x3b0)](_0xf8dafd["FARyw"])[_0x4205ea(0x285)](
      (_0x487199) => {
        const _0xd7a44c = _0x4205ea;
        _0x487199[_0xd7a44c(0x3b2)]["remove"](_0xd7a44c(0x1d1));
      }
    ),
    (_0x411ba0[_0x4205ea(0x3e4)][_0x4205ea(0x279)] =
      _0xf8dafd[_0x4205ea(0x2b7)]),
    (_0x1a0ca3["style"][_0x4205ea(0x279)] = _0xf8dafd["nDojM"]),
    (_0x5a08bd[_0x4205ea(0x3e4)]["display"] = "none"),
    (_0x5265dd[_0x4205ea(0x3e4)][_0x4205ea(0x279)] = "none"),
    (_0x260b59[_0x4205ea(0x3e4)]["display"] = _0xf8dafd["nDojM"]),
    (_0x3211e8["innerHTML"] = ""),
    (_0x50240b[_0x4205ea(0x3d8)] = "");
  const _0x12f97a = document["getElementById"](_0xf8dafd["aCrot"]);
  if (_0x12f97a) _0x12f97a[_0x4205ea(0x3d8)] = "";
  _0xf8dafd[_0x4205ea(0x244)](selectedPackage, _0xf8dafd[_0x4205ea(0x2a4)]) &&
    ((_0x260b59[_0x4205ea(0x3e4)][_0x4205ea(0x279)] =
      _0xf8dafd[_0x4205ea(0x34a)]),
    document[_0x4205ea(0x3b0)](_0xf8dafd["EiYOM"])["forEach"]((_0x5ef045) => {
      const _0x5f1f38 = _0x4205ea;
      _0x5ef045[_0x5f1f38(0x306)] = "0";
    }),
    (individualItems = {
      polo: { price: 0x167, quantity: 0x0 },
      jacket: { price: 0x316, quantity: 0x0 },
      jersey: { price: 0x122, quantity: 0x0 },
      belt: { price: 0x81, quantity: 0x0 },
      tung: { price: 0x77, quantity: 0x0 },
      tie: { price: 0x77, quantity: 0x0 },
    }),
    _0xf8dafd[_0x4205ea(0x291)](updateIndividualItems)),
    updateTotal(),
    _0x1348e0[_0x4205ea(0x1cc)]({ behavior: _0xf8dafd["odKdm"] });
}
function selectSize(_0x2b308a, _0x52dee2) {
  const _0x249ad1 = a0_0x9acab,
    _0xcd3604 = {
      piQbU: "selected",
      WoccI: function (_0xa0df58, _0x253b36) {
        return _0xa0df58 === _0x253b36;
      },
      AdDdJ: _0x249ad1(0x2e1),
      LQQNS: "polo-size-section",
    };
  selectedSizes[_0x2b308a][0x0] = _0x52dee2;
  const _0x45d199 = _0xcd3604[_0x249ad1(0x2db)](_0x2b308a, _0xcd3604["AdDdJ"])
      ? _0xcd3604[_0x249ad1(0x22f)]
      : "jacket-size-section",
    _0x2ac909 = document[_0x249ad1(0x1ad)](_0x45d199);
  _0x2ac909[_0x249ad1(0x3b0)](_0x249ad1(0x2d3))[_0x249ad1(0x285)](
    (_0x1879f6) => {
      const _0x11e3c4 = _0x249ad1;
      _0x1879f6["classList"][_0x11e3c4(0x215)](_0xcd3604[_0x11e3c4(0x36b)]);
    }
  );
  const _0x32cd35 = _0x2ac909[_0x249ad1(0x2c6)](
    ".size-btn[data-size=\x22" + _0x52dee2 + "\x22]"
  );
  _0x32cd35 && _0x32cd35["classList"]["add"](_0xcd3604[_0x249ad1(0x36b)]);
}
function updateSizeSelectors(_0x349570) {
  const _0x254d78 = a0_0x9acab,
    _0x4c8772 = {
      SOxKd: "col",
      ZYyGz: "button",
      URzsQ: "size-btn",
      PRNsi: _0x254d78(0x397),
      yDWXw: function (_0x409f0c, _0x123e1c) {
        return _0x409f0c <= _0x123e1c;
      },
      prhoR: _0x254d78(0x2da),
      ybDhb: "div",
      hBmoa: _0x254d78(0x28a),
      fWgEi: _0x254d78(0x373),
      sSRrB: function (_0x3b7a3d, _0x361cd4) {
        return _0x3b7a3d === _0x361cd4;
      },
      aNWfh: _0x254d78(0x2f4),
      GwgTt: "เสื้อแจ็คเก็ต",
      HgqVL: _0x254d78(0x1e7),
      jWGVJ: "เสื้อ\x20JERSEY",
      vNaWp: _0x254d78(0x3a1),
      QiAEd: _0x254d78(0x1de),
      ewPpW: _0x254d78(0x1a5),
      LIdLW: _0x254d78(0x346),
      kMXNm: _0x254d78(0x33f),
      Xjtlc: _0x254d78(0x228),
      aWsJm: _0x254d78(0x2a2),
      lbfHA: _0x254d78(0x249),
    },
    _0x545bb5 = document[_0x254d78(0x1ad)](_0x349570 + _0x254d78(0x247)),
    _0x37f8d4 = individualItems[_0x349570][_0x254d78(0x1f1)];
  (_0x545bb5["innerHTML"] = ""), (selectedSizes[_0x349570] = []);
  if (_0x4c8772[_0x254d78(0x24c)](_0x37f8d4, 0x0)) {
    _0x545bb5[_0x254d78(0x3e4)][_0x254d78(0x279)] = _0x254d78(0x2cc);
    return;
  }
  _0x545bb5["style"][_0x254d78(0x279)] = _0x4c8772[_0x254d78(0x284)];
  for (let _0x562918 = 0x0; _0x562918 < _0x37f8d4; _0x562918++) {
    const _0x47adaa = document[_0x254d78(0x257)](_0x4c8772[_0x254d78(0x351)]);
    _0x47adaa["className"] = _0x4c8772[_0x254d78(0x2ea)];
    const _0x19d323 = document[_0x254d78(0x257)](_0x254d78(0x288));
    _0x19d323[_0x254d78(0x314)] = _0x254d78(0x3f0);
    let _0x200709 = _0x4c8772["fWgEi"];
    if (_0x4c8772[_0x254d78(0x2dd)](_0x349570, _0x4c8772["aNWfh"]))
      _0x200709 = _0x4c8772["GwgTt"];
    if (_0x4c8772[_0x254d78(0x2dd)](_0x349570, _0x4c8772[_0x254d78(0x23c)]))
      _0x200709 = _0x4c8772[_0x254d78(0x1a3)];
    (_0x19d323[_0x254d78(0x368)] =
      _0x200709 + "\x20ตัวที่\x20" + (_0x562918 + 0x1) + ":"),
      _0x47adaa[_0x254d78(0x326)](_0x19d323);
    const _0x2a88cd = document[_0x254d78(0x257)](_0x4c8772[_0x254d78(0x351)]);
    (_0x2a88cd[_0x254d78(0x314)] = _0x4c8772[_0x254d78(0x1c5)]),
      _0x2a88cd[_0x254d78(0x1ef)](_0x4c8772[_0x254d78(0x290)], _0x349570),
      _0x2a88cd[_0x254d78(0x1ef)](_0x4c8772[_0x254d78(0x34d)], _0x562918);
    const _0x4a6f13 = [
      _0x4c8772[_0x254d78(0x33b)],
      "SS",
      "S",
      "M",
      "L",
      "XL",
      _0x4c8772["kMXNm"],
      _0x4c8772[_0x254d78(0x2dc)],
      _0x4c8772["aWsJm"],
      _0x4c8772[_0x254d78(0x343)],
    ];
    _0x4a6f13["forEach"]((_0x26dc45) => {
      const _0x258543 = _0x254d78,
        _0x1f4c39 = document["createElement"](_0x258543(0x295));
      _0x1f4c39["className"] = _0x4c8772[_0x258543(0x193)];
      const _0x4b4e4f = document[_0x258543(0x257)](_0x4c8772["ZYyGz"]);
      (_0x4b4e4f[_0x258543(0x36a)] = _0x258543(0x2bd)),
        (_0x4b4e4f[_0x258543(0x314)] = _0x4c8772[_0x258543(0x344)]),
        _0x4b4e4f["setAttribute"](_0x4c8772[_0x258543(0x1fc)], _0x26dc45),
        (_0x4b4e4f["textContent"] = _0x26dc45),
        _0x4b4e4f[_0x258543(0x30e)](_0x258543(0x341), () =>
          selectMultiSize(_0x349570, _0x562918, _0x26dc45)
        ),
        _0x1f4c39[_0x258543(0x326)](_0x4b4e4f),
        _0x2a88cd["appendChild"](_0x1f4c39);
    }),
      _0x47adaa[_0x254d78(0x326)](_0x2a88cd),
      _0x545bb5[_0x254d78(0x326)](_0x47adaa),
      (selectedSizes[_0x349570][_0x562918] = null);
  }
}
function selectMultiSize(_0x1e2a47, _0x15c717, _0x390d29) {
  const _0x48ba93 = a0_0x9acab,
    _0x59e27c = { viAhs: "selected", AkKwR: _0x48ba93(0x2d3) };
  selectedSizes[_0x1e2a47][_0x15c717] = _0x390d29;
  const _0x47c850 = document[_0x48ba93(0x2c6)](
    "[data-type=\x22" + _0x1e2a47 + _0x48ba93(0x298) + _0x15c717 + "\x22]"
  );
  _0x47c850[_0x48ba93(0x3b0)](_0x59e27c[_0x48ba93(0x278)])[_0x48ba93(0x285)](
    (_0x2a142f) => {
      const _0x1fb545 = _0x48ba93;
      _0x2a142f[_0x1fb545(0x3b2)][_0x1fb545(0x215)](
        _0x59e27c[_0x1fb545(0x2df)]
      );
    }
  );
  const _0x305546 = _0x47c850[_0x48ba93(0x2c6)](
    _0x48ba93(0x1f5) + _0x390d29 + "\x22]"
  );
  _0x305546 &&
    _0x305546[_0x48ba93(0x3b2)][_0x48ba93(0x184)](_0x59e27c[_0x48ba93(0x2df)]);
}
function updateIndividualItems() {
  const _0x18f98e = a0_0x9acab,
    _0x3fcab9 = {
      VKudc: function (_0x5e5ef2, _0x2b94b0) {
        return _0x5e5ef2 === _0x2b94b0;
      },
      TBxMR: _0x18f98e(0x202),
      hkber: function (_0x2c4a70, _0x12dae4) {
        return _0x2c4a70(_0x12dae4);
      },
      dINKV: _0x18f98e(0x359),
      jUSzj: function (_0x32b0c8, _0x2bc281) {
        return _0x32b0c8(_0x2bc281);
      },
      ZiZLP: _0x18f98e(0x3ef),
      tkpOa: function (_0x31090f, _0x5e9f27) {
        return _0x31090f(_0x5e9f27);
      },
      mwCKF: _0x18f98e(0x170),
      xsooo: function (_0x5c280b, _0xd442b0) {
        return _0x5c280b + _0xd442b0;
      },
      eNkBD: function (_0x3f0eb6, _0x534af4) {
        return _0x3f0eb6 > _0x534af4;
      },
      ncTtz: "warning",
      eHVnQ: _0x18f98e(0x367),
      wfaMR: _0x18f98e(0x255),
      RbgYV: _0x18f98e(0x39f),
      bdlzQ: _0x18f98e(0x1a6),
      cSUNh: _0x18f98e(0x2e1),
      zeOFG: function (_0x4a23c0, _0x3d0a96) {
        return _0x4a23c0(_0x3d0a96);
      },
      DHmSI: _0x18f98e(0x1e7),
      ZfQBS: function (_0x13b9bf) {
        return _0x13b9bf();
      },
      wvjLz: function (_0x3f2573, _0x533158) {
        return _0x3f2573 !== _0x533158;
      },
      UZhNk: _0x18f98e(0x364),
      IzgiQ: "individual",
      JUFmO: _0x18f98e(0x373),
      qXTdG: _0x18f98e(0x1d2),
      MOZaP: function (_0x499456, _0x30b5f5) {
        return _0x499456 > _0x30b5f5;
      },
      pzEDC: _0x18f98e(0x271),
      WxSBO: function (_0x5bf26b, _0x208742) {
        return _0x5bf26b > _0x208742;
      },
    },
    _0x4b3c1e = {
      polo:
        parseInt(
          document[_0x18f98e(0x1ad)](_0x18f98e(0x39f))[_0x18f98e(0x306)]
        ) || 0x0,
      jacket:
        _0x3fcab9[_0x18f98e(0x230)](
          parseInt,
          document[_0x18f98e(0x1ad)](_0x3fcab9["dINKV"])[_0x18f98e(0x306)]
        ) || 0x0,
      jersey:
        _0x3fcab9[_0x18f98e(0x189)](
          parseInt,
          document[_0x18f98e(0x1ad)]("jersey-select")[_0x18f98e(0x306)]
        ) || 0x0,
      belt:
        _0x3fcab9[_0x18f98e(0x189)](
          parseInt,
          document[_0x18f98e(0x1ad)](_0x3fcab9[_0x18f98e(0x3cc)])[
            _0x18f98e(0x306)
          ]
        ) || 0x0,
      tung: 0x0,
      tie:
        _0x3fcab9[_0x18f98e(0x1fb)](
          parseInt,
          document[_0x18f98e(0x1ad)](_0x3fcab9[_0x18f98e(0x16a)])["value"]
        ) || 0x0,
    },
    _0x3be3e5 =
      _0x3fcab9["xsooo"](
        _0x4b3c1e[_0x18f98e(0x2e1)],
        _0x4b3c1e[_0x18f98e(0x2f4)]
      ) + _0x4b3c1e[_0x18f98e(0x1e7)];
  if (_0x3fcab9["eNkBD"](_0x3be3e5, 0x3)) {
    Swal[_0x18f98e(0x335)]({
      icon: _0x3fcab9[_0x18f98e(0x3ec)],
      title: "เกินจำนวนเสื้อที่กำหนด",
      text: _0x3fcab9[_0x18f98e(0x173)],
      confirmButtonText: _0x3fcab9["wfaMR"],
    });
    const _0x286cf9 = [
      _0x3fcab9[_0x18f98e(0x220)],
      _0x3fcab9[_0x18f98e(0x28b)],
      _0x3fcab9[_0x18f98e(0x34c)],
    ];
    _0x286cf9[_0x18f98e(0x285)]((_0x482dea) => {
      const _0xe37e5f = _0x18f98e,
        _0x2cfe16 = document[_0xe37e5f(0x1ad)](_0x482dea);
      if (
        _0x2cfe16 &&
        _0x3fcab9[_0xe37e5f(0x3c3)](_0x2cfe16, document["activeElement"])
      ) {
        const _0x4258bf = _0x482dea["replace"](_0x3fcab9[_0xe37e5f(0x2b0)], "");
        _0x2cfe16[_0xe37e5f(0x306)] =
          individualItems[_0x4258bf][_0xe37e5f(0x1f1)];
      }
    });
    return;
  }
  const _0x142491 = Object[_0x18f98e(0x258)](_0x4b3c1e)["reduce"](
    (_0x1cb98a, _0x651280) => _0x1cb98a + _0x651280,
    0x0
  );
  if (_0x3fcab9[_0x18f98e(0x1ca)](_0x142491, 0x3)) {
    Swal[_0x18f98e(0x335)]({
      icon: _0x3fcab9[_0x18f98e(0x3ec)],
      title: "เกินจำนวนสินค้าที่กำหนด",
      text: "คำสั่งซื้อหนึ่งครั้งสั่งได้ไม่เกิน\x203\x20ชิ้นรวมทั้งหมด",
      confirmButtonText: _0x18f98e(0x255),
    });
    const _0x39f9f5 = [
      _0x3fcab9[_0x18f98e(0x220)],
      _0x3fcab9[_0x18f98e(0x28b)],
      _0x3fcab9[_0x18f98e(0x34c)],
      _0x18f98e(0x3ef),
      _0x18f98e(0x170),
    ];
    _0x39f9f5[_0x18f98e(0x285)]((_0x5993a5) => {
      const _0x7d1785 = _0x18f98e,
        _0x4e01e7 = document[_0x7d1785(0x1ad)](_0x5993a5);
      if (
        _0x4e01e7 &&
        _0x3fcab9[_0x7d1785(0x3c3)](_0x4e01e7, document[_0x7d1785(0x316)])
      ) {
        const _0x39d454 = _0x5993a5[_0x7d1785(0x1c3)](
          _0x3fcab9[_0x7d1785(0x2b0)],
          ""
        );
        _0x4e01e7["value"] = individualItems[_0x39d454][_0x7d1785(0x1f1)];
      }
    });
    return;
  }
  (individualItems[_0x18f98e(0x2e1)]["quantity"] = _0x4b3c1e[_0x18f98e(0x2e1)]),
    (individualItems["jacket"]["quantity"] = _0x4b3c1e["jacket"]),
    (individualItems[_0x18f98e(0x1e7)][_0x18f98e(0x1f1)] =
      _0x4b3c1e[_0x18f98e(0x1e7)]),
    (individualItems["belt"]["quantity"] = _0x4b3c1e[_0x18f98e(0x1f8)]),
    (individualItems[_0x18f98e(0x364)]["quantity"] = 0x0),
    (individualItems["tie"]["quantity"] = _0x4b3c1e[_0x18f98e(0x1c9)]),
    _0x3fcab9[_0x18f98e(0x1fb)](
      updateSizeSelectors,
      _0x3fcab9[_0x18f98e(0x186)]
    ),
    _0x3fcab9[_0x18f98e(0x230)](updateSizeSelectors, _0x18f98e(0x2f4)),
    _0x3fcab9[_0x18f98e(0x16e)](
      updateSizeSelectors,
      _0x3fcab9[_0x18f98e(0x327)]
    ),
    _0x3fcab9[_0x18f98e(0x38f)](updateShirtCounter);
  let _0x4fba74 = 0x0;
  for (const _0x5d5bdb in individualItems) {
    _0x3fcab9["wvjLz"](_0x5d5bdb, _0x3fcab9[_0x18f98e(0x310)]) &&
      (_0x4fba74 +=
        individualItems[_0x5d5bdb][_0x18f98e(0x378)] *
        individualItems[_0x5d5bdb][_0x18f98e(0x1f1)]);
  }
  (packages[_0x3fcab9["IzgiQ"]][_0x18f98e(0x378)] = _0x4fba74),
    (packages[_0x3fcab9[_0x18f98e(0x345)]][_0x18f98e(0x347)] = []);
  if (
    _0x3fcab9["eNkBD"](individualItems[_0x18f98e(0x2e1)][_0x18f98e(0x1f1)], 0x0)
  )
    packages["individual"][_0x18f98e(0x347)][_0x18f98e(0x35a)](
      _0x3fcab9[_0x18f98e(0x2cb)]
    );
  if (individualItems[_0x18f98e(0x2f4)][_0x18f98e(0x1f1)] > 0x0)
    packages[_0x18f98e(0x301)][_0x18f98e(0x347)][_0x18f98e(0x35a)](
      _0x3fcab9[_0x18f98e(0x36f)]
    );
  if (
    _0x3fcab9[_0x18f98e(0x331)](
      individualItems["jersey"][_0x18f98e(0x1f1)],
      0x0
    )
  )
    packages["individual"][_0x18f98e(0x347)]["push"](_0x3fcab9["pzEDC"]);
  if (
    _0x3fcab9["eNkBD"](individualItems[_0x18f98e(0x1f8)][_0x18f98e(0x1f1)], 0x0)
  )
    packages[_0x3fcab9[_0x18f98e(0x345)]][_0x18f98e(0x347)][_0x18f98e(0x35a)](
      _0x18f98e(0x1f0)
    );
  if (
    _0x3fcab9[_0x18f98e(0x1d4)](
      individualItems[_0x18f98e(0x1c9)]["quantity"],
      0x0
    )
  )
    packages[_0x18f98e(0x301)]["items"][_0x18f98e(0x35a)](_0x18f98e(0x32c));
  _0x3fcab9[_0x18f98e(0x38f)](updateTotal);
}
function updateShirtCounter() {
  const _0x3b615c = a0_0x9acab,
    _0x21700b = {
      hcFNH: function (_0x48335a, _0x51199d) {
        return _0x48335a + _0x51199d;
      },
      GFODj: "shirt-count",
      GJXMF: _0x3b615c(0x340),
      cGiFZ: function (_0x1c2e25, _0x55de98) {
        return _0x1c2e25 + _0x55de98;
      },
      ynnaf: _0x3b615c(0x231),
      yihSl: function (_0x3b2863, _0x4c0afb) {
        return _0x3b2863 === _0x4c0afb;
      },
      JqktD: _0x3b615c(0x16d),
      aUdnb: function (_0x4cb57e, _0x1fb117) {
        return _0x4cb57e <= _0x1fb117;
      },
      QjxEc: _0x3b615c(0x33c),
      pXAFM: _0x3b615c(0x325),
    },
    _0x1ce8c7 = _0x21700b[_0x3b615c(0x1ed)](
      _0x21700b["hcFNH"](
        individualItems["polo"][_0x3b615c(0x1f1)],
        individualItems["jacket"]["quantity"]
      ),
      individualItems["jersey"][_0x3b615c(0x1f1)]
    ),
    _0x5bd74c = document[_0x3b615c(0x1ad)](_0x21700b[_0x3b615c(0x32b)]),
    _0x3c9c2f = document[_0x3b615c(0x1ad)](_0x21700b[_0x3b615c(0x2e5)]);
  _0x5bd74c && (_0x5bd74c[_0x3b615c(0x368)] = _0x1ce8c7),
    _0x3c9c2f &&
      (_0x3c9c2f[_0x3b615c(0x314)] = _0x21700b[_0x3b615c(0x206)](
        _0x21700b["ynnaf"],
        _0x21700b[_0x3b615c(0x1da)](_0x1ce8c7, 0x0)
          ? _0x21700b["JqktD"]
          : _0x21700b[_0x3b615c(0x1e5)](_0x1ce8c7, 0x2)
          ? _0x3b615c(0x3b7)
          : _0x21700b["yihSl"](_0x1ce8c7, 0x3)
          ? _0x21700b["QjxEc"]
          : _0x21700b[_0x3b615c(0x2f3)]
      ));
}
document[a0_0x9acab(0x1ad)]("quantity")["addEventListener"](
  "input",
  function (_0x53867d) {
    const _0x1a9c22 = a0_0x9acab,
      _0x2dba23 = { EQWKV: _0x1a9c22(0x3de) };
    /[^0-9]/[_0x1a9c22(0x2c1)](this[_0x1a9c22(0x306)]) &&
      (alert(_0x2dba23["EQWKV"]),
      (this[_0x1a9c22(0x306)] = this[_0x1a9c22(0x306)]["replace"](
        /[^0-9]/g,
        ""
      )));
  }
);
function changeQuantity(_0x1e8bb3) {
  const _0x42f567 = a0_0x9acab,
    _0x57ff5b = {
      UmPrU: "quantity",
      QuBkv: function (_0x3a9251, _0x10e892) {
        return _0x3a9251(_0x10e892);
      },
      EdlTP: function (_0x4b0a84, _0x5aed56) {
        return _0x4b0a84 < _0x5aed56;
      },
      CgtPR: function (_0x5b0818, _0x30c538) {
        return _0x5b0818 > _0x30c538;
      },
      BXwYz: function (_0x438aaa) {
        return _0x438aaa();
      },
    },
    _0x4693fd = document[_0x42f567(0x1ad)](_0x57ff5b["UmPrU"]);
  let _0x1361c3 =
    _0x57ff5b[_0x42f567(0x3b1)](parseInt, _0x4693fd[_0x42f567(0x306)]) +
    _0x1e8bb3;
  if (_0x57ff5b[_0x42f567(0x2af)](_0x1361c3, 0x1)) _0x1361c3 = 0x1;
  if (_0x57ff5b[_0x42f567(0x1a0)](_0x1361c3, 0xa)) _0x1361c3 = 0xa;
  (_0x4693fd[_0x42f567(0x306)] = _0x1361c3),
    (quantity = _0x1361c3),
    _0x57ff5b[_0x42f567(0x2ee)](updateTotal);
}
function updateTotal() {
  const _0x569640 = a0_0x9acab;
  if (!selectedPackage) return;
  totalAmount = packages[selectedPackage][_0x569640(0x378)];
  const _0x429230 = document[_0x569640(0x1ad)](_0x569640(0x1c7));
  _0x429230 &&
    (_0x429230[_0x569640(0x368)] =
      totalAmount[_0x569640(0x366)]() + _0x569640(0x3a7));
}
document["querySelectorAll"](a0_0x9acab(0x245))["forEach"]((_0x46bea5) => {
  const _0x5154e0 = a0_0x9acab,
    _0x587044 = {
      gALlc: function (_0x2b7bac, _0xa06ccb) {
        return _0x2b7bac(_0xa06ccb);
      },
      yqqBr: _0x5154e0(0x39b),
    };
  _0x46bea5[_0x5154e0(0x30e)](_0x587044[_0x5154e0(0x239)], (_0x464f9f) => {
    const _0xc8af60 = _0x5154e0;
    _0x587044[_0xc8af60(0x2ec)](
      selectDelivery,
      _0x464f9f[_0xc8af60(0x1f3)]["value"]
    );
  });
});
function selectDelivery(_0x5ca36f) {
  const _0x5ae7f3 = a0_0x9acab,
    _0x22b754 = {
      ECyNx: _0x5ae7f3(0x1d1),
      EwYhK: _0x5ae7f3(0x2cc),
      NMEZR: _0x5ae7f3(0x299),
      JOpvo: _0x5ae7f3(0x2da),
      ftxKI: _0x5ae7f3(0x374),
    };
  (deliveryType = _0x5ca36f),
    document[_0x5ae7f3(0x3b0)](_0x5ae7f3(0x322))[_0x5ae7f3(0x285)](
      (_0x4785a0) => {
        _0x4785a0["classList"]["remove"](_0x22b754["ECyNx"]);
      }
    ),
    document[_0x5ae7f3(0x2c6)]("[data-delivery=\x22" + _0x5ca36f + "\x22]")[
      _0x5ae7f3(0x3b2)
    ][_0x5ae7f3(0x184)](_0x22b754["ECyNx"]),
    (document[_0x5ae7f3(0x1ad)](_0x5ae7f3(0x229))["style"]["display"] =
      _0x22b754[_0x5ae7f3(0x1e9)]),
    (document[_0x5ae7f3(0x1ad)](_0x22b754[_0x5ae7f3(0x2c3)])[_0x5ae7f3(0x3e4)][
      _0x5ae7f3(0x279)
    ] = _0x22b754[_0x5ae7f3(0x389)]);
  const _0x28ecdd = document[_0x5ae7f3(0x1ad)]("address-section");
  _0x5ca36f === _0x5ae7f3(0x242)
    ? ((_0x28ecdd[_0x5ae7f3(0x3e4)][_0x5ae7f3(0x279)] = "block"),
      (_0x28ecdd["querySelector"](_0x22b754[_0x5ae7f3(0x1b0)])[
        _0x5ae7f3(0x3fa)
      ] = !![]))
    : ((_0x28ecdd["style"][_0x5ae7f3(0x279)] = _0x22b754[_0x5ae7f3(0x1e9)]),
      (_0x28ecdd[_0x5ae7f3(0x2c6)](_0x22b754[_0x5ae7f3(0x1b0)])["required"] =
        ![])),
    updateFinalSummary();
}
function toggleYearSelection() {
  const _0x1ebc97 = a0_0x9acab,
    _0x6b6633 = {
      iZkaJ: _0x1ebc97(0x348),
      vPfCK: _0x1ebc97(0x38a),
      epAyK: "major-section",
      cJmlt: "faculty-section",
      JXwGK: "student-id-section",
      vHfwH: function (_0x25cfd4, _0x3cf259) {
        return _0x25cfd4 === _0x3cf259;
      },
      KtCdK: "block",
      CtEFa: _0x1ebc97(0x2cc),
      TiHNR: _0x1ebc97(0x1b7),
    },
    _0x1654a9 = document[_0x1ebc97(0x1ad)](_0x6b6633[_0x1ebc97(0x3aa)])[
      _0x1ebc97(0x306)
    ],
    _0x138c96 = document[_0x1ebc97(0x1ad)](_0x6b6633[_0x1ebc97(0x21a)]),
    _0x3ae6f2 = document[_0x1ebc97(0x1ad)](_0x1ebc97(0x380)),
    _0x10f5db = document["getElementById"](_0x6b6633["epAyK"]),
    _0x26b417 = document[_0x1ebc97(0x1ad)](_0x6b6633[_0x1ebc97(0x180)]),
    _0x1a70c9 = document[_0x1ebc97(0x1ad)](_0x6b6633[_0x1ebc97(0x392)]);
  if (_0x6b6633[_0x1ebc97(0x3e7)](_0x1654a9, _0x1ebc97(0x21c))) {
    const _0x7fceff = _0x1ebc97(0x216)[_0x1ebc97(0x24f)]("|");
    let _0x24aab3 = 0x0;
    while (!![]) {
      switch (_0x7fceff[_0x24aab3++]) {
        case "0":
          _0x10f5db["style"][_0x1ebc97(0x279)] = "block";
          continue;
        case "1":
          _0x138c96[_0x1ebc97(0x3e4)][_0x1ebc97(0x279)] =
            _0x6b6633[_0x1ebc97(0x3d0)];
          continue;
        case "2":
          _0x26b417["style"][_0x1ebc97(0x279)] = _0x6b6633[_0x1ebc97(0x2b4)];
          continue;
        case "3":
          _0x3ae6f2[_0x1ebc97(0x3fa)] = !![];
          continue;
        case "4":
          _0x1a70c9[_0x1ebc97(0x3e4)]["display"] = _0x6b6633[_0x1ebc97(0x3d0)];
          continue;
      }
      break;
    }
  } else
    _0x6b6633["vHfwH"](_0x1654a9, _0x6b6633[_0x1ebc97(0x34b)])
      ? ((_0x138c96[_0x1ebc97(0x3e4)][_0x1ebc97(0x279)] = _0x6b6633["KtCdK"]),
        (_0x3ae6f2["required"] = !![]),
        (_0x26b417[_0x1ebc97(0x3e4)]["display"] = _0x6b6633["KtCdK"]),
        (_0x1a70c9[_0x1ebc97(0x3e4)][_0x1ebc97(0x279)] =
          _0x6b6633[_0x1ebc97(0x3d0)]),
        (_0x10f5db[_0x1ebc97(0x3e4)][_0x1ebc97(0x279)] = _0x1ebc97(0x2cc)))
      : ((_0x138c96[_0x1ebc97(0x3e4)][_0x1ebc97(0x279)] = _0x1ebc97(0x2cc)),
        (_0x3ae6f2["required"] = ![]),
        (_0x3ae6f2[_0x1ebc97(0x306)] = ""),
        (_0x10f5db[_0x1ebc97(0x3e4)][_0x1ebc97(0x279)] =
          _0x6b6633[_0x1ebc97(0x2b4)]),
        (_0x26b417["style"][_0x1ebc97(0x279)] = _0x6b6633[_0x1ebc97(0x2b4)]),
        (_0x1a70c9[_0x1ebc97(0x3e4)][_0x1ebc97(0x279)] =
          _0x6b6633[_0x1ebc97(0x2b4)]));
}
function validateEmail(_0x59ded6) {
  const _0x3f5e39 = a0_0x9acab,
    _0x8b5563 = {
      xzRLt: _0x3f5e39(0x1e1),
      zxfzv: _0x3f5e39(0x394),
      jgNMi: _0x3f5e39(0x1ea),
      qsGRc: _0x3f5e39(0x1fe),
    };
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/[_0x3f5e39(0x2c1)](_0x59ded6))
    return { valid: ![], error: _0x8b5563[_0x3f5e39(0x1cd)] };
  const _0x5c7352 = [
      _0x8b5563[_0x3f5e39(0x2b8)],
      _0x3f5e39(0x22c),
      _0x8b5563[_0x3f5e39(0x1a1)],
      _0x8b5563[_0x3f5e39(0x3d7)],
    ],
    _0x427b3e = _0x59ded6[_0x3f5e39(0x24f)]("@")[0x1][_0x3f5e39(0x3c0)]();
  if (!_0x5c7352[_0x3f5e39(0x2ac)](_0x427b3e))
    return { valid: ![], error: _0x3f5e39(0x20d) };
  return { valid: !![], error: "" };
}
function validateForm() {
  const _0x55d1c4 = a0_0x9acab,
    _0x46857f = {
      Accjk: _0x55d1c4(0x2f1),
      fuVNu: _0x55d1c4(0x29f),
      QkkKU: function (_0x21adde, _0x37fe7a) {
        return _0x21adde(_0x37fe7a);
      },
      oIlPJ: _0x55d1c4(0x3b4),
      BBIVw: _0x55d1c4(0x2c5),
      pOJTE: _0x55d1c4(0x324),
      Svvje: _0x55d1c4(0x263),
      tvYGG: _0x55d1c4(0x2d5),
      cTyhM: _0x55d1c4(0x237),
      nNDXk: _0x55d1c4(0x225),
      jNrVt: _0x55d1c4(0x242),
      eOhet: _0x55d1c4(0x27d),
      PXlXX: function (_0x52520c, _0x22cd75) {
        return _0x52520c < _0x22cd75;
      },
      ToaIh: "กรุณากรอกที่อยู่ให้ครบถ้วน",
      BScoS: _0x55d1c4(0x35e),
      afeIh: _0x55d1c4(0x2e3),
      UJaMB: function (_0x2a4c48, _0x18fa5a) {
        return _0x2a4c48 === _0x18fa5a;
      },
      MHqDU: _0x55d1c4(0x21c),
      BxZzc: "student-out",
      ifdlf: _0x55d1c4(0x29d),
      ltSly: function (_0x3f70e4, _0x1842bb) {
        return _0x3f70e4 === _0x1842bb;
      },
      RoYpI: _0x55d1c4(0x2c4),
      bDTuk: _0x55d1c4(0x2ed),
      JmLMN: function (_0x489cf8, _0x57c359) {
        return _0x489cf8 === _0x57c359;
      },
      iITOE: _0x55d1c4(0x212),
      KjkEb: _0x55d1c4(0x250),
      yWpzK: _0x55d1c4(0x18a),
      knqbq: _0x55d1c4(0x217),
      cxkXo: _0x55d1c4(0x2fc),
      wkGYp: _0x55d1c4(0x172),
      IiRRH: "warning",
      GClMk: "#3085d6",
      KDUoj: _0x55d1c4(0x255),
      ecbno: _0x55d1c4(0x3c6),
      oxIYh: _0x55d1c4(0x266),
      WuaQw: _0x55d1c4(0x3f4),
    };
  let _0x3a3122 = !![];
  const _0x12159a = {},
    _0x377334 = document[_0x55d1c4(0x1ad)](_0x46857f["Accjk"])[
      _0x55d1c4(0x306)
    ][_0x55d1c4(0x2b9)]();
  if (!_0x377334)
    (_0x12159a["email"] = _0x46857f[_0x55d1c4(0x2e0)]), (_0x3a3122 = ![]);
  else {
    const _0x3bcced = _0x46857f[_0x55d1c4(0x1ab)](validateEmail, _0x377334);
    !_0x3bcced[_0x55d1c4(0x1d5)] &&
      ((_0x12159a[_0x55d1c4(0x2f1)] = _0x3bcced[_0x55d1c4(0x2f8)]),
      (_0x3a3122 = ![]));
  }
  const _0x37c65d = document[_0x55d1c4(0x1ad)](_0x46857f[_0x55d1c4(0x1d3)])[
    _0x55d1c4(0x306)
  ][_0x55d1c4(0x2b9)]();
  if (!_0x37c65d)
    (_0x12159a[_0x55d1c4(0x3b4)] = _0x46857f[_0x55d1c4(0x219)]),
      (_0x3a3122 = ![]);
  else
    !patterns["name"][_0x55d1c4(0x2c1)](_0x37c65d) &&
      ((_0x12159a[_0x55d1c4(0x3b4)] = _0x55d1c4(0x3a0)), (_0x3a3122 = ![]));
  const _0x2a327b = document["getElementById"](_0x46857f[_0x55d1c4(0x3f3)])[
    "value"
  ][_0x55d1c4(0x2b9)]();
  if (!_0x2a327b)
    (_0x12159a[_0x55d1c4(0x324)] = _0x46857f[_0x55d1c4(0x2a0)]),
      (_0x3a3122 = ![]);
  else
    !patterns[_0x55d1c4(0x18b)][_0x55d1c4(0x2c1)](_0x2a327b) &&
      ((_0x12159a[_0x55d1c4(0x324)] = _0x55d1c4(0x19f)), (_0x3a3122 = ![]));
  const _0x7266ba = document["getElementById"](_0x46857f[_0x55d1c4(0x1f7)])[
    "value"
  ][_0x55d1c4(0x2b9)]();
  if (!_0x7266ba)
    (_0x12159a[_0x55d1c4(0x2d5)] = _0x46857f[_0x55d1c4(0x30d)]),
      (_0x3a3122 = ![]);
  else
    !patterns[_0x55d1c4(0x2d5)][_0x55d1c4(0x2c1)](_0x7266ba) &&
      ((_0x12159a[_0x55d1c4(0x2d5)] = _0x46857f[_0x55d1c4(0x2a9)]),
      (_0x3a3122 = ![]));
  if (deliveryType === _0x46857f[_0x55d1c4(0x26f)]) {
    const _0x573113 = document[_0x55d1c4(0x1ad)](_0x55d1c4(0x217))[
      _0x55d1c4(0x306)
    ][_0x55d1c4(0x2b9)]();
    if (!_0x573113)
      (_0x12159a[_0x55d1c4(0x217)] = _0x46857f[_0x55d1c4(0x33e)]),
        (_0x3a3122 = ![]);
    else
      _0x46857f[_0x55d1c4(0x24d)](_0x573113[_0x55d1c4(0x26a)], 0x14) &&
        ((_0x12159a["address"] = _0x46857f[_0x55d1c4(0x17d)]),
        (_0x3a3122 = ![]));
  }
  const _0x1fce30 = document[_0x55d1c4(0x1ad)](_0x46857f["BScoS"])[
    _0x55d1c4(0x3cd)
  ][0x0];
  !_0x1fce30 &&
    ((_0x12159a[_0x55d1c4(0x35e)] = _0x46857f[_0x55d1c4(0x1bd)]),
    (_0x3a3122 = ![]));
  const _0x2683c3 = document[_0x55d1c4(0x1ad)]("status")[_0x55d1c4(0x306)];
  if (
    _0x46857f[_0x55d1c4(0x377)](_0x2683c3, _0x46857f[_0x55d1c4(0x1e2)]) ||
    _0x2683c3 === _0x46857f[_0x55d1c4(0x177)]
  ) {
    const _0x1cbb45 = document[_0x55d1c4(0x1ad)](_0x46857f[_0x55d1c4(0x35d)])[
      _0x55d1c4(0x306)
    ];
    _0x46857f["ltSly"](_0x2683c3, _0x46857f[_0x55d1c4(0x1e2)]) &&
      !_0x1cbb45 &&
      ((_0x12159a[_0x55d1c4(0x29d)] = _0x46857f[_0x55d1c4(0x23a)]),
      (_0x3a3122 = ![]));
    const _0x2dcb05 = document[_0x55d1c4(0x1ad)](_0x46857f[_0x55d1c4(0x195)])[
      "value"
    ];
    _0x46857f[_0x55d1c4(0x281)](_0x2683c3, _0x55d1c4(0x1b7)) &&
      !_0x2dcb05 &&
      ((_0x12159a["faculty"] = _0x46857f[_0x55d1c4(0x3b9)]), (_0x3a3122 = ![]));
    const _0x221b56 = document["getElementById"](_0x46857f[_0x55d1c4(0x272)])[
      "value"
    ]["trim"]();
    !_0x221b56 &&
      ((_0x12159a["studentId"] = _0x46857f[_0x55d1c4(0x19b)]),
      (_0x3a3122 = ![]));
  }
  return (
    Object[_0x55d1c4(0x304)](_0x12159a)["forEach"]((_0x25f7f3) => {
      const _0x87aee4 = _0x55d1c4,
        _0x38332d = document[_0x87aee4(0x1ad)](_0x25f7f3 + _0x87aee4(0x3c9));
      _0x38332d && (_0x38332d[_0x87aee4(0x368)] = _0x12159a[_0x25f7f3]);
    }),
    [
      _0x46857f[_0x55d1c4(0x3ab)],
      _0x46857f[_0x55d1c4(0x1d3)],
      _0x46857f[_0x55d1c4(0x3f3)],
      _0x55d1c4(0x2d5),
      _0x46857f["knqbq"],
      _0x46857f["BScoS"],
      _0x46857f["ifdlf"],
      _0x46857f["cxkXo"],
    ][_0x55d1c4(0x285)]((_0x11858c) => {
      const _0x5ef801 = _0x55d1c4;
      if (!_0x12159a[_0x11858c]) {
        const _0x3b11af = document["getElementById"](
          _0x11858c + _0x5ef801(0x3c9)
        );
        _0x3b11af && (_0x3b11af[_0x5ef801(0x368)] = "");
      }
    }),
    !_0x3a3122 &&
      (Object[_0x55d1c4(0x304)](_0x12159a)[_0x55d1c4(0x26a)] === 0x1 &&
      _0x12159a[_0x55d1c4(0x2f1)]
        ? (Swal[_0x55d1c4(0x335)]({
            title: _0x46857f[_0x55d1c4(0x176)],
            text: _0x12159a[_0x55d1c4(0x2f1)],
            icon: _0x46857f["IiRRH"],
            showCancelButton: ![],
            confirmButtonColor: _0x46857f["GClMk"],
            confirmButtonText: _0x46857f["KDUoj"],
          }),
          document["getElementById"](_0x46857f[_0x55d1c4(0x3ab)])["focus"]())
        : (Swal[_0x55d1c4(0x335)]({
            title: _0x46857f["ecbno"],
            text: _0x46857f[_0x55d1c4(0x3f1)],
            icon: _0x46857f[_0x55d1c4(0x3af)],
            showCancelButton: ![],
            confirmButtonColor: _0x46857f["GClMk"],
            confirmButtonText: _0x46857f[_0x55d1c4(0x35b)],
          }),
          window["scrollTo"]({
            top: 0x0,
            behavior: _0x46857f[_0x55d1c4(0x3c4)],
          }))),
    _0x3a3122
  );
}
function proceedToCheckout() {
  const _0xa29dc2 = a0_0x9acab,
    _0xb7eb1f = {
      CFErL: _0xa29dc2(0x299),
      fQuAx: _0xa29dc2(0x3f4),
      gfdMg: function (_0x4113b6, _0x58998d) {
        return _0x4113b6(_0x58998d);
      },
      StzUQ: function (_0x349cff, _0x33f9a2) {
        return _0x349cff === _0x33f9a2;
      },
      eCXjo: _0xa29dc2(0x301),
      tmvWS: "กรุณาเลือกสินค้าอย่างน้อย\x201\x20ชิ้น",
      MoZrh: function (_0x5f2c09, _0xfb442a) {
        return _0x5f2c09 > _0xfb442a;
      },
      HvLmM: _0xa29dc2(0x330),
      RNinM: _0xa29dc2(0x255),
      hJfEf: function (_0x26c709, _0x224a79) {
        return _0x26c709 > _0x224a79;
      },
      KNQAo: _0xa29dc2(0x391),
      RDlBw: function (_0x3db46d, _0x525e31) {
        return _0x3db46d > _0x525e31;
      },
      evUDw: _0xa29dc2(0x1ba),
      eqPhq: _0xa29dc2(0x373),
      gdmxM: function (_0x1aa5a3, _0x287679) {
        return _0x1aa5a3(_0x287679);
      },
      lSFKr: "กรุณาเลือกไซส์เสื้อโปโล",
      xNtEk: "กรุณาเลือกไซส์เสื้อแจ็คเก็ต",
      OvGtB: _0xa29dc2(0x24a),
      FRvce: _0xa29dc2(0x2cc),
      LGJcA: "product-btn",
      HZezm: _0xa29dc2(0x221),
      AeIuR: "block",
    };
  document[_0xa29dc2(0x1ad)](_0xb7eb1f[_0xa29dc2(0x262)])["scrollIntoView"]({
    behavior: _0xb7eb1f["fQuAx"],
  }),
    window["scrollTo"]({ top: 0x0, behavior: _0xa29dc2(0x3f4) });
  if (!selectedPackage) {
    _0xb7eb1f["gfdMg"](alert, _0xa29dc2(0x18c));
    return;
  }
  if (
    _0xb7eb1f[_0xa29dc2(0x199)](selectedPackage, _0xb7eb1f[_0xa29dc2(0x1b4)])
  ) {
    const _0xd673d7 = Object[_0xa29dc2(0x258)](individualItems)[
      _0xa29dc2(0x2ef)
    ]((_0x4ebb65) => _0x4ebb65[_0xa29dc2(0x1f1)] > 0x0);
    if (!_0xd673d7) {
      alert(_0xb7eb1f[_0xa29dc2(0x2bb)]);
      return;
    }
    const _0x5d78fa = Object[_0xa29dc2(0x258)](individualItems)[
      _0xa29dc2(0x3e2)
    ]((_0x3b859, _0x4a75ec) => _0x3b859 + _0x4a75ec["quantity"], 0x0);
    if (_0xb7eb1f[_0xa29dc2(0x370)](_0x5d78fa, 0x3)) {
      Swal[_0xa29dc2(0x335)]({
        icon: _0xa29dc2(0x317),
        title: _0xa29dc2(0x234),
        text: _0xb7eb1f[_0xa29dc2(0x1f9)],
        confirmButtonText: _0xb7eb1f["RNinM"],
      });
      return;
    }
    if (_0xb7eb1f["hJfEf"](individualItems["polo"]["quantity"], 0x0)) {
      const _0x46f9c9 = selectedSizes[_0xa29dc2(0x2e1)][_0xa29dc2(0x39c)](
        (_0x12bbf6) => _0x12bbf6 !== null
      );
      if (!_0x46f9c9) {
        _0xb7eb1f[_0xa29dc2(0x3dc)](alert, _0xb7eb1f["KNQAo"]);
        return;
      }
    }
    if (
      _0xb7eb1f[_0xa29dc2(0x370)](
        individualItems[_0xa29dc2(0x2f4)][_0xa29dc2(0x1f1)],
        0x0
      )
    ) {
      const _0x1c06fa = selectedSizes[_0xa29dc2(0x2f4)][_0xa29dc2(0x39c)](
        (_0x50c597) => _0x50c597 !== null
      );
      if (!_0x1c06fa) {
        alert(_0xa29dc2(0x2fd));
        return;
      }
    }
    if (
      _0xb7eb1f[_0xa29dc2(0x307)](
        individualItems[_0xa29dc2(0x1e7)][_0xa29dc2(0x1f1)],
        0x0
      )
    ) {
      const _0x26dbef = selectedSizes["jersey"]["every"](
        (_0x6bb2d3) => _0x6bb2d3 !== null
      );
      if (!_0x26dbef) {
        alert(_0xb7eb1f[_0xa29dc2(0x2a3)]);
        return;
      }
    }
  } else {
    const _0x7c4455 = packages[selectedPackage][_0xa29dc2(0x347)];
    if (
      _0x7c4455["includes"](_0xb7eb1f[_0xa29dc2(0x3d2)]) &&
      !selectedSizes[_0xa29dc2(0x2e1)][0x0]
    ) {
      _0xb7eb1f[_0xa29dc2(0x16f)](alert, _0xb7eb1f[_0xa29dc2(0x315)]);
      return;
    }
    if (
      _0x7c4455[_0xa29dc2(0x2ac)](_0xa29dc2(0x1d2)) &&
      !selectedSizes[_0xa29dc2(0x2f4)][0x0]
    ) {
      _0xb7eb1f[_0xa29dc2(0x16f)](alert, _0xb7eb1f[_0xa29dc2(0x3ae)]);
      return;
    }
  }
  (document[_0xa29dc2(0x1ad)](_0xb7eb1f[_0xa29dc2(0x17b)])[_0xa29dc2(0x3e4)][
    _0xa29dc2(0x279)
  ] = _0xb7eb1f[_0xa29dc2(0x352)]),
    (document[_0xa29dc2(0x1ad)](_0xb7eb1f[_0xa29dc2(0x1dc)])[_0xa29dc2(0x3e4)][
      _0xa29dc2(0x279)
    ] = _0xb7eb1f["FRvce"]),
    (document[_0xa29dc2(0x1ad)](_0xb7eb1f[_0xa29dc2(0x354)])[_0xa29dc2(0x3e4)][
      _0xa29dc2(0x279)
    ] = _0xb7eb1f["AeIuR"]),
    document[_0xa29dc2(0x1ad)](_0xb7eb1f[_0xa29dc2(0x354)])[_0xa29dc2(0x321)]({
      behavior: _0xb7eb1f["fQuAx"],
    });
}
function updateFinalSummary() {
  const _0x54648e = a0_0x9acab,
    _0xad0114 = {
      EuZpj: _0x54648e(0x299),
      XFONd: _0x54648e(0x2da),
      wiGUY: _0x54648e(0x242),
      eUkEY: _0x54648e(0x295),
      zbbpU: _0x54648e(0x2f6),
      QuVxa: _0x54648e(0x3e8),
      Wxxsv: _0x54648e(0x301),
      xiiRx: function (_0x590f69, _0x283016) {
        return _0x590f69 < _0x283016;
      },
      GKzic: function (_0x511e8d, _0x42a9fc) {
        return _0x511e8d + _0x42a9fc;
      },
      kjBOW: function (_0xe929f6, _0x3b7054) {
        return _0xe929f6 > _0x3b7054;
      },
      KgyEd: function (_0x27cd01, _0x258069) {
        return _0x27cd01 + _0x258069;
      },
      OWJsQ: function (_0x4ab081, _0x39e6cc) {
        return _0x4ab081 > _0x39e6cc;
      },
      nTgqD: "10px",
      QWDUv: function (_0x2f7f60, _0x326924) {
        return _0x2f7f60 === _0x326924;
      },
      MVLgb: _0x54648e(0x22d),
      CWzwZ: _0x54648e(0x2be),
      BHbSP: function (_0x145055, _0x6b682f) {
        return _0x145055 === _0x6b682f;
      },
      MCERF: _0x54648e(0x192),
      kTrNp: _0x54648e(0x31f),
      TAhAK: _0x54648e(0x3a6),
    },
    _0x157724 = document[_0x54648e(0x1ad)]("final-summary");
  let _0x54636a = totalAmount;
  deliveryType &&
    (document[_0x54648e(0x1ad)](_0xad0114[_0x54648e(0x358)])[_0x54648e(0x3e4)][
      _0x54648e(0x279)
    ] = _0xad0114[_0x54648e(0x1e0)]);
  deliveryType === _0xad0114["wiGUY"] && (_0x54636a += 0x32);
  _0x157724["innerHTML"] = "";
  const _0x254f0a = packages[selectedPackage],
    _0x180c5c = document[_0x54648e(0x257)](_0xad0114["eUkEY"]);
  _0x180c5c[_0x54648e(0x3e4)][_0x54648e(0x2bf)] = _0xad0114["zbbpU"];
  const _0x465ce4 = document[_0x54648e(0x257)](_0xad0114["QuVxa"]);
  (_0x465ce4[_0x54648e(0x368)] = _0x254f0a[_0x54648e(0x18b)]),
    _0x180c5c[_0x54648e(0x326)](_0x465ce4),
    _0x180c5c[_0x54648e(0x326)](document[_0x54648e(0x257)]("br"));
  if (selectedPackage === _0xad0114["Wxxsv"]) {
    if (individualItems[_0x54648e(0x2e1)]["quantity"] > 0x0) {
      const _0xdaa0bc = document[_0x54648e(0x257)](_0xad0114["eUkEY"]);
      (_0xdaa0bc["textContent"] =
        _0x54648e(0x2fe) +
        individualItems[_0x54648e(0x2e1)][_0x54648e(0x1f1)] +
        _0x54648e(0x372)),
        _0x180c5c[_0x54648e(0x326)](_0xdaa0bc);
      for (
        let _0x6ab9af = 0x0;
        _0xad0114[_0x54648e(0x248)](
          _0x6ab9af,
          individualItems[_0x54648e(0x2e1)][_0x54648e(0x1f1)]
        );
        _0x6ab9af++
      ) {
        const _0x28c48e = document[_0x54648e(0x257)](_0x54648e(0x295));
        (_0x28c48e[_0x54648e(0x368)] =
          _0x54648e(0x34e) +
          _0xad0114[_0x54648e(0x30c)](_0x6ab9af, 0x1) +
          _0x54648e(0x1b3) +
          selectedSizes[_0x54648e(0x2e1)][_0x6ab9af]),
          _0x180c5c[_0x54648e(0x326)](_0x28c48e);
      }
    }
    if (
      _0xad0114["kjBOW"](individualItems[_0x54648e(0x2f4)]["quantity"], 0x0)
    ) {
      const _0x34cf98 = document[_0x54648e(0x257)](_0xad0114["eUkEY"]);
      (_0x34cf98["textContent"] =
        "เสื้อแจ็คเก็ต:\x20" +
        individualItems["jacket"][_0x54648e(0x1f1)] +
        "\x20ชิ้น"),
        _0x180c5c[_0x54648e(0x326)](_0x34cf98);
      for (
        let _0x5b4390 = 0x0;
        _0x5b4390 < individualItems["jacket"]["quantity"];
        _0x5b4390++
      ) {
        const _0x5bf173 = document[_0x54648e(0x257)](
          _0xad0114[_0x54648e(0x169)]
        );
        (_0x5bf173[_0x54648e(0x368)] =
          _0x54648e(0x34e) +
          _0xad0114[_0x54648e(0x2d8)](_0x5b4390, 0x1) +
          _0x54648e(0x1b3) +
          selectedSizes["jacket"][_0x5b4390]),
          _0x180c5c[_0x54648e(0x326)](_0x5bf173);
      }
    }
    if (individualItems[_0x54648e(0x1f8)][_0x54648e(0x1f1)] > 0x0) {
      const _0x368810 = document["createElement"](_0xad0114[_0x54648e(0x169)]);
      (_0x368810["textContent"] =
        _0x54648e(0x32e) +
        individualItems["belt"]["quantity"] +
        _0x54648e(0x372)),
        _0x180c5c["appendChild"](_0x368810);
    }
    if (
      _0xad0114[_0x54648e(0x3a9)](
        individualItems["tung"][_0x54648e(0x1f1)],
        0x0
      )
    ) {
      const _0x99f284 = document["createElement"](_0xad0114[_0x54648e(0x169)]);
      (_0x99f284[_0x54648e(0x368)] =
        _0x54648e(0x268) +
        individualItems["tung"][_0x54648e(0x1f1)] +
        _0x54648e(0x372)),
        _0x180c5c[_0x54648e(0x326)](_0x99f284);
    }
    if (
      _0xad0114[_0x54648e(0x3a9)](individualItems["tie"][_0x54648e(0x1f1)], 0x0)
    ) {
      const _0x3ae8b3 = document[_0x54648e(0x257)](_0xad0114["eUkEY"]);
      (_0x3ae8b3[_0x54648e(0x368)] =
        "ที่หนีบเนคไท:\x20" +
        individualItems[_0x54648e(0x1c9)][_0x54648e(0x1f1)] +
        "\x20ชิ้น"),
        _0x180c5c[_0x54648e(0x326)](_0x3ae8b3);
    }
  } else {
    const _0x62f03a = document[_0x54648e(0x257)](_0xad0114["eUkEY"]);
    (_0x62f03a[_0x54648e(0x368)] = "จำนวน:\x20" + quantity + _0x54648e(0x39d)),
      _0x180c5c["appendChild"](_0x62f03a);
    if (selectedSizes["polo"][0x0]) {
      const _0xae424 = document[_0x54648e(0x257)]("div");
      (_0xae424[_0x54648e(0x368)] =
        _0x54648e(0x2a5) + selectedSizes[_0x54648e(0x2e1)][0x0]),
        _0x180c5c[_0x54648e(0x326)](_0xae424);
    }
    if (selectedSizes[_0x54648e(0x2f4)][0x0]) {
      const _0x1ac93d = document["createElement"](_0x54648e(0x295));
      (_0x1ac93d[_0x54648e(0x368)] =
        _0x54648e(0x302) + selectedSizes[_0x54648e(0x2f4)][0x0]),
        _0x180c5c["appendChild"](_0x1ac93d);
    }
  }
  _0x157724[_0x54648e(0x326)](_0x180c5c);
  if (deliveryType) {
    const _0x36b6f0 = document[_0x54648e(0x257)](_0xad0114["eUkEY"]);
    (_0x36b6f0[_0x54648e(0x3e4)][_0x54648e(0x2bf)] = _0xad0114["nTgqD"]),
      (_0x36b6f0[_0x54648e(0x368)] =
        "วิธีรับสินค้า:\x20" +
        (_0xad0114["QWDUv"](deliveryType, _0xad0114[_0x54648e(0x32a)])
          ? _0x54648e(0x1a7)
          : _0xad0114["CWzwZ"])),
      _0x157724["appendChild"](_0x36b6f0);
    if (
      _0xad0114[_0x54648e(0x36c)](deliveryType, _0xad0114[_0x54648e(0x3b3)])
    ) {
      const _0x56c8f0 = document[_0x54648e(0x257)](_0xad0114[_0x54648e(0x169)]);
      (_0x56c8f0[_0x54648e(0x368)] = _0xad0114[_0x54648e(0x163)]),
        _0x157724["appendChild"](_0x56c8f0);
    }
  }
  const _0x43561b = document[_0x54648e(0x257)]("div");
  (_0x43561b[_0x54648e(0x314)] = _0xad0114[_0x54648e(0x209)]),
    (_0x43561b["style"]["cssText"] = _0xad0114["TAhAK"]),
    (_0x43561b["textContent"] =
      _0x54648e(0x362) + _0x54636a["toLocaleString"]() + _0x54648e(0x3a7)),
    _0x157724["appendChild"](_0x43561b);
}
function generateEmailHTML(_0x10059f) {
  const _0x2e18e2 = a0_0x9acab,
    _0x5caca3 = {
      FHqRT: function (_0x22db4d, _0x180680) {
        return _0x22db4d === _0x180680;
      },
      UlfUP: _0x2e18e2(0x301),
      dlipL: function (_0x15b7fe, _0x29a7c5) {
        return _0x15b7fe > _0x29a7c5;
      },
      vuoJH: function (_0x227a31, _0x4f81b3) {
        return _0x227a31 < _0x4f81b3;
      },
      nbYXw: function (_0x56c069, _0x6fe812) {
        return _0x56c069(_0x6fe812);
      },
      TNRJt: function (_0x3406b3, _0x28f65c) {
        return _0x3406b3 < _0x28f65c;
      },
      tllLl: function (_0x3e6d75, _0x3cd6bf) {
        return _0x3e6d75 + _0x3cd6bf;
      },
      wPkza: function (_0x465957, _0x58a7de) {
        return _0x465957(_0x58a7de);
      },
      KXwiz: function (_0x502e2d, _0xfcbba3) {
        return _0x502e2d > _0xfcbba3;
      },
      GSsbc: function (_0x281293, _0x5305a1) {
        return _0x281293 + _0x5305a1;
      },
      mHuhz: function (_0x45989d, _0x4b820c) {
        return _0x45989d(_0x4b820c);
      },
      rFEoS: function (_0x110a13, _0x2ee825) {
        return _0x110a13 > _0x2ee825;
      },
      HmKbP: _0x2e18e2(0x2a6),
      afcIL: function (_0x24a58a, _0x1f5521) {
        return _0x24a58a(_0x1f5521);
      },
      VYTRR: function (_0x416d2c, _0x88b7d7) {
        return _0x416d2c === _0x88b7d7;
      },
      fEpIl: _0x2e18e2(0x2be),
      JpnGJ: function (_0x2bb3f3, _0x3a5650) {
        return _0x2bb3f3(_0x3a5650);
      },
    },
    _0x3091ce = new Date();
  let _0x52888c =
    _0x2e18e2(0x1bc) +
    sanitizeText(_0x10059f[_0x2e18e2(0x31d)]) +
    "</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20style=\x22margin-bottom:\x2015px;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<strong\x20style=\x22color:\x20#333;\x22>แพ็คเก็จ:</strong>\x20<span\x20style=\x22color:\x20#666;\x22>" +
    sanitizeText(_0x10059f[_0x2e18e2(0x27e)]) +
    _0x2e18e2(0x3f5);
  if (
    _0x5caca3[_0x2e18e2(0x280)](selectedPackage, _0x5caca3[_0x2e18e2(0x1a9)])
  ) {
    if (
      _0x5caca3[_0x2e18e2(0x1cb)](_0x10059f["items"][_0x2e18e2(0x2e1)], 0x0)
    ) {
      _0x52888c +=
        _0x2e18e2(0x200) +
        _0x10059f[_0x2e18e2(0x347)]["polo"] +
        _0x2e18e2(0x3ba);
      for (
        let _0x39d6da = 0x0;
        _0x5caca3[_0x2e18e2(0x16b)](
          _0x39d6da,
          _0x10059f[_0x2e18e2(0x347)][_0x2e18e2(0x2e1)]
        );
        _0x39d6da++
      ) {
        _0x10059f[_0x2e18e2(0x28c)]["polo"] &&
          _0x10059f[_0x2e18e2(0x28c)][_0x2e18e2(0x2e1)][_0x39d6da] &&
          (_0x52888c +=
            _0x2e18e2(0x2f2) +
            (_0x39d6da + 0x1) +
            _0x2e18e2(0x1b3) +
            _0x5caca3["nbYXw"](
              sanitizeText,
              _0x10059f[_0x2e18e2(0x28c)][_0x2e18e2(0x2e1)][_0x39d6da]
            ) +
            _0x2e18e2(0x3c2));
      }
    }
    if (
      _0x5caca3[_0x2e18e2(0x1cb)](_0x10059f[_0x2e18e2(0x347)]["jacket"], 0x0)
    ) {
      _0x52888c +=
        "<div\x20style=\x22margin-bottom:\x2010px;\x22><strong\x20style=\x22color:\x20#333;\x22>เสื้อแจ็คเก็ต:</strong>\x20<span\x20style=\x22color:\x20#666;\x22>" +
        _0x10059f[_0x2e18e2(0x347)][_0x2e18e2(0x2f4)] +
        _0x2e18e2(0x3ba);
      for (
        let _0x3d7faa = 0x0;
        _0x5caca3["TNRJt"](_0x3d7faa, _0x10059f[_0x2e18e2(0x347)]["jacket"]);
        _0x3d7faa++
      ) {
        _0x10059f[_0x2e18e2(0x28c)]["jacket"] &&
          _0x10059f["sizes"][_0x2e18e2(0x2f4)][_0x3d7faa] &&
          (_0x52888c +=
            _0x2e18e2(0x2f2) +
            _0x5caca3[_0x2e18e2(0x37c)](_0x3d7faa, 0x1) +
            _0x2e18e2(0x1b3) +
            _0x5caca3[_0x2e18e2(0x183)](
              sanitizeText,
              _0x10059f[_0x2e18e2(0x28c)][_0x2e18e2(0x2f4)][_0x3d7faa]
            ) +
            _0x2e18e2(0x3c2));
      }
    }
    if (
      _0x5caca3[_0x2e18e2(0x29b)](
        _0x10059f[_0x2e18e2(0x347)][_0x2e18e2(0x1e7)],
        0x0
      )
    ) {
      _0x52888c +=
        "<div\x20style=\x22margin-bottom:\x2010px;\x22><strong\x20style=\x22color:\x20#333;\x22>เสื้อ\x20JERSEY:</strong>\x20<span\x20style=\x22color:\x20#666;\x22>" +
        _0x10059f[_0x2e18e2(0x347)][_0x2e18e2(0x1e7)] +
        _0x2e18e2(0x3ba);
      for (
        let _0x2d48b8 = 0x0;
        _0x5caca3[_0x2e18e2(0x16b)](
          _0x2d48b8,
          _0x10059f[_0x2e18e2(0x347)][_0x2e18e2(0x1e7)]
        );
        _0x2d48b8++
      ) {
        _0x10059f[_0x2e18e2(0x28c)][_0x2e18e2(0x1e7)] &&
          _0x10059f[_0x2e18e2(0x28c)][_0x2e18e2(0x1e7)][_0x2d48b8] &&
          (_0x52888c +=
            _0x2e18e2(0x2f2) +
            _0x5caca3[_0x2e18e2(0x19c)](_0x2d48b8, 0x1) +
            _0x2e18e2(0x1b3) +
            _0x5caca3[_0x2e18e2(0x19d)](
              sanitizeText,
              _0x10059f[_0x2e18e2(0x28c)][_0x2e18e2(0x1e7)][_0x2d48b8]
            ) +
            _0x2e18e2(0x3c2));
      }
    }
  } else
    (_0x52888c +=
      _0x2e18e2(0x2a8) + _0x10059f[_0x2e18e2(0x1f1)] + _0x2e18e2(0x25c)),
      _0x10059f["sizes"][_0x2e18e2(0x2e1)] &&
        _0x5caca3[_0x2e18e2(0x2d6)](
          _0x10059f["sizes"][_0x2e18e2(0x2e1)][_0x2e18e2(0x26a)],
          0x0
        ) &&
        _0x10059f[_0x2e18e2(0x28c)][_0x2e18e2(0x2e1)][0x0] &&
        (_0x52888c +=
          _0x2e18e2(0x1ff) +
          sanitizeText(_0x10059f[_0x2e18e2(0x28c)][_0x2e18e2(0x2e1)][0x0]) +
          _0x2e18e2(0x2aa)),
      _0x10059f["sizes"][_0x2e18e2(0x2f4)] &&
        _0x5caca3[_0x2e18e2(0x1cb)](
          _0x10059f[_0x2e18e2(0x28c)][_0x2e18e2(0x2f4)]["length"],
          0x0
        ) &&
        _0x10059f[_0x2e18e2(0x28c)]["jacket"][0x0] &&
        (_0x52888c +=
          _0x2e18e2(0x3f6) +
          sanitizeText(_0x10059f[_0x2e18e2(0x28c)][_0x2e18e2(0x2f4)][0x0]) +
          "</span></div>");
  return (
    (_0x52888c +=
      _0x2e18e2(0x3a8) +
      _0x3091ce[_0x2e18e2(0x305)](_0x2e18e2(0x2f9), {
        year: _0x5caca3[_0x2e18e2(0x22a)],
        month: _0x2e18e2(0x277),
        day: _0x5caca3[_0x2e18e2(0x22a)],
      }) +
      _0x2e18e2(0x35c) +
      _0x5caca3[_0x2e18e2(0x2ce)](sanitizeText, _0x10059f[_0x2e18e2(0x3b4)]) +
      "\x20" +
      _0x5caca3[_0x2e18e2(0x183)](sanitizeText, _0x10059f[_0x2e18e2(0x324)]) +
      _0x2e18e2(0x1e4) +
      _0x5caca3["afcIL"](sanitizeText, _0x10059f["email"]) +
      _0x2e18e2(0x3e3) +
      _0x5caca3[_0x2e18e2(0x205)](sanitizeText, _0x10059f["phone"]) +
      _0x2e18e2(0x393) +
      (_0x5caca3["VYTRR"](_0x10059f["deliveryType"], _0x2e18e2(0x22d))
        ? "รับที่วิทยาลัย"
        : _0x5caca3[_0x2e18e2(0x21d)]) +
      _0x2e18e2(0x342) +
      _0x10059f[_0x2e18e2(0x37a)][_0x2e18e2(0x366)]() +
      _0x2e18e2(0x3bb) +
      _0x5caca3[_0x2e18e2(0x2c8)](sanitizeText, _0x10059f[_0x2e18e2(0x3a2)]) +
      _0x2e18e2(0x233)),
    _0x52888c
  );
}
function sanitizeText(_0x4cb1d6) {
  const _0x22bb2e = a0_0x9acab,
    _0x32c889 = { sqIul: _0x22bb2e(0x2f0), nnfZN: _0x22bb2e(0x3ad) };
  if (!_0x4cb1d6) return "";
  return _0x4cb1d6[_0x22bb2e(0x1c3)](/</g, _0x22bb2e(0x194))
    [_0x22bb2e(0x1c3)](/>/g, _0x32c889["sqIul"])
    [_0x22bb2e(0x1c3)](/"/g, _0x22bb2e(0x3f9))
    ["replace"](/'/g, _0x32c889["nnfZN"]);
}
function generateItemsSummary() {
  const _0x54f369 = a0_0x9acab;
  return {
    polo: individualItems[_0x54f369(0x2e1)]["quantity"],
    jacket: individualItems[_0x54f369(0x2f4)][_0x54f369(0x1f1)],
    jersey: individualItems[_0x54f369(0x1e7)][_0x54f369(0x1f1)],
    belt: individualItems[_0x54f369(0x1f8)][_0x54f369(0x1f1)],
    tung_ting: individualItems[_0x54f369(0x364)][_0x54f369(0x1f1)],
    tie_clip: individualItems[_0x54f369(0x1c9)][_0x54f369(0x1f1)],
  };
}
async function uploadSlipViaServer(_0x219be1, _0x3d4f3b, _0x58d245) {
  const _0x2328e4 = a0_0x9acab,
    _0x234556 = {
      kQmYU: function (_0x3c1f77, _0x4ebae5) {
        return _0x3c1f77(_0x4ebae5);
      },
      fbMPs: _0x2328e4(0x324),
      EIxcZ: _0x2328e4(0x357),
      ciUfk: function (_0x4ec094, _0x56b6c6, _0x13c2b2) {
        return _0x4ec094(_0x56b6c6, _0x13c2b2);
      },
      zDLpm: _0x2328e4(0x224),
      FjLXz: "POST",
      YpkTj: _0x2328e4(0x3cf),
      CmQmn: _0x2328e4(0x2f5),
      JJPpr: _0x2328e4(0x2f8),
      tUuYH: _0x2328e4(0x259),
    };
  try {
    const _0x322a4c = {
        file: _0x3d4f3b,
        fileName:
          _0x2328e4(0x3da) +
          Date[_0x2328e4(0x267)]() +
          "_" +
          sanitizeText(
            document["getElementById"]("firstname")[_0x2328e4(0x306)][
              _0x2328e4(0x2b9)
            ]()
          ) +
          "_" +
          _0x234556["kQmYU"](
            sanitizeText,
            document[_0x2328e4(0x1ad)](_0x234556["fbMPs"])[_0x2328e4(0x306)][
              "trim"
            ]()
          ),
        type: _0x234556[_0x2328e4(0x3c8)],
        orderRef: _0x58d245,
      },
      _0x2ba635 = await _0x234556["ciUfk"](fetch, _0x234556[_0x2328e4(0x338)], {
        method: _0x234556[_0x2328e4(0x3bc)],
        headers: { "Content-Type": _0x234556[_0x2328e4(0x329)] },
        body: JSON["stringify"](_0x322a4c),
      });
    if (!_0x2ba635["ok"])
      throw new Error(_0x2328e4(0x387) + _0x2ba635["status"]);
    const _0x24b7c5 = await _0x2ba635[_0x2328e4(0x287)]();
    return _0x24b7c5;
  } catch (_0x25fb95) {
    return (
      console[_0x2328e4(0x2f8)](_0x234556[_0x2328e4(0x1a8)], _0x25fb95),
      {
        status: _0x234556[_0x2328e4(0x2d7)],
        message: _0x25fb95["message"] || _0x234556[_0x2328e4(0x1af)],
      }
    );
  }
}
let originalSubmitButtonHTML = "";
function resetSubmitButtonState() {
  const _0xc40ccd = a0_0x9acab,
    _0x5576a2 = { VwZfQ: _0xc40ccd(0x3bd) },
    _0x50867c = document[_0xc40ccd(0x1ad)](_0xc40ccd(0x174));
  _0x50867c &&
    ((_0x50867c[_0xc40ccd(0x1b2)] = ![]),
    originalSubmitButtonHTML
      ? (_0x50867c[_0xc40ccd(0x3d8)] = originalSubmitButtonHTML)
      : (_0x50867c["innerHTML"] = _0x5576a2[_0xc40ccd(0x1e3)]));
}
function compressImage(_0x3e1c81) {
  const _0x5234a6 = a0_0x9acab,
    _0x1366bf = {
      hrOqp: function (_0x222853, _0x38c9c2) {
        return _0x222853 / _0x38c9c2;
      },
      lSDRf: function (_0x4bc500, _0x6adfe8) {
        return _0x4bc500 * _0x6adfe8;
      },
      YkKFj: _0x5234a6(0x357),
      RyiKE: function (_0xe42b40, _0x4018be) {
        return _0xe42b40(_0x4018be);
      },
    };
  return new Promise((_0x5bcf63, _0x2e9e7f) => {
    const _0x168c85 = _0x5234a6,
      _0x267f48 = {
        hkiTB: function (_0x65953e, _0x232c0c) {
          const _0x2ae24d = a0_0x5b7c;
          return _0x1366bf[_0x2ae24d(0x25b)](_0x65953e, _0x232c0c);
        },
        KoGCF: function (_0x186da1, _0x409cad) {
          const _0x5dae81 = a0_0x5b7c;
          return _0x1366bf[_0x5dae81(0x2e2)](_0x186da1, _0x409cad);
        },
        WhTfK: _0x1366bf[_0x168c85(0x308)],
        Gvfec: function (_0x1ffa28, _0x1065c2) {
          const _0x2a34b5 = _0x168c85;
          return _0x1366bf[_0x2a34b5(0x21b)](_0x1ffa28, _0x1065c2);
        },
      },
      _0x4d2fa7 = new FileReader();
    _0x4d2fa7[_0x168c85(0x293)](_0x3e1c81),
      (_0x4d2fa7["onload"] = function (_0x5cbd3d) {
        const _0x15afc1 = _0x168c85,
          _0x34b25c = {
            qRuKj: function (_0x48f5ea, _0x3e75b1) {
              const _0x2d862d = a0_0x5b7c;
              return _0x267f48[_0x2d862d(0x191)](_0x48f5ea, _0x3e75b1);
            },
            zZHXl: function (_0x1e10db, _0x58a778) {
              const _0x286e5b = a0_0x5b7c;
              return _0x267f48[_0x286e5b(0x376)](_0x1e10db, _0x58a778);
            },
            PtKRZ: function (_0x3a0fc2, _0x24b991) {
              return _0x3a0fc2 > _0x24b991;
            },
            Zemsn: function (_0x3a6d56, _0x572ee7) {
              const _0x521cd6 = a0_0x5b7c;
              return _0x267f48[_0x521cd6(0x376)](_0x3a6d56, _0x572ee7);
            },
            MCfZV: _0x15afc1(0x334),
            BonFk: _0x267f48[_0x15afc1(0x34f)],
            yJcPv: function (_0x2dbfa2, _0x545a5d) {
              const _0x56a8a1 = _0x15afc1;
              return _0x267f48[_0x56a8a1(0x23d)](_0x2dbfa2, _0x545a5d);
            },
          },
          _0x1b26f3 = new Image();
        (_0x1b26f3["src"] = _0x5cbd3d[_0x15afc1(0x1f3)]["result"]),
          (_0x1b26f3["onload"] = function () {
            const _0x209fc9 = _0x15afc1,
              _0x5e1fd4 = 0x200,
              _0x5f5a4e = 0x200;
            let _0x1d3804 = _0x1b26f3["width"],
              _0x134ac3 = _0x1b26f3[_0x209fc9(0x3b6)];
            _0x1d3804 > _0x5e1fd4 &&
              ((_0x134ac3 = Math[_0x209fc9(0x175)](
                _0x34b25c[_0x209fc9(0x312)](
                  _0x34b25c[_0x209fc9(0x29a)](_0x134ac3, _0x5e1fd4),
                  _0x1d3804
                )
              )),
              (_0x1d3804 = _0x5e1fd4));
            _0x34b25c["PtKRZ"](_0x134ac3, _0x5f5a4e) &&
              ((_0x1d3804 = Math["round"](
                _0x34b25c[_0x209fc9(0x1ae)](_0x1d3804, _0x5f5a4e) / _0x134ac3
              )),
              (_0x134ac3 = _0x5f5a4e));
            const _0xe6d76 = document[_0x209fc9(0x257)](
              _0x34b25c[_0x209fc9(0x201)]
            );
            (_0xe6d76[_0x209fc9(0x223)] = _0x1d3804),
              (_0xe6d76[_0x209fc9(0x3b6)] = _0x134ac3);
            const _0x3baf8c = _0xe6d76[_0x209fc9(0x38c)]("2d");
            _0x3baf8c[_0x209fc9(0x2b3)](
              _0x1b26f3,
              0x0,
              0x0,
              _0x1d3804,
              _0x134ac3
            );
            const _0x5da218 = _0xe6d76[_0x209fc9(0x369)](
              _0x34b25c[_0x209fc9(0x21e)],
              0.5
            );
            _0x34b25c[_0x209fc9(0x398)](_0x5bcf63, _0x5da218);
          });
      }),
      (_0x4d2fa7[_0x168c85(0x30a)] = (_0x1360dd) => _0x2e9e7f(_0x1360dd));
  });
}
async function submitOrder() {
  const _0x2cc88a = a0_0x9acab,
    _0x5baade = {
      NpXdq: function (_0x423d85, _0x5f26ed) {
        return _0x423d85(_0x5f26ed);
      },
      NhvtL: function (_0x4986e3, _0x2769b0) {
        return _0x4986e3(_0x2769b0);
      },
      VXbSW: _0x2cc88a(0x2d0),
      hXMhU: function (_0x20aad7, _0x29a9c4, _0x15b762, _0x4275bb) {
        return _0x20aad7(_0x29a9c4, _0x15b762, _0x4275bb);
      },
      vOGIZ: function (_0x38d1a0, _0x5f1ed0) {
        return _0x38d1a0 === _0x5f1ed0;
      },
      TDzJc: _0x2cc88a(0x371),
      tBjmH: _0x2cc88a(0x2d2),
      FlFmd: function (_0x168cd1, _0x5eaa43) {
        return _0x168cd1(_0x5eaa43);
      },
      XzWQF: _0x2cc88a(0x253),
      wOiOZ: function (_0xb0a611) {
        return _0xb0a611();
      },
      MMXQM: function (_0x4027ed, _0x1dd977) {
        return _0x4027ed(_0x1dd977);
      },
      vyUPF: function (_0x313b5f, _0x5c7886) {
        return _0x313b5f + _0x5c7886;
      },
      OgPAK: _0x2cc88a(0x2fb),
      dRbEN:
        "\x0a\x0aต้องการดำเนินการส่งคำสั่งซื้อต่อหรือไม่?\x20(คุณสามารถส่งรูปสลิปทาง\x20Email\x20ได้)",
      TqNue: _0x2cc88a(0x3d9),
      SDjdu: function (_0x50ea4f) {
        return _0x50ea4f();
      },
      xwrir: function (_0x136c11, _0x340c1b) {
        return _0x136c11(_0x340c1b);
      },
      kZkQy: function (_0x27da70) {
        return _0x27da70();
      },
      IBvtx: _0x2cc88a(0x301),
      hfaPW: _0x2cc88a(0x3a2),
      Dcqoy: _0x2cc88a(0x2f1),
      GdphO: _0x2cc88a(0x3b4),
      UNQwJ: function (_0xa81edf, _0x4ba68e) {
        return _0xa81edf(_0x4ba68e);
      },
      LAvgO: _0x2cc88a(0x324),
      QTVMc: _0x2cc88a(0x2d5),
      CqRLu: function (_0x5001e3, _0x3e9358) {
        return _0x5001e3(_0x3e9358);
      },
      HFAPm: "status",
      GvJoN: function (_0x5609c4, _0x36d143) {
        return _0x5609c4(_0x36d143);
      },
      KzJod: _0x2cc88a(0x29d),
      utyhK: function (_0x2e784b, _0x464658) {
        return _0x2e784b(_0x464658);
      },
      iKlkJ: function (_0x4e63db, _0x4b3fe0) {
        return _0x4e63db(_0x4b3fe0);
      },
      IrAtf: _0x2cc88a(0x250),
      cUAgk: "address",
      vIXus: function (_0x35efc4, _0x315ef0) {
        return _0x35efc4 === _0x315ef0;
      },
      EZNAw: _0x2cc88a(0x242),
      TSEic: function (_0x3bb7a5, _0x1eed72) {
        return _0x3bb7a5 + _0x1eed72;
      },
      xDinR: function (_0x44f320, _0xd940a4) {
        return _0x44f320 === _0xd940a4;
      },
      YxBbr: _0x2cc88a(0x2ad),
      YvzyT: function (_0x415721, _0x51727b) {
        return _0x415721 > _0x51727b;
      },
      qiqLm: function (_0x17b511, _0x4326e5) {
        return _0x17b511 > _0x4326e5;
      },
      OgqZy: function (_0x24090e, _0x217800) {
        return _0x24090e > _0x217800;
      },
      mQhKU: function (_0x365d3b, _0x3e3303) {
        return _0x365d3b > _0x3e3303;
      },
      VzEMf: _0x2cc88a(0x1a7),
      sWfdk: _0x2cc88a(0x2be),
      rPLiP: "กรุณาตรวจสอบข้อมูล",
      pXcUb: function (_0x3ae7be, _0x47543c) {
        return _0x3ae7be(_0x47543c);
      },
      fOvsH: "ยืนยันสั่งซื้อ",
      JAmsf: _0x2cc88a(0x36e),
      VFnEQ: _0x2cc88a(0x31b),
      rbXoi: _0x2cc88a(0x399),
      uVVnY: function (_0x476f1c, _0x390a3f) {
        return _0x476f1c(_0x390a3f);
      },
      IQaDK: _0x2cc88a(0x260),
    },
    _0x4af712 = document["getElementById"]("submit-order-btn");
  !originalSubmitButtonHTML &&
    (originalSubmitButtonHTML = _0x4af712[_0x2cc88a(0x3d8)]);
  if (_0x4af712[_0x2cc88a(0x1b2)]) return;
  if (!_0x5baade[_0x2cc88a(0x319)](validateForm)) return;
  const _0x3c711d = {
    package: selectedPackage,
    packageName: packages[selectedPackage][_0x2cc88a(0x18b)],
    quantity: _0x5baade[_0x2cc88a(0x3b5)](
      selectedPackage,
      _0x5baade[_0x2cc88a(0x23b)]
    )
      ? 0x1
      : quantity,
    sizes: selectedSizes,
    notes: _0x5baade[_0x2cc88a(0x1ec)](
      sanitizeText,
      document[_0x2cc88a(0x1ad)](_0x5baade[_0x2cc88a(0x2b5)])[_0x2cc88a(0x306)][
        _0x2cc88a(0x2b9)
      ]()
    ),
    email: _0x5baade[_0x2cc88a(0x31c)](
      sanitizeText,
      document[_0x2cc88a(0x1ad)](_0x5baade[_0x2cc88a(0x388)])[_0x2cc88a(0x306)][
        _0x2cc88a(0x2b9)
      ]()
    ),
    firstname: sanitizeText(
      document[_0x2cc88a(0x1ad)](_0x5baade[_0x2cc88a(0x382)])["value"][
        _0x2cc88a(0x2b9)
      ]()
    ),
    lastname: _0x5baade["UNQwJ"](
      sanitizeText,
      document["getElementById"](_0x5baade[_0x2cc88a(0x1b5)])["value"]["trim"]()
    ),
    phone: _0x5baade["xwrir"](
      sanitizeText,
      document[_0x2cc88a(0x1ad)](_0x5baade[_0x2cc88a(0x2b6)])[_0x2cc88a(0x306)][
        _0x2cc88a(0x2b9)
      ]()
    ),
    status: _0x5baade["CqRLu"](
      sanitizeText,
      document[_0x2cc88a(0x1ad)](_0x5baade[_0x2cc88a(0x264)])["value"]
    ),
    year: _0x5baade[_0x2cc88a(0x361)](
      sanitizeText,
      document[_0x2cc88a(0x1ad)](_0x2cc88a(0x380))[_0x2cc88a(0x306)]
    ),
    major: _0x5baade[_0x2cc88a(0x39a)](
      sanitizeText,
      document["getElementById"](_0x5baade["KzJod"])[_0x2cc88a(0x306)]
    ),
    faculty: _0x5baade["utyhK"](
      sanitizeText,
      document[_0x2cc88a(0x1ad)](_0x2cc88a(0x2ed))["value"]
    ),
    studentId: _0x5baade["iKlkJ"](
      sanitizeText,
      document[_0x2cc88a(0x1ad)](_0x5baade[_0x2cc88a(0x198)])[_0x2cc88a(0x306)][
        _0x2cc88a(0x2b9)
      ]()
    ),
    address: _0x5baade[_0x2cc88a(0x3b5)](deliveryType, _0x2cc88a(0x242))
      ? _0x5baade[_0x2cc88a(0x361)](
          sanitizeText,
          document[_0x2cc88a(0x1ad)](_0x5baade[_0x2cc88a(0x3e6)])[
            _0x2cc88a(0x306)
          ][_0x2cc88a(0x2b9)]()
        )
      : "",
    deliveryType: deliveryType,
    totalAmount: _0x5baade["vIXus"](deliveryType, _0x5baade[_0x2cc88a(0x1c8)])
      ? _0x5baade["TSEic"](totalAmount, 0x32)
      : totalAmount,
    items: _0x5baade[_0x2cc88a(0x18d)](generateItemsSummary),
    orderRef: _0x5baade[_0x2cc88a(0x37f)](generateOrderRef),
  };
  let _0x462e47 = _0x2cc88a(0x3f2) + _0x3c711d[_0x2cc88a(0x27e)] + "\x0a";
  if (_0x5baade[_0x2cc88a(0x2e4)](selectedPackage, _0x5baade["IBvtx"])) {
    const _0x23c2e5 = _0x5baade["YxBbr"]["split"]("|");
    let _0x314833 = 0x0;
    while (!![]) {
      switch (_0x23c2e5[_0x314833++]) {
        case "0":
          if (_0x3c711d[_0x2cc88a(0x347)][_0x2cc88a(0x1e7)] > 0x0)
            _0x462e47 +=
              _0x2cc88a(0x28f) +
              _0x3c711d[_0x2cc88a(0x347)][_0x2cc88a(0x1e7)] +
              _0x2cc88a(0x179);
          continue;
        case "1":
          if (
            _0x5baade[_0x2cc88a(0x1bf)](
              _0x3c711d["items"][_0x2cc88a(0x333)],
              0x0
            )
          )
            _0x462e47 +=
              _0x2cc88a(0x1b9) +
              _0x3c711d[_0x2cc88a(0x347)]["tie_clip"] +
              _0x2cc88a(0x179);
          continue;
        case "2":
          if (_0x5baade["qiqLm"](_0x3c711d["items"]["belt"], 0x0))
            _0x462e47 +=
              _0x2cc88a(0x32e) +
              _0x3c711d[_0x2cc88a(0x347)]["belt"] +
              "\x20ชิ้น\x0a";
          continue;
        case "3":
          if (
            _0x5baade[_0x2cc88a(0x395)](
              _0x3c711d[_0x2cc88a(0x347)][_0x2cc88a(0x2e1)],
              0x0
            )
          )
            _0x462e47 +=
              _0x2cc88a(0x2fe) +
              _0x3c711d[_0x2cc88a(0x347)][_0x2cc88a(0x2e1)] +
              _0x2cc88a(0x179);
          continue;
        case "4":
          if (
            _0x5baade[_0x2cc88a(0x1bf)](
              _0x3c711d[_0x2cc88a(0x347)][_0x2cc88a(0x2f4)],
              0x0
            )
          )
            _0x462e47 +=
              _0x2cc88a(0x2d9) +
              _0x3c711d[_0x2cc88a(0x347)]["jacket"] +
              _0x2cc88a(0x179);
          continue;
        case "5":
          if (
            _0x5baade["mQhKU"](
              _0x3c711d[_0x2cc88a(0x347)][_0x2cc88a(0x203)],
              0x0
            )
          )
            _0x462e47 +=
              _0x2cc88a(0x268) +
              _0x3c711d[_0x2cc88a(0x347)][_0x2cc88a(0x203)] +
              "\x20ชิ้น\x0a";
          continue;
      }
      break;
    }
  }
  (_0x462e47 +=
    _0x2cc88a(0x3cb) +
    _0x3c711d[_0x2cc88a(0x3b4)] +
    "\x20" +
    _0x3c711d[_0x2cc88a(0x324)] +
    "\x0a"),
    (_0x462e47 += "อีเมล:\x20" + _0x3c711d["email"] + "\x0a"),
    (_0x462e47 += _0x2cc88a(0x294) + _0x3c711d[_0x2cc88a(0x2d5)] + "\x0a"),
    (_0x462e47 +=
      _0x2cc88a(0x1d8) +
      (_0x5baade[_0x2cc88a(0x2e4)](
        _0x3c711d[_0x2cc88a(0x339)],
        _0x2cc88a(0x22d)
      )
        ? _0x5baade[_0x2cc88a(0x3e5)]
        : _0x5baade[_0x2cc88a(0x283)]) +
      "\x0a"),
    (_0x462e47 +=
      _0x2cc88a(0x276) +
      _0x3c711d["totalAmount"][_0x2cc88a(0x366)]() +
      "\x20บาท\x0a\x0a"),
    (_0x462e47 += _0x3c711d[_0x2cc88a(0x3a2)]
      ? _0x2cc88a(0x25e) + _0x3c711d[_0x2cc88a(0x3a2)]
      : "");
  const _0x437a83 = await Swal[_0x2cc88a(0x335)]({
    title: _0x5baade[_0x2cc88a(0x379)],
    html:
      _0x2cc88a(0x27a) +
      _0x5baade[_0x2cc88a(0x1a2)](sanitizeText, _0x462e47)[_0x2cc88a(0x1c3)](
        /\n/g,
        "<br>"
      ) +
      _0x2cc88a(0x23f),
    icon: _0x2cc88a(0x296),
    showCancelButton: !![],
    confirmButtonText: _0x5baade[_0x2cc88a(0x185)],
    cancelButtonText: _0x5baade[_0x2cc88a(0x390)],
    width: 0x258,
    customClass: { popup: _0x2cc88a(0x3c7) },
  });
  if (!_0x437a83[_0x2cc88a(0x218)]) return;
  const _0x444615 = document[_0x2cc88a(0x1ad)]("slip")["files"][0x0];
  if (!_0x444615) {
    alert(_0x2cc88a(0x275)),
      (document[_0x2cc88a(0x1ad)](_0x2cc88a(0x31b))["textContent"] =
        _0x2cc88a(0x2e3));
    return;
  }
  (document[_0x2cc88a(0x1ad)](_0x5baade[_0x2cc88a(0x1f4)])[_0x2cc88a(0x368)] =
    ""),
    (_0x4af712[_0x2cc88a(0x1b2)] = !![]),
    (_0x4af712[_0x2cc88a(0x3d8)] = _0x5baade[_0x2cc88a(0x320)]),
    _0x5baade[_0x2cc88a(0x17a)](
      showLoadingMessage,
      _0x5baade[_0x2cc88a(0x38b)]
    );
  const _0x37b81e = new FileReader();
  (_0x37b81e[_0x2cc88a(0x240)] = async function (_0x4ed439) {
    const _0x403516 = _0x2cc88a;
    try {
      const _0x40b15f = await _0x5baade[_0x403516(0x1ec)](
        compressImage,
        _0x444615
      );
      _0x5baade[_0x403516(0x350)](
        showLoadingMessage,
        _0x5baade[_0x403516(0x383)]
      );
      const _0x27f00e = await _0x5baade[_0x403516(0x22b)](
        uploadSlipViaServer,
        _0x444615,
        _0x40b15f,
        _0x3c711d["orderRef"]
      );
      if (
        _0x5baade["vOGIZ"](
          _0x27f00e[_0x403516(0x348)],
          _0x5baade[_0x403516(0x28e)]
        )
      )
        (_0x3c711d[_0x403516(0x251)] = _0x27f00e["fileUrl"]),
          showLoadingMessage(_0x5baade[_0x403516(0x182)]),
          _0x5baade[_0x403516(0x188)](sendToGoogleForms, _0x3c711d);
      else throw new Error(_0x27f00e["message"] || _0x403516(0x238));
    } catch (_0x5b526d) {
      console[_0x403516(0x2f8)](_0x5baade["XzWQF"], _0x5b526d),
        _0x5baade[_0x403516(0x37f)](hideLoadingMessage),
        _0x5baade["wOiOZ"](resetSubmitButtonState);
      const _0x391260 = _0x5baade["MMXQM"](
        confirm,
        _0x5baade[_0x403516(0x1fa)](_0x5baade["OgPAK"], _0x5b526d["message"]) +
          _0x5baade[_0x403516(0x297)]
      );
      _0x391260 &&
        ((_0x3c711d[_0x403516(0x251)] = "ไม่สามารถอัปโหลดสลิปได้"),
        showLoadingMessage(_0x403516(0x2d2)),
        _0x5baade[_0x403516(0x350)](sendToGoogleForms, _0x3c711d));
    }
  }),
    (_0x37b81e[_0x2cc88a(0x30a)] = function () {
      const _0x22a07a = _0x2cc88a;
      console[_0x22a07a(0x2f8)](_0x5baade[_0x22a07a(0x1c4)]),
        hideLoadingMessage(),
        _0x5baade[_0x22a07a(0x18d)](resetSubmitButtonState),
        _0x5baade[_0x22a07a(0x31c)](alert, _0x22a07a(0x213));
    }),
    _0x37b81e[_0x2cc88a(0x293)](_0x444615);
}
function generateOrderRef() {
  const _0x5e3169 = a0_0x9acab,
    _0x1eb50c = new Date(),
    _0x295720 = _0x1eb50c[_0x5e3169(0x256)]();
  return (
    _0x5e3169(0x1bb) +
    _0x1eb50c[_0x5e3169(0x2c7)]() +
    (_0x1eb50c[_0x5e3169(0x168)]() + 0x1)
      [_0x5e3169(0x303)]()
      [_0x5e3169(0x274)](0x2, "0") +
    _0x295720
  );
}
function showSuccessPage(_0x38c253) {
  const _0x6b9c99 = a0_0x9acab,
    _0x28fc6e = {
      wYPMH: _0x6b9c99(0x3f4),
      lFHLK: _0x6b9c99(0x2cc),
      KHtOl: _0x6b9c99(0x2ab),
      QBJLm: _0x6b9c99(0x360),
      NmjCq: function (_0x292132, _0x1212b6) {
        return _0x292132 === _0x1212b6;
      },
      dhZtq: "individual",
      FGLdv: function (_0x23d06c, _0x7e8dfc) {
        return _0x23d06c > _0x7e8dfc;
      },
      aBJWk: function (_0x49e912, _0x3a3993) {
        return _0x49e912 < _0x3a3993;
      },
      ToRpd: _0x6b9c99(0x381),
      FOPey: function (_0x1e446f, _0x599ff8) {
        return _0x1e446f + _0x599ff8;
      },
      SqlkL: function (_0x18f381, _0x5e8d49) {
        return _0x18f381 > _0x5e8d49;
      },
      IAWkG: "th-TH",
      OfaZO: _0x6b9c99(0x2a6),
      uOOkp: _0x6b9c99(0x277),
      mGshj: _0x6b9c99(0x22d),
    };
  window[_0x6b9c99(0x321)]({ top: 0x0, behavior: _0x28fc6e["wYPMH"] }),
    (document["getElementById"]("checkout-section")[_0x6b9c99(0x3e4)][
      _0x6b9c99(0x279)
    ] = _0x28fc6e[_0x6b9c99(0x3e9)]),
    (document[_0x6b9c99(0x1ad)](_0x28fc6e["KHtOl"])["style"]["display"] =
      "block");
  const _0x160106 = document[_0x6b9c99(0x1ad)](_0x28fc6e[_0x6b9c99(0x2a1)]);
  _0x160106[_0x6b9c99(0x3d8)] = "";
  const _0x5a15b1 = document[_0x6b9c99(0x257)]("p");
  (_0x5a15b1["textContent"] =
    "หมายเลขอ้างอิง:\x20" + _0x38c253[_0x6b9c99(0x31d)]),
    _0x160106[_0x6b9c99(0x326)](_0x5a15b1);
  const _0x23c372 = document["createElement"]("p");
  (_0x23c372[_0x6b9c99(0x368)] =
    _0x6b9c99(0x3f2) + _0x38c253[_0x6b9c99(0x27e)]),
    _0x160106[_0x6b9c99(0x326)](_0x23c372);
  if (
    _0x28fc6e[_0x6b9c99(0x17c)](selectedPackage, _0x28fc6e[_0x6b9c99(0x337)])
  ) {
    if (
      _0x28fc6e["FGLdv"](_0x38c253[_0x6b9c99(0x347)][_0x6b9c99(0x2e1)], 0x0)
    ) {
      const _0x17bfb3 = document[_0x6b9c99(0x257)]("p");
      (_0x17bfb3["textContent"] =
        _0x6b9c99(0x2fe) +
        _0x38c253[_0x6b9c99(0x347)][_0x6b9c99(0x2e1)] +
        _0x6b9c99(0x372)),
        _0x160106[_0x6b9c99(0x326)](_0x17bfb3);
      for (
        let _0x4e607b = 0x0;
        _0x28fc6e[_0x6b9c99(0x396)](
          _0x4e607b,
          _0x38c253[_0x6b9c99(0x347)][_0x6b9c99(0x2e1)]
        );
        _0x4e607b++
      ) {
        if (
          _0x38c253["sizes"][_0x6b9c99(0x2e1)] &&
          _0x38c253[_0x6b9c99(0x28c)][_0x6b9c99(0x2e1)][_0x4e607b]
        ) {
          const _0x2b8e39 = document[_0x6b9c99(0x257)]("p");
          (_0x2b8e39[_0x6b9c99(0x314)] = _0x28fc6e[_0x6b9c99(0x164)]),
            (_0x2b8e39[_0x6b9c99(0x368)] =
              "-\x20ตัวที่\x20" +
              _0x28fc6e[_0x6b9c99(0x1cf)](_0x4e607b, 0x1) +
              _0x6b9c99(0x1b3) +
              _0x38c253[_0x6b9c99(0x28c)][_0x6b9c99(0x2e1)][_0x4e607b]),
            _0x160106[_0x6b9c99(0x326)](_0x2b8e39);
        }
      }
    }
    if (_0x28fc6e["SqlkL"](_0x38c253[_0x6b9c99(0x347)]["jacket"], 0x0)) {
      const _0x361e26 = document[_0x6b9c99(0x257)]("p");
      (_0x361e26[_0x6b9c99(0x368)] =
        "เสื้อแจ็คเก็ต:\x20" +
        _0x38c253[_0x6b9c99(0x347)][_0x6b9c99(0x2f4)] +
        _0x6b9c99(0x372)),
        _0x160106[_0x6b9c99(0x326)](_0x361e26);
      for (
        let _0xe33a32 = 0x0;
        _0x28fc6e[_0x6b9c99(0x396)](
          _0xe33a32,
          _0x38c253[_0x6b9c99(0x347)][_0x6b9c99(0x2f4)]
        );
        _0xe33a32++
      ) {
        if (
          _0x38c253[_0x6b9c99(0x28c)][_0x6b9c99(0x2f4)] &&
          _0x38c253[_0x6b9c99(0x28c)]["jacket"][_0xe33a32]
        ) {
          const _0x45ebb8 = document[_0x6b9c99(0x257)]("p");
          (_0x45ebb8[_0x6b9c99(0x314)] = _0x28fc6e[_0x6b9c99(0x164)]),
            (_0x45ebb8["textContent"] =
              _0x6b9c99(0x29c) +
              _0x28fc6e[_0x6b9c99(0x1cf)](_0xe33a32, 0x1) +
              _0x6b9c99(0x1b3) +
              _0x38c253["sizes"][_0x6b9c99(0x2f4)][_0xe33a32]),
            _0x160106[_0x6b9c99(0x326)](_0x45ebb8);
        }
      }
    }
    if (
      _0x28fc6e[_0x6b9c99(0x3b8)](_0x38c253[_0x6b9c99(0x347)]["jersey"], 0x0)
    ) {
      const _0x1a89a7 = document[_0x6b9c99(0x257)]("p");
      (_0x1a89a7[_0x6b9c99(0x368)] =
        "เสื้อ\x20JERSEY:\x20" +
        _0x38c253[_0x6b9c99(0x347)][_0x6b9c99(0x1e7)] +
        _0x6b9c99(0x372)),
        _0x160106["appendChild"](_0x1a89a7);
      for (
        let _0x83850c = 0x0;
        _0x83850c < _0x38c253["items"][_0x6b9c99(0x1e7)];
        _0x83850c++
      ) {
        if (
          _0x38c253[_0x6b9c99(0x28c)]["jersey"] &&
          _0x38c253["sizes"]["jersey"][_0x83850c]
        ) {
          const _0x5c4dc3 = document[_0x6b9c99(0x257)]("p");
          (_0x5c4dc3["className"] = _0x28fc6e[_0x6b9c99(0x164)]),
            (_0x5c4dc3[_0x6b9c99(0x368)] =
              _0x6b9c99(0x29c) +
              (_0x83850c + 0x1) +
              ":\x20ไซส์\x20" +
              _0x38c253["sizes"][_0x6b9c99(0x1e7)][_0x83850c]),
            _0x160106[_0x6b9c99(0x326)](_0x5c4dc3);
        }
      }
    }
  }
  const _0x313f94 = new Date(),
    _0x5b2c8f = document[_0x6b9c99(0x257)]("p");
  (_0x5b2c8f["textContent"] =
    "วันที่สั่งซื้อ:\x20" +
    _0x313f94["toLocaleDateString"](_0x28fc6e[_0x6b9c99(0x27b)], {
      year: _0x28fc6e[_0x6b9c99(0x2c2)],
      month: _0x28fc6e[_0x6b9c99(0x1f6)],
      day: _0x28fc6e[_0x6b9c99(0x2c2)],
    })),
    _0x160106[_0x6b9c99(0x326)](_0x5b2c8f);
  const _0x38606f = document[_0x6b9c99(0x257)]("p");
  (_0x38606f[_0x6b9c99(0x368)] =
    "ชื่อ-นามสกุล:\x20" +
    _0x38c253[_0x6b9c99(0x3b4)] +
    "\x20" +
    _0x38c253[_0x6b9c99(0x324)]),
    _0x160106[_0x6b9c99(0x326)](_0x38606f);
  const _0x1b828b = document[_0x6b9c99(0x257)]("p");
  (_0x1b828b[_0x6b9c99(0x368)] =
    _0x6b9c99(0x289) + _0x38c253[_0x6b9c99(0x2f1)]),
    _0x160106[_0x6b9c99(0x326)](_0x1b828b);
  const _0x52d602 = document["createElement"]("p");
  (_0x52d602[_0x6b9c99(0x368)] =
    _0x6b9c99(0x294) + _0x38c253[_0x6b9c99(0x2d5)]),
    _0x160106[_0x6b9c99(0x326)](_0x52d602);
  const _0x2377ec = document["createElement"]("p");
  (_0x2377ec["textContent"] =
    "วิธีรับสินค้า:\x20" +
    (_0x28fc6e[_0x6b9c99(0x17c)](
      _0x38c253[_0x6b9c99(0x339)],
      _0x28fc6e[_0x6b9c99(0x243)]
    )
      ? _0x6b9c99(0x1a7)
      : "จัดส่งทางไปรษณีย์")),
    _0x160106[_0x6b9c99(0x326)](_0x2377ec);
  const _0x1aa03c = document["createElement"]("p");
  (_0x1aa03c[_0x6b9c99(0x368)] =
    "ยอดรวม:\x20" +
    _0x38c253[_0x6b9c99(0x37a)][_0x6b9c99(0x366)]() +
    _0x6b9c99(0x3a7)),
    _0x160106[_0x6b9c99(0x326)](_0x1aa03c);
  if (_0x38c253["trackingCode"]) {
    const _0x361867 = document[_0x6b9c99(0x257)]("p");
    (_0x361867["innerHTML"] =
      _0x6b9c99(0x3f8) + _0x38c253["trackingCode"] + "</span>"),
      _0x160106[_0x6b9c99(0x326)](_0x361867);
  }
  const _0x59f781 = document[_0x6b9c99(0x257)]("p");
  (_0x59f781["textContent"] = _0x6b9c99(0x25e) + _0x38c253["notes"]),
    _0x160106[_0x6b9c99(0x326)](_0x59f781);
}
function sendToGoogleForms(_0x40aee4) {
  const _0x331be6 = a0_0x9acab,
    _0x3f0274 = {
      zAABL: function (_0x28fe85) {
        return _0x28fe85();
      },
      UGDYW: function (_0x2b9b88, _0x3a7c1a) {
        return _0x2b9b88(_0x3a7c1a);
      },
      ZWEYI: function (_0x612431, _0xa2ee36) {
        return _0x612431(_0xa2ee36);
      },
      yGPXC: _0x331be6(0x17f),
      mDSYi: function (_0x24743b) {
        return _0x24743b();
      },
      qFeWa: function (_0x53245e, _0x570053) {
        return _0x53245e(_0x570053);
      },
      cyCuK: function (_0xcc57bc, _0x29b032) {
        return _0xcc57bc + _0x29b032;
      },
      fHHWW: "เกิดข้อผิดพลาดในการส่งคำสั่งซื้อ\x20กรุณาลองใหม่อีกครั้ง:\x20",
      OPcvq: function (_0x151bb5, _0xb65c48, _0xabd8b1) {
        return _0x151bb5(_0xb65c48, _0xabd8b1);
      },
      dABuL: _0x331be6(0x1df),
      bOETO: _0x331be6(0x20e),
      PKZiE: _0x331be6(0x3cf),
      MuoZw: _0x331be6(0x1b1),
      RfhPg: function (_0x1aea4b) {
        return _0x1aea4b();
      },
      RtIUs: function (_0x58d018) {
        return _0x58d018();
      },
      GfSvO: function (_0x1f2db0, _0x13757e) {
        return _0x1f2db0(_0x13757e);
      },
      GtzGD: function (_0x5a33bb, _0x5ee087) {
        return _0x5a33bb + _0x5ee087;
      },
      QeXok: "เกิดข้อผิดพลาดในการเตรียมข้อมูล\x20กรุณาลองใหม่อีกครั้ง:\x20",
    };
  try {
    const _0x2a527a = new Date(),
      _0x4c7faf = _0x3f0274["mDSYi"](generateOrderRef);
    _0x40aee4[_0x331be6(0x31d)] = _0x4c7faf;
    const _0x31dc83 = {
      orderRef: _0x4c7faf,
      packageName: _0x40aee4["packageName"],
      firstname: _0x40aee4[_0x331be6(0x3b4)],
      lastname: _0x40aee4["lastname"],
      email: _0x40aee4[_0x331be6(0x2f1)],
      phone: _0x40aee4[_0x331be6(0x2d5)],
      status: _0x40aee4[_0x331be6(0x348)],
      year: _0x40aee4[_0x331be6(0x380)],
      major: _0x40aee4[_0x331be6(0x29d)],
      faculty: _0x40aee4["faculty"],
      studentId: _0x40aee4["studentId"],
      deliveryType: _0x40aee4[_0x331be6(0x339)],
      address: _0x40aee4["address"],
      totalAmount: _0x40aee4[_0x331be6(0x37a)],
      items: _0x40aee4[_0x331be6(0x347)],
      notes: _0x40aee4["notes"],
      slipUrl: _0x40aee4["slipUrl"] || null,
    };
    _0x3f0274[_0x331be6(0x236)](fetch, _0x3f0274[_0x331be6(0x2bc)], {
      method: _0x3f0274["bOETO"],
      headers: { "Content-Type": _0x3f0274[_0x331be6(0x20b)] },
      body: JSON[_0x331be6(0x269)](_0x31dc83),
    })
      [_0x331be6(0x349)]((_0x12227b) => {
        const _0x26158e = _0x331be6;
        if (!_0x12227b["ok"])
          throw new Error(_0x26158e(0x387) + _0x12227b[_0x26158e(0x348)]);
        return _0x12227b[_0x26158e(0x287)]();
      })
      ["then"]((_0x45ce15) => {
        const _0x3d5a97 = _0x331be6;
        _0x3f0274[_0x3d5a97(0x1b8)](hideLoadingMessage);
        if (_0x45ce15[_0x3d5a97(0x371)])
          (_0x40aee4["orderRef"] = _0x45ce15[_0x3d5a97(0x31d)]),
            (_0x40aee4["trackingCode"] = _0x45ce15[_0x3d5a97(0x3ce)]),
            _0x3f0274[_0x3d5a97(0x3bf)](showSuccessPage, _0x40aee4),
            _0x3f0274[_0x3d5a97(0x1d9)](sendConfirmationEmail, _0x40aee4);
        else throw new Error(_0x45ce15["error"] || _0x3f0274[_0x3d5a97(0x336)]);
      })
      [_0x331be6(0x20f)]((_0x357ffc) => {
        const _0x4960b4 = _0x331be6;
        _0x3f0274["zAABL"](hideLoadingMessage),
          _0x3f0274[_0x4960b4(0x1ce)](resetSubmitButtonState),
          _0x3f0274[_0x4960b4(0x2b1)](
            alert,
            _0x3f0274[_0x4960b4(0x2ae)](
              _0x3f0274["fHHWW"],
              _0x357ffc[_0x4960b4(0x26b)]
            )
          );
      });
  } catch (_0x338a18) {
    console["error"](_0x3f0274["MuoZw"], _0x338a18),
      _0x3f0274[_0x331be6(0x16c)](hideLoadingMessage),
      _0x3f0274[_0x331be6(0x37d)](resetSubmitButtonState),
      _0x3f0274[_0x331be6(0x1c6)](
        alert,
        _0x3f0274[_0x331be6(0x2ba)](
          _0x3f0274["QeXok"],
          _0x338a18[_0x331be6(0x26b)]
        )
      );
  }
}
function sendConfirmationEmail(_0x57bc84) {
  const _0x531de9 = a0_0x9acab,
    _0x55d30e = {
      lIxlm: "สิเอาส่ำนี่บ่ชีวิตสิหาแต่แนวเกรียนเว็บบ่หล่า",
      LGBuC: function (_0x16fc00) {
        return _0x16fc00();
      },
      tFXPp: function (_0x4dad9f, _0x27acae) {
        return _0x4dad9f(_0x27acae);
      },
      behjd: function (_0x5789b0, _0x36f865) {
        return _0x5789b0 + _0x36f865;
      },
      ADjJj: _0x531de9(0x356),
      mZcaL: function (_0x52c2cd, _0x1f52d9) {
        return _0x52c2cd(_0x1f52d9);
      },
      TiTNO: function (_0x3e3616, _0xcbb317, _0x5ce4ea) {
        return _0x3e3616(_0xcbb317, _0x5ce4ea);
      },
      YFcCH: _0x531de9(0x1fd),
      DJdhC: "POST",
      whkra: _0x531de9(0x3cf),
      bESWd: function (_0x1997d6, _0x384c4b) {
        return _0x1997d6 + _0x384c4b;
      },
    },
    _0x1d297e = _0x55d30e[_0x531de9(0x21f)](generateEmailHTML, _0x57bc84);
  _0x55d30e[_0x531de9(0x167)](fetch, _0x55d30e[_0x531de9(0x363)], {
    method: _0x55d30e[_0x531de9(0x2ca)],
    headers: { "Content-Type": _0x55d30e[_0x531de9(0x25f)] },
    body: JSON[_0x531de9(0x269)]({
      to: _0x57bc84[_0x531de9(0x2f1)],
      subject: _0x55d30e[_0x531de9(0x3ea)](
        _0x531de9(0x3a4),
        _0x57bc84[_0x531de9(0x31d)]
      ),
      html: _0x1d297e,
    }),
  })
    [_0x531de9(0x349)]((_0x2ccb0b) => {
      const _0x534e40 = _0x531de9;
      if (!_0x2ccb0b["ok"])
        throw new Error(_0x534e40(0x323) + _0x2ccb0b[_0x534e40(0x348)]);
      return _0x2ccb0b[_0x534e40(0x287)]();
    })
    ["then"]((_0x779d6) => {
      const _0x17710c = _0x531de9;
      console[_0x17710c(0x2d4)](_0x55d30e[_0x17710c(0x227)]);
    })
    [_0x531de9(0x20f)]((_0x4e97a3) => {
      const _0x5677c6 = _0x531de9;
      console[_0x5677c6(0x2f8)](_0x5677c6(0x204), _0x4e97a3),
        _0x55d30e[_0x5677c6(0x1e8)](hideLoadingMessage),
        resetSubmitButtonState(),
        _0x55d30e[_0x5677c6(0x19a)](
          alert,
          _0x55d30e[_0x5677c6(0x232)](
            _0x55d30e[_0x5677c6(0x353)],
            _0x4e97a3[_0x5677c6(0x26b)]
          )
        );
    });
}
function showLoadingMessage(_0x138872) {
  const _0x2f840e = a0_0x9acab,
    _0x52065e = {
      svJLz: function (_0x101e51) {
        return _0x101e51();
      },
      AFsVW: "div",
      bWhtu: _0x2f840e(0x318),
      PQREf: _0x2f840e(0x3e4),
    };
  _0x52065e["svJLz"](hideLoadingMessage);
  const _0x36ad99 = document["createElement"](_0x52065e[_0x2f840e(0x3db)]);
  (_0x36ad99["id"] = _0x52065e[_0x2f840e(0x246)]),
    (_0x36ad99[_0x2f840e(0x3e4)]["cssText"] = _0x2f840e(0x282));
  const _0x5392b6 = document[_0x2f840e(0x257)](_0x52065e[_0x2f840e(0x3db)]);
  _0x5392b6[_0x2f840e(0x3e4)][_0x2f840e(0x386)] = _0x2f840e(0x2b2);
  if (!document[_0x2f840e(0x1ad)](_0x2f840e(0x1ee))) {
    const _0x2ee7ad = document[_0x2f840e(0x257)](_0x52065e[_0x2f840e(0x3e0)]);
    (_0x2ee7ad["id"] = _0x2f840e(0x1ee)),
      (_0x2ee7ad["textContent"] = _0x2f840e(0x24e)),
      document[_0x2f840e(0x3d6)][_0x2f840e(0x326)](_0x2ee7ad);
  }
  _0x36ad99[_0x2f840e(0x326)](_0x5392b6);
  const _0x5386b2 = document[_0x2f840e(0x3a5)](_0x138872);
  _0x36ad99["appendChild"](_0x5386b2),
    document["body"][_0x2f840e(0x326)](_0x36ad99);
}
function hideLoadingMessage() {
  const _0x128c3c = a0_0x9acab,
    _0x21b684 = document[_0x128c3c(0x1ad)](_0x128c3c(0x318));
  _0x21b684 && _0x21b684[_0x128c3c(0x215)]();
}
function resetOrder() {
  const _0x1c380f = a0_0x9acab,
    _0x5e0455 = {
      puZCU: "/shop",
      TpBuA: _0x1c380f(0x3f4),
      yOOjS: _0x1c380f(0x24a),
      LjsSi: _0x1c380f(0x37b),
      dAGBr: _0x1c380f(0x286),
      qgPOh: "quantity",
      qJUJT: ".package-card",
      bQrsn: _0x1c380f(0x322),
      ZGzTp: _0x1c380f(0x1b6),
      OIQza: _0x1c380f(0x2cc),
      LPisC: "checkout-section",
      hFrIC: _0x1c380f(0x2ab),
      PqsBx: _0x1c380f(0x2da),
      ixZgb: "individual-items-selection",
      hsQcx: _0x1c380f(0x2e9),
      ujGMS: function (_0x51c3ba, _0x1c78a5, _0x19b61a) {
        return _0x51c3ba(_0x1c78a5, _0x19b61a);
      },
    };
  (selectedPackage = null),
    (selectedSizes = { polo: [], jacket: [], jersey: [] }),
    (quantity = 0x1),
    (deliveryType = null),
    (totalAmount = 0x0),
    (individualItems = {
      polo: { price: 0x167, quantity: 0x0 },
      jacket: { price: 0x316, quantity: 0x0 },
      jersey: { price: 0x122, quantity: 0x0 },
      belt: { price: 0x81, quantity: 0x0 },
      tung: { price: 0x77, quantity: 0x0 },
      tie: { price: 0x77, quantity: 0x0 },
    }),
    (slip = null),
    document[_0x1c380f(0x3b0)](_0x5e0455[_0x1c380f(0x375)])[_0x1c380f(0x285)](
      (_0x4b9be5) => (_0x4b9be5[_0x1c380f(0x17e)] = ![])
    ),
    document[_0x1c380f(0x3b0)](_0x5e0455[_0x1c380f(0x265)])[_0x1c380f(0x285)](
      (_0x198cf4) => (_0x198cf4[_0x1c380f(0x306)] = "")
    ),
    document[_0x1c380f(0x3b0)](_0x1c380f(0x20c))[_0x1c380f(0x285)](
      (_0x2055d7) => (_0x2055d7[_0x1c380f(0x385)] = 0x0)
    ),
    (document[_0x1c380f(0x1ad)](_0x5e0455["qgPOh"])[_0x1c380f(0x306)] = 0x1);
  const _0x24a9e9 = document[_0x1c380f(0x1ad)](_0x1c380f(0x35e));
  _0x24a9e9 && (_0x24a9e9[_0x1c380f(0x306)] = ""),
    document[_0x1c380f(0x3b0)](_0x5e0455[_0x1c380f(0x309)])[_0x1c380f(0x285)](
      (_0x430a41) =>
        _0x430a41[_0x1c380f(0x3b2)][_0x1c380f(0x215)](_0x1c380f(0x1d1))
    ),
    document[_0x1c380f(0x3b0)](_0x5e0455[_0x1c380f(0x31e)])["forEach"](
      (_0x550499) => _0x550499[_0x1c380f(0x3b2)]["remove"](_0x1c380f(0x1d1))
    ),
    document["querySelectorAll"](_0x5e0455["ZGzTp"])[_0x1c380f(0x285)](
      (_0x4c95bc) => _0x4c95bc[_0x1c380f(0x3b2)]["remove"](_0x1c380f(0x1d1))
    ),
    (document[_0x1c380f(0x1ad)](_0x1c380f(0x25d))[_0x1c380f(0x3e4)]["display"] =
      _0x5e0455["OIQza"]),
    (document[_0x1c380f(0x1ad)](_0x5e0455["LPisC"])["style"][_0x1c380f(0x279)] =
      _0x5e0455[_0x1c380f(0x292)]),
    (document[_0x1c380f(0x1ad)](_0x5e0455["hFrIC"])[_0x1c380f(0x3e4)][
      _0x1c380f(0x279)
    ] = _0x5e0455["OIQza"]),
    (document[_0x1c380f(0x1ad)](_0x1c380f(0x24a))["style"][_0x1c380f(0x279)] =
      _0x5e0455[_0x1c380f(0x1c1)]),
    (document[_0x1c380f(0x1ad)](_0x5e0455["ixZgb"])["style"][_0x1c380f(0x279)] =
      _0x5e0455[_0x1c380f(0x292)]),
    document[_0x1c380f(0x3b0)](_0x5e0455[_0x1c380f(0x2e8)])[_0x1c380f(0x285)](
      (_0xcb7f8a) => (_0xcb7f8a["textContent"] = "")
    ),
    _0x5e0455[_0x1c380f(0x1a4)](
      setTimeout,
      () => {
        const _0x36ea98 = _0x1c380f;
        (window[_0x36ea98(0x2e7)][_0x36ea98(0x178)] =
          _0x5e0455[_0x36ea98(0x26e)]),
          window["scrollTo"]({
            top: 0x0,
            behavior: _0x5e0455[_0x36ea98(0x3d3)],
          }),
          document["getElementById"](_0x5e0455[_0x36ea98(0x1c0)])[
            _0x36ea98(0x1cc)
          ]({ behavior: _0x5e0455["TpBuA"] });
      },
      0x3e8
    );
}
document["addEventListener"](a0_0x9acab(0x3d1), function () {
  const _0x1c3f41 = a0_0x9acab,
    _0x1709a0 = {
      ARhuo: function (_0x515649) {
        return _0x515649();
      },
      tOzEr: "image/",
      PWvSk: _0x1c3f41(0x214),
      bLKCr: _0x1c3f41(0x2f7),
      UfGxi: _0x1c3f41(0x2cc),
      JwLVa: _0x1c3f41(0x35e),
      ZTJQG: "slip-error",
      cYSNj: "slip-thumbnail-container",
      yxjGI: _0x1c3f41(0x2e6),
      HqFcV: _0x1c3f41(0x252),
      cuJSt: function (_0x287608, _0x100c3b) {
        return _0x287608 || _0x100c3b;
      },
      pjyzJ: _0x1c3f41(0x23e),
      zBAyr: _0x1c3f41(0x39b),
      jzjWo: _0x1c3f41(0x341),
    },
    _0x2fd000 = document[_0x1c3f41(0x1ad)](_0x1709a0["JwLVa"]),
    _0x225163 = document[_0x1c3f41(0x1ad)](_0x1709a0[_0x1c3f41(0x273)]),
    _0x466dfd = document["getElementById"](_0x1709a0["cYSNj"]),
    _0x3f99c6 = document[_0x1c3f41(0x1ad)]("slip-thumbnail-img"),
    _0x2cd791 = document[_0x1c3f41(0x1ad)]("slip-enlarged-viewer"),
    _0x4aef13 = document[_0x1c3f41(0x1ad)](_0x1709a0["yxjGI"]),
    _0x166545 = document[_0x1c3f41(0x1ad)](_0x1709a0[_0x1c3f41(0x1e6)]);
  let _0x410580 = "";
  if (
    _0x1709a0[_0x1c3f41(0x2a7)](!_0x2fd000, !_0x225163) ||
    !_0x466dfd ||
    !_0x3f99c6 ||
    !_0x2cd791 ||
    !_0x4aef13 ||
    !_0x166545
  ) {
    console[_0x1c3f41(0x2f8)](_0x1709a0["pjyzJ"]);
    return;
  }
  _0x2fd000["addEventListener"](_0x1709a0[_0x1c3f41(0x19e)], function () {
    const _0x59ff78 = _0x1c3f41;
    _0x1709a0["ARhuo"](_0x425076);
    if (_0x2fd000["files"] && _0x2fd000[_0x59ff78(0x3cd)][0x0]) {
      const _0x2ddd34 = _0x2fd000[_0x59ff78(0x3cd)][0x0];
      if (!_0x2ddd34["type"]["startsWith"](_0x1709a0[_0x59ff78(0x26d)])) {
        const _0x4cdc24 = _0x1709a0[_0x59ff78(0x226)][_0x59ff78(0x24f)]("|");
        let _0xb509ef = 0x0;
        while (!![]) {
          switch (_0x4cdc24[_0xb509ef++]) {
            case "0":
              _0x3f99c6[_0x59ff78(0x2eb)] = "";
              continue;
            case "1":
              return;
            case "2":
              _0x2fd000["value"] = "";
              continue;
            case "3":
              _0x225163["textContent"] = _0x1709a0[_0x59ff78(0x38e)];
              continue;
            case "4":
              _0x410580 = "";
              continue;
            case "5":
              _0x466dfd[_0x59ff78(0x3e4)][_0x59ff78(0x279)] =
                _0x1709a0[_0x59ff78(0x25a)];
              continue;
          }
          break;
        }
      }
      _0x225163["textContent"] = "";
      const _0x354dc9 = new FileReader();
      (_0x354dc9["onload"] = function (_0x38b6eb) {
        const _0x3bbb30 = _0x59ff78;
        (_0x410580 = _0x38b6eb[_0x3bbb30(0x1f3)][_0x3bbb30(0x1d6)]),
          (_0x3f99c6[_0x3bbb30(0x2eb)] = _0x410580),
          (_0x466dfd[_0x3bbb30(0x3e4)]["display"] = "block");
      }),
        _0x354dc9[_0x59ff78(0x293)](_0x2ddd34);
    } else (_0x410580 = ""), (_0x3f99c6["src"] = ""), (_0x466dfd[_0x59ff78(0x3e4)][_0x59ff78(0x279)] = _0x1709a0[_0x59ff78(0x25a)]);
  }),
    _0x3f99c6[_0x1c3f41(0x30e)](_0x1709a0[_0x1c3f41(0x365)], function () {
      _0x410580 && _0x3a8d9a();
    }),
    _0x166545[_0x1c3f41(0x30e)](_0x1709a0[_0x1c3f41(0x365)], _0x425076);
  function _0x3a8d9a() {
    const _0x488a32 = _0x1c3f41;
    _0x410580 &&
      ((_0x4aef13[_0x488a32(0x2eb)] = _0x410580),
      (_0x2cd791[_0x488a32(0x3e4)][_0x488a32(0x279)] = _0x488a32(0x2da)));
  }
  function _0x425076() {
    const _0x12cb53 = _0x1c3f41;
    _0x2cd791[_0x12cb53(0x3e4)][_0x12cb53(0x279)] = _0x12cb53(0x2cc);
  }
});
function filterProducts(_0x2bbb20) {
  const _0x260037 = a0_0x9acab,
    _0x12acbd = {
      XaVig: _0x260037(0x18e),
      Khewn: _0x260037(0x20a),
      VGKzK: _0x260037(0x18f),
      FnVMa: function (_0x4613db, _0x30503c) {
        return _0x4613db === _0x30503c;
      },
      hEujx: _0x260037(0x301),
      SkFZO: function (_0x1a4893, _0x10ef71) {
        return _0x1a4893 === _0x10ef71;
      },
      hRKeJ: _0x260037(0x2da),
      cVvrr: "none",
      cdIbQ: _0x260037(0x3be),
      BRyFH: _0x260037(0x384),
      yfCSH: function (_0x1cdfa1, _0x3449b6) {
        return _0x1cdfa1 === _0x3449b6;
      },
      xlsRR: _0x260037(0x355),
      wKTxn: function (_0x146e65) {
        return _0x146e65();
      },
      qVBLc: "selection-details",
      RztgD: "#product-btn\x20button",
      ZNAPj: _0x260037(0x1db),
      gfefA: _0x260037(0x3ca),
      JWHbK: _0x260037(0x3e1),
    },
    _0x2c1ce2 = document[_0x260037(0x3b0)](_0x12acbd["cdIbQ"]);
  _0x2c1ce2[_0x260037(0x285)]((_0x41c468) => {
    const _0x2abe8f = _0x260037,
      _0x66a12c = _0x41c468["querySelector"](_0x12acbd[_0x2abe8f(0x197)])[
        _0x2abe8f(0x2de)
      ](_0x12acbd[_0x2abe8f(0x3ed)]);
    if (_0x2bbb20 === _0x12acbd[_0x2abe8f(0x2c0)])
      _0x41c468["style"][_0x2abe8f(0x279)] = _0x2abe8f(0x2da);
    else
      _0x12acbd[_0x2abe8f(0x38d)](_0x2bbb20, _0x12acbd[_0x2abe8f(0x166)]) &&
      _0x12acbd[_0x2abe8f(0x33d)](_0x66a12c, _0x12acbd["hEujx"])
        ? (_0x41c468["style"]["display"] = _0x12acbd[_0x2abe8f(0x254)])
        : (_0x41c468[_0x2abe8f(0x3e4)]["display"] =
            _0x12acbd[_0x2abe8f(0x3d4)]);
  }),
    document[_0x260037(0x3b0)](_0x12acbd["BRyFH"])[_0x260037(0x285)](
      (_0x60c799) => {
        const _0x563da3 = _0x260037;
        _0x60c799[_0x563da3(0x17e)] = ![];
      }
    );
  if (_0x12acbd[_0x260037(0x3c5)](_0x2bbb20, _0x12acbd[_0x260037(0x166)])) {
    const _0x92113c = document[_0x260037(0x2c6)](_0x12acbd[_0x260037(0x2fa)]);
    _0x92113c && (_0x92113c[_0x260037(0x17e)] = !![]),
      (selectedPackage = _0x12acbd["hEujx"]),
      updatePackageSelection(),
      _0x12acbd[_0x260037(0x2c9)](showSelectionDetails);
  } else
    (selectedPackage = null),
      (document[_0x260037(0x1ad)](_0x12acbd[_0x260037(0x3eb)])[
        _0x260037(0x3e4)
      ][_0x260037(0x279)] = _0x12acbd[_0x260037(0x3d4)]);
  const _0x5c877a = document["querySelectorAll"](_0x12acbd["RztgD"]);
  _0x5c877a[_0x260037(0x285)]((_0x5565bf) => {
    const _0x55af51 = _0x260037;
    _0x5565bf[_0x55af51(0x3b2)][_0x55af51(0x215)](_0x55af51(0x3ca)),
      _0x5565bf[_0x55af51(0x3b2)][_0x55af51(0x184)](_0x55af51(0x3e1));
  });
  let _0x34c736;
  if (_0x2bbb20 === _0x260037(0x18f))
    _0x34c736 = document[_0x260037(0x2c6)](
      "#product-btn\x20button:nth-child(1)"
    );
  else
    _0x2bbb20 === _0x12acbd[_0x260037(0x166)] &&
      (_0x34c736 = document[_0x260037(0x2c6)](_0x12acbd["ZNAPj"]));
  _0x34c736 &&
    (_0x34c736[_0x260037(0x3b2)][_0x260037(0x184)](_0x12acbd[_0x260037(0x24b)]),
    _0x34c736[_0x260037(0x3b2)][_0x260037(0x215)](_0x12acbd[_0x260037(0x196)]));
}
document["addEventListener"](a0_0x9acab(0x3d1), () => {
  const _0x1d518e = a0_0x9acab,
    _0x5c47f7 = {
      yIqMw: function (_0xbae83a, _0x4d2eca) {
        return _0xbae83a(_0x4d2eca);
      },
    };
  _0x5c47f7["yIqMw"](filterProducts, _0x1d518e(0x301));
});
function showCustomerForm() {
  const _0xf144ed = a0_0x9acab,
    _0x360c6f = {
      hUlsL: _0xf144ed(0x2da),
      ffALX: _0xf144ed(0x2cc),
      mzwTE: function (_0x4cf239) {
        return _0x4cf239();
      },
    };
  (document[_0xf144ed(0x1ad)](_0xf144ed(0x221))[_0xf144ed(0x3e4)][
    _0xf144ed(0x279)
  ] = _0x360c6f[_0xf144ed(0x26c)]),
    (document["getElementById"](_0xf144ed(0x24a))[_0xf144ed(0x3e4)]["display"] =
      _0x360c6f[_0xf144ed(0x31a)]),
    _0x360c6f[_0xf144ed(0x27f)](hideProductButtons);
}
function hideProductButtons() {
  const _0x370318 = a0_0x9acab,
    _0x39e860 = { gSnEp: _0x370318(0x2cc) },
    _0x58b7de = document["querySelectorAll"](".product-btn");
  _0x58b7de[_0x370318(0x285)]((_0x3429f9) => {
    const _0x329a85 = _0x370318;
    _0x3429f9[_0x329a85(0x3e4)][_0x329a85(0x279)] = _0x39e860[_0x329a85(0x1d7)];
  });
}
function showProductButtons() {
  const _0x4e8831 = a0_0x9acab,
    _0x1c5fa3 = { BvfWk: _0x4e8831(0x211) },
    _0x1024a3 = document[_0x4e8831(0x3b0)](_0x1c5fa3[_0x4e8831(0x28d)]);
  _0x1024a3[_0x4e8831(0x285)]((_0x2725af) => {
    const _0x14640d = _0x4e8831;
    _0x2725af[_0x14640d(0x3e4)]["display"] = "inline-block";
  });
}
document[a0_0x9acab(0x30e)](a0_0x9acab(0x3d1), function () {
  const _0x3f5ba9 = a0_0x9acab,
    _0x5eb2a0 = {
      npbaN: _0x3f5ba9(0x181),
      hoDMF: _0x3f5ba9(0x30f),
      UlIFk: function (_0x213cdf, _0x3a045c) {
        return _0x213cdf > _0x3a045c;
      },
      saRZn: function (_0x507ad1, _0x5a88c5) {
        return _0x507ad1 * _0x5a88c5;
      },
      MHPoq: _0x3f5ba9(0x165),
      HvHjR: _0x3f5ba9(0x3d5),
      ZnpKF: _0x3f5ba9(0x171),
    },
    _0x19485f = localStorage[_0x3f5ba9(0x30b)](_0x5eb2a0[_0x3f5ba9(0x3f7)]),
    _0x24f944 = new Date()[_0x3f5ba9(0x256)]();
  if (
    !_0x19485f ||
    _0x5eb2a0[_0x3f5ba9(0x1be)](
      _0x24f944 - parseInt(_0x19485f),
      _0x5eb2a0["saRZn"](0x3c, 0x3c) * 0x3e8
    )
  ) {
    const _0x4a6504 = new bootstrap[_0x3f5ba9(0x2cd)](
      document[_0x3f5ba9(0x1ad)]("carouselModal")
    );
    _0x4a6504["show"]();
    const _0x5d6dbc = new bootstrap[_0x3f5ba9(0x270)](
      document[_0x3f5ba9(0x1ad)](_0x5eb2a0[_0x3f5ba9(0x311)]),
      { interval: 0xbb8, wrap: !![] }
    );
  }
  document["getElementById"](_0x5eb2a0[_0x3f5ba9(0x3c1)])["addEventListener"](
    _0x5eb2a0["ZnpKF"],
    function () {
      const _0x265ab3 = _0x3f5ba9;
      document["getElementById"](_0x5eb2a0[_0x265ab3(0x32f)])[
        _0x265ab3(0x17e)
      ] && localStorage["setItem"](_0x5eb2a0["hoDMF"], new Date()["getTime"]());
    }
  );
}),
  document[a0_0x9acab(0x30e)](a0_0x9acab(0x3d1), function () {
    const _0x475c18 = a0_0x9acab,
      _0x3d8367 = {
        nKeQi: function (_0x2d1be4, _0x3d3d65) {
          return _0x2d1be4 === _0x3d3d65;
        },
        RjFKy: "Enter",
      },
      _0x4d86ae = document[_0x475c18(0x1ad)](_0x475c18(0x3a2));
    _0x4d86ae &&
      _0x4d86ae[_0x475c18(0x30e)](_0x475c18(0x328), function (_0xbbf31a) {
        const _0x21d258 = _0x475c18;
        _0x3d8367[_0x21d258(0x3df)](
          _0xbbf31a[_0x21d258(0x261)],
          _0x3d8367[_0x21d258(0x2cf)]
        ) && _0xbbf31a[_0x21d258(0x190)]();
      });
  });
function goBack() {
  const _0x33e510 = a0_0x9acab,
    _0x21a83d = {
      LrwIs: _0x33e510(0x2cc),
      QYtMD: _0x33e510(0x2da),
      bOcah: _0x33e510(0x3f4),
    };
  (document[_0x33e510(0x1ad)](_0x33e510(0x221))["style"]["display"] =
    _0x21a83d[_0x33e510(0x3ee)]),
    (document[_0x33e510(0x1ad)](_0x33e510(0x24a))[_0x33e510(0x3e4)][
      _0x33e510(0x279)
    ] = _0x21a83d[_0x33e510(0x332)]),
    window[_0x33e510(0x321)]({
      top: 0x0,
      behavior: _0x21a83d[_0x33e510(0x1f2)],
    });
}
const carousel = document[a0_0x9acab(0x2c6)](a0_0x9acab(0x2ff)),
  bsCarousel = new bootstrap[a0_0x9acab(0x270)](carousel, {
    interval: 0x5dc,
    ride: a0_0x9acab(0x39e),
  });
