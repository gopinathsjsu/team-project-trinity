const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const hotelSchema = new Schema(
    {
        name: {
            type: String,
            required: true,
            maxlength: 200
        },
        image: {
            type: String,
            maxlength: 1024,
        },
        email: {
            type: String,
            required: true,
            maxlength: 200
        },
        password: {
            type: String,
            required: true,
            minlength: 8,
            maxlength: 1024,
        },
        description: {
            type: String,
            maxlength: 255
        },
        phoneNumber: {
            type: String,
            minlength: 10,
            maxlength: 10,
            default: null
        },
        address: {
            street: { type: String },
            city: { type: String },
            state: { type: String },
            zipCode: { type: String }
        },
        hikes: {
            seasonal: { type: Number, default: 20 },
            weekend: { type: Number, default: 15 }
        },
        amenitites: {
            breakfast: {
                type: Number,
            },
            gym: {
                type: Number,
            },
            pool: {
                type: Number,
            },
            parking: {
                type: Number,
            },
            meals: {
                type: Number,
            }
        }
    }
);
const Hotel = mongoose.model('Hotel', hotelSchema);
module.exports.Hotel = Hotel