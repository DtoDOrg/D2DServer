import mongoose from 'mongoose';

const ratingSchema = new mongoose.Schema(
    {
        userId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'user',
            required: true,
        },
        serviceId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'service',
            required: true,
        },
        rating: {
            type: Number,
            required: true,
            default: 0,
        },
        review: {
            type: String,
            required: true,
        },
    },
    {
        versionKey: false,
        timestamps: true,
    }
);

const RatingModel = mongoose.model('rating', ratingSchema);
export default RatingModel;
