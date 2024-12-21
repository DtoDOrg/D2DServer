import WalletModel from '../model/wallet.model.js';

const WalletRepository = {
    //create
    create: async () => {
        try {
            const result = await WalletModel.create({ balance: 0 });
            console.log(result);
            return result;
        } catch (error) {
            console.log(error);
            throw error;
        }
    },
    //find by id
    findById: async id => {
        try {
            const result = await WalletModel.findById(id).select('-createdAt -updatedAt');
            return result;
        } catch (error) {
            throw error;
        }
    },
    creditAmount: async (walletId, amount) => {
        try {
            const result = await WalletModel.findByIdAndUpdate(walletId, { $inc: { balance: amount } });
            return result;
        } catch (error) {
            throw error;
        }
    },
    debitAmount: async (walletId, amount) => {
        try {
            const result = await WalletModel.findByIdAndUpdate(walletId, { $inc: { balance: -amount } });
            return result;
        } catch (error) {
            throw error;
        }
    },
};
export default WalletRepository;
