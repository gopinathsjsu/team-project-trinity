import React, { useEffect, useState } from 'react'
import { Accordion, Button, Form } from 'react-bootstrap'
import { useLocation } from 'react-router'

const Summary = () => {
    const [breakfast, setBreakfast] = useState(false)
    const [parking, setParking] = useState(false)
    const [gym, setGym] = useState(false)
    const [swimmingPool, setSwimmingPool] = useState(false)
    const [allMeals, setAllMeals] = useState(false)


    const location = useLocation()
    const { payload, selectedRooms } = location.state
    const hotel = payload.hotel
    console.log("P", payload)
    console.log("S", selectedRooms)

    const [totalBill, setTotalBill] = useState(0)
    const [amenitiesCharges, setAmenitiesCharges] = useState(0)
    const [rewards, setRewards] = useState(false)

    const onBookingHandler = async () => {
        console.log("Reservation Creted!")
    }


    const calculateTotalBill = () => {



    }

    // const calculateAmenites = () => {
    //     setAmenitiesCharges((breakfast ? hotel.amenities.breakfast : 0) + (gym ? hotel.amenities.gym : 0) + swimmingPool ? hotel.amenities.pool : 0 + parking ? hotel.amenities.parking : 0 + allMeals ? hotel.amenities.meals : 0)
    // }

    useEffect(() => {

        //check weekend,holiday hike
        //calculate price

        calculateTotalBill()

    }, [breakfast, parking, gym, swimmingPool, allMeals])


    return (
        <div className="summary-wrapper">



            <div className="summary-details-wrapper">

                <Accordion defaultActiveKey="0" flush>
                    <Accordion.Item eventKey="0">
                        <Accordion.Header>Hotel Info</Accordion.Header>
                        <Accordion.Body>
                            <div className='hotel-summary-info-wrapper'>
                                <div>
                                    <img src={hotel.image} style={{ widht: "200px", height: "150px", objectFit: "cover" }} alt="" ></img>
                                </div>
                                <div>
                                    <h5><b>{hotel.name} </b></h5>
                                    <h5><b>{hotel.address.street}, {hotel.address.city}, {hotel.address.state}, {hotel.address.zipCode}</b></h5>
                                    <h5><b>{hotel.phoneNumber}</b></h5>
                                </div>
                            </div>
                            <div className="hotel-summary-info-wrapper">
                                <div>
                                    <div>Check In Date</div>
                                    <div>{payload.checkInDate}</div>

                                </div>
                                <div>
                                    <div>Check Oute Date</div>
                                    <div>{payload.checkInDate}</div>

                                </div>
                                <div>
                                    <div>Guests</div>
                                    <div>{payload.numberOfGuests}</div>

                                </div>
                            </div>

                            <div>
                                Rooms:

                                {/* <div className='room-details-summary-wrapper'> */}
                                {
                                    Object.entries(selectedRooms).map(([key, value]) => {
                                        console.log("value", value)

                                        return (
                                            <div>
                                                <h6>{value.quantity} x {value.type} Room</h6>
                                            </div>

                                        )
                                    })
                                }

                            </div>
                        </Accordion.Body>

                    </Accordion.Item>
                    <br />
                    <Accordion.Item eventKey="1">
                        <Accordion.Header>Customer Info</Accordion.Header>
                        <Accordion.Body>
                            <div><b>Name: </b></div>
                            <div><b>Email: </b></div>
                            <div><b>Phone Number: </b></div>
                        </Accordion.Body>
                    </Accordion.Item>
                    <br />

                    <Accordion.Item eventKey="2">
                        <Accordion.Header>Add Amenities</Accordion.Header>
                        <Accordion.Body>
                            <div className="amenities-and-price-summary-wrapper">


                                <Form>
                                    <div key={`default-checkbox`} className="mb-3">
                                        <Form.Check
                                            type={'checkbox'}
                                            id={'default-checkbox'}
                                            label={'Daily Continental Breakfast'}
                                            onChange={() => {
                                                setBreakfast(!breakfast)
                                                // calculateAmenites()
                                            }
                                            }

                                        />
                                        <Form.Check
                                            type={'checkbox'}
                                            id={'default-checkbox'}
                                            label={'Access to fitness room'}
                                            onChange={() => setGym(!gym)}

                                        />
                                        <Form.Check
                                            type={'checkbox'}
                                            id={'default-checkbox'}
                                            label={'Daily Parking'}
                                            onChange={() => setParking(!parking)}

                                        />
                                        <Form.Check
                                            type={'checkbox'}
                                            id={'default-checkbox'}
                                            label={'Access to Swimming Pool/Jacuzzi Pool'}
                                            onChange={() => setSwimmingPool(!swimmingPool)}

                                        />
                                        <Form.Check
                                            type={'checkbox'}
                                            id={'default-checkbox'}
                                            label={'All meals included (Breakfast, Lunch, Dinner)'}
                                            onChange={() => setAllMeals(!allMeals)}
                                        />

                                    </div>
                                </Form>
                                <div>
                                    <div><b>${hotel.amenities.breakfast}</b></div>
                                    <div><b>${hotel.amenities.gym}</b></div>
                                    <div><b>${hotel.amenities.parking}</b></div>
                                    <div><b>${hotel.amenities.pool}</b></div>
                                    <div><b>${hotel.amenities.meals}</b></div>

                                </div>
                            </div>
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>


                <Form>
                    <div key={`default-checkbox`} className="mb-3 " style={{ backgroundColor: "white", marginTop: "20px", padding: "10px" }}>
                        <Form.Check
                            type={'checkbox'}
                            id={'default-checkbox'}
                            label={'Use Reward Points'}
                            onChange={() => setRewards(!rewards)}
                        />
                    </div>
                </Form>
            </div>

            <div className="bill-wrapper">

                <Accordion defaultActiveKey="0" flush>
                    <Accordion.Item eventKey="0">
                        <Accordion.Header>Price Summary</Accordion.Header>
                        <Accordion.Body>
                            <div className='amenities-and-price-summary-wrapper '>
                                <div>
                                    <div><b>Room Charges: </b></div>
                                    <div><b>Add On Amenities Charges: </b></div>
                                    <div><b>Customer Loyalty Discount: </b></div>
                                    <div><b>Reward Points Used: </b></div>
                                    <div><b>Hike (Seasonal/Weekend): </b></div>
                                    <div><b>Amount Payable: </b></div>
                                </div>
                                <div>
                                    <div><b>${hotel.amenities.breakfast}</b></div>
                                    <div><b>${amenitiesCharges}
                                    </b></div>
                                    <div><b>${rewards === true ? hotel.amenities.parking : 0}</b></div>
                                    <div><b>${hotel.amenities.pool}</b></div>
                                    <div><b>${totalBill}</b></div>

                                </div>
                            </div>
                        </Accordion.Body>

                    </Accordion.Item>
                </Accordion>
                <div className='buttons-wrapper'>
                    <Button size="lg" onClick={onBookingHandler}>Confirm Reservation</Button>
                </div>
            </div>


        </div>
    )
}

export default Summary