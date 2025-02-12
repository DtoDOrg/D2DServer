import mongoose, { Schema } from 'mongoose';
const userSchema = new Schema(
    {
        name: {
            type: String,
            required: true,
        },
        email: {
            type: String,
            required: true,
            lowercase: true,
            unique: true,
        },
        phone: {
            type: String,
            required: true,
        },
        password: {
            type: String,
            required: true,
        },
        status: {
            type: Boolean,
            default: true,
        },
        isVerified: {
            type: Boolean,
            default: false,
        },
        avatar: {
            type: String,
            default: 'https://ik.imagekit.io/gvspmkmsw/avatar.webp',
        },
    },
    {
        timestamps: true,
        versionKey: false,
    }
);
const UserModel = mongoose.model('user', userSchema);
export default UserModel;
