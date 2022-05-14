const { Reservation } = require("../models/mongo/reservations")
const express = require('express');
const { Room } = require("../models/mongo/room");
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



exports.getReservationForUser =(req,res)=>{
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
    try {
        const reservation = req.body.reservationStatus;
  
        await Reservation.findByIdAndUpdate(reservation._id, {
            reservationStatus:"CANCELLED"
        })
        let start =reservation.checkInDate
        let end = reservation.checkOutDate
        

        //Add logic to remove reservation dates
        const rooms=reservation.rooms;

    

        // Room.findById(reservation.roo, function(err, node) {
        //     if (err) { return handleError(res, err); }
        //     if (!node) { return res.status(404).send('Not Found'); }
        //     console.log("Node", JSON.stringify(node))
        //     console.log("Params", req.params)
    
        //     node
        //         .update({ '_id': req.params.id }, { $pull: { 'configuration': { 'links': { '_id': req.params.linkId } } } }, false, true)
        //         .then(err => {
        //             if (err) { return handleError(res, err); }
        //             return res.status(204).send('No Content');
        //         });
        // })

        



  
        res.redirect('/profile')
    } catch (err) {
        res.status(500).send(err)
    }
    // Reservation.userI
};













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

    console.log("Rooms Resevartion Array : ", req.body.rooms.reservationsDates);
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



exports.checkValidDates =(req,res) => {
    
}