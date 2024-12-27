import { FormattedData } from '../helper/formattedResponse.js';
import { httpStatus } from '../middleware/error.js';
import JobService from '../service/job.service.js';

const service = new JobService();
export const getJobsByCategoryId = async (req, res, next) => {
    try {
        const result = await service.getByCategory(req.params.id);
        return res.status(httpStatus.success).json(FormattedData(true, result, 'jobs fetched'));
    } catch (error) {
        next(error);
    }
};
export const getByCity = async (req, res, next) => {
    try {
        const result = await service.getByCity(req.params.id);
        return res.status(httpStatus.success).json(FormattedData(true, result, 'jobs fetched'));
    } catch (error) {
        next(error);
    }
};

export const getByState = async (req, res, next) => {
    try {
        const result = await service.getByState(req.params.id);
        return res.status(httpStatus.success).json(FormattedData(true, result, 'jobs fetched'));
    } catch (error) {
        next(error);
    }
};

export const getJobs = async (req, res, next) => {
    try {
        const result = await service.getAll();
        return res.status(httpStatus.success).json(FormattedData(true, result, 'jobs fetched'));
    } catch (error) {
        next(error);
    }
};
export const acceptAJob = async (req, res, next) => {
    try {
        const result = await service.acceptAJob(req.params.id, req.user.id);
        return res.status(httpStatus.success).json(FormattedData(true, result, 'jobs fetched'));
    } catch (error) {
        next(error);
    }
};
export const requestForJobDone = async (req, res, next) => {
    try {
        const result = await service.requestForJobDone(req.user.id, req.params.id);
        return res.status(httpStatus.success).json(FormattedData(true, result, 'jobs fetched'));
    } catch (error) {
        next(error);
    }
};

export const jobDone = async (req, res, next) => {
    try {
        const result = await service.doneAJob(req.params.id, req.user.id);
        return res.status(httpStatus.success).json(FormattedData(true, result, 'jobs fetched'));
    } catch (error) {
        next(error);
    }
};
export const cancelAJob = async (req, res, next) => {
    try {
        const result = await service.cancelAJob(req.user.id, req.params.id);
        return res.status(httpStatus.success).json(FormattedData(true, result, 'jobs fetched'));
    } catch (error) {
        next(error);
    }
};
