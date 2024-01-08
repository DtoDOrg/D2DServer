import mongoose from "mongoose";
import { Schema } from "mongoose";
const otpSchema  = new Schema({
    mobileNo:{
        required: true,
        type:String
    },
    otp:{
        required: true,
        type:Number
    },
    isVerified:{
        required: true,
        type:Boolean
    }
});
const OtpModel = mongoose.model('otps',otpSchema);
export default OtpModel;