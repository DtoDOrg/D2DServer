import mongoose from 'mongoose';

const orderSchema = new mongoose.Schema(
    {
        userId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'user',
            required: true,
        },
        cartId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Cart',
            required: true,
        },
        paymentId: {
            type: String,
            required: true,
        },
        status: {
            type: String,
            enum: ['pending', 'placed', 'cancelled'],
            default: 'pending',
        },
    },
    {
        timestamps: true,
        versionKey: false,
    }
);

const OrderModel = mongoose.model('Order', orderSchema);
export default OrderModel;
