import mongoose, { Schema } from 'mongoose';
const CartSchema = new Schema(
    {
        userId: { type: mongoose.Schema.Types.ObjectId, ref: 'user', required: true },
        services: {
            type: [
                {
                    service: { type: mongoose.Schema.Types.ObjectId, ref: 'service', required: true },
                    quantity: { type: Number, required: true },
                    date: { type: String, required: true },
                    time: { type: String, required: true },
                },
            ],
            required: true,
        },
        grossTotal: { type: Number, default: 0 },
        discount: { type: Number, default: 0 },
        charges: { type: Number, required: true, default: 0 },
        tax: { type: Number, required: true, default: 0 },
        total: { type: Number, default: 0 },
        coupon: { type: mongoose.Schema.Types.ObjectId, ref: 'coupon' },
        orderPlaced: { type: Boolean, default: false },
    },
    { timestamps: true, versionKey: false }
);
const CartModel = mongoose.model('Cart', CartSchema);
export default CartModel;
