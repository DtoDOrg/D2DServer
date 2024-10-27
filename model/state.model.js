import mongoose from 'mongoose';
const stateSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
            unique: true,
        },
        cities: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'city', // Reference to the City model
            },
        ],
    },
    {
        timestamps: true,
        versionKey: false,
    }
);

const StateModel = mongoose.model('state', stateSchema);
export default StateModel;
