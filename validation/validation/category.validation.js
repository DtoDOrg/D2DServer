import { createCategorySchema, updateCategorySchema } from '../schema/category.schema.js';

export const createCategoryValidation = async (req, res, next) => {
    try {
        const { error, value } = createCategorySchema.validate(req.body, {
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
export const updateCategoryValidation = async (req, res, next) => {
    try {
        const { error, value } = updateCategorySchema.validate(req.body, {
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
