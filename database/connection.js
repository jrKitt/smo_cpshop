const mysql = require('mysql2/promise');
require('dotenv').config();

const pool = mysql.createPool({
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    user: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
});

async function testConnection() {
    try {
        const connection = await pool.getConnection();
        console.log('Database connected successfully');
        connection.release();
        return true;
    } catch (error) {
        console.error('Database connection failed:', error.message);
        return false;
    }
}

async function initializeDatabase() {
    try {
        const connection = await pool.getConnection();
        
        const createTableQuery = `
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
            )
        `;
        
        await connection.execute(createTableQuery);
        
        const indexes = [
            'CREATE INDEX IF NOT EXISTS idx_order_ref ON orders(order_ref)',
            'CREATE INDEX IF NOT EXISTS idx_email ON orders(email)',
            'CREATE INDEX IF NOT EXISTS idx_phone ON orders(phone)',
            'CREATE INDEX IF NOT EXISTS idx_order_status ON orders(order_status)',
            'CREATE INDEX IF NOT EXISTS idx_created_at ON orders(created_at)'
        ];
        
        for (const indexQuery of indexes) {
            try {
                await connection.execute(indexQuery);
            } catch (indexError) {
                if (!indexError.message.includes('Duplicate key name')) {
                    console.warn('Index creation warning:', indexError.message);
                }
            }
        }
        
        connection.release();
        console.log('Database initialized successfully');
        return true;
    } catch (error) {
        console.error('Database initialization failed:', error.message);
        return false;
    }
}

module.exports = {
    pool,
    testConnection,
    initializeDatabase
};