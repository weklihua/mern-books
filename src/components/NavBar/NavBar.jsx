import { Link } from 'react-router-dom';
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
      <Navbar.Brand href="#home">The House of Books</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">

     
      <Link className="nav-link active" to="/orders">Order History</Link>
      {/* &nbsp; | &nbsp; */}
      <Link className="nav-link active" to="/orders/new">New Order</Link>
      <Link className="nav-link active" to="" onClick={handleLogOut}>Log Out</Link>
      <span className="navbar-text">Welcome, {user.name}</span>
      </Nav>
      </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
