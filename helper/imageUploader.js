import { CONFIG } from "../config/config.js";
import ImageKit from "imagekit";
var imagekit = new ImageKit({
  publicKey: CONFIG.IMAGEKIT_PUB,
  privateKey: CONFIG.IMAGEKIT_PRI,
  urlEndpoint: `https://ik.imagekit.io/${CONFIG.IMAGE_KIT_ID}`,
});
export const ImageUploader = async (file, folder) => {
  try {
    // id = gvspmkmsw;
    const details = await imagekit.upload({
      file: file.buffer,
      fileName: file.originalname,
      folder: `/${folder}`,
    });
  
    const url = `${details.url}#${details.fileId}`
    console.log(url)
    return url;
    // SDK initialization
  } catch (error) {
    console.log(error.message);
  }
};
