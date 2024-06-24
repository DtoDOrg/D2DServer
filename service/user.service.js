import { regPayload, regToken, token } from "../helper/authorization.js";
import { compare, encrypt } from "../helper/password.js";
import UserRepository from "../repository/user.js";
import ApiError, { HTTPSTATUS } from "../middleware/error.js";
class UserService {
  constructor() {
    this.userRepository = new UserRepository();
  }

  //log in

  async logIn(user) {
    try {
      const userInfo = await this.userRepository.getByEmail(user.email);
      if (!userInfo) {
        throw new ApiError(HTTPSTATUS.BADREQUEST, "user not found");
      }
      const verifyPassword = await compare(user.password, userInfo.password);
      if (!verifyPassword) {
        throw new ApiError(HTTPSTATUS.BADREQUEST, "invalid password");
      }
      const payload = {
        id: userInfo._id,
        role: 'user',
      };
      const signedToken = token(payload);
      return signedToken;
    } catch (error) {
      throw new ApiError(HTTPSTATUS.BADREQUEST, error.message);
    }
  }

  //registration
  async registration(user) {
    try {
      const userInfo = await this.userRepository.getByEmail(user.email);
      if (userInfo) {
        throw new ApiError(HTTPSTATUS.BADREQUEST, "user already exists");
      }
      const encPass = await encrypt(user.password);
      user.password = encPass;
      const token = regToken(user);

      //send token to email

      return token;
    } catch (error) {
      throw error;
    }
  }

  //verify registration
  async verifyRegistration(token) {
    try {
      const payload = regPayload(token);
      // return payload;
      const createdUser = await this.userRepository.create(payload);
      return createdUser;
    } catch (error) {
      throw error;
    }
  }

  //create user

  async createUser(user) {
    try {
      const encPass = await encrypt(user.password);
      user.password = encPass;
      const createdUser = await this.userRepository.createUser(user);
      return createdUser;
    } catch (error) {
      throw error;
    }
  }

  //get user by id
  async getUserById(userId) {
    try {
      const user = await this.userRepository.getById(userId);
      return user;
    } catch (error) {
      throw error;
    }
  }

  //get all users
  async getAllUsers() {
    try {
      const users = await this.userRepository.users();
      return users;
    } catch (error) {
      throw error;
    }
  }

  //update user

  async updateUser(userId, user) {
    try {
      const updatedUser = await this.userRepository.updateUser(userId, user);
      return updatedUser;
    } catch (error) {
      throw error;
    }
  }

  //delete user

  async deleteUser(userId) {
    try {
      const deletedUser = await this.userRepository.deleteUser(userId);
      return deletedUser;
    } catch (error) {
      throw error;
    }
  }
}
export default UserService;
