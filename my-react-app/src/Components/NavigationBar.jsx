import { Navbar, Container, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Navigationbar.css';


function NavigationBar() {
  return (
    <Navbar
      expand="lg"
      fixed="top"       // This makes it sticky
      bg="transparent"  // Transparent background
     // variant="dark"    // Use dark text (adjust if needed)
      style={{ backdropFilter: 'blur(10px)' }} // blur background behind navbar 
    >
      <Container>
        <Navbar.Brand as={Link} to="/">
          XPLORE
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/book">
              Book
            </Nav.Link>
            <Nav.Link as={Link} to="/contact">
              Contact Us
            </Nav.Link>
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavigationBar;
