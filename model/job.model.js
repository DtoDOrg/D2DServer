import mongoose from 'mongoose';

const jobSchema = new mongoose.Schema(
    {
        service: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'service',
            required: true,
        },
        category: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'category',
            required: true,
        },
        user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'user',
            required: true,
        },
        status: {
            type: String,
            enum: ['pending', 'accepted', 'completed', 'cancelled'],
            default: 'pending',
        },
        city: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'city',
            required: true,
        },
        state: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'state',
            required: true,
        },
        address: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'address',
            required: true,
        },
        date: {
            type: Date,
            required: true,
        },
        time: {
            type: String,
            required: true,
        },
        serviceProvider: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'serviceProvider',
        },
        price: {
            type: Number,
            required: true,
        },
    },
    {
        timestamps: true,
        versionKey: false,
    }
);

const JobModel = mongoose.model('job', jobSchema);
export default JobModel;
