const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const reservationScehma = new Schema(
    {

        userId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User"
        },
        hotelId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Hotel",
        },
        rooms: [{
            roomId: { type: mongoose.Schema.Types.ObjectId, ref: "Room" },
            numberOfRooms: { type: Number }
        }],
        numberOfGuests: { type: Number },
        totalPrice: { type: Number },
        checkInDate: { type: Date },
        checkOutDate: { type: Date },
        amenities: {
            breakfast: {
                type: Boolean,
                default: false
            },
            gym: {
                type: Boolean,
                default: false
            },
            pool: {
                type: Boolean,
                default: false
            },
            parking: {
                type: Boolean,
                default: false
            },
            meals: {
                type: Boolean,
                default: false
            }
        }
    }
)


const Reservation = mongoose.model('Reservation', reservationScehma);
module.exports.Reservation = Reservation
