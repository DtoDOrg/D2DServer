import { FormattedData } from "../helper/formattedResponse.js";
import UserService from "../service/user.service.js";

const userService = new UserService();
//create user
export const registration = async (req, res) => {
  try {
    const { name, email, password, phone } = req.body;
    const token = await userService.registration({
      name,
      email,
      password,
      phone,
    });
    res.status(201).json(FormattedData(true, token, "check your email"));
  } catch (error) {
    next(err);
  }
};

//verify registration
export const verifyRegistration = async (req, res) => {
  try {
    const { token } = req.params;
    const user = await userService.verifyRegistration(token);
    res.status(200).json(FormattedData(true, user, "user verified"));
  } catch (error) {
     next(err);
  }
};

//get all users
export const getAllUsers = async (req, res) => {
  try {
    const users = await userService.getAllUsers();
    res.status(200).json(FormattedData(true, users, "users fetched"));
  } catch (error) {
     next(err);
  }
};

// login
export const login = async (req, res, next) => {
  try {
    const token = await userService.logIn(req.body);
    res.status(200).json(FormattedData(true, token, "login successful"));
  } catch (err) {
    next(err);
  }
};

//get by Id
export const getUserById = async (req, res, next) => {
  try {
    const user = await userService.getUserById(req.params.id);
    res.status(200).json(FormattedData(true, user, "user fetched"));
  } catch (err) {
    next(err);
  }
};
