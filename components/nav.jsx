import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

function Nav1() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand as={Link} to="/">Soccer history</Navbar.Brand> {/* Use Link component for the brand */}
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">Home</Nav.Link> {/* Use Link component for the links */}
            <Nav.Link as={Link} to="/more">More</Nav.Link> {/* Add link to "/more" */}
            <Nav.Link as={Link} to="/messi-stats">Messi Stats</Nav.Link> {/* Add link to "/messi-stats" */}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
export default Nav1;