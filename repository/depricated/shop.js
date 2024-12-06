import ShopModel from '../../model/depricated/shop.model.js';

class ShopRepository {
    //create
    async create(data) {
        try {
            const shop = await ShopModel.create(data);
            return shop;
        } catch (error) {
            throw error;
        }
    }
    //get
    async getById(id) {
        try {
            const shop = await ShopModel.findById(id);
            return shop;
        } catch (error) {
            throw error;
        }
    }
    //get all
    async getAll() {
        try {
            const shops = await ShopModel.find();
            return shops;
        } catch (error) {
            throw error;
        }
    }
    //get by city
    async getByCity(city) {
        try {
            const shops = await ShopModel.find({ city: city, isDeleted: false });
            return shops;
        } catch (error) {
            throw error;
        }
    }
    //get by email
    async getByEmail(email) {
        try {
            const shops = await ShopModel.find({ city: email, isDeleted: false });
            return shops;
        } catch (error) {
            throw error;
        }
    }

    //update
    async update(id, data) {
        try {
            const shop = await ShopModel.findByIdAndUpdate(id, data, {
                new: true,
            });
            return shop;
        } catch (error) {
            throw error;
        }
    }

    //update status
    async updateStatus(id, status) {
        try {
            const shop = await ShopModel.findByIdAndUpdate(id, { status: status }, { new: true });
            return shop;
        } catch (error) {
            throw error;
        }
    }

    //delete
    async delete(id) {
        try {
            console.log(id);
            const shop = await ShopModel.findByIdAndUpdate(id, {
                isDeleted: true,
            });

            return shop;
        } catch (error) {
            throw error;
        }
    }
}
export default ShopRepository;
