import express from "express";
import Otp from "../controller/otp.js";
const router = express.Router();
const OTP = new Otp()

    router.post('/get',OTP.getOtp);
    router.post('/verify',OTP.veryOtp);
    router.delete('/:no');
export {router as OtpRouter}