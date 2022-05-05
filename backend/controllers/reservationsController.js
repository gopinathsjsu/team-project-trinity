const { Reservation } = require("../models/mongo/reservations")
const express = require('express')
const router = express.Router();

exports.getReservationAll = (req, res) => {
    Reservation.find()
        .then(data => {
            console.log("All the reservations of user:", data)
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Error Occured while fetching reservations"
            });
        });
};

exports.getReservation = (req, res) => {
    const id = req.params.id;

    Reservation.findById(id)
        .then(data => {
            console.log("reservation data", data)
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Error occured while getting required reservation"
            });
        });
};

exports.editReservation = (req, res) => {
    Reservation.findByIdAndUpdate({ id: req.params.id }, req.body)
        // .then(()=>{
        // Reservation.findOne({id:req.params.id})
        .then(reservation => {
            res.send(reservation);
        });
    // });
}

exports.cancelReservation = (req, res) => {
    Reservation.findByIdAndRemove({ id: req.params.id })
        .then(reservation => {
            res.send(reservation);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Error occured while getting required reservation"
            })
        });
    // Reservation.userI
}

exports.addReservation = (req, res) => {


    if (!req.body) {
        res.status(400).send({ message: "Invalid request body passed!" })
    }

    const reservation = new Reservation({
        userId: req.body.userId,
        reservationStatus: req.body.reservationStatus,
        hotelId: req.body.hotelId,
        rooms: req.body.rooms,
        numberOfGuests: req.body.numberOfGuests,
        totalPrice: req.body.totalPrice,
        rewardsUsed: req.body.rewardsUsed,
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
