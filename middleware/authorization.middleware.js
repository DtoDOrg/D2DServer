import { verifyToken } from '../helper/authorization.js';
import ApiError, { httpStatus } from './error.js';

const authorize = roles => {
    return (req, res, next) => {
        try {
            const token = req.headers['authorization']?.split(' ')[1];
            if (!token) {
                return next(new ApiError(httpStatus.forbidden, 'provide an valid token'));
            }
            const payload = verifyToken(token);
            req.user = payload;

            if (roles.includes(req.user.role)) {
                return next();
            }
            return next(new ApiError(httpStatus.unauthorized, 'access denied'), res);
        } catch (error) {
            next(error);
        }
    };
};
export default authorize;
