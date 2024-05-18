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

export const ApiError = (status, message) => {
  const error = new Error(message);
  error.status = status;
  return error;
};
