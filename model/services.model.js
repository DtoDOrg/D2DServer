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
        rule: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'rule',
            required: true,
        },
        image: {
            type: String,
            required: false,
            default: 'https://ik.imagekit.io/gvspmkmsw/y9DpT.jpg',
        },
        category: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Category',
            required: true,
        },
    },
    {
        timestamps: true,
        versionKey: false,
    }
);

const ServiceModel = mongoose.model('Service', ServiceSchema);
export default ServiceModel;
