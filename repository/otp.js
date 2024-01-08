import OtpModel from "../model/otp.models.js"


class OtpRepository {
    //create an otp
    createOtp = async (mobileNo, Otp) => {
        try {
            const res = await OtpModel.create({
                mobileNo: mobileNo,
                otp: Otp,
                isVerified: false
            })
            if (res) {
                return true;
            } else {
                return false;
            }
        } catch (error) {
            console.log(error);
            return false;
        }
    }

    //get Otp
    getOtp = async (mobileNo) => {
        try {
            const data = await OtpModel.findOne({ 'mobileNo': mobileNo });
            if (data) {
                return data.otp;
            } else {
                return null
            }
        } catch (error) {
            console.log(error);
            return null;
        }
    }


    //delete an otp
    deleteOtp = async (mobileNo) => {

        try {
            const res = await OtpModel.deleteOne({ mobileNo: mobileNo });
            if (res.acknowledged) {
                return true;
            } else {
                return false;
            }
        } catch (error) {
            console.log(error);
            return false;
        }

    }

    //update an otp 
    updateOtp = async (mobileNo, newOtp) => {
        try {
            await OtpModel.updateOne({ mobileNo: mobileNo }, { $set: { otp: newOtp } }, { new: true });
            return true;

        } catch (error) {
            console.log(error);
            return false;
        }

    }

    //change an  otp status
    changeOtpStatus = async (mobileNo) => {
        try {
            const otpData = await this.getOtp(mobileNo);
            otpData.isVerified = !otpData.isVerified;
            await otpData.save();
            return true;
        } catch (error) {
            console.log(error);
            return false;
        }
    }
}
export default OtpRepository;