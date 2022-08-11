import { Link, NavLink } from "react-router-dom";
import * as userService from "../../utilities/users-service";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
// import NavDropdown from 'react-bootstrap/NavDropdown';
import "./NavBar.css";

export default function NavBar({ user, setUser }) {
  function handleLogOut() {
    // Delegate to the users-service
    userService.logOut();
    // Update state will also cause a re-render
    setUser(null);
  }

  return (
    <>
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
          <Nav.Link className="navbar-brand" as={Link} to="/">
            The House of Books
          </Nav.Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarColor03"
            aria-controls="navbarColor03"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarColor03">
            <ul className="navbar-nav me-auto">
              <li className="nav-item">
                <Nav.Link as={Link} to="/orders" className="nav-link">
                  Order History
                  <span className="visually-hidden">(current)</span>
                </Nav.Link>
              </li>
              <li className="nav-item">
                <Nav.Link
                  Link
                  as={Link}
                  to="/orders/new"
                  className="nav-link-active"
                >
                  New Order
                </Nav.Link>
              </li>
            </ul>
            {/* <ul class="nav navbar-nav navbar-center">

        <li className="nav-item">
        <span className="navbar-text">Welcome, {user.name}</span>

        </li>
        </ul> */}
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <span className="navbar-text">
                  Welcome, {user.name}&nbsp;&nbsp;|&nbsp;&nbsp;
                </span>
              </li>
              <li className="nav-item">
                <Nav.Link
                  as={Link}
                  to=""
                  onClick={handleLogOut}
                  className="nav-link"
                >
                  Log Out
                </Nav.Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <br></br>
    </>
    // <>
    // <Navbar className="navbar navbar-expand-lg navbar-light bg-light">
    //   <Container>
    //   <Navbar.Brand as={Link} to="/">The House of Books</Navbar.Brand>
    //   <Navbar.Toggle aria-controls="basic-navbar-nav" />
    //   <Navbar.Collapse id="basic-navbar-nav">
    //   <Nav className="me-auto">

    //   <Nav.Link as={Link} className="nav-link active" to="/orders">Order History</Nav.Link>
    //   {/* &nbsp; | &nbsp; */}
    //   <Nav.Link as={Link} className="nav-link active" to="/orders/new">New Order</Nav.Link>
    //   <Nav.Link as={Link} className="nav-link active" to="" onClick={handleLogOut}>Log Out</Nav.Link>
    //   <span className="navbar-text">Welcome, {user.name}</span>
    //   </Nav>
    //   </Navbar.Collapse>
    //   </Container>
    // </Navbar>
    // <br></br>
    // </>
  );
}
