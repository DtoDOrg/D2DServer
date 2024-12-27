import logger from '../helper/loger.js';

const requestLogger = (req, res, next) => {
    const { method, url, headers, body } = req;
    const logMessage = `Method: ${method}, URL: ${url}, Headers: ${JSON.stringify(headers)}, Body: ${JSON.stringify(body)}`;

    // Log the request details
    logger.info(logMessage);

    next();
};

export default requestLogger;
