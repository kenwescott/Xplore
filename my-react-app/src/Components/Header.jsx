import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import '../App.css'; 


function StyledNavbar() {
  return (
    <Navbar expand="lg" className="custom-navbar">
      <Container fluid>
        <Navbar.Brand href="#home" className="brand-title">XPLORE.</Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <Nav className="nav-links">
            <Nav.Link href="#destinations">Destinations</Nav.Link>
            <Nav.Link href="#book">Book Now</Nav.Link>
          </Nav>
          <Button className="sign-in-btn">Sign in</Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
export default StyledNavbar;
