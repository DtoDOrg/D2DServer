import CityModel from '../../model/city.model.js';

const cityRepository = {
    //create
    create: async data => {
        try {
            const city = await CityModel.create(data);
            return city;
        } catch (error) {
            throw error;
        }
    },
    //update
    update: async (id, name) => {
        try {
            const result = await CityModel.findByIdAndUpdate(id, name, {
                new: true,
            });
            return result;
        } catch (error) {
            throw error;
        }
    },
    //delete
    delete: async id => {
        try {
            const result = await CityModel.findByIdAndDelete(id);
            return result;
        } catch (error) {
            throw error;
        }
    },

    //find all
    findAll: async () => {
        try {
            const result = await CityModel.find().select('-createdAt -updatedAt').populate({ path: 'state', select: 'name -_id' }).sort({ name: 1 });
            return result;
        } catch (error) {
            throw error;
        }
    },
    //find by id
    findById: async id => {
        try {
            const result = await CityModel.findById(id).select('-createdAt -updatedAt');
            return result;
        } catch (error) {
            throw error;
        }
    },
};

export default cityRepository;
