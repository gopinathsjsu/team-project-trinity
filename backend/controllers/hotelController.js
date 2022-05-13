const { Hotel } = require("../models/mongo/hotel.js")
const express = require('express')
const router = express.Router();

exports.create = (req, res) => {
    if (!req.body) {
        res.status(400).send({ message: "Invalid request body passed!" })
    }

    const hotel = new Hotel({
        email: req.body.email,
        password: req.body.password,
        name: req.body.name,
        description: req.body.description,
        phoneNumber: req.body.phoneNumber,
        address: req.body.address,
        image: req.body.image,
        hikes: req.body.hikes,
        amenities: req.body.amenities
    })

    hotel
        .save()
        .then(data => {
            console.log("Created hotel with details:", data)
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while creating the Hotel."
            });
        });

}

exports.findAll = (req, res) => {

    Hotel.find()
        .then(data => {
            console.log("All Hotels Data: ", data)
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while fetching hotels data."
            });
        });
};

exports.findOne = (req, res) => {

    const id = req.params.id;

    Hotel.findById(id)
        .then(data => {
            console.log("Hotel Data", data)
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while fetching hotel data."
            });
        });
};


exports.findByLocation = (req, res) => {

    const location = req.params.location
    console.log("location", location)
    Hotel.find(
        {
            $or: [
                { "address.street": location },
                { "address.city": location },
                { "address.state": location },
                { "address.zipCode": location }
            ]
        }
    ).then(data => {
        console.log("Hotels found: ", data)
        res.send(data);
    }).catch(err => {
        res.status(500).send({
            message:
                err.message || "Some error occured while fetching hotels in the mentioned location"
        })
    })
}