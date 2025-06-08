import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaPhone, FaEnvelope, FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer mt-5">
      <Container>
        <Row className="py-4">
          {/* Left: Contact Info */}
          <Col md={6} className="footer-left">
            <h5>Contact Us</h5>
            <p><FaPhone className="footer-icon" /> +1 (123) 456-7890</p>
            <p><FaEnvelope className="footer-icon" /> support@xplore.com</p>
            <div className="social-icons">
              <a href="#"><FaFacebookF /></a>
              <a href="#"><FaInstagram /></a>
              <a href="#"><FaTwitter /></a>
            </div>
          </Col>

          {/* Right: Location */}
          <Col md={6} className="footer-right text-md-end mt-4 mt-md-0">
            <h5>Our Location</h5>
            <p>Ottawa, Canada</p>
          </Col>
        </Row>

        {/* Bottom: Credit */}
        <Row>
          <Col className="text-center py-3 designer-credit">
            © {new Date().getFullYear()} Xplore. Designed by Emma Kameleu & Max Liu.
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
