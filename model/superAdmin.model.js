import mongoose from 'mongoose';

const superAdminSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
        },
        email: {
            type: String,
            required: true,
            unique: true,
            lowercase: true,
        },
        phone: {
            type: String,
            required: true,
            unique: true,
        },
        password: {
            type: String,
            required: true,
        },
        avatar: {
            type: String,
            default: 'https://ik.imagekit.io/gvspmkmsw/avatar.webp?updatedAt=1729955559134',
        },
    },
    {
        timestamps: true,
        versionKey: false,
    }
);

const SuperAdminModel = mongoose.model('superAdmin', superAdminSchema);
export default SuperAdminModel;
