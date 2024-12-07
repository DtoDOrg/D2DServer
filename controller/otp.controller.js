import { FormattedData } from '../helper/formattedResponse.js';
import { httpStatus } from '../middleware/error.js';
import OTPService from '../service/otp.service.js';

const service = new OTPService();
export const sendOtp = async (req, res, next) => {
    try {
        const otp = await service.sendOTP(req.body.email);
        return res.status(httpStatus.success).json(FormattedData(true, otp, 'otp fetched'));
    } catch (error) {
        next(error);
    }
};

export const verifyOtp = async (req, res, next) => {
    try {
        const otp = await service.verifyOtp(req.body.email, req.body.otp);
        return res.status(httpStatus.success).json(FormattedData(true, otp, 'otp verified'));
    } catch (error) {
        next(error);
    }
};
