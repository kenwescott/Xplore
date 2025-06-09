import React, { useState } from 'react';
import { Row, Col, Container, Button, Form } from 'react-bootstrap';
import Footer from '../Components/Footer';
function Payment() {

    return(
        <div>
    <Container style={{padding: 60}}>
    <h1 className="text-center"> Payment Complete. You'll receive a confirmation email shortly. Thank you!'</h1>
    </Container>
    <Footer />
    </div>
    )
    }

    export default Payment;