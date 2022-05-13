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



exports.getReservationForCustomer =(req,res)=>{
    Reservation.find(req.params.userId)
    .then(data=>{
        console.log("Reservation for customer")
        res.send(data)
    })
    .catch(err=>{
        res.status(500).send({
            message:
            err.message || "Error occured while fetching the resources"
        });
    });
};


exports.getReservationByHotel = (req,res)=>{
    Reservation.find(req.params.hotelId)
    .then(data=>{
        console.log("Reservation for customer")
        res.send(data)
    })
    .catch(err=>{
        res.status(500).send({
            message:
            err.message || "Error occured while fetching the resources"
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








function dateRangeOverlaps(a_start, a_end, b_start, b_end) {
    if (a_start <= b_start && b_start <= a_end) return true; // b starts in a
    if (a_start <= b_end   && b_end   <= a_end) return true; // b ends in a
    if (b_start <  a_start && a_end   <  b_end) return true; // a in b
    return false;
}
function multipleDateRangeOverlaps() {
    
    var i, j;
    if (arguments.length % 2 !== 0)
        throw new TypeError('Arguments length must be a multiple of 2');
    for (i = 0; i < arguments.length - 2; i += 2) {
        for (j = i + 2; j < arguments.length; j += 2) {
            if (
                dateRangeOverlaps(
                    arguments[i], arguments[i+1],
                    arguments[j], arguments[j+1]
                )
            ) return true;
        }
    }
    return false;
}