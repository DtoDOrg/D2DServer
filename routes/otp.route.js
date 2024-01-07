import express from "express";
import { getOtp, veryOtp } from "../controller/otp.js";
const router = express.Router();


    router.post('/get',getOtp);
    router.post('/verify',veryOtp);
    router.delete('/:no');
export {router as OtpRouter}