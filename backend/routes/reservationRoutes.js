module.exports = app => {
    const reservations = require("../controllers/reservationsController");
    // Create a new reservation
    app.post("/reservations", reservations.create);

    //Retrieve all reservations
    app.get("/reservations", reservations.findAll)

    //Retrieve one user reservation
    app.get("/reservations/:id", reservations.findByUser)

    app.delete("/reservations/:reservationId", reservations.remove)
}
