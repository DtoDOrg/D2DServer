import { FormattedData } from "../helper/formattedResponse.js";
import OtpRepository from "../repository/otp.js";

class OtpService {
    constructor() {
        this.otp = new OtpRepository();
    }
    findOtp = async (mobileNo) => {
        return await this.otp.getOtp(mobileNo)
    }
    getOtp = async (mobileNo) => {
        const otp = await this.findOtp(mobileNo);
        if (otp) {
            const newOtp = Math.floor(Math.random() * 1000) + 1;
            //send the otp to mobile number

            if (await this.otp.updateOtp(mobileNo, newOtp)) {
                return FormattedData(true, `OTP send to ${mobileNo} `);
            } else {
                return FormattedData(false, `OTP not send`);

            }

        } else {
            //create new data
            const otp = Math.floor(Math.random() * 1000) + 1;
            //send the otp to mobile number
            if (await this.otp.createOtp(mobileNo, otp)) {
                FormattedData(true, `OTP send to ${mobileNo}`)
            } else {
                FormattedData(false, `OTP not send`)
            }
        }
    }
    verifyOtp = async (mobileNo, otp) => {
        const otpData = await this.findOtp(mobileNo);
        if (otpData) {
            if (otpData == otp) {
                return FormattedData(true, `OTP verified`);
            } else {
                return FormattedData(false, `OTP not verified`);
            }
        } else {
            FormattedData(false, `OTP not found for ${mobileNo}`)
        }
    }

}
export default OtpService;