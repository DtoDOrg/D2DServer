import TransactionRepository from '../repository/transaction.repository.js';

class TransactionService {
    async createTransaction(data) {
        try {
            const transaction = await TransactionRepository.create(data);
            return transaction;
        } catch (error) {
            throw error;
        }
    }
    async updateTransaction(id, data) {
        try {
            const transaction = await TransactionRepository.update(id, data);
            return transaction;
        } catch (error) {
            throw error;
        }
    }
    async getTransaction(id) {
        try {
            const transaction = await TransactionRepository.getById(id);
            return transaction;
        } catch (error) {
            throw error;
        }
    }
    async getAllTransactions() {
        try {
            const transaction = await TransactionRepository.getAll();
            return transaction;
        } catch (error) {
            throw error;
        }
    }
}

export default TransactionService;
