import UserModel from '../model/user.model';

const CustomerRepository = {
    //get all customers
    getAll: async () => {
        try {
            const customers = await UserModel.find();
            return customers;
        } catch (error) {
            throw error;
        }
    },
    //get customer by id
    getById: async id => {
        try {
            const customer = await UserModel.findById(id);
            return customer;
        } catch (error) {
            throw error;
        }
    },

    //get by email
    getByEmail: async email => {
        try {
            const customer = await UserModel.findOne({ email: email });
            return customer;
        } catch (error) {
            throw error;
        }
    },
    //update customer by id
    update: async (id, data) => {
        try {
            const customer = await UserModel.findByIdAndUpdate(id, data, {
                new: true,
            });
            return customer;
        } catch (error) {
            throw error;
        }
    },
    //delete customer by id
    delete: async id => {
        try {
            const customer = await UserModel.findByIdAndDelete(id);
            return customer;
        } catch (error) {
            throw error;
        }
    },
};

export default CustomerRepository;
