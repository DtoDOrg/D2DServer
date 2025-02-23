import mongoose from 'mongoose';
const BannerSchema = new mongoose.Schema(
    {
        image: {
            type: String,
            default: 'https://ik.imagekit.io/gvspmkmsw/y9DpT.jpg',
            required: true,
        },
        status: {
            type: Boolean,
            required: true,
            default: true,
        },
        order: {
            type: Number,
            required: true,
        },
        link: {
            type: String,
            required: true,
        },
        type: {
            type: String,
            enum: ['individual', 'group'],
            default: 'individual',
            required: true,
        },
    },
    {
        timestamps: true,
        versionKey: false,
    }
);

const BannerModel = mongoose.model('Banner', BannerSchema);
export default BannerModel;
