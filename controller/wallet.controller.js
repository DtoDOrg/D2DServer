import { FormattedData } from '../helper/formattedResponse.js';
import { httpStatus } from '../middleware/error.js';
import WalletService from '../service/wallet.service.js';

const service = new WalletService();

export const creditAmount = async (req, res, next) => {
    try {
        const wallet = await service.creditAmount(req.user.id, req.body.amount);
        return res.status(httpStatus.created).json(FormattedData(true, wallet, 'amount credited'));
    } catch (error) {
        next(error);
    }
};

export const debitAmount = async (req, res, next) => {
    try {
        const wallet = await service.debitAmount(req.user.id, req.body.amount);
        return res.status(httpStatus.created).json(FormattedData(true, wallet, 'amount debited'));
    } catch (error) {
        next(error);
    }
};
