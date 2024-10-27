import { FormattedData } from '../../helper/formattedResponse.js';
import { httpStatus } from '../../middleware/error.js';

import { superAdminRegistrationSchema } from '../schema/registration.schema.js';

export const superAdminRegistrationValidation = async (req, res, next) => {
    try {
        const { error, value } = superAdminRegistrationSchema.validate(req.body, {
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
