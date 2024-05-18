import UserModel from "../model/user.model.js";

class UserRepository {
  //create user
  create = async (user) => {
    try {
      const newUser = await UserModel.create(user);
      return newUser;
    } catch (error) {
      throw error;
    }
  };
  //get user by id

  getById = async (id) => {
    try {
      const user = await UserModel.findById(id);
      return user;
    } catch (error) {
      throw error;
    }
  };

  //get user by email

  getByEmail = async (email) => {
    try {
      const user = await UserModel.findOne({ email });
      return user;
    } catch (error) {
      throw error;
    }
  };

  //get all
  users = async () => {
    try {
      const users = await UserModel.find();
      return users;
    } catch (error) {
      throw error;
    }
  };

  //update user
  update = async (id, user) => {
    try {
      const updatedUser = await UserModel.findByIdAndUpdate(id, user, {
        new: true,
      });
      return updatedUser;
    } catch (error) {
      throw error;
    }
  };

  //delete user
  delete = async (id) => {
    try {
      const deletedUser = await UserModel.findByIdAndDelete(id);
      return deletedUser;
    } catch (error) {
      throw error;
    }
  };
}
export default UserRepository;
