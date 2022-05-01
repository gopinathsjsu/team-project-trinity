import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Button, Card, Form, Modal } from 'react-bootstrap'
import { useParams } from 'react-router'
import { Link } from 'react-router-dom';
import { BASE_API_URL } from '../../utils/constants';

const HotelMain = () => {

    const { id } = useParams();
    const [hotelData, setHotelData] = useState()
    const [show, setShow] = useState(false);
    const [breakfast, setBreakfast] = useState(false)
    const [parking, setParking] = useState(false)
    const [gym, setGym] = useState(false)
    const [swimmingPool, setSwimmingPool] = useState(false)
    const [allMeals, setAllMeals] = useState(false)
    const [selectedRoom, setSelectedRoom] = useState()

    const handleClose = () => setShow(false);

    const handleShow = (room) => {
        setShow(true);
        setSelectedRoom(room)
    }


    const fetchHotelDetails = async () => {
        const response = await axios.get(`${BASE_API_URL}/hotels/${id}`)
        console.log(response.data)
        setHotelData(response.data)
    }

    useEffect(() => {
        fetchHotelDetails()
    }, [])

    return (
        <div className='hotel-main-wrapper'>
            <div className="top-flex">
                <Card>
                    <Card.Img variant="top" style={{ transform: "scale(1)", height: "400px", objectFit: "cover" }} src={hotelData?.image} />
                    <div className='hotelName'>
                        {hotelData?.name}
                    </div>
                    <div className='hotel-details-wrapper'>
                        <Card.Body>
                            <Card.Subtitle>
                                <h3>
                                    {hotelData?.address.street} ,  {hotelData?.address.city} ,{hotelData?.address.state} , {hotelData?.address.zipCode}
                                </h3>
                            </Card.Subtitle>
                            <Card.Subtitle>
                                {hotelData?.phoneNumber}
                            </Card.Subtitle>
                            <Card.Text>
                                <i>{hotelData?.description}</i>
                            </Card.Text>
                        </Card.Body>
                    </div>

                </Card >
            </div >
            <div className="room-options-wrapper">
                <h3> Choose a room</h3>
                <div className='room-grid'>
                    {
                        hotelData?.rooms?.map((room) => {
                            return (
                                <Card className="room-grid-card" >
                                    <div className='room-image-wrapper'>
                                        <Card.Img src={room.image} style={{ width: "400px", height: "250px", objectFit: "cover" }} />
                                    </div>
                                    <Card.Body>
                                        <Card.Title>{room.type}</Card.Title>
                                        <Card.Text>
                                            Max Occupancy: {room.maxOccupancy} People
                                        </Card.Text>
                                        <Card.Text>
                                            Cost: ${room.cost}
                                        </Card.Text>
                                        <Button variant="primary" onClick={() => handleShow(room)}>Reserve</Button>
                                    </Card.Body>
                                </Card>
                            )
                        })
                    }
                </div>
                <div className="amenities-wrapper">
                    <Modal
                        show={show}
                        onHide={handleClose}
                        backdrop="static"
                        keyboard={false}
                    >
                        <Modal.Header closeButton>
                            <Modal.Title>Select Amenities</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <Form>
                                <div key={`default-checkbox`} className="mb-3">
                                    <Form.Check
                                        type={'checkbox'}
                                        id={'default-checkbox'}
                                        label={'Daily Continental Breakfast +   $30'}
                                        onChange={() => setBreakfast(!breakfast)}

                                    />
                                    <Form.Check
                                        type={'checkbox'}
                                        id={'default-checkbox'}
                                        label={'Access to fitness room   +   $45'}
                                        onChange={() => setGym(!gym)}

                                    />
                                    <Form.Check
                                        type={'checkbox'}
                                        id={'default-checkbox'}
                                        label={'Daily Parking +   $40'}
                                        onChange={() => setParking(!parking)}

                                    />
                                    <Form.Check
                                        type={'checkbox'}
                                        id={'default-checkbox'}
                                        label={'Access to Swimming Pool/Jacuzzi Pool +   $30 '}
                                        onChange={() => setSwimmingPool(!swimmingPool)}

                                    />
                                    <Form.Check
                                        type={'checkbox'}
                                        id={'default-checkbox'}
                                        label={'All meals included (Breakfast, Lunch, Dinner) +   $65 '}
                                        onChange={() => setAllMeals(!allMeals)}
                                    />

                                </div>
                            </Form>
                        </Modal.Body>
                        <Modal.Footer>
                            <Button variant="secondary" onClick={handleClose}>
                                Close
                            </Button>
                            <Link to={`/summary/`}><Button variant="primary">Proceed</Button></Link>
                        </Modal.Footer>
                    </Modal>

                </div>
            </div>
            {/* <div className="pricing-wrapper"> </div> */}
        </div >

    )
}

export default HotelMain