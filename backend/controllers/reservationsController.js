const { Reservation } = require("../models/mongo/reservations")
const express = require('express')
const router = express.Router();

exports.getReservationAll = (req, res) =>{
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

exports.getReservation = (req, res) =>{
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

exports.editReservations =(req, res) =>{
    Reservation.findByIdAndUpdate({id:req.params.id},req.body)
    .then(()=>{
    Reservation.findOne({id:req.params.id})
    .then( reservation =>{
        res.send(reservation);
    });
});
}

exports.cancelReservation =(req, res) =>{
    Reservation.findByIdAndRemove({id:req.params.id})
    .then(reservation =>{
        res.send(reservation);
    });
    Reservation.userI
}