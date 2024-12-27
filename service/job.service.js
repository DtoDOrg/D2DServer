import ApiError, { httpStatus } from '../middleware/error.js';
import jobRepository from '../repository/job.repository.js';
import WalletRepository from '../repository/wallet.repository.js';
import WalletService from './wallet.service.js';
const walletService = new WalletService();
class JobService {
    async create(data) {
        try {
            const job = await jobRepository.create(data);
            return job;
        } catch (error) {
            throw error;
        }
    }
    async getAll() {
        try {
            const job = await jobRepository.getAll();
            return job;
        } catch (error) {
            throw error;
        }
    }
    async getById(id) {
        try {
            const job = await jobRepository.getById(id);
            return job;
        } catch (error) {
            throw error;
        }
    }
    async getByCity(city) {
        try {
            const job = await jobRepository.getByCity(city);
            return job;
        } catch (error) {
            throw error;
        }
    }

    async getByState(state) {
        try {
            const job = await jobRepository.getByState(state);
            return job;
        } catch (error) {
            throw error;
        }
    }
    async getByCategory(category) {
        try {
            const job = await jobRepository.getByCategory(category);
            return job;
        } catch (error) {
            throw error;
        }
    }

    async update(id, data) {
        try {
            const job = await jobRepository.update(id, data);
            return job;
        } catch (error) {
            throw error;
        }
    }
    async acceptAJob(jobId, serviceProvider) {
        try {
            console.log(jobId, serviceProvider);
            const job = jobRepository.update(jobId, { status: 'accepted', serviceProvider: serviceProvider });
            return job;
        } catch (error) {
            throw error;
        }
    }
    async requestForJobDone(jobId, serviceProvider) {
        try {
            const job = await jobRepository.getById(jobId);
            // const fcm = job.user.fcm;
            //send notification to user
            const data = {
                jobId: jobId,
                serviceProvider: serviceProvider,
            };
            return data;
        } catch (error) {
            throw error;
        }
    }
    async doneAJob(jobId, userId) {
        try {
            const job = await jobRepository.getById(jobId);
            if (!job) {
                throw new ApiError(httpStatus.notFound, 'Job not found');
            }
            if (job.user.toString() !== userId) {
                throw new ApiError(httpStatus.unauthorized, 'unauthorized user');
            }

            const updatedJob = await jobRepository.update(jobId, { status: 'completed' });
            if (!updatedJob) {
                throw new ApiError(httpStatus.notFound, 'Job not found');
            }
            await walletService.creditAmount(job.serviceProvider, job.price, 'JBD-TXN_123', 'job done');
            return updatedJob;
        } catch (error) {
            throw error;
        }
    }
    async cancelAJob(jobId, serviceProvider) {
        try {
            const job = await jobRepository.update(jobId, { status: 'pending', serviceProvider: null });
            return job;
        } catch (error) {
            throw error;
        }
    }
}

export default JobService;
