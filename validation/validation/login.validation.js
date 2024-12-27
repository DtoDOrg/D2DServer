import { loginWithEmailPassword } from '../schema/login.schema.js';
import { FormattedData } from '../../helper/formattedResponse.js';
import { httpStatus } from '../../middleware/error.js';

export const superAdminLoginValidation = async (req, res, next) => {
    try {
        const { error, value } = loginWithEmailPassword.validate(req.body, {
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
