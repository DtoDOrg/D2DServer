import { FormattedData } from '../helper/formattedResponse.js';
import { imageDelete } from '../helper/imageDeleter.js';
import { imageUploader } from '../helper/imageUploader.js';
import { httpStatus } from '../middleware/error.js';
import UserService from '../service/user.service.js';

const service = new UserService();
export const registration = async (req, res, next) => {
    try {
        const user = await service.registration(req.body);
        return res.status(httpStatus.success).json(FormattedData(true, user, 'user created'));
    } catch (error) {
        next(error);
    }
};
export const login = async (req, res, next) => {
    try {
        const user = await service.logIn(req.body);
        return res.status(httpStatus.success).json(FormattedData(true, user, 'user logged in'));
    } catch (error) {
        next(error);
    }
};
export const getProfile = async (req, res, next) => {
    try {
        const user = await service.getUserById(req.params.id);
        return res.status(httpStatus.success).json(FormattedData(true, user, 'user fetched'));
    } catch (error) {
        next(error);
    }
};
export const getAll = async (req, res, next) => {
    try {
        const users = await service.getAllUsers();
        return res.status(httpStatus.success).json(FormattedData(true, users, 'users fetched'));
    } catch (error) {
        next(error);
    }
};
export const update = async (req, res, next) => {
    try {
        const data = {
            name: req.body.name,
            email: req.body.email,
            phone: req.body.phone,
        };
        const user = await service.updateUser(req.params.id, data);
        return res.status(httpStatus.success).json(FormattedData(true, user, 'user updated'));
    } catch (error) {
        next(error);
    }
};
export const deleteById = async (req, res, next) => {
    try {
        const user = await service.deleteUser(req.params.id);
        await imageDelete(user.avatar);
        return res.status(httpStatus.success).json(FormattedData(true, user, 'user deleted'));
    } catch (error) {
        next(error);
    }
};
export const changeStatus = async (req, res, next) => {
    try {
        const user = await service.changeStatus(req.params.id);
        return res.status(httpStatus.success).json(FormattedData(true, user, 'user updated'));
    } catch (error) {
        next(error);
    }
};
export const updateImage = async (req, res, next) => {
    try {
        const imagePath = await imageUploader(req.file, 'users');
        const user = await service.updateUser(req.params.id, { avatar: imagePath });
        return res.status(httpStatus.success).json(FormattedData(true, user, 'image updated'));
    } catch (error) {
        next(error);
    }
};
