module.exports = app => {
    const room = require("../controllers/roomController");

    // Create a new room
    app.post("/rooms", room.create);

    //Retrieve all rooms
    app.get("/rooms", room.findAll)

    //Retrieve rooms by hotelId
    app.get("/rooms/:hotelId", room.findByHotelId);

    //Get room dates array

    app.get("/rooms/reserservationArray", room.findRoomReservationDates);

    
}