import mongoose from 'mongoose';

const couponSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
            unique: true,
        },
        code: {
            type: String,
            required: true,
            unique: true,
        },
        couponType: {
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

const CouponModel = mongoose.model('coupon', couponSchema);
export default CouponModel;
