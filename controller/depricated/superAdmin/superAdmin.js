import { FormattedData } from '../../../helper/formattedResponse.js';
import { imageDelete } from '../../../helper/imageDeleter.js';
import { imageUploader } from '../../../helper/imageUploader.js';
import ApiError, { httpStatus } from '../../../middleware/error.js';
import SuperAdminService from '../../service/superAdmin/superAdmin.service.js';

const service = new SuperAdminService();
export const registration = async (req, res, next) => {
    try {
        const { name, email, password, phone } = req.body;
        const token = await service.createSuperAdmin({
            name,
            email,
            password,
            phone,
        });
        res.status(201).json(FormattedData(true, token, 'super admin created'));
    } catch (error) {
        next(error);
    }
};
export const login = async (req, res, next) => {
    try {
        const token = await service.login(req.body);
        res.status(200).json(FormattedData(true, token, 'login successful'));
    } catch (error) {
        next(error);
    }
};
export const getAllSuperAdmins = async (req, res, next) => {
    try {
        await service.getById(req.user.id);
        const superAdmins = await service.getAll();
        return res.status(httpStatus.success).json(FormattedData(true, superAdmins, 'super admins fetched'));
    } catch (error) {
        next(error);
    }
};
export const getSuperAdmin = async (req, res, next) => {
    try {
        const superAdmin = await service.getById(req.user.id);
        return res.status(httpStatus.success).json(FormattedData(true, superAdmin, 'super admin fetched'));
    } catch (error) {
        next(error);
    }
};
export const getSuperAdminById = async (req, res, next) => {
    try {
        const superAdmin = await service.getById(req.params.id);
        return res.status(httpStatus.success).json(FormattedData(true, superAdmin, 'super admin fetched'));
    } catch (error) {
        next(error);
    }
};
export const updateSuperAdmin = async (req, res, next) => {
    try {
        const superAdmin = await service.update(req.user.id, req.body);
        return res.status(httpStatus.success).json(FormattedData(true, superAdmin, 'super admin updated'));
    } catch (error) {
        next(error);
    }
};
export const updateImage = async (req, res, next) => {
    try {
        const image = await imageUploader(req.file, 'superAdmin');

        const superAdmin = await service.update(req.user.id, { avatar: image });
        if (!superAdmin) {
            await imageDelete(image);
            throw new ApiError(httpStatus.notFound, 'super admin not found');
        }
        return res.status(httpStatus.success).json(FormattedData(true, superAdmin, 'super admin updated'));
    } catch (error) {
        next(error);
    }
};
export const updatePassword = async (req, res, next) => {
    try {
        const updateResult = await service.updatePassword(req.user.id, req.body);
        if (!updateResult) {
            throw new ApiError(httpStatus.notFound, 'super admin not found');
        }
        return res.status(httpStatus.success).json(FormattedData(true, updateResult, 'super admin updated'));
    } catch (error) {
        next(error);
    }
};
export const deleteSuperAdmin = async (req, res, next) => {
    try {
        await service.getById(req.user.id);
        const deleteResult = await service.deleteById(req.params.id);
        return res.status(httpStatus.success).json(FormattedData(true, deleteResult, 'super admin deleted'));
    } catch (error) {
        next(error);
    }
};
