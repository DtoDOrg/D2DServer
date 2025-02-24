import { FormattedData } from '../helper/formattedResponse.js';
import { imageDelete } from '../helper/imageDeleter.js';
import { imageUploader } from '../helper/imageUploader.js';
import ApiError, { httpStatus } from '../middleware/error.js';
import ServicesClass from '../service/services/services.service.js';

const service = new ServicesClass();
//create a service
export const createService = async (req, res, next) => {
    try {
        const result = await service.create(req.body);
        return res.status(httpStatus.created).json(FormattedData(true, result, 'service created'));
    } catch (error) {
        next(error);
    }
};

//get all services
export const getAllServices = async (req, res, next) => {
    try {
        const result = await service.getAllService();
        return res.status(httpStatus.success).json(FormattedData(true, result, 'services fetched'));
    } catch (error) {
        next(error);
    }
};

//get service by id
export const getServiceById = async (req, res, next) => {
    try {
        const result = await service.getServiceByServiceId(req.params.id);
        if (!result) {
            throw new ApiError(httpStatus.notFound, 'service not found');
        }

        return res.status(httpStatus.success).json(FormattedData(true, result, 'service fetched'));
    } catch (error) {
        next(error);
    }
};

//get service by category
export const getServiceByCategory = async (req, res, next) => {
    try {
        const result = await service.getServiceByCategory(req.params.id);
        return res.status(httpStatus.success).json(FormattedData(true, result, 'services fetched'));
    } catch (error) {
        next(error);
    }
};

//update service
export const updateService = async (req, res, next) => {
    try {
        const result = await service.updateService(req.params.id, req.body);
        if (!result) {
            throw new ApiError(httpStatus.notFound, 'service not found');
        }

        return res.status(httpStatus.success).json(FormattedData(true, result, 'service updated'));
    } catch (error) {
        next(error);
    }
};

//delete service
export const deleteService = async (req, res, next) => {
    try {
        const result = await service.deleteService(req.params.id);
        if (!result) {
            throw new ApiError(httpStatus.notFound, 'service not found');
        }
        await imageDelete(result.image);
        res.status(httpStatus.success).json(FormattedData(true, result, 'service deleted'));
    } catch (error) {
        next(error);
    }
};
//update service image
export const updateServiceImage = async (req, res, next) => {
    try {
        const image = await imageUploader(req.file, 'services');
        const result = await service.updateService(req.params.id, { image: image });
        if (!result) {
            await imageDelete(image);
            throw new ApiError(httpStatus.notFound, 'service not found');
        }
        return res.status(httpStatus.success).json(FormattedData(true, result, 'service updated'));
    } catch (error) {
        next(error);
    }
};

//get recent services
export const getRecentServices = async (req, res, next) => {
    try {
        const result = await service.getRecentServices();
        return res.status(httpStatus.success).json(FormattedData(true, result, 'services fetched'));
    } catch (error) {
        next(error);
    }
};
//get popular services
export const getPopularServices = async (req, res, next) => {
    try {
        const result = await service.getTopRatedServices();
        return res.status(httpStatus.success).json(FormattedData(true, result, 'services fetched'));
    } catch (error) {
        next(error);
    }
};
