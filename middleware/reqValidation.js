import { FormattedData } from '../helper/formattedResponse.js';
import { httpStatus } from './error.js';
import { shopSchema, updateShopStatusSchema } from './reqSchema.js';

//create shop

export const createShopValidation = async (req, res, next) => {
    try {
        const { error, value } = shopSchema.validate(req.body, {
            abortEarly: false,
        });
        if (error) {
            return res.status(httpStatus.badRequest).json(FormattedData(false, null, error.message));
        }
        next();
    } catch (error) {
        return res.status(httpStatus.badRequest).json(FormattedData(false, null, error.message));
    }
};

//update shop status

export const shopStatus = async (req, res, next) => {
    try {
        const { error, value } = updateShopStatusSchema.validate(req.body, {
            abortEarly: false,
        });
        if (error) {
            return res.status(httpStatus.badRequest).json(FormattedData(false, null, error.message));
        }
        next();
    } catch (error) {
        return res.status(httpStatus.badRequest).json(FormattedData(false, null, error.message));
    }
};
