const { Reservation } = require("../models/mongo/reservations")
const express = require('express')
const router = express.Router();

exports.create = (req, res) => {
    if (!req.body) {
        res.status(400).send({ message: "Invalid request body passed!" })
    }

    const reservation = new Reservation({
        userId: req.body.userId,
        hotelId: req.body.userId,
        rooms: req.body.rooms,
        numberOfGuests: req.body.numberOfGuests,
        totalPrice: req.body.totalPrice,
        checkInDate: req.body.checkInDate,
        checkOutDate: req.body.checkOutDate,
        amenities: req.body.amenities
    })


    reservation
        .save()
        .then(data => {
            console.log("Reservation created with details:", data)
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while creating the reservation."
            });
        });

}


exports.findAll = (req, res) => {

    Reservation.find()
        .then(data => {
            console.log("All Reservations Data: ", data)
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while fetching reservations data."
            });
        });
};