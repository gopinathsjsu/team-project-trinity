const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema(
    {
        name:{ type: String},
        image: {type:String},
        email: {type:String},
        password: { type: String},
        phoneNumber: {type: String},
        address:{
            street: {type:String},
            city: {type:String},
            state: {type:String},
            zipCode: {type:String}
        },
        rewards:{ type: Number},
        reservations:{type:Array}
    }
);
const userModel = mongoose.model('user', userSchema);
module.exports = userModel;

// - Loyalty [
// {
// hotelId: numOfBookings
// }]
// Wallet Money (Rewards)
// Reservations [
// hotelId
//       -	checkin
// - checkout
// - amenities
// - reward points used
// Rooms :[
// 	Room Type:
//  	Occupied by qty:
// ]
// Total Cost
 
// ]
