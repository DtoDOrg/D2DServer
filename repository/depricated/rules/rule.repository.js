import RulesModel from '../../model/rules.model.js';

const ruleRepository = {
    //create
    create: async rule => {
        try {
            const result = await RulesModel.create(rule);
            return result;
        } catch (error) {
            throw error;
        }
    },
    //find by id
    findById: async id => {
        try {
            const result = await RulesModel.findById(id).select('-createdAt -updatedAt');
            return result;
        } catch (error) {
            throw error;
        }
    },
    //update
    update: async (id, rule) => {
        try {
            const result = await RulesModel.findByIdAndUpdate(id, rule, { new: true });
            return result;
        } catch (error) {
            throw error;
        }
    },
    //find all rules
    findAll: async () => {
        try {
            const result = await RulesModel.find().select('-createdAt -updatedAt');
            return result;
        } catch (error) {
            throw error;
        }
    },
    //delete
    delete: async id => {
        try {
            const result = await RulesModel.findByIdAndDelete(id);
            return result;
        } catch (error) {
            throw error;
        }
    },
};
export default ruleRepository;
