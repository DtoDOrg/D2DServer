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
    console.log(error.status);
    res
      .status(error.status || 500)
      .json(FormattedData(false, null, error.message));
  }
};

//verify registration
export const verifyRegistration = async (req, res) => {
  try {
    const { token } = req.params;
    const user = await userService.verifyRegistration(token);
    res.status(200).json(FormattedData(true, user, "user verified"));
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

//get all users
export const getAllUsers = async (req, res) => {
  try {
    const users = await userService.getAllUsers();
    res.status(200).json(FormattedData(true, users, "users fetched"));
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// login
export const login = async (req, res) => {
  try {
    const token = await userService.logIn(req.body);
    res.status(200).json(FormattedData(true, token, "login successful"));
  } catch (error) {
    res.status(error.status).json(FormattedData(false, null, error.message));
  }
};
