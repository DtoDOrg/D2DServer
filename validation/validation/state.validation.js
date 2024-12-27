import { FormattedData } from '../../helper/formattedResponse.js';
import { httpStatus } from '../../middleware/error.js';
import { stateSchema } from '../schema/state.schema.js';

export const stateValidation = async (req, res, next) => {
    try {
        const { error, value } = stateSchema.validate(req.body, {
            abortEarly: false,
        });
        if (error) {
            next(error);
        }

        next();
    } catch (error) {
        next(error);
    }
};
