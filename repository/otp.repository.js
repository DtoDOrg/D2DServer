import OtpModel from '../model/otp.model.js';

const OTPRepository = {
    //create otp
    create: async data => {
        try {
            const result = await OtpModel.create(data);
            return result;
        } catch (error) {
            throw error;
        }
    },
    //find by email
    findByEmail: async email => {
        try {
            const result = await OtpModel.findOne({ email: email });
            return result;
        } catch (error) {
            throw error;
        }
    },
    //delete by email
    deleteByEmail: async email => {
        try {
            const result = await OtpModel.deleteOne({ email: email });
            return result;
        } catch (error) {
            throw error;
        }
    },
};

export default OTPRepository;
