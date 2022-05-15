    module.exports = app => {
    const hotel = require("../controllers/hotelController");

    // Create a new hotel
    app.post("/hotels/create", hotel.createHotel);

    //Retrieve all hotels
    app.get("/hotels", hotel.findAll)

    //Find Hotel by Id
    app.get("/hotels/:id", hotel.findOne)

    //Landing Page Search by Location
    app.get("/hotelsByLocation/:location", hotel.findByLocation);


    
}
