// src/Components/SearchForm.jsx
import { useState } from 'react';
import { Form, Row, Col, Button, Container } from 'react-bootstrap';

function SearchForm() {
  const [from, setFrom] = useState('');
  const [to, setTo] = useState('');
  const [departure, setDeparture] = useState('');
  const [returnDate, setReturnDate] = useState('');
  const [passengers, setPassengers] = useState(1);
  const [cabin, setCabin] = useState('Economy');

  const handleSearch = () => {
    console.log({ from, to, departure, returnDate, passengers, cabin });
  };

  return (
    <Container className="p-4 bg-light rounded shadow mt-5" style={{ maxWidth: '1000px' }}>
      <h3 className="mb-4" style={{ fontFamily: 'Aboreto' }}>Search Flights</h3>
      <Form>
        <Row className="mb-3">
          <Col md={4}>
            <Form.Group controlId="formFrom">
              <Form.Label>From</Form.Label>
              <Form.Control
                type="text"
                placeholder="Departure city"
                value={from}
                onChange={(e) => setFrom(e.target.value)}
              />
            </Form.Group>
          </Col>
          <Col md={4}>
            <Form.Group controlId="formTo">
              <Form.Label>To</Form.Label>
              <Form.Control
                type="text"
                placeholder="Destination city"
                value={to}
                onChange={(e) => setTo(e.target.value)}
              />
            </Form.Group>
          </Col>
          <Col md={4}>
            <Form.Group controlId="formPassengers">
              <Form.Label>Passengers</Form.Label>
              <Form.Control
                as="select"
                value={passengers}
                onChange={(e) => setPassengers(e.target.value)}
              >
                {[1, 2, 3, 4, 5].map((num) => (
                  <option key={num} value={num}>
                    {num} Passenger{num > 1 && 's'}
                  </option>
                ))}
              </Form.Control>
            </Form.Group>
          </Col>
        </Row>

        <Row className="mb-3">
          <Col md={4}>
            <Form.Group controlId="formDepartureDate">
              <Form.Label>Departure Date</Form.Label>
              <Form.Control
                type="date"
                value={departure}
                onChange={(e) => setDeparture(e.target.value)}
              />
            </Form.Group>
          </Col>
          <Col md={4}>
            <Form.Group controlId="formReturnDate">
              <Form.Label>Return Date</Form.Label>
              <Form.Control
                type="date"
                value={returnDate}
                onChange={(e) => setReturnDate(e.target.value)}
              />
            </Form.Group>
          </Col>
          <Col md={4}>
            <Form.Group controlId="formCabin">
              <Form.Label>Cabin Class</Form.Label>
              <Form.Control
                as="select"
                value={cabin}
                onChange={(e) => setCabin(e.target.value)}
              >
                <option>Economy</option>
                <option>Premium Economy</option>
                <option>Business</option>
                <option>First</option>
              </Form.Control>
            </Form.Group>
          </Col>
        </Row>

        <div className="text-end">
          <Button variant="dark" onClick={handleSearch}>
            Search Flights
          </Button>
        </div>
      </Form>
    </Container>
  );
}

export default SearchForm;
