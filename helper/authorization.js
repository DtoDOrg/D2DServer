import jwt from "jsonwebtoken";
import { CONFIG } from "../config/config.js";

export const token = (payload) => {
  try {
    const token = jwt.sign(payload, CONFIG.APPKEY, { expiresIn: "30d" });
    return token;
  } catch (error) {
    throw error;
  }
};
export const regToken = (payload) => {
  try {
    const token = jwt.sign(payload, CONFIG.APPKEY, { expiresIn: "5m" });
    return token;
  } catch (error) {
    throw error;
  }
};
export const regPayload = (token) => {
  try {
    const decryptData = jwt.verify(token, CONFIG.APPKEY);
    const payload = {
      name: decryptData.name,
      email: decryptData.email,
      password: decryptData.password,
      phone: decryptData.phone,
    };
    return payload;
  } catch (error) {
    throw error;
  }
};
