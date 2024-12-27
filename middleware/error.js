import { FormattedData } from '../helper/formattedResponse.js';

export const httpStatus = {
    badRequest: 400,
    unauthorized: 401,
    forbidden: 403,
    notFound: 404,
    internalServerError: 500,
    success: 200,
    created: 201,
    noContent: 204,
    badGateway: 502,
    unavailable: 503,
    timeout: 504,
};
export const errorHandler = (err, req, res, next) => {
    return res.status(err.status || 500).json(FormattedData(false, null, err.message));
};

class ApiError extends Error {
    constructor(statusCode, message) {
        super(message);
        this.status = statusCode || 500;
        Error.captureStackTrace(this, this.constructor);
    }
}
export default ApiError;
