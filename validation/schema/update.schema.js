import Joi from 'joi';
export const superAdminUpdateSchema = Joi.object({
    name: Joi.string().optional(),
    email: Joi.string().email().optional(),
    password: Joi.string().pattern(new RegExp('^[a-zA-Z0-9@]{3,30}$')).optional(),
    phone: Joi.string()
        .length(10)
        .pattern(/[6-9]{1}[0-9]{9}/)
        .optional(),
});
export const passwordSchema = Joi.object({
    password: Joi.string().pattern(new RegExp('^[a-zA-Z0-9@]{3,30}$')).required(),
});
