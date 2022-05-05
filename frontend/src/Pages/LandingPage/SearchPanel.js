import React from 'react'
import { Button, Col, Form, Row } from 'react-bootstrap';
import moment from 'moment'

const SearchPanel = (props) => {
    return (
        <div className='search-wrapper'>
            <Form
                id="searchPanelForm"
            >
                <h2>Where To?</h2>
                <Row>
                    <Col>
                        <Form.Control
                            type='text'
                            size="lg"
                            placeholder="Location"
                            value={props.location}
                            onChange={props.handleLocationChange()}
                            required
                        />
                    </Col>
                    <Col>
                        <Form.Control
                            type='text'
                            // type="date"
                            size="lg"
                            placeholder="CheckIn Date"
                            onFocus={(e) => e.target.type = "date"}
                            onBlur={(e) => e.target.type = "text"}
                            min={props.checkInDate}
                            value={props.checkInDate}
                            onChange={props.handleCheckInDate()}
                            required
                        />
                    </Col>
                    <Col>
                        <Form.Control
                            // type='date'
                            size="lg"
                            type="text"
                            onFocus={(e) => e.target.type = "date"}
                            onBlur={(e) => e.target.type = "text"}
                            min={props.checkInDate}
                            max={moment(props.checkInDate).add(7, 'd')}
                            placeholder="CheckOut Date"
                            value={props.checkOutDate}
                            onChange={props.handleCheckOutDate()}
                            required
                        />
                    </Col>

                    <Col>
                        <Form.Control
                            type="number"
                            size="lg"
                            placeholder="Number of Guests"
                            value={props.numberOfGuests}
                            onChange={props.handleNumberofGuests()}
                            required
                            min={1}
                            max={20}
                        />
                    </Col>

                    <Col>
                        <Button
                            size="lg"
                            type="submit"
                            onClick={props.searchButtonHandler()}>Find Hotels</Button>
                    </Col>
                </Row>
            </Form>
        </div>
    )
}

export default SearchPanel