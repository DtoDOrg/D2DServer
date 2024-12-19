import express from 'express';
import cors from 'cors';
import { CONFIG } from '../config/config.js';
import { UserRouter } from '../routes/user.route.js';
import { errorHandler } from '../middleware/error.js';
import { SupportRouter } from '../routes/support.route.js';
import { cityRouter } from '../routes/city.route.js';
import { stateRouter } from '../routes/state.route.js';
import { serviceRouter } from '../routes/service.route.js';
import { categoryRouter } from '../routes/category.route.js';
import { adminRouter } from '../routes/admin.route.js';
import { OTPRouter } from '../routes/otp.route.js';
import { cartRouter } from '../routes/cart.route.js';
import { addressRouter } from '../routes/address.route.js';
import { OrderRouter } from '../routes/order.route.js';
const PORT = CONFIG.PORT;
export const startServer = app => {
    try {
        app.use(cors());
        app.use(express.json());
        app.use('/admin', adminRouter);
        app.use('/address', addressRouter);
        app.use('/cart', cartRouter);
        app.use('/category', categoryRouter);
        app.use('/city', cityRouter);
        app.use('/otp', OTPRouter);
        app.use('/order', OrderRouter);
        app.use('/state', stateRouter);
        app.use('/service', serviceRouter);
        app.use('/support', SupportRouter);
        app.use('/user', UserRouter);
        app.use(errorHandler);
        app.listen(PORT, () => {
            console.log(`App is running on Port ${PORT}`);
        });
    } catch (error) {
        console.log(error);
        process.exit();
    }
};
