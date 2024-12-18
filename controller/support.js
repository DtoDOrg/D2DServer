import { FormattedData } from '../helper/formattedResponse.js';
import { httpStatus } from '../middleware/error.js';
import SupportService from '../service/support.service.js';

const supportService = new SupportService();
export const createSupport = async (req, res, next) => {
    try {
        const data = {
            userId: req.user.id,
            ...req.body,
        };

        const support = await supportService.createSupport(data);
        res.status(httpStatus.created).json(FormattedData(true, support, 'support created'));
    } catch (error) {
        next(error);
    }
};
export const getSupport = async (req, res, next) => {
    try {
        const support = await supportService.getAllSupports();
        res.status(httpStatus.success).json(FormattedData(true, support, 'support fetched'));
    } catch (error) {
        next(error);
    }
};
export const getSupportById = async (req, res, next) => {
    try {
        const support = await supportService.getSupportById(req.params.id);
        res.status(httpStatus.success).json(FormattedData(true, support, 'support fetched'));
    } catch (error) {
        next(error);
    }
};
