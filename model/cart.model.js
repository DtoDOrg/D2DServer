import mongoose, { Schema } from "mongoose";
const CartSchema = new Schema(
  {
    userId: { type: String, required: true },
    products: { type: [], required: true },
    total: { type: Number, default: 0 },
    discount: { type: Number, default: 0 },
    tax: { type: Number, required: true, default: 0 },
    totalAfterDiscount: { type: Number, default: 0 },
    couponCode: { type: String, default: "" },
  },
  { timestamps: true }
);
const CartModel = mongoose.model("Cart", CartSchema);
export default CartModel;
