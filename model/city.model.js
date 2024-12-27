import mongoose from 'mongoose';
const citySchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
        },
        state: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'state',
            required: true,
        },
    },
    {
        timestamps: true,
        versionKey: false,
    }
);

const CityModel = mongoose.model('city', citySchema);
export default CityModel;
