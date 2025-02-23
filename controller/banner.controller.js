import { FormattedData } from '../helper/formattedResponse.js';
import { imageUploader } from '../helper/imageUploader.js';
import { httpStatus } from '../middleware/error.js';
import bannerService from '../service/banner.service.js';

export const getAllBanner = async (req, res, next) => {
    try {
        const result = await bannerService.getAll();
        return res.status(httpStatus.created).json(FormattedData(true, result, 'banner'));
    } catch (error) {
        next(error);
    }
};

export const getAllSingleBanner = async (req, res, next) => {
    try {
        const result = await bannerService.getAllSingleBanner();
        return res.status(httpStatus.success).json(FormattedData(true, result, 'banner'));
    } catch (error) {
        next(error);
    }
};

export const getAllMultiBanner = async (req, res, next) => {
    try {
        const result = await bannerService.getAllMultiBanner();
        return res.status(httpStatus.success).json(FormattedData(true, result, 'banner'));
    } catch (error) {
        next(error);
    }
};

export const createBanner = async (req, res, next) => {
    try {
        const image = await imageUploader(req.file, 'banner');
        const data = {
            image: image,
            link: req.body.link,
            type: req.body.type,
            status: req.body.status,
            order: req.body.order,
        };
        const result = await bannerService.create(data);
        return res.status(httpStatus.created).json(FormattedData(true, result, 'banner created'));
    } catch (error) {
        next(error);
    }
};

export const updateBanner = async (req, res, next) => {
    try {
        const result = await bannerService.update(req.params.id, req.body);
        return res.status(httpStatus.success).json(FormattedData(true, result, 'banner updated'));
    } catch (error) {
        next(error);
    }
};

export const updateBannerImage = async (req, res, next) => {
    try {
        const image = await imageUploader(req.file, 'banner');
        const result = await bannerService.update(req.params.id, { image: image });
        if (!result) {
            await imageDelete(image);
            throw new ApiError(httpStatus.notFound, 'banner not found');
        }
        return res.status(httpStatus.success).json(FormattedData(true, result, 'banner updated'));
    } catch (error) {
        next(error);
    }
};

export const deleteBanner = async (req, res, next) => {
    try {
        const result = await bannerService.delete(req.params.id);
        return res.status(httpStatus.success).json(FormattedData(true, result, 'banner deleted'));
    } catch (error) {
        next(error);
    }
};

export const changeBannerStatus = async (req, res, next) => {
    try {
        const result = await bannerService.updateStatus(req.params.id);
        return res.status(httpStatus.success).json(FormattedData(true, result, 'banner status updated'));
    } catch (error) {
        next(error);
    }
};
