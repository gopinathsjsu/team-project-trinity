module.exports = app => {
    const user = require("../controllers/userController");

    // Create a new user
    app.post("/users", user.createUser);

    //Retrieve all users
    app.get("/users", user.findAll);


    //Get one user
    app.get("/user/:id", user.findOne);
    
}
