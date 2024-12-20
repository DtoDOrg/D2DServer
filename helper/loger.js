import winston from 'winston';

// Define the log format
const logFormat = winston.format.printf(({ timestamp, level, message }) => {
    return `${timestamp} ${level}: ${message}`;
});

// Create a logger instance
const logger = winston.createLogger({
    level: 'info',
    format: winston.format.combine(winston.format.timestamp(), logFormat),
    transports: [
        new winston.transports.File({ filename: 'logs/requests.log' }),
        // Optionally log to the console as well
        // new winston.transports.Console({ format: winston.format.simple() }),
    ],
});

export default logger;
