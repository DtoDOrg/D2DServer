import { FormattedData } from '../helper/formattedResponse.js';
import CustomerService from '../service/customer.service.js';

const customerService = new CustomerService();
export const createCustomer = async (req, res) => {
    try {
        const result = await customerService.createCustomer(req.body);
        res.status(httpStatus.created).json(FormattedData(true, result, 'customer created'));
    } catch (error) {
        next(error);
    }
};
export const login = async (req, res) => {
    try {
        const result = await customerService.login(req.body);
        res.status(httpStatus.created).json(FormattedData(true, result, 'login successful'));
    } catch (error) {
        next(error);
    }
};
export const getCustomerById = async (req, res) => {
    try {
        const result = await customerService.getCustomerById(req.params.id);
        res.status(httpStatus.success).json(FormattedData(true, result, 'customer fetched'));
    } catch (error) {
        next(error);
    }
};

export const getAll = async (req, res) => {
    try {
        const result = await customerService.getAll();
        res.status(httpStatus.success).json(FormattedData(true, result, 'customers fetched'));
    } catch (error) {
        next(error);
    }
};

export const updateCustomer = async (req, res) => {
    try {
        const result = await customerService.updateCustomer(req.params.id, req.body);
        res.status(httpStatus.success).json(FormattedData(true, result, 'customer updated'));
    } catch (error) {
        next(error);
    }
};

export const deleteCustomer = async (req, res) => {
    try {
        const result = await customerService.deleteCustomer(req.params.id);
        res.status(httpStatus.success).json(FormattedData(true, result, 'customer deleted'));
    } catch (error) {
        next(error);
    }
};
