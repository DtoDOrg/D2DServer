import Joi from 'joi';
export const loginWithEmailPassword = Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().required(),
});
