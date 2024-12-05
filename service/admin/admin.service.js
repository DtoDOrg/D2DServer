import { generateToken } from '../../helper/authorization.js';
import { compare, encrypt } from '../../helper/password.js';
import ApiError, { httpStatus } from '../../middleware/error.js';
import superAdminRepository from '../../repository/superAdmin/superAdmin.repository.js';

class AdminService {
    //create super admin
    async createSuperAdmin(data) {
        try {
            const user = await superAdminRepository.getByEmail(data.email);
            if (!user) {
                const encPass = await encrypt(data.password);
                data.password = encPass;

                const superAdmin = await superAdminRepository.create(data);
                const payload = {
                    id: superAdmin._id,
                    role: 'superAdmin',
                    'email:': data.email,
                };
                const token = generateToken(payload);
                return token;
            }
            throw new ApiError(httpStatus.badRequest, 'user already exists');
        } catch (error) {
            throw error;
        }
    }
    //login

    async login(data) {
        try {
            const user = await superAdminRepository.getByEmail(data.email);
            if (!user) {
                throw new ApiError(httpStatus.badGateway, 'user not found');
            }
            const verifyPassword = await compare(data.password, user.password);
            if (!verifyPassword) {
                throw new ApiError(httpStatus.badGateway, 'invalid password');
            }
            const payload = {
                id: user._id,
                role: 'superAdmin',
                'email:': data.email,
            };
            const token = generateToken(payload);
            return token;
        } catch (error) {
            throw error;
        }
    }

    //get by id
    async getById(id) {
        try {
            const superAdmin = await superAdminRepository.getById(id);
            if (!superAdmin) {
                throw new ApiError(httpStatus.notFound, 'super admin not found');
            }
            return superAdmin;
        } catch (error) {
            throw error;
        }
    }
    //get all
    async getAll() {
        try {
            const result = await superAdminRepository.getAll();
            return result;
        } catch (error) {
            throw error;
        }
    }
    //update super admin
    async update(id, data) {
        try {
            const result = await superAdminRepository.update(id, data);
            return result;
        } catch (error) {
            throw error;
        }
    }
    async updatePassword(id, data) {
        try {
            const encPass = await encrypt(data.password);
            const result = await superAdminRepository.update(id, {
                password: encPass,
            });
            return result;
        } catch (error) {
            throw error;
        }
    }

    //delete by id
    async deleteById(id) {
        try {
            const result = await superAdminRepository.deleteById(id);
            if (!result) {
                throw new ApiError(httpStatus.notFound, 'super admin not found');
            }
            return result;
        } catch (error) {
            throw error;
        }
    }
}
export default AdminService;
