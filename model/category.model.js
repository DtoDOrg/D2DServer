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
        status: {
            type: Boolean,
            required: true,
            default: true,
        },
    },
    {
        timestamps: true,
        versionKey: false,
    }
);
const CategoryModel = mongoose.model('categories', categorySchema);
export default CategoryModel;
