import mongoose from 'mongoose';
const addressSchema = new mongoose.Schema(
    {
        street: {
            type: String,
            required: true,
        },
        landmark: {
            type: String,
            default: '',
        },
        city: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'city',
            required: true,
        },
        state: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'state',
            required: true,
        },
        country: {
            type: String,
            required: true,
        },
        zip: {
            type: Number,
            required: true,
        },
    },
    {
        timestamps: true,
        versionKey: false,
    }
);

const AddressModel = mongoose.model('address', addressSchema);
export default AddressModel;
