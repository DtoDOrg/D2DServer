import { FormattedData } from "../helper/formattedResponse.js";
import OtpService from "../service/otp.service.js";

const otpService = new OtpService();
export const getOtp = async (req, res) => {
    try {
        const { mobileNo } = req.body;
        const resData = await otpService.getOtp(mobileNo);
        res.status(200).json(resData);

    } catch (error) {
        console.log(error)
        res.status(500).json(FormattedData(false, 'internal error'))
    }
}
export const veryOtp = async (req, res) => {
    try {
        const { mobileNo, otp } = req.body;
        const resData = await otpService.verifyOtp(mobileNo, otp);
        res.status(200).json(resData);

    } catch (error) {
        console.log(error)
        res.status(500).json(FormattedData(false, 'internal error'))
    }
}
export const deleteOtp = async (req, res) => {
    try {
        const { mobileNo } = req.params.no;
        // const resData = await this.service.deleteOtp()
        res.status(200).json(resData);

    } catch (error) {
        console.log(error)
        res.status(500).json(FormattedData(false, 'internal error'))
    }
}


