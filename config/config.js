import dotenv from 'dotenv';
dotenv.config();
export const CONFIG = {
    PORT: process.env.PORT || 3000,
    DATABASE: process.env.DB_URI || 'mongodb+srv://jmahato686:UELinew6KFDlScdS@d2d.pypukno.mongodb.net/?retryWrites=true&w=majority',
    APP_KEY: process.env.APP_KEY,
    IMAGE_KIT_PUB: process.env.IMAGE_KIT_PUBLIC_KEY,
    IMAGE_KIT_PRI: process.env.IMAGE_KIT_PRIVATE_KEY,
    IMAGE_KIT_ID: process.env.IMAGE_KIT_ID,
    ADMIN_ROLE: process.env.ADMIN_ROLE,
    USER_ROLE: process.env.USER_ROLE,
    SUPER_ADMIN_ROLE: process.env.SUPER_ADMIN_ROLE,
};
