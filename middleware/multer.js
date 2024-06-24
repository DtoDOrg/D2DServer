import multer from "multer";
import ApiError from "./error.js";
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

export const uploader = (file, req, res) => {
  try {
    return upload.single(file);
  } catch (error) {
    console.log(error);
    throw new ApiError(400, "Faild to upload image");
  }
};
