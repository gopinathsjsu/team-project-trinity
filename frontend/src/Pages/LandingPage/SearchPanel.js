import React from 'react'
import { Button, Col, Form, Row } from 'react-bootstrap';


const SearchPanel = () => {
    return (
        <div className='search-wrapper'>


            <Form
            >
                <Row>
                    <h3>Where To?</h3>
                </Row>
                <Row>
                    <Col>
                        <Form.Control placeholder="Where To?" />
                    </Col>
                    <Col>
                        <Form.Control type='date' placeholder="CheckIn Date" />
                    </Col>
                    <Col>
                        <Form.Control type='date' placeholder="CheckOut Date" />
                    </Col>

                    <Col>
                        <Form.Control type="number" placeholder="Number of Guests" />
                    </Col>

                    <Col>
                        <Button type="submit">Search</Button>
                    </Col>
                </Row>
            </Form>
        </div>
    )
}

export default SearchPanel