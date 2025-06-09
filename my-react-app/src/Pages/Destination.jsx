import React, { useState } from 'react';
import { Container, Row, Col, Form } from 'react-bootstrap';
import DestinationCard from '../Components/DestinationCard';
import Footer from '../Components/Footer';
import "./Destination.css"
// Sample data (replace or fetch dynamically)
const allDestinations = [
  {
    title: 'Paris',
    country: 'France',
    city: 'Paris',
    price: '$450',
    description: 'City of lights and love.',
    imageUrl: '/images/paris.jpg'
  },
  {
    title: 'Tokyo',
    country: 'Japan',
    city: 'Tokyo',
    price: '$900',
    description: 'Modern and traditional in one.',
    imageUrl: '/images/tokyo.jpg'
  },
  {
    title: 'Ottawa',
    country: 'Canada',
    city: 'Ottawa',
    price: '$320',
    description: 'Capital charm.',
    imageUrl: '/images/ottawa.jpg'
  }
];

function DestinationPage() {
  const [countryFilter, setCountryFilter] = useState('');
  const [cityFilter, setCityFilter] = useState('');
  const [priceFilter, setPriceFilter] = useState('');

  const filteredDestinations = allDestinations.filter(dest => {
    return (
      (!countryFilter || dest.country === countryFilter) &&
      (!cityFilter || dest.city === cityFilter) &&
      (!priceFilter || parseInt(dest.price.replace('$', '')) <= parseInt(priceFilter))
    );
  });

  return (
    
      <div>
      <div className="destination-hero d-flex align-items-center mb-5">
  <div className="hero-image flex-shrink-0 ms-5">
      <img src="/images/Travelpath.jpg" alt="Travel" />
  </div>
  <div className="hero-text ms-4">
    <h1>Where are we going next?</h1>
  </div>
      </div>
    <Container fluid className="py-5 px-4">
   

      <Row>
        {/* LEFT: Filters */}
        <Col md={3}>
          <h4>Filters</h4>
          <Form className="mb-4">
            <Form.Group controlId="filterCountry" className="mb-3">
              <Form.Label>Country</Form.Label>
              <Form.Select value={countryFilter} onChange={(e) => setCountryFilter(e.target.value)}>
                <option value="">All</option>
                <option value="France">France</option>
                <option value="Japan">Japan</option>
                <option value="Canada">Canada</option>
              </Form.Select>
            </Form.Group>

            <Form.Group controlId="filterCity" className="mb-3">
              <Form.Label>City</Form.Label>
              <Form.Select value={cityFilter} onChange={(e) => setCityFilter(e.target.value)}>
                <option value="">All</option>
                <option value="Paris">Paris</option>
                <option value="Tokyo">Tokyo</option>
                <option value="Ottawa">Ottawa</option>
              </Form.Select>
            </Form.Group>

            <Form.Group controlId="filterPrice" className="mb-3">
              <Form.Label>Max Price ($)</Form.Label>
              <Form.Control
                type="number"
                placeholder="e.g. 500"
                value={priceFilter}
                onChange={(e) => setPriceFilter(e.target.value)}
              />
            </Form.Group>
          </Form>
        </Col>

        {/* RIGHT: Cards */}
        <Col md={9} className="d-flex flex-wrap justify-content-start">
          {filteredDestinations.length > 0 ? (
            filteredDestinations.map((dest, idx) => (
              <DestinationCard key={idx} {...dest} />
            ))
          ) : (
            <p>No destinations match the selected filters.</p>
          )}
        </Col>
      </Row>
      
    </Container>
    <Footer/>
    </div>
  );
}

export default DestinationPage;
