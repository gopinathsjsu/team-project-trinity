const { Room } = require("../models/mongo/room")
const express = require('express');
const { Reservation } = require("../models/mongo/reservations");
const { Hotel } = require("../models/mongo/hotel");
const router = express.Router();

exports.createRoom = (req, res) => {
    if (!req.body) {
        res.status(400).send({ message: "Invalid request body passed!" })
    }

    const room = new Room({
        hotelId: req.body.hotelId,
        type: req.body.type,
        image: req.body.image,
        price: req.body.price,
        maxOccupancy: req.body.maxOccupancy,
        numberOfRooms: req.body.numberOfRooms
    })


    room
        .save()
        .then(data => {
            console.log("room created with details:", data)
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while creating the room."
            });
        });

}


exports.findAll = (req, res) => {

    Room.find()
        .then(data => {
            console.log("All Rooms Data: ", data)
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while fetching rooms data."
            });
        });
};

exports.findByHotelId = (req, res) => {

    const hotelId = req.params.hotelId;

    Room.find(
        { "hotelId": hotelId }
    ).then(data => {
        console.log("Rooms:", data);
        res.send(data);
    }).catch(err => {
        res.status(500).send({
            message:
                err.message || "Some error occured while fetching roomos for mentioned Hotel"
        })
    })
}



exports.getAmenities=(req,res) =>{
    
}


