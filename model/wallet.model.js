import mongoose from 'mongoose';
const walletSchema = new mongoose.Schema(
    {
        balance: {
            type: Number,
            required: true,
            default: 0,
        },
    },
    {
        versionKey: false,
        timestamps: true,
    }
);
const WalletModel = mongoose.model('wallet', walletSchema);
export default WalletModel;
