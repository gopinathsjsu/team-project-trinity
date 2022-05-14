module.exports = app => {
    const room = require("../controllers/roomController");

    // Create a new room
    app.post("/rooms", room.createRoom);

    //Retrieve all rooms
    app.get("/rooms", room.findAll)

    //Retrieve rooms by hotelId
    app.get("/rooms/:hotelId", room.findByHotelId);


    
}