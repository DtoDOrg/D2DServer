import nodemailer from 'nodemailer';
import { CONFIG } from '../config/config.js';
export const sendEmail = async options => {
    const transporter = nodemailer.createTransport({
        service: 'Gmail',
        host: 'smtp.gmail.com',
        port: 465,
        secure: true,
        auth: {
            user: CONFIG.EMAIL,
            pass: CONFIG.PASSWORD,
        },
    });
    const mailOptions = {
        from: CONFIG.EMAIL,
        to: options.email,
        subject: options.subject,
        html: options.html,
    };
    try {
        await transporter.sendMail(mailOptions);
    } catch (error) {
        throw error;
    }
};
