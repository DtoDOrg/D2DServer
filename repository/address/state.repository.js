import StateModel from '../../model/state.model.js';
import { deleteDataFromRedis, getDataFromRedis, setDataToRedis } from '../../helper/redis.js';
import { redisKeys } from '../../config/config.js';

const stateRepository = {
    //create
    create: async state => {
        try {
            const result = await StateModel.create(state);
            await deleteDataFromRedis(redisKeys.STATES);
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
            await deleteDataFromRedis(redisKeys.STATES);

            return result;
        } catch (error) {
            throw error;
        }
    },
    //find all
    findAll: async () => {
        try {
            const redisData = await getDataFromRedis(redisKeys.STATES);
            if (redisData) {
                return JSON.parse(redisData);
            }
            const result = await StateModel.find().select('-createdAt -updatedAt').sort({ name: 1 });
            await setDataToRedis(redisKeys.STATES, JSON.stringify(result));
            return result;
        } catch (error) {
            throw error;
        }
    },

    //find by id
    findById: async id => {
        try {
            const result = await StateModel.findById(id).select('-createdAt -updatedAt');
            return result;
        } catch (error) {
            throw error;
        }
    },
    //delete by id
    deleteById: async id => {
        try {
            const result = await StateModel.findByIdAndDelete(id);
            await deleteDataFromRedis(redisKeys.STATES);
            return result;
        } catch (error) {
            throw error;
        }
    },
};
export default stateRepository;
