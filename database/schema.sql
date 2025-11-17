CREATE DATABASE IF NOT EXISTS smocp_db;
USE smocp_db;

CREATE TABLE IF NOT EXISTS orders (
    id INT AUTO_INCREMENT PRIMARY KEY,
    order_ref VARCHAR(50) UNIQUE NOT NULL,
    package_name VARCHAR(100) NOT NULL,
    firstname VARCHAR(100) NOT NULL,
    lastname VARCHAR(100) NOT NULL,
    email VARCHAR(150) NOT NULL,
    phone VARCHAR(20) NOT NULL,
    status VARCHAR(50) NOT NULL DEFAULT 'student-in',
    year VARCHAR(10),
    major VARCHAR(100),
    faculty VARCHAR(100),
    student_id VARCHAR(20),
    delivery_type ENUM('pickup', 'shipping') NOT NULL,
    address TEXT,
    total_amount DECIMAL(10, 2) NOT NULL,
    items JSON,
    notes TEXT,
    slip_url TEXT,
    tracking_code VARCHAR(50),
    order_status ENUM('pending', 'confirmed', 'preparing', 'shipping', 'delivered') DEFAULT 'pending',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

CREATE INDEX idx_order_ref ON orders(order_ref);
CREATE INDEX idx_email ON orders(email);
CREATE INDEX idx_phone ON orders(phone);
CREATE INDEX idx_order_status ON orders(order_status);
CREATE INDEX idx_created_at ON orders(created_at);