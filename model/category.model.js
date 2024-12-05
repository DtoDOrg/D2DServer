import mongoose from 'mongoose';
const categorySchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
        },
        description: {
            type: String,
            required: true,
        },
        services: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'services',
            },
        ],
        image: {
            type: String,
            required: true,
            default: 'https://ik.imagekit.io/gvspmkmsw/y9DpT.jpg',
        },
        bannerImage: {
            type: String,
            required: true,
            default: 'https://ik.imagekit.io/gvspmkmsw/y9DpT.jpg',
        },
    },
    {
        timestamps: true,
        versionKey: false,
    }
);
const CategoryModel = mongoose.model('categories', categorySchema);
export default CategoryModel;
