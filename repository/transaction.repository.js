import transactionModel from '../model/transaction.model.js';

const TransactionRepository = {
    create: async data => {
        try {
            const transaction = await transactionModel.create(data);
            return transaction;
        } catch (error) {
            throw error;
        }
    },
    getAll: async () => {
        try {
            const transaction = await transactionModel.find().populate({
                path: 'serviceProvider',
                select: 'name email avatar _id',
            });
            return transaction;
        } catch (error) {
            throw error;
        }
    },
    getById: async id => {
        try {
            const transaction = await transactionModel.find({ serviceProvider: id }).select('-_id').sort({ createdAt: -1 });
            return transaction;
        } catch (error) {
            throw error;
        }
    },
    update: async (id, data) => {
        try {
            const transaction = await transactionModel.findByIdAndUpdate(id, data, { new: true });
            return transaction;
        } catch (error) {
            throw error;
        }
    },
};
export default TransactionRepository;
