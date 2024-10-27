import mongoose from 'mongoose';
const rulesSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
        },

        description: {
            type: String,
            required: true,
        },
        steps: [
            {
                name: {
                    type: String,
                    required: true,
                },
                description: {
                    type: String,
                    required: true,
                },
            },
        ],
        services: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'service',
            },
        ],
    },
    {
        timestamps: true,
        versionKey: false,
    }
);

const RulesModel = mongoose.model('rule', rulesSchema);
export default RulesModel;
