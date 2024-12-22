import { FormattedData } from '../helper/formattedResponse.js';
import { httpStatus } from '../middleware/error.js';
import TransactionService from '../service/transaction.service.js';

const service = new TransactionService();
export const createTxn = async (req, res, next) => {
    try {
        const result = await service.createTransaction(req.body);
        return res.status(httpStatus.created).json(FormattedData(true, result, 'transaction created'));
    } catch (error) {
        next(error);
    }
};
export const getTxn = async (req, res, next) => {
    try {
        const result = await service.getTransaction(req.user.id);
        return res.status(httpStatus.created).json(FormattedData(true, result, 'transaction fetched'));
    } catch (error) {
        next(error);
    }
};
export const getAllTxn = async (req, res, next) => {
    try {
        const result = await service.getAllTransactions();
        return res.status(httpStatus.created).json(FormattedData(true, result, 'transaction fetched'));
    } catch (error) {
        next(error);
    }
};
export const updateTxn = async (req, res, next) => {
    try {
        const result = await service.updateTransaction(req.params.id, req.body);
        return res.status(httpStatus.created).json(FormattedData(true, result, 'transaction updated'));
    } catch (error) {
        next(error);
    }
};
