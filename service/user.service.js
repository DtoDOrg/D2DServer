import { regPayload, regToken, generateToken } from '../helper/authorization.js';
import { compare, encrypt } from '../helper/password.js';
import UserRepository from '../repository/user.js';
import ApiError, { httpStatus } from '../middleware/error.js';
import OTPService from './otp.service.js';
class UserService {
    constructor() {
        this.otpService = new OTPService();
    }

    //log in

    async logIn(user) {
        try {
            const userInfo = await UserRepository.getByEmail(user.email);
            if (!userInfo) {
                throw new ApiError(httpStatus.notFound, 'user not found');
            }
            const verifyPassword = await compare(user.password, userInfo.password);
            if (!verifyPassword) {
                throw new ApiError(httpStatus.badRequest, 'invalid password');
            }
            if (!userInfo.isVerified) {
                throw new ApiError(httpStatus.badRequest, 'please verify your email');
            }
            if (!userInfo.status) {
                throw new ApiError(httpStatus.badRequest, 'this account is deactivated');
            }
            const payload = {
                id: userInfo._id,
                role: 'user',
                'email:': user.email,
            };
            const signedToken = token(payload);
            return signedToken;
        } catch (error) {
            throw error;
        }
    }

    //registration
    async registration(user) {
        try {
            let userInfo = await UserRepository.getByEmail(user.email);
            if (userInfo && userInfo.isVerified) {
                throw new ApiError(httpStatus.badRequest, 'user already exists');
            }
            const encPass = await encrypt(user.password);
            user.password = encPass;
            if (!userInfo) {
                userInfo = await UserRepository.create(user);
            }
            await this.otpService.sendOTP(user.email);
            return userInfo;
        } catch (error) {
            throw error;
        }
    }

    //get user by id
    async getUserById(userId) {
        try {
            const user = await UserRepository.getById(userId);
            return user;
        } catch (error) {
            throw error;
        }
    }

    //get all users
    async getAllUsers() {
        try {
            const users = await UserRepository.getAll();
            return users;
        } catch (error) {
            throw error;
        }
    }

    //update user

    async updateUser(userId, user) {
        try {
            const updatedUser = await UserRepository.update(userId, user);
            return updatedUser;
        } catch (error) {
            throw error;
        }
    }

    //delete user

    async deleteUser(userId) {
        try {
            const deletedUser = await UserRepository.delete(userId);
            return deletedUser;
        } catch (error) {
            throw error;
        }
    }

    //change status
    async changeStatus(userId) {
        try {
            const user = await UserRepository.getById(userId);
            if (user) {
                user.status = !user.status;
                await user.save();
                return user;
            }
            throw new ApiError(httpStatus.notFound, 'user not found');
        } catch (error) {
            throw error;
        }
    }
}
export default UserService;
