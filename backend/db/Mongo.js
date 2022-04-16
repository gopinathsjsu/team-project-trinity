const mongoose = require("mongoose");
const dotenv = require("dotenv");

// dotenv.config({ path: __dirname + "/./../config/config.env" });
const uri = require('../config/default.json')
// const uri = "mongodb+srv://@cluster0.tuexv.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"

const DB = process.env.DATABASE;
mongoose
    .connect(
        uri.mongoDB,
        // "mongodb+srv://root:DLLDLGfnj6zJVrqd@cluster0.tuexv.mongodb.net/CMPE202TeamProject?retryWrites=true&w=majority",

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
