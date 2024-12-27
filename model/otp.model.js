import mongoose from 'mongoose';
const OtpSchema = new mongoose.Schema(
    {
        email: {
            type: String,
            required: true,
            lowercase: true,
            unique: true,
        },
        otp: {
            type: String,
            required: true,
        },
    },
    {
        timestamps: true,
        versionKey: false,
    }
);

const OtpModel = mongoose.model('otp', OtpSchema);
export default OtpModel;
