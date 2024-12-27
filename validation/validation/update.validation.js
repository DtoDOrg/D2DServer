import { passwordSchema, superAdminUpdateSchema } from '../schema/update.schema.js';

export const superAdminUpdateValidation = async (req, res, next) => {
    try {
        const { error, value } = superAdminUpdateSchema.validate(req.body, {
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
export const passwordValidation = async (req, res, next) => {
    try {
        const { error, value } = passwordSchema.validate(req.body, {
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
