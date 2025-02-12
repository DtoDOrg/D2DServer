import { sendEmail } from '../helper/sendEmail.js';
import { OTPTemplate } from '../helper/template/otpTemplate.js';
import ApiError, { httpStatus } from '../middleware/error.js';
import OTPRepository from '../repository/otp.repository.js';
import ServiceProviderRepository from '../repository/serviceProvider.repository.js';
import UserRepository from '../repository/user.js';

class OTPService {
    async generateOTP() {
        const digits = '1234567890';
        let OTP = '';
        for (let i = 0; i < 6; i++) {
            OTP += digits[Math.floor(Math.random() * 10)];
        }
        return OTP;
    }
    //save otp
    async sendOTP(email) {
        try {
            if (!email) {
                throw new ApiError(httpStatus.badRequest, 'email is required');
            }
            const otp = await this.generateOTP();
            const data = {
                email: email,
                otp: otp,
            };
            const existOTP = await OTPRepository.findByEmail(email);
            if (existOTP) {
                await OTPRepository.deleteByEmail(email);
            }
            const res = await OTPRepository.create(data);
            //send OTP to email
            const options = {
                email: email,
                subject: 'OTP for verification',
                html: OTPTemplate(otp),
            };
            await sendEmail(options);

            return res;
        } catch (error) {
            throw error;
        }
    }
    //verify otp
    async verifyOtp(email, otp, verificationFor) {
        try {
            if (!email || !otp) {
                throw new ApiError(httpStatus.badRequest, 'email and otp are required');
            }
            const res = await OTPRepository.findByEmail(email);
            if (res) {
                if (res.otp == otp && res.email == email) {
                    if (res.createdAt.getTime() + 5 * 60 * 1000 < Date.now()) {
                        throw new ApiError(httpStatus.badRequest, 'otp expired');
                    }
                    await OTPRepository.deleteByEmail(email);

                    switch (verificationFor) {
                        case 'serviceProvider':
                            const provider = await ServiceProviderRepository.findByEmail(email);
                            if (!provider) {
                                throw new ApiError(httpStatus.notFound, 'service provider not found');
                            }
                            await ServiceProviderRepository.update(provider.id, { isVerified: true });
                            return 'OTP verified';
                        case 'user':
                            const user = await UserRepository.getByEmail(email);
                            if (!user) {
                                throw new ApiError(httpStatus.notFound, 'user not found');
                            }
                            await UserRepository.update(user.id, { isVerified: true });
                            return 'OTP verified';
                        default:
                            throw new ApiError(httpStatus.badRequest, 'invalid verification for');
                    }
                }
            }
            throw new ApiError(httpStatus.badRequest, 'invalid otp');
        } catch (error) {
            throw error;
        }
    }
}
export default OTPService;
