const { User } = require("../models/mongo/user")
const express = require('express')
const router = express.Router();

exports.createUser = (req, res) => {
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

exports.findOne = (req,res)=>{
    const id = req.params.id;

    User.findById(id)
        .then(data => {
            console.log("User Data", data)
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while fetching hotel data."
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
