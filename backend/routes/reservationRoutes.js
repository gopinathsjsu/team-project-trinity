module.exports = app => {
    const reservations = require("../controllers/reservationsController");
    // Create a new reservation
    app.post("/reservations", reservations.addReservation);

    //Get all reservations for user
    app.get("/reservations", reservations.getReservationAll);

    // //Get reservation by id
    // app.get("/reservations/:id", reservations.getReservation);


    // get all reservations for a hotel
    app.get("/reservations/hotel/:id",)

    // get all reservations for a user
    app.get("/reservations/user/:id",)



    // //Edit reservation
    app.put("reservations/:id", reservations.editReservation);


    // //Cancel reservations
    app.delete("reservations/:id", reservations.cancelReservation)

}
