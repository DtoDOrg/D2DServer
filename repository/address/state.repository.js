import StateModel from '../../model/state.model.js';

const stateRepository = {
    //create
    create: async state => {
        try {
            const result = await StateModel.create(state);
            return result;
        } catch (error) {
            throw error;
        }
    },
    //update
    update: async (id, name) => {
        try {
            const result = await StateModel.findByIdAndUpdate(id, name, {
                new: true,
            });
            return result;
        } catch (error) {
            throw error;
        }
    },
    //find all
    findAll: async () => {
        try {
            const result = await StateModel.find().select('-createdAt -updatedAt').sort({ name: 1 }).populate({ path: 'cities', select: 'name _id' });

            return result;
        } catch (error) {
            throw error;
        }
    },

    //find by id
    findById: async id => {
        try {
            const result = await StateModel.findById(id).select('-createdAt -updatedAt').populate('cities');
            return result;
        } catch (error) {
            throw error;
        }
    },
    //delete by id
    deleteById: async id => {
        try {
            const result = await StateModel.findByIdAndDelete(id);
            return result;
        } catch (error) {
            throw error;
        }
    },
};
export default stateRepository;
