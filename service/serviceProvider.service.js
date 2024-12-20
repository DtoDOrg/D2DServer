import { generateToken } from '../helper/authorization.js';
import { compare, encrypt } from '../helper/password.js';
import ApiError, { httpStatus } from '../middleware/error.js';
import ServiceProviderRepository from '../repository/serviceProvider.repository.js';
import OTPService from './otp.service.js';

const repository = ServiceProviderRepository;
class ServiceProvider {
    constructor() {
        this.otpService = new OTPService();
    }
    async create(data) {
        try {
            const provide = await repository.findByEmail(data.email);
            if (provide) {
                throw new ApiError(httpStatus.badRequest, 'service provider already exists');
            }
            await this.otpService.sendOTP(data.email);
            const encPass = await encrypt(data.password);
            data.password = encPass;
            const service = await repository.create(data);
            if (!service) {
                throw new ApiError(httpStatus.badRequest, 'service provider not created');
            }

            return `otp sent to ${data.email}`;
        } catch (error) {
            throw error;
        }
    }
    async getAll() {
        try {
            const service = await repository.getAll();
            return service;
        } catch (error) {
            throw error;
        }
    }
    async update(id, data) {
        try {
            const service = await repository.update(id, data);
            return service;
        } catch (error) {
            throw error;
        }
    }
    async delete(id) {
        try {
            const service = await repository.delete(id);

            return service;
        } catch (error) {
            throw error;
        }
    }
    async findById(id) {
        try {
            const service = await repository.findById(id);
            return service;
        } catch (error) {
            throw error;
        }
    }
    async findByEmail(email) {
        try {
            const service = await repository.findByEmail(email);
            return service;
        } catch (error) {
            throw error;
        }
    }
    async login(data) {
        try {
            const provider = await repository.findByEmail(data.email);
            if (!provider) {
                throw new ApiError(httpStatus.badRequest, 'user not found');
            }
            const encPass = provider.password;
            const verifyPassword = await compare(data.password, encPass);
            if (!verifyPassword) {
                throw new ApiError(httpStatus.badRequest, 'invalid password');
            }
            if (!provider.isVerified) {
                throw new ApiError(httpStatus.badRequest, 'please verify your email');
            }
            if (!provider.status) {
                throw new ApiError(httpStatus.badRequest, 'this account is deactivated');
            }
            const payload = {
                id: provider._id,
                role: 'serviceProvider',
                'email:': data.email,
            };

            const token = generateToken(payload);
            return token;
        } catch (error) {
            throw error;
        }
    }
}
export default ServiceProvider;
