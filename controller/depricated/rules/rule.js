import { FormattedData } from '../../../helper/formattedResponse.js';
import ApiError, { httpStatus } from '../../../middleware/error.js';
import RuleService from '../../service/rules/rule.service.js';

const service = new RuleService();
//create a rule
export const create = async (req, res, next) => {
    try {
        const rule = await service.createRule(req.body);
        return res.status(httpStatus.created).json(FormattedData(true, rule, 'rule created'));
    } catch (error) {
        next(error);
    }
};

//get all rules
export const getAllRules = async (req, res, next) => {
    try {
        const rules = await service.getAllRules();
        return res.status(httpStatus.success).json(FormattedData(true, rules, 'rules found'));
    } catch (error) {
        next(error);
    }
};

//get rule by id
export const getRuleById = async (req, res, next) => {
    try {
        const rule = await service.getRuleById(req.params.id);
        if (!rule) {
            throw new ApiError(httpStatus.notFound, 'rule not found');
        }
        return res.status(httpStatus.success).json(FormattedData(true, rule, 'rule found'));
    } catch (error) {
        next(error);
    }
};

//update a rule
export const update = async (req, res, next) => {
    try {
        const rule = await service.updateRule(req.params.id, req.body);
        if (!rule) {
            throw new ApiError(httpStatus.notFound, 'rule not found');
        }
        return res.status(httpStatus.success).json(FormattedData(true, rule, 'rule updated'));
    } catch (error) {
        next(error);
    }
};

//delete a rule
export const deleteRule = async (req, res, next) => {
    try {
        const rule = await service.deleteRule(req.params.id);
        if (!rule) {
            throw new ApiError(httpStatus.notFound, 'rule not found');
        }
        return res.status(httpStatus.success).json(FormattedData(true, rule, 'rule deleted'));
    } catch (error) {
        next(error);
    }
};

//add a service into a rule
export const addServiceToRule = async (req, res, next) => {
    try {
        const rule = await service.addServiceToRule(req.params.id, req.body.serviceId);
        if (!rule) {
            throw new ApiError(httpStatus.notFound, 'rule not found');
        }
        return res.status(httpStatus.created).json(FormattedData(true, rule, 'service added to rule'));
    } catch (error) {
        next(error);
    }
};
//add step to rule
export const addStepToRule = async (req, res, next) => {
    try {
        const rule = await service.addStepToRule(req.params.id, req.body);
        if (!rule) {
            throw new ApiError(httpStatus.notFound, 'rule not found');
        }
        return res.status(httpStatus.created).json(FormattedData(true, rule, 'step added to rule'));
    } catch (error) {
        next(error);
    }
};
//remove a service from a rule
export const removeServiceFromRule = async (req, res, next) => {
    try {
        const rule = await service.removeServiceFromRule(req.params.id, req.body.serviceId);
        if (!rule) {
            throw new ApiError(httpStatus.notFound, 'rule not found');
        }
        return res.status(httpStatus.success).json(FormattedData(true, rule, 'service Removed from rule'));
    } catch (error) {
        next(error);
    }
};
