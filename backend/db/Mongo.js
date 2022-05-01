const mongoose = require("mongoose");


const uri = require('../config/default.json')
// const uri = "mongodb+srv://@cluster0.tuexv.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"

mongoose
    .connect(
        uri.mongoDB,
        {
            useNewUrlParser: true,
            useUnifiedTopology: true
        }
    )
    .then((con) => {
        console.log(`MongoDB connection successful : ${con.connection.host}`);
    })
    .catch((err) => {
        console.log(err);
    });


