import mongoose from 'mongoose';

const couponSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
        },
        code: {
            type: String,
            required: true,
        },
        type: {
            type: String,
            enum: ['fixed', 'percentage'],
            required: true,
            default: 'fixed',
        },
        value: {
            type: Number,
            required: true,
        },
        description: {
            type: Number,
            required: true,
        },
        minAmount: {
            type: Number,
            required: true,
            default: 0,
        },
        maxAmount: {
            type: Number,
            required: true,
            default: 200,
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
