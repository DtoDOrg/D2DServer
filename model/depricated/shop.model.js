import mongoose from 'mongoose';

const shopSchema = new mongoose.Schema(
    {
        owner: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'admin',
            required: true,
        },
        category: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'category',
            required: true,
        },
        shopName: {
            type: String,
            required: true,
        },
        shopImages: {
            type: [String],
            default: ['https://ik.imagekit.io/gvspmkmsw/y9DpT.jpg', 'https://ik.imagekit.io/gvspmkmsw/y9DpT.jpg', 'https://ik.imagekit.io/gvspmkmsw/y9DpT.jpg'],
            validate: {
                validator: function (value) {
                    return value.length <= 5; // Set your maximum length here
                },
                message: 'You can only upload a maximum of 5 images.',
            },
        },
        services: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'service',
            },
        ],
        city: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'city',
        },
        state: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'state',
        },
        status: {
            type: String,
            enum: ['online', 'offline'],
            default: 'online',
        },
        isActive: {
            type: Boolean,
            default: true,
        },
    },
    {
        timestamps: true,
        versionKey: false,
    }
);

const ShopModel = mongoose.model('shop', shopSchema);

export default ShopModel;
