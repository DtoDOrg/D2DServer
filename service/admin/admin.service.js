import { generateToken } from '../../helper/authorization.js';
import { compare, encrypt } from '../../helper/password.js';
import ApiError, { httpStatus } from '../../middleware/error.js';
import AdminRepository from '../../repository/admin.repository.js';

class AdminService {
    async login(data) {
        try {
            const admin = await AdminRepository.getByEmail(data.email);
            if (!admin) {
                throw new ApiError(httpStatus.notFound, 'admin not found');
            }
            const match = await compare(data.password, admin.password);
            if (!match) {
                throw new ApiError(httpStatus.unauthorized, 'password not matched');
            }
            const payload = {
                id: admin._id,
                role: 'admin',
                'email:': data.email,
            };
            const token = generateToken(payload);
            return token;
        } catch (error) {
            throw error;
        }
    }
    async getAll() {
        try {
            const admins = await AdminRepository.getAll();
            return admins;
        } catch (error) {
            throw error;
        }
    }
    async getById(id) {
        try {
            const admin = await AdminRepository.getById(id);
            return admin;
        } catch (error) {
            throw error;
        }
    }
    async getByEmail(email) {
        try {
            const admin = await AdminRepository.getByEmail(email);
            return admin;
        } catch (error) {
            throw error;
        }
    }
    async changeStatus(id) {
        try {
            const admin = await AdminRepository.getById(id);
            if (admin) {
                admin.isActive = !admin.isActive;
                await admin.save();
                return admin;
            }
            throw new ApiError(httpStatus.notFound, 'admin not found');
        } catch (error) {
            throw error;
        }
    }
    async create(data) {
        try {
            const admin = await AdminRepository.getByEmail(data.email);

            if (admin) {
                throw new ApiError(httpStatus.badRequest, 'email already exist');
            }
            const password = await encrypt(data.password);
            data.password = password;
            const res = await AdminRepository.create(data);
            const payload = {
                id: res._id,
                role: 'admin',
                'email:': data.email,
            };
            const token = generateToken(payload);
            return token;
        } catch (error) {
            throw error;
        }
    }
    async delete(id) {
        try {
            const admin = await AdminRepository.delete(id);
            return admin;
        } catch (error) {
            throw error;
        }
    }
}
export default AdminService;
