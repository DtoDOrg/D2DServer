import express from 'express';
import cors from 'cors';
import { CONFIG } from '../config/config.js';
import { UserRouter } from '../routes/user.route.js';
import { errorHandler } from '../middleware/error.js';
import { SupportRouter } from '../routes/support.js';
import { cityRouter } from '../routes/city.route.js';
import { stateRouter } from '../routes/state.route.js';
import { serviceRouter } from '../routes/service/service.route.js';
import { categoryRouter } from '../routes/category.route.js';
import { adminRouter } from '../routes/admin/admin.route.js';
import { OTPRouter } from '../routes/otp.route.js';
import { cartRouter } from '../routes/cart.route.js';
const PORT = CONFIG.PORT;
export const startServer = app => {
    try {
        app.use(cors());
        app.use(express.json());
        app.use('/admin', adminRouter);
        //city
        app.use('/city', cityRouter);
        //state
        app.use('/state', stateRouter);
        //service
        app.use('/service', serviceRouter);
        //category
        app.use('/category', categoryRouter);
        //user
        app.use('/user', UserRouter);
        //opt
        app.use('/otp', OTPRouter);
        //cart
        app.use('/cart', cartRouter);

        app.use('/support', SupportRouter);
        app.use(errorHandler);
        app.listen(PORT, () => {
            console.log(`App is running on Port ${PORT}`);
        });
    } catch (error) {
        console.log(error);
    }
};
