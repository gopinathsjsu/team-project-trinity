import React, { useEffect, useState } from 'react'
import { Button, Col, Form, Row } from 'react-bootstrap';


const SearchPanel = (props) => {


    return (
        <div className='search-wrapper'>
            <Form
                id="searchPanelForm"
            >
                {/* <Row> */}
                <h2>Where To?</h2>
                {/* </Row> */}
                <Row>
                    <Col>
                        <Form.Control
                            type='text'
                            size="lg"
                            placeholder="Location"
                            value={props.location}
                            onChange={props.handleLocationChange()}
                        />
                    </Col>
                    <Col>
                        <Form.Control
                            type='text'
                            size="lg"
                            placeholder="CheckIn Date"
                            onFocus={(e) => e.target.type = "date"}
                            // onBlur={(e) => e.target.type = "text"}
                            value={props.checkInDate}
                            onChange={props.handleCheckInDate()}
                        />
                    </Col>
                    <Col>
                        <Form.Control
                            // type='date'
                            size="lg"
                            type="text"
                            onFocus={(e) => e.target.type = "date"}
                            placeholder="CheckOut Date"
                            value={props.checkOutDate}
                            onChange={props.handleCheckOutDate()}

                        />
                    </Col>

                    <Col>
                        <Form.Control
                            type="number"
                            size="lg"
                            placeholder="Number of Guests"
                            value={props.numberOfGuests}
                            onChange={props.handleNumberofGuests()}

                        />
                    </Col>

                    <Col>
                        <Button
                            size="lg"
                            type="button"
                            onClick={props.searchButtonHandler()}>Find Hotels</Button>
                    </Col>
                </Row>
            </Form>
        </div>
    )
}

export default SearchPanel