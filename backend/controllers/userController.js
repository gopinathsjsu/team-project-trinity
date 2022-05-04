const { User } = require("../models/mongo/user")

exports.create = (req, res) => {
    if (!req.body) {
        res.status(400).send({ message: "Invalid request body passed!" })
    }

    const user = new User({
        email: req.body.email,
        password: req.body.password,
        name: req.body.name,
        phoneNumber: req.body.phoneNumber,
        address: req.body.address,
        image: req.body.image
    })


    user
        .save()
        .then(data => {
            console.log("Created user with details:", data)
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while creating the user."
            });
        });

}

exports.findAll = (req, res) => {

    User.find()
        .then(data => {
            console.log("All Users Data: ", data)
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while fetching users data."
            });
        });
};
