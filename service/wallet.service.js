import ApiError, { httpStatus } from '../middleware/error.js';
import ServiceProviderRepository from '../repository/serviceProvider.repository.js';
import WalletRepository from '../repository/wallet.repository.js';

class WalletService {
    async createWallet() {
        try {
            const wallet = await WalletRepository.create();
            return wallet;
        } catch (error) {
            throw error;
        }
    }
    async creditAmount(userId, amount) {
        try {
            const user = await ServiceProviderRepository.findById(userId);

            if (!user) {
                throw new ApiError(httpStatus.notFound, 'service Provider not found');
            }

            const result = await WalletRepository.creditAmount(user.wallet, amount);
            return result;
        } catch (error) {
            throw error;
        }
    }
    async debitAmount(userId, amount) {
        try {
            const user = await ServiceProviderRepository.findById(userId);
            if (!user) {
                throw new ApiError(httpStatus.notFound, 'service Provider not found');
            }
            const wallet = await WalletRepository.findById(user.wallet);
            if (wallet.balance < amount) {
                throw new ApiError(httpStatus.badRequest, 'insufficient balance');
            }
            const result = await WalletRepository.debitAmount(user.wallet, amount);
            return result;
        } catch (error) {
            throw error;
        }
    }
}

export default WalletService;
