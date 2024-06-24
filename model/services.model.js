import mongoose from "mongoose";
const ServiceSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      default: "",
    },
    rules: {
      type: [String],
      default: [],
    },
    price: {
      type: Number,
      required: true,
      default: 0.0,
    },
    image: {
      type: String,
      required: true,
      default: "",
    },
    category: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Category",
      required: true,
    },
    shop: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Shop",
      required: true,
    },
    reviews: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Review",
      },
    ],
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

const ServiceModel = mongoose.model("Service", ServiceSchema);
export default ServiceModel;
