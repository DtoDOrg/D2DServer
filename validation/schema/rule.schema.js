import Joi from 'joi';
export const createRuleSchema = Joi.object({
    name: Joi.string().required(),
    description: Joi.string().required(),
    steps: Joi.array().required(),
});
//update
export const updateRuleSchema = Joi.object({
    name: Joi.string().optional(),
    description: Joi.string().optional(),
    serviceId: Joi.string().optional(),
});
