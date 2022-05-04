import React, { useState } from 'react'
import { Card, Form, Button, InputGroup } from 'react-bootstrap';

const RoomCard = ({ room, selectedRooms }) => {

    const [quantity, setQuantity] = useState()

    const onRoomQuantityHandler = (e) => {
        console.log("room", e.target.value)
        setQuantity(e.target.value)
    }

    const onAddRoomHandler = () => {
        console.log(room._id)
        selectedRooms[room._id] = { type: room.type, quantity: quantity }
        // setSelectedRooms(selectedRooms, selectedRooms[room._id])
    }


    return (
        <Card className="room-grid-card" >
            <div className='room-card-image-wrapper'>
                <Card.Img src={room.image} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
            </div>

            <Card.Body>
                <Card.Title>Room Type: {room.type}</Card.Title>
                <Card.Text>
                    Max Occupancy: {room.maxOccupancy} Person(s)
                </Card.Text>
                <Card.Text>
                    Cost: ${room.price}
                </Card.Text>
                <Card.Text>
                    Available Rooms: {room.numberOfRooms}
                </Card.Text>


                <InputGroup>
                    <InputGroup.Text>Reserve Rooms</InputGroup.Text>
                    <Form.Control
                        type='number'
                        min={1}
                        max={room.numberOfRooms}
                        onChange={onRoomQuantityHandler}
                        value={quantity}
                    />
                    <Button onClick={onAddRoomHandler}>Add Room(s)</Button>
                </InputGroup>


            </Card.Body>

        </Card>
    )
}

export default RoomCard