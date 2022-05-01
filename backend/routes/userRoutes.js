module.exports = app => {
    const user = require("../controllers/userController");

    // Create a new hotel
    app.post("/users", user.create);

    //Retrieve all hotels
    app.get("/users", user.findAll)
}
