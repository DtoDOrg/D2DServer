import { FormattedData } from '../helper/formattedResponse.js';
import { imageDelete } from '../helper/imageDeleter.js';
import { imageUploader } from '../helper/imageUploader.js';
import ApiError, { httpStatus } from '../middleware/error.js';
import CategoryService from '../service/category/category.service.js';

const service = new CategoryService();

export const createCategory = async (req, res, next) => {
    try {
        const category = await service.createCategory(req.body);
        res.status(httpStatus.created).json(FormattedData(true, category, 'category created'));
    } catch (error) {
        next(error);
    }
};

export const getAllCategories = async (req, res, next) => {
    try {
        const categories = await service.getAllCategories();
        res.status(httpStatus.success).json(FormattedData(true, categories, 'categories fetched'));
    } catch (error) {
        next(error);
    }
};

export const deleteCategory = async (req, res, next) => {
    try {
        const result = await service.deleteCategory(req.params.id);
        if (!result) {
            throw new ApiError(httpStatus.notFound, 'category not found');
        }
        await imageDelete(result.image);
        await imageDelete(result.bannerImage);

        res.status(httpStatus.success).json(FormattedData(true, result, 'category deleted'));
    } catch (error) {
        next(error);
    }
};

export const getCategoryById = async (req, res, next) => {
    try {
        const result = await service.getCategoryById(req.params.id);
        res.status(httpStatus.success).json(FormattedData(true, result, 'category fetched'));
    } catch (error) {
        next(error);
    }
};

export const updateCategory = async (req, res, next) => {
    try {
        const result = await service.updateCategory(req.params.id, req.body);
        res.status(httpStatus.success).json(FormattedData(true, result, 'category updated'));
    } catch (error) {
        next(error);
    }
};
export const addServiceToCategory = async (req, res, next) => {
    try {
        const category = await service.addServiceToCategory(req.params.id, req.body.serviceId);
        if (!category) {
            throw new ApiError(httpStatus.notFound, 'category not found');
        }
        return res.status(httpStatus.created).json(FormattedData(true, category, 'service added to category'));
    } catch (error) {
        next(error);
    }
};

export const removeServiceFromCategory = async (req, res, next) => {
    try {
        const category = await service.removeServiceFromCategory(req.params.id, req.body.serviceId);
        if (!category) {
            throw new ApiError(httpStatus.notFound, 'category not found');
        }
        return res.status(httpStatus.success).json(FormattedData(true, category, 'service removed from category'));
    } catch (error) {
        next(error);
    }
};

export const updateCategoryImage = async (req, res, next) => {
    try {
        const image = await imageUploader(req.file, 'categories');
        const result = await service.updateCategory(req.params.id, { image: image });
        if (!result) {
            await imageDelete(image);
            throw new ApiError(httpStatus.notFound, 'category not found');
        }
        return res.status(httpStatus.success).json(FormattedData(true, result, 'category updated'));
    } catch (error) {
        next(error);
    }
};
export const updateBannerImage = async (req, res, next) => {
    try {
        const image = await imageUploader(req.file, 'categoryBanner');
        const result = await service.updateCategory(req.params.id, { bannerImage: image });
        if (!result) {
            await imageDelete(image);
            throw new ApiError(httpStatus.notFound, 'category not found');
        }
        return res.status(httpStatus.success).json(FormattedData(true, result, 'category updated'));
    } catch (error) {
        next(error);
    }
};
