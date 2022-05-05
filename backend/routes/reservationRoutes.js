module.exports = app => {
    const reservations = require("../controllers/reservationsController");
    // Create a new reservation
    app.post("/reservations", reservations.create);

    //Retrieve all reservations
    app.get("/reservations", reservations.findAll)
}
