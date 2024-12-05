import mongoose from 'mongoose';
const stateSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
            unique: true,
        },
    },
    {
        timestamps: true,
        versionKey: false,
    }
);

const StateModel = mongoose.model('state', stateSchema);
export default StateModel;
