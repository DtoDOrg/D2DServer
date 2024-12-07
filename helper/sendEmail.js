import nodemailer from 'nodemailer';

import { CONFIG } from '../config/config.js';
export const sendEmail = async options => {
    console.log(CONFIG.EMAIL, CONFIG.PASSWORD);
    const transporter = nodemailer.createTransport({
        host: 'smtp.mailgun.org',
        port: 587,
        secure: false,
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
