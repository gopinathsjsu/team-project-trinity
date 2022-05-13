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


exports.finOne =(req,res)=> {
    Reservation.find(req.body.date)=>{

    }
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

     function CompareDate(a,b,c) {
         
        var dateOne = new Date(2012, 00, 25); //Year, Month, Date
        var dateTwo = new Date(2011, 00, 25); //Year, Month, Date
        if (dateOne > dateTwo) {
             alert("Date One is greather then Date Two.");
         }
            else 
            {
             alert("Date Two is greather then Date One.");
         }
     };



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
