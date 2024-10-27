import { createServiceSchema, updateServiceSchema } from '../schema/service.schema.js';

export const createServiceValidation = async (req, res, next) => {
    try {
        const { error, value } = createServiceSchema.validate(req.body, {
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
export const updateServiceValidation = async (req, res, next) => {
    try {
        const { error, value } = updateServiceSchema.validate(req.body, {
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
