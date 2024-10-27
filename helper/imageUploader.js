import { CONFIG } from '../config/config.js';
import ImageKit from 'imagekit';
var imagekit = new ImageKit({
    publicKey: CONFIG.IMAGE_KIT_PUB,
    privateKey: CONFIG.IMAGE_KIT_PRI,
    urlEndpoint: `https://ik.imagekit.io/${CONFIG.IMAGE_KIT_ID}`,
});
export const imageUploader = async (file, folder) => {
    try {
        const details = await imagekit.upload({
            file: file.buffer,
            fileName: file.originalname,
            folder: `/${folder}`,
        });

        const url = `${details.url}#${details.fileId}`;
        console.log(url);
        return url;
        // SDK initialization
    } catch (error) {
        console.log(error.message);
    }
};
