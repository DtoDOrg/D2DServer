import mongoose from 'mongoose';
const StateSchema = new mongoose.Schema(
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

const StateModel = mongoose.model('state', StateSchema);
export default StateModel;
