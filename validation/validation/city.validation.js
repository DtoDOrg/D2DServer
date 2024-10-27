import { citySchema } from '../schema/city.schema.js';

export const cityValidation = async (req, res, next) => {
    try {
        const { error, value } = citySchema.validate(req.body, {
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
