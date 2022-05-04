const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const roomSchema = new Schema(
    {
        hotelId: {
            type: mongoose.Schema.Types.ObjectId, ref: "Hotel"
        },
        roomNumber:{type : Number},
        type: {
            type: String,
            enum: ["SINGLE", "DOUBLE", "SUITE", "DELUXE", "SUPER DELUXE"]
        },
        image: { type: String },
        price: { type: Number },
        maxOccupancy: { type: Number },
        numberOfRooms: { type: Number }
    }
);
const Room = mongoose.model('Room', roomSchema);
module.exports.Room = Room
