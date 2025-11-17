const express = require('express');
const nodemailer = require('nodemailer');
const router = express.Router();


require('dotenv').config();


router.post('/', async (req, res) => {
    const { to, subject, html, bcc } = req.body;

    if (!to || !subject || !html) {
        return res.status(400).json({ success: false, message: 'Missing required fields' });
    }

    try {
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS
            }
        });

        const mailOptions = {
            from: `"SMOCP SHOP" <${process.env.EMAIL_USER}>`,
            to,
            bcc, 
            subject,
            html
        };

        const info = await transporter.sendMail(mailOptions);
        console.log('Email sent:', info.messageId);
        res.json({ success: true, messageId: info.messageId });
    } catch (err) {
        console.error('Email sending error:', err);
        res.status(500).json({ success: false, message: err.message });
    }
});

module.exports = router;
