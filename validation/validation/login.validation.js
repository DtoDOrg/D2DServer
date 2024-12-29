import { loginWithEmailPassword } from '../schema/login.schema.js';

export const loginValidation = async (req, res, next) => {
    try {
        const { error, value } = loginWithEmailPassword.validate(req.body, {
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
