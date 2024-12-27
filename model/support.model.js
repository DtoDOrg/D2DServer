import mongoose, { Schema } from 'mongoose';
const SupportSchema = new Schema(
    {
        userId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'user',
            required: true,
        },
        message: {
            type: String,
            required: true,
        },
    },
    {
        timestamps: true,
    }
);
const SupportModel = mongoose.model('Support', SupportSchema);
export default SupportModel;
