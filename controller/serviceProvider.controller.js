import { FormattedData } from '../helper/formattedResponse.js';
import { imageDelete } from '../helper/imageDeleter.js';
import { imageUploader } from '../helper/imageUploader.js';
import ApiError, { httpStatus } from '../middleware/error.js';
import ServiceProvider from '../service/serviceProvider.service.js';

const service = new ServiceProvider();
export const createServiceProvider = async (req, res, next) => {
    try {
        const serviceProvider = await service.create(req.body);
        res.status(201).json(FormattedData(true, serviceProvider, 'service provider created'));
    } catch (error) {
        next(error);
    }
};

export const login = async (req, res, next) => {
    try {
        const serviceProvider = await service.login(req.body);
        res.status(201).json(FormattedData(true, serviceProvider, 'service provider logged in'));
    } catch (error) {
        next(error);
    }
};

export const getAll = async (req, res, next) => {
    try {
        const serviceProvider = await service.getAll();
        res.status(201).json(FormattedData(true, serviceProvider, 'service provider logged in'));
    } catch (error) {
        next(error);
    }
};

export const update = async (req, res, next) => {
    try {
        const serviceProvider = await service.update(req.params.id, req.body);
        res.status(201).json(FormattedData(true, serviceProvider, 'service provider updated'));
    } catch (error) {
        next(error);
    }
};

export const deleteServiceProvider = async (req, res, next) => {
    try {
        const serviceProvider = await service.delete(req.user.id);
        console.log(serviceProvider);
        await imageDelete(serviceProvider.avatar);
        res.status(201).json(FormattedData(true, serviceProvider, 'service provider deleted'));
    } catch (error) {
        next(error);
    }
};

export const findById = async (req, res, next) => {
    try {
        const serviceProvider = await service.findById(req.params.id);
        res.status(201).json(FormattedData(true, serviceProvider, 'service provider found'));
    } catch (error) {
        next(error);
    }
};
export const updateImage = async (req, res, next) => {
    try {
        // console.log(req.user);
        if (!req.user) {
            throw new ApiError(httpStatus.unauthorized, 'Unauthorized');
        }
        const image = await imageUploader(req.file, 'serviceProvider');
        const serviceProvider = await service.update(req.user.id, { avatar: image });
        if (!serviceProvider) {
            await imageDelete(image);
            throw new ApiError(httpStatus.notFound, 'service provider not found');
        }
        return res.status(httpStatus.success).json(FormattedData(true, serviceProvider, 'service provider updated'));
    } catch (error) {
        next(error);
    }
};
export const updateStatus = async (req, res, next) => {
    try {
        const serviceProvider = await service.update(req.params.id, req.body.status);
        res.status(201).json(FormattedData(true, serviceProvider, 'service provider updated'));
    } catch (error) {
        next(error);
    }
};
