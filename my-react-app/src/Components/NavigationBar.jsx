import { Navbar, Container, Nav, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Navigationbar.css';



function NavigationBar() {
  return (
    <Navbar
      expand="lg"
      fixed="top"       // This makes it sticky
      bg="transparent"  // Transparent background
      variant="dark"    // Use dark text (adjust if needed)
      style={{ backdropFilter: 'blur(10px)' }} // Optional: blur background behind navbar 
    >
      <Container>
        <Navbar.Brand as={Link} to="/">
          XPLORE.
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/">
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/destination">
              Destination
            </Nav.Link>
            <Nav.Link as={Link} to="/book">
              Book
            </Nav.Link>
            {/* Sign In Button */}
            <Button
              as={Link}
              to="/signin"
              className="signin-btn ms-3"
              variant="dark"
            >
              Sign In
            </Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavigationBar;
