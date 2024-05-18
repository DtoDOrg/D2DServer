import dotenv from "dotenv";
dotenv.config();
export const CONFIG = {
  PORT: process.env.PORT || 3000,
  DATABASE:
    process.env.DB_URI ||
    "mongodb+srv://jmahato686:UELinew6KFDlScdS@d2d.pypukno.mongodb.net/?retryWrites=true&w=majority",
  APPKEY: process.env.APP_KEY,
};
