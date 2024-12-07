// import { generateToken } from '../helper/authorization.js';
// import { compare } from '../helper/password.js';
// import ApiError, { httpStatus } from '../middleware/error.js';
// import CustomerRepository from '../repository/customer.repository.js';

// class CustomerService {
//     async createCustomer(data) {
//         try {
//             const customer = await CustomerRepository.getByEmail(data.email);
//             if (customer) {
//                 throw new ApiError(httpStatus.badRequest, 'user already exists');
//             }
//             const savedCustomer = await CustomerRepository.create(data);
//             return savedCustomer;
//         } catch (error) {
//             throw error;
//         }
//     }

//     async login(data) {
//         try {
//             const customer = await CustomerRepository.getByEmail(data.email);
//             if (!customer) {
//                 throw new ApiError(httpStatus.badRequest, 'user not found');
//             }
//             const verifyPassword = await compare(data.password, customer.password);
//             if (!verifyPassword) {
//                 throw new ApiError(httpStatus.badRequest, 'invalid password');
//             }
//             const payload = {
//                 id: customer._id,
//                 role: 'customer',
//                 'email:': data.email,
//             };
//             const token = generateToken(payload);
//             return token;
//         } catch (error) {
//             throw error;
//         }
//     }

//     async getCustomerById(id) {
//         try {
//             const customer = await CustomerRepository.getById(id);
//             return customer;
//         } catch (error) {
//             throw error;
//         }
//     }

//     async updateCustomer(id, data) {
//         try {
//             const customer = await CustomerRepository.update(id, data);
//             return customer;
//         } catch (error) {
//             throw error;
//         }
//     }

//     async deleteCustomer(id) {
//         try {
//             const customer = await CustomerRepository.delete(id);
//             return customer;
//         } catch (error) {
//             throw error;
//         }
//     }
//     async getAll() {
//         try {
//             const customers = await CustomerRepository.getAll();
//             return customers;
//         } catch (error) {
//             throw error;
//         }
//     }
// }

// export default CustomerService;
