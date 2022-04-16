const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const hotelSchema = new Schema(
    {
        name: { type: String },
        image: { type: String },
        email: { type: String },
        password: { type: String },
        description: { type: String },
        phoneNumber: { type: String },
        rating: { type: Number },
        address: {
            street: { type: String },
            city: { type: String },
            state: { type: String },
            zipCode: { type: String }
        },
        room: { type: Array },
        rewards: { type: Number },
        reservations: { type: Array }
    }
);
const hotelModel = mongoose.model('user', hotelSchema);
module.exports = hotelModel;



// Hotel:
// id
// Name
// Email
// Phone Number
// Address
// - Street
// - City
// - State
// - ZipCode
// - Image
// - Description
// - Room :[
// 	Type:
// 	Cost: Base (Weekdays) -> (weekends +5-10%) -> ( holidays +5-15%)
// 	Max Occupancy:
// 	Availability:
// ]
// Rating 
