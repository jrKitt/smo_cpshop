#!/usr/bin/env node

/**
 * CPSHOP Google Sheets Setup Helper
 * สคริปต์ช่วยตั้งค่าและตรวจสอบการเชื่อมต่อ Google Sheets
 */

const fs = require("fs");
const path = require("path");
require("dotenv").config();

console.log("🛒 CPSHOP Google Sheets Setup Helper");
console.log("=====================================\n");

// ตรวจสอบไฟล์ .env
function checkEnvFile() {
  console.log("📋 ตรวจสอบไฟล์ .env...");

  const envPath = path.join(__dirname, ".env");
  if (!fs.existsSync(envPath)) {
    console.log("❌ ไม่พบไฟล์ .env");
    console.log("💡 กรุณาสร้างไฟล์ .env ตามตัวอย่างใน .env.example\n");
    return false;
  }

  console.log("✅ พบไฟล์ .env แล้ว\n");
  return true;
}

// ตรวจสอบ Environment Variables
function checkEnvironmentVariables() {
  console.log("🔧 ตรวจสอบ Environment Variables...");

  const required = [
    "GOOGLE_SPREADSHEET_ID",
    "GOOGLE_SERVICE_ACCOUNT_EMAIL",
    "GOOGLE_SERVICE_ACCOUNT_PRIVATE_KEY",
  ];

  let allSet = true;

  required.forEach((key) => {
    const value = process.env[key];
    if (!value || value.includes("your_") || value.includes("your-project")) {
      console.log(`❌ ${key}: ยังไม่ได้ตั้งค่าหรือใช้ค่าตัวอย่าง`);
      allSet = false;
    } else {
      console.log(`✅ ${key}: ตั้งค่าแล้ว`);
    }
  });

  if (!allSet) {
    console.log("\n💡 กรุณาตั้งค่า Environment Variables ให้ครบถ้วน");
    console.log("📖 ดูวิธีการตั้งค่าใน GOOGLE_SHEETS_SETUP.md\n");
    return false;
  }

  console.log("✅ Environment Variables พร้อมใช้งาน\n");
  return true;
}

// สร้าง Google Sheets URL
function generateSheetsURL() {
  const spreadsheetId = process.env.GOOGLE_SPREADSHEET_ID;

  if (!spreadsheetId || spreadsheetId.includes("your_")) {
    console.log(
      "❌ ไม่สามารถสร้าง URL ได้ - GOOGLE_SPREADSHEET_ID ไม่ถูกต้อง\n"
    );
    return null;
  }

  const url = `https://docs.google.com/spreadsheets/d/${spreadsheetId}/edit`;
  console.log("🔗 Google Sheets URL:");
  console.log(url);
  console.log("");
  return url;
}

// แสดงข้อมูล Service Account
function showServiceAccountInfo() {
  console.log("👤 ข้อมูล Service Account:");

  const email = process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL;
  if (email && !email.includes("your-project")) {
    console.log(`📧 Email: ${email}`);

    // แยกข้อมูล project จาก email
    const projectMatch = email.match(/@(.+)\.iam\.gserviceaccount\.com/);
    if (projectMatch) {
      console.log(`🔧 Project: ${projectMatch[1]}`);
    }
  } else {
    console.log("❌ Service Account Email ยังไม่ได้ตั้งค่า");
  }

  const privateKey = process.env.GOOGLE_SERVICE_ACCOUNT_PRIVATE_KEY;
  if (privateKey && !privateKey.includes("Your private key")) {
    console.log("🔑 Private Key: ตั้งค่าแล้ว");
  } else {
    console.log("❌ Private Key ยังไม่ได้ตั้งค่า");
  }

  console.log("");
}

// แสดงขั้นตอนถัดไป
function showNextSteps() {
  console.log("📋 ขั้นตอนถัดไป:");
  console.log("");

  console.log("1️⃣ ตรวจสอบการแชร์ Google Sheets:");
  console.log("   - เปิด Google Sheets URL ด้านบน");
  console.log('   - คลิก "Share" มุมบนขวา');
  console.log("   - ตรวจสอบว่าได้แชร์กับ Service Account Email แล้ว");
  console.log('   - ตั้งสิทธิ์เป็น "Editor"');
  console.log("");

  console.log("2️⃣ สร้างโครงสร้างตาราง (เลือก 1 วิธี):");
  console.log(
    "   - วิธีที่ 1: รันเซิร์ฟเวอร์ (`npm start`) - ระบบจะสร้างอัตโนมัติ"
  );
  console.log(
    "   - วิธีที่ 2: ใช้ Google Apps Script (ดูไฟล์ google-apps-script-setup.js)"
  );
  console.log("   - วิธีที่ 3: Import CSV (ดูไฟล์ sample-orders-template.csv)");
  console.log("   - วิธีที่ 4: สร้างด้วยมือ (ดู SHEETS_TABLE_SETUP.md)");
  console.log("");

  console.log("3️⃣ ทดสอบระบบ:");
  console.log("   - รันเซิร์ฟเวอร์: npm start");
  console.log("   - เปิดเว็บไซต์: http://localhost:3000");
  console.log("   - ทดสอบสั่งซื้อสินค้า");
  console.log("   - ตรวจสอบข้อมูลใน Google Sheets");
  console.log("");
}

// แสดงการแก้ไขปัญหา
function showTroubleshooting() {
  console.log("🔧 การแก้ไขปัญหาที่พบบ่อย:");
  console.log("");

  console.log('❌ "The caller does not have permission"');
  console.log("   💡 แชร์ Spreadsheet กับ Service Account Email");
  console.log('   💡 ตรวจสอบสิทธิ์ให้เป็น "Editor"');
  console.log("");

  console.log('❌ "Unable to parse range"');
  console.log("   💡 ตรวจสอบ GOOGLE_SPREADSHEET_ID");
  console.log("   💡 ตรวจสอบว่า Spreadsheet ยังมีอยู่");
  console.log("");

  console.log('❌ "Invalid credentials"');
  console.log("   💡 ตรวจสอบ Service Account Email และ Private Key");
  console.log("   💡 ตรวจสอบว่า JSON key ไม่หมดอายุ");
  console.log("");

  console.log('❌ "Sheets API has not been used"');
  console.log("   💡 เปิดใช้งาน Google Sheets API ใน Google Cloud Console");
  console.log("");
}

// ฟังก์ชันหลัก
function main() {
  let canProceed = true;

  // ตรวจสอบไฟล์และ config
  if (!checkEnvFile()) canProceed = false;
  if (!checkEnvironmentVariables()) canProceed = false;

  // แสดงข้อมูล
  generateSheetsURL();
  showServiceAccountInfo();

  if (canProceed) {
    console.log("🎉 การตั้งค่าพร้อมใช้งาน!");
    console.log("");
    showNextSteps();
  } else {
    console.log("⚠️  การตั้งค่ายังไม่สมบูรณ์");
    console.log("");
    showTroubleshooting();
  }

  console.log("📚 เอกสารเพิ่มเติม:");
  console.log("   - GOOGLE_SHEETS_SETUP.md: คู่มือการตั้งค่าแบบละเอียด");
  console.log("   - SHEETS_TABLE_SETUP.md: วิธีสร้างตารางใน Google Sheets");
  console.log("   - README.md: ข้อมูลโครงการและวิธีใช้งาน");
  console.log("");
}

// รันฟังก์ชันหลัก
main();
