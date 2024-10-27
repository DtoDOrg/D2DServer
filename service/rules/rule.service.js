import ApiError, { httpStatus } from '../../middleware/error.js';
import ruleRepository from '../../repository/rules/rule.repository.js';

class RuleService {
    //create a rule
    async createRule(data) {
        try {
            const rule = await ruleRepository.create(data);
            return rule;
        } catch (error) {
            throw error;
        }
    }
    //update a rule
    async updateRule(id, data) {
        //can be update only name, description

        try {
            const rule = await ruleRepository.update(id, data);
            return rule;
        } catch (error) {
            throw error;
        }
    }
    async deleteRule(id) {
        try {
            const rule = await ruleRepository.delete(id);
            return rule;
        } catch (error) {
            throw error;
        }
    }
    //get all rules
    async getAllRules() {
        try {
            const rules = await ruleRepository.findAll();
            return rules;
        } catch (error) {
            throw error;
        }
    }
    //get rule by id
    async getRuleById(id) {
        try {
            const rule = await ruleRepository.findById(id);
            return rule;
        } catch (error) {
            throw error;
        }
    }
    //add a service into a rule
    async addServiceToRule(ruleId, serviceId) {
        try {
            console.log(ruleId, serviceId);
            const rule = await this.getRuleById(ruleId);
            if (!rule) {
                throw new ApiError(httpStatus.notFound, 'rule not found');
            }
            const services = rule.services;
            if (!services.includes(serviceId)) {
                if (services.length >= 10) {
                    throw new ApiError(httpStatus.badRequest, 'maximum 10 services can be added in a rule');
                }
                services.push(serviceId);
                await rule.save();
                return rule;
            }
            throw new ApiError(httpStatus.badRequest, 'service already added in rule');
        } catch (error) {
            throw error;
        }
    }
    //add step to a rule
    async addStepToRule(ruleId, step) {
        try {
            const rule = await this.getRuleById(ruleId);
            if (!rule) {
                throw new ApiError(httpStatus.notFound, 'rule not found');
            }
            const steps = rule.steps;
            steps.push(step);
            await rule.save();
            return rule;
        } catch (error) {
            throw error;
        }
    }

    //remove a service from a rule
    async removeServiceFromRule(ruleId, serviceId) {
        try {
            const rule = await this.getRuleById(ruleId);
            if (!rule) {
                throw new ApiError(httpStatus.notFound, 'rule not found');
            }
            const services = rule.services;
            if (services.includes(serviceId)) {
                const index = services.indexOf(serviceId);
                services.splice(index, 1);
                await rule.save();
                return rule;
            }
            throw new ApiError(httpStatus.badRequest, 'service not found in rule');
        } catch (error) {
            throw error;
        }
    }
}

export default RuleService;
