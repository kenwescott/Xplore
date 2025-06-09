import React, { useState } from 'react';
import { Row, Col, Container, Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Payment.css';
import Footer from '../Components/Footer';
function Payment() {

    return(
        <div>
        <Container>
        <Container className="containerColor">
            <Row>
                <Form>
                    <Form.Group>
                        <Form.Label>
                        Email
                        </Form.Label>
                        <Form.Control placeholder="Enter email" />
                    </Form.Group>
                    <Form.Group className="mt-3">
                        <Form.Label>
                        Credit Card Number
                        </Form.Label>
                        <Form.Control placeholder="Enter card number" />
                    </Form.Group>
                    <Form.Group className="mt-3">
                        <Form.Label>
                        Name on Card
                        </Form.Label>
                        <Form.Control placeholder="Enter name on card"/>
                    </Form.Group>
                </Form>
            </Row>
            <Row className="mt-3">
                <Col>
                    <Form>
                        <Form.Group>
                            <Form.Label>
                            Postal Code
                            </Form.Label>
                            <Form.Control placeholder="XXX XXX"/>
                        </Form.Group>
                    </Form>
                </Col>
                <Col>
                    <Form>
                        <Form.Group>
                            <Form.Label>
                            CVV
                            </Form.Label>
                            <Form.Control/>
                            <Form.Text className="text-muted">
                            Enter the 3 digits on the back of your card
                            </Form.Text>
                        </Form.Group>
                    </Form>
                </Col>
            </Row>
            </Container>
            <Row>
            <Button variant="dark" size="md" className="mt-4" as={Link} to="/paymentComplete">Pay Now</Button>
            </Row>
        </Container>
        <Footer />
        </div>

    )
    }

export default Payment;