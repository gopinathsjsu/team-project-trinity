const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema(
    {
        name: {
            type: String,
            required: true,
            maxlength: 200
        },
        lastName: {
            type: String,
            maxlength: 200,
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
        phoneNumber: {
            type: String,
            minlength: 10,
            maxlength: 10,
            default: null
        },
        address: {
            type: String
        },
        rewards: {
            type: Number,
            default: 0
        }
    }
);
const User = mongoose.model('User', userSchema);
module.exports.User = User;
