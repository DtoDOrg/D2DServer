import express from 'express';
import cors from 'cors';
import { CONFIG } from '../config/config.js';
import { errorHandler } from '../middleware/error.js';

import { router } from '../routes/route.js';
import helmet from 'helmet';
import requestLogger from '../middleware/logger.middleware.js';
const PORT = CONFIG.PORT;
export const startServer = app => {
    try {
        app.use(requestLogger);
        app.use(helmet());
        app.use(cors());
        app.use(express.json());
        app.use('/api', router);
        app.use(errorHandler);
        app.listen(PORT, () => {
            console.log(`App is running on Port ${PORT}`);
        });
    } catch (error) {
        console.log(error);
        process.exit();
    }
};
