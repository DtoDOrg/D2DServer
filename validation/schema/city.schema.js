import Joi from 'joi';
export const citySchema = Joi.object({
    name: Joi.string().required(),
    state: Joi.string().required(),
});
