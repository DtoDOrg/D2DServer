import { FormattedData } from '../helper/formattedResponse.js';
import { httpStatus } from '../middleware/error.js';
import AdminService from '../service/admin/admin.service.js';

const service = new AdminService();

export const getAll = async (req, res, next) => {
    try {
        const admins = await service.getAll();
        return res.status(httpStatus.success).json(FormattedData(true, admins, 'admins fetched'));
    } catch (error) {
        next(error);
    }
};
export const getById = async (req, res, next) => {
    try {
        const admin = await service.getById(req.params.id);
        return res.status(httpStatus.success).json(FormattedData(true, admin, 'admin fetched'));
    } catch (error) {
        next(error);
    }
};
export const create = async (req, res, next) => {
    try {
        const admin = await service.create(req.body);
        return res.status(httpStatus.success).json(FormattedData(true, admin, 'admin created'));
    } catch (error) {
        next(error);
    }
};
export const changeStatus = async (req, res, next) => {
    try {
        const admin = await service.changeStatus(req.params.id);
        return res.status(httpStatus.success).json(FormattedData(true, admin, 'admin updated'));
    } catch (error) {
        next(error);
    }
};
export const deleteAdmin = async (req, res, next) => {
    try {
        const admin = await service.delete(req.params.id);
        return res.status(httpStatus.success).json(FormattedData(true, admin, 'admin deleted'));
    } catch (error) {
        next(error);
    }
};
export const logIn = async (req, res, next) => {
    try {
        console.log('hello');
        const token = await service.login(req.body);
        res.status(200).json(FormattedData(true, token, 'login successful'));
    } catch (error) {
        next(error);
    }
};
