import React, { useState } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';

function HelpSection() {
  const [formData, setFormData] = useState({
    email: '',
    name: '',
    purpose: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can handle form submission here (e.g., send data to API)
    console.log('Help request submitted:', formData);
    alert('Thank you! We will get back to you soon.');
    setFormData({ email: '', name: '', purpose: '', message: '' }); // Reset form
  };

  return (
    <Container className="help-section my-5">
      <Row className="align-items-center">
        {/* Left side: Title and text */}
        <Col md={5} className="help-text-side">
          <h2 style={{ fontFamily: 'Aboreto' }}>Need help?</h2>
          <p>Let us know</p>
        </Col>

        {/* Right side: Form */}
        <Col md={7}>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="helpEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                name="email"
                placeholder="Enter email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="helpName">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                name="name"
                placeholder="Your name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="helpPurpose">
              <Form.Label>Purpose</Form.Label>
              <Form.Control
                as="select"
                name="purpose"
                value={formData.purpose}
                onChange={handleChange}
                required
              >
                <option value="">Select purpose</option>
                <option value="booking">Booking Inquiry</option>
                <option value="support">Customer Support</option>
                <option value="feedback">Feedback</option>
                <option value="other">Other</option>
              </Form.Control>
            </Form.Group>

            <Form.Group className="mb-3" controlId="helpMessage">
              <Form.Label>Message</Form.Label>
              <Form.Control
                as="textarea"
                name="message"
                rows={3}
                placeholder="Write your message here"
                value={formData.message}
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Button variant="dark" type="submit">
              Send
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}

export default HelpSection;
