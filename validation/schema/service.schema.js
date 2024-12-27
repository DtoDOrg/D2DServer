import Joi from 'joi';
export const createServiceSchema = Joi.object({
    name: Joi.string().required(),
    description: Joi.string().required(),
    category: Joi.string().required(),
    rule: Joi.string().required(),
});
//update
export const updateServiceSchema = Joi.object({
    name: Joi.string().optional(),
    description: Joi.string().optional(),
    category: Joi.string().optional(),
    ruleId: Joi.string().optional(),
});
