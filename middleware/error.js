import { FormattedData } from "../helper/formattedResponse.js";

export const HTTPSTATUS = {
  BADREQUEST: 400,
  UNAUTHORIZED: 401,
  NOTFOUND: 404,
  INTERNALSERVERERROR: 500,
  SUCCESS: 200,
  CREATED: 201,
  NO_CONTENT: 204,
  BAD_GATEWAY: 502,
  SERVICE_UNAVAILABLE: 503,
  GATEWAY_TIMEOUT: 504,
};
export const errorHandler = (err, req, res, next) => {
  return res
    .status(err.status || 500)
    .json(FormattedData(false, null, err.message));
};

class ApiError extends Error {
  constructor(statusCode, message) {
    super(message);
    this.status = statusCode || 500;
    Error.captureStackTrace(this, this.constructor);
  }
}
export default ApiError;
