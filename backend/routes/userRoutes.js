module.exports = app => {
    const user = require("../controllers/userController");

    // Create a new user
    app.post("/users", user.create);

    //Retrieve all users
    app.get("/users", user.findAll);

    
}
