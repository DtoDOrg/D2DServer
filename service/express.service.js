import express from 'express';
import cors from 'cors';
import { CONFIG } from '../config/config.js';
import { UserRouter } from '../routes/user.route.js';
import { errorHandler } from '../middleware/error.js';
import { SupportRouter } from '../routes/support.js';
import { ShopRouter } from '../routes/shop.route.js';
// import { superAdminRouter } from '../routes/superAdmin/superAdmin.route.js';
import { cityRouter } from '../routes/city.route.js';
import { stateRouter } from '../routes/state.route.js';
import { serviceRouter } from '../routes/service/service.route.js';
// import { ruleRouter } from '../routes/rule/rule.js';
import { categoryRouter } from '../routes/category.route.js';
import { adminRouter } from '../routes/admin/admin.route.js';
const PORT = CONFIG.PORT;
export const startServer = app => {
    try {
        app.use(cors());
        app.use(express.json());
        app.use('/admin', adminRouter);
        //super admin
        // app.use('/super-admin', superAdminRouter);
        //city
        app.use('/city', cityRouter);
        //state
        app.use('/state', stateRouter);
        //rule
        // app.use('/rule', ruleRouter);
        //service
        app.use('/service', serviceRouter);
        //category
        app.use('/category', categoryRouter);

        app.use('/users', UserRouter);
        app.use('/support', SupportRouter);
        app.use('/shop', ShopRouter);
        app.use(errorHandler);
        app.listen(PORT, () => {
            console.log(`App is running on Port ${PORT}`);
        });
    } catch (error) {
        console.log(error);
    }
};
