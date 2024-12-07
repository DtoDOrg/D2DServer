import express from 'express';
import { sendOtp, verifyOtp } from '../controller/otp.controller.js';

const router = express.Router();

//send OTP
router.post('/', sendOtp);
//verifyOTP
router.post('/verify', verifyOtp);

export { router as OTPRouter };
