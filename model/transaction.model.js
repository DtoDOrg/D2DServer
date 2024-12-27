import mongoose from 'mongoose';
const transactionSchema = new mongoose.Schema(
    {
        serviceProvider: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'serviceProvider',
            required: true,
        },
        amount: {
            type: Number,
            required: true,
        },
        status: {
            type: String,
            enum: ['pending', 'success', 'failed'],
            default: 'pending',
        },
        paymentId: {
            type: String,
            required: true,
        },
        paymentType: {
            type: String,
            enum: ['cr', 'debt'],
        },
        message: {
            type: String,
            required: true,
            default: '',
        },
    },
    {
        timestamps: true,
        versionKey: false,
    }
);
const transactionModel = mongoose.model('transaction', transactionSchema);
export default transactionModel;
