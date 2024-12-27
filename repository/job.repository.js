import JobModel from '../model/job.model.js';

const jobRepository = {
    create: async data => {
        try {
            const job = await JobModel.create(data);
            return job;
        } catch (error) {
            throw error;
        }
    },
    getById: async id => {
        try {
            const job = await JobModel.findById(id);

            return job;
        } catch (error) {
            throw error;
        }
    },

    getAll: async () => {
        try {
            const job = await JobModel.find().sort({ createdAt: -1 });
            return job;
        } catch (error) {
            throw error;
        }
    },

    getByCity: async city => {
        try {
            const job = await JobModel.find({ city: city, status: 'pending' }).sort({ createdAt: -1 });
            return job;
        } catch (error) {
            throw error;
        }
    },
    getByState: async state => {
        try {
            const job = await JobModel.find({ state: state, status: 'pending' }).sort({ createdAt: -1 });
            return job;
        } catch (error) {
            throw error;
        }
    },

    getByCategory: async category => {
        try {
            const job = await JobModel.find({ category: category, status: 'pending' }).sort({ createdAt: -1 });
            return job;
        } catch (error) {
            throw error;
        }
    },

    update: async (id, data) => {
        try {
            const job = await JobModel.findByIdAndUpdate(id, data, { new: true });
            return job;
        } catch (error) {
            throw error;
        }
    },
};
export default jobRepository;
