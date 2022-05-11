//const config = require("config");
require("./db/Mongo");
const cors = require("cors");
const express = require('express');
const app = express();


// if (!config.get("jwtPrivateKey")) {
//     console.log("JWTPrivateKey not set");
//     process.exit(1);
// }


app.use(cors());
app.use(express.json());

app.use(express.urlencoded({ extended: true }));
app.get("/", (req, res) => {
    res.json({ message: "Welcome to Hotel Booking Application." });
});


require("./routes/hotelRoutes")(app);
require("./routes/userRoutes")(app);
require("./routes/roomRoutes")(app);
require("./routes/reservationRoutes")(app);

const port = config.get("port");
app.listen(port, () => console.log(`Listening to port ${port}...`));
