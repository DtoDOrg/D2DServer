import mongoose from 'mongoose';
const ServiceSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
        },
        description: {
            type: String,
            default: '',
        },
        price: {
            type: Number,
            required: true,
        },
        tax: {
            type: Number,
            required: true,
        },
        duration: {
            type: Number,
            required: true,
        },
        warranty: {
            type: Number,
            required: true,
        },
        status: {
            type: Boolean,
            required: true,
            default: true,
        },
        steps: {
            type: [String],
            required: true,
        },
        rating: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'rating',
        },
        image: {
            type: String,
            required: false,
            default: 'https://ik.imagekit.io/gvspmkmsw/y9DpT.jpg',
        },
        category: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'categories',
            required: true,
        },
    },
    {
        timestamps: true,
        versionKey: false,
    }
);

const ServiceModel = mongoose.model('services', ServiceSchema);
export default ServiceModel;
