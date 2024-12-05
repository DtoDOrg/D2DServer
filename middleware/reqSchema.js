import Joi from 'joi';

export const shopSchema = Joi.object({
    name: Joi.string().required(),
    description: Joi.string().required(),
    city: Joi.string().required(),
    owner: Joi.string().required(),
    address: Joi.string().required(),
    phone: Joi.string().required(),
    email: Joi.string().email().required(),
    category: Joi.string().required(),
});

export const updateShopStatusSchema = Joi.object({
    status: Joi.bool().required(),
});
