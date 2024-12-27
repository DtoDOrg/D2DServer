import { CONFIG } from '../config/config.js';
import ImageKit from 'imagekit';
var imagekit = new ImageKit({
    publicKey: CONFIG.IMAGE_KIT_PUB,
    privateKey: CONFIG.IMAGE_KIT_PRI,
    urlEndpoint: `https://ik.imagekit.io/${CONFIG.IMAGE_KIT_ID}`,
});
export const imageDelete = async imageUrl => {
    try {
        const fileId = imageUrl.split('#')[1];
        await imagekit.deleteFile(fileId);
    } catch (error) {
        console.log(error.message);
    }
};
