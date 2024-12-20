import mongoose from 'mongoose';
const serviceProviderSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
        },
        email: {
            type: String,
            required: true,
            lowercase: true,
            unique: true,
        },
        phone: {
            type: String,
            required: true,
        },
        password: {
            type: String,
            required: true,
        },
        status: {
            type: Boolean,
            default: false,
        },
        isVerified: {
            type: Boolean,
            default: false,
        },

        avatar: {
            type: String,
            default: 'https://ik.imagekit.io/gvspmkmsw/avatar.webp',
        },
        domain: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'category',
            },
        ],
        specialization: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'service',
            },
        ],
    },
    {
        timestamps: true,
        versionKey: false,
    }
);

const ServiceProviderModel = mongoose.model('serviceProvider', serviceProviderSchema);
export default ServiceProviderModel;
