import React from 'react'
import { Button, Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const HotelCard = ({ id, name, description, image, phoneNumber, rooms, rating, address }) => {
    return (
        <Card className="card-wrapper">
            <Card.Body style={{ display: "flex", padding: "0px" }}>
                <Card.Img style={{ width: "30%", height: "100%" }} src={image} />
                <div style={{ textAlign: "left", width: "50%", padding: "20px 20px" }}>

                    <Card.Title><b>{name}</b></Card.Title>
                    <Card.Text>{address.street}, {address.city}, {address.state}, {address.zipCode}</Card.Text>
                    <Card.Text>{phoneNumber}</Card.Text>
                    <Card.Text>{description}</Card.Text>
                    <br />
                    <Card.Text>Rating : {rating}</Card.Text>

                </div>
                <div style={{ width: "20%", fontSize: "24px", display: "flex", flexDirection: "column", justifyContent: "space-evenly", }}>
                    <b>Starting $200/night</b>
                    <Link to={`/hotels/${id}`}>
                        <Button size="lg" variant="primary">Book Now</Button>
                    </Link>
                </div>
            </Card.Body>
        </Card>
    )
}

export default HotelCard