import { imageDelete } from '../helper/imageDeleter.js';
import ApiError, { httpStatus } from '../middleware/error.js';
import BannerRepository from '../repository/banner.repository.js';

class BannerService {
    async getAll() {
        try {
            const result = await BannerRepository.getAll();
            return result;
        } catch (error) {
            throw error;
        }
    }

    async getAllSingleBanner() {
        try {
            const result = await BannerRepository.getAllSingleBanner();
            return result;
        } catch (error) {
            throw error;
        }
    }

    async getAllMultiBanner() {
        try {
            const result = await BannerRepository.getAllMultiBanner();
            return result;
        } catch (error) {
            throw error;
        }
    }

    async create(data) {
        try {
            const result = await BannerRepository.create(data);
            return result;
        } catch (error) {
            throw error;
        }
    }

    async update(id, data) {
        try {
            const result = await BannerRepository.update(id, data);
            return result;
        } catch (error) {
            throw error;
        }
    }

    async delete(id) {
        try {
            const result = await BannerRepository.delete(id);
            await imageDelete(result.image);
            return result;
        } catch (error) {
            throw error;
        }
    }
    async updateStatus(id) {
        try {
            const bannerInfo = await BannerRepository.getById(id);
            if (!bannerInfo) {
                throw new ApiError(httpStatus.notFound, 'banner not found');
            }

            const result = await BannerRepository.update(id, { status: !bannerInfo.status });
            return result;
        } catch (error) {
            throw error;
        }
    }
}

export default new BannerService();
