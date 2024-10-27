import Joi from 'joi';
export const stateSchema = Joi.object({
    name: Joi.string().required(),
    cities: Joi.array().required(),
});
