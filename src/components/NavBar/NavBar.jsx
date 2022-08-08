import { Link, NavLink } from 'react-router-dom';
import * as userService from "../../utilities/users-service"
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';


export default function NavBar({user, setUser}) {
  function handleLogOut() {
    // Delegate to the users-service
    userService.logOut();
    // Update state will also cause a re-render
    setUser(null);
  }

  return (
    <Navbar bg="light" expand="lg">
      <Container>
      <Navbar.Brand as={Link} to="/">The House of Books</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">

     
      <Nav.Link as={Link} className="nav-link active" to="/orders">Order History</Nav.Link>
      {/* &nbsp; | &nbsp; */}
      <Nav.Link as={Link} className="nav-link active" to="/orders/new">New Order</Nav.Link>
      <Nav.Link as={Link} className="nav-link active" to="" onClick={handleLogOut}>Log Out</Nav.Link>
      <span className="navbar-text">Welcome, {user.name}</span>
      </Nav>
      </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
