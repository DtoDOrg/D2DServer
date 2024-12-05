import { FormattedData } from '../helper/formattedResponse.js';
import { httpStatus } from '../middleware/error.js';
import SupportService from '../service/support.service.js';

const supportService = new SupportService();
export const createSupport = (req, res, next) => {
    try {
        const support = supportService.createSupport(req.body);
        res.status(httpStatus.created).json(FormattedData(true, support, 'support created'));
    } catch (error) {
        next(error);
    }
};
export const getSupport = (req, res, next) => {
    try {
        const support = supportService.getAllSupports();
        res.status(httpStatus.success).json(FormattedData(true, support, 'support fetched'));
    } catch (error) {
        next(error);
    }
};
export const getSupportById = (req, res, next) => {
    try {
        const support = supportService.getSupportById(req.params.id);
        res.status(httpStatus.success).json(FormattedData(true, support, 'support fetched'));
    } catch (error) {
        next(error);
    }
};
