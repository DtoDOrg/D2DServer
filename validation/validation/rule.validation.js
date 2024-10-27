import { createRuleSchema, updateRuleSchema } from '../schema/rule.schema.js';

export const createRuleValidation = async (req, res, next) => {
    try {
        const { error, value } = createRuleSchema.validate(req.body, {
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
export const updateRuleValidation = async (req, res, next) => {
    try {
        const { error, value } = updateRuleSchema.validate(req.body, {
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
