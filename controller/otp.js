import { FormattedData } from "../helper/formattedResponse.js";
import OtpService from "../service/otp.service.js";

class Otp {
    constructor() {
        this.service = new OtpService();
    }


    getOtp = async (req, res) => {
        try {
            const { mobileNo } = req.body;
            const resData = await this.service.getOtp(mobileNo);
            res.status(200).json(resData);

        } catch (error) {
            console.log(error)
            res.status(500).json(FormattedData(false, 'internal error'))
        }
    }
    veryOtp = async (req, res) => {
        try {
            const { mobileNo,otp } = req.body;
            const resData = await this.service.verifyOtp(mobileNo,otp);
            res.status(200).json(resData);

        } catch (error) {
            console.log(error)
            res.status(500).json(FormattedData(false, 'internal error'))
        }
    }
    deleteOtp = async (req, res) => {
        try {
            const { mobileNo } = req.params.no;
            // const resData = await this.service.deleteOtp()
            res.status(200).json(resData);

        } catch (error) {
            console.log(error)
            res.status(500).json(FormattedData(false, 'internal error'))
        }
    }

}
export default Otp;