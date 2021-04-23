import React, { useState } from "react";
import { Button, Alert, Navbar, Nav, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

export default function Header() {
  const [error, setError] = useState("");

  const { currentUser, logout } = useAuth();
  const history = useHistory();

  async function handleLogout() {
    setError("");
    try {
      await logout();
      history.push("/login");
    } catch {
      setError("Failed to logout");
    }
  }
  return (
    <>
      <Navbar
        collapseOnSelect
        expand="lg"
        bg="dark"
        variant="dark"
        sticky="top"
      >
        <Navbar.Brand as={Link} to="/">
          Home
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link as={Link} to="fees">
              Fees
            </Nav.Link>
            <NavDropdown title="More" id="collasible-nav-dropdown">
              <NavDropdown.Item as={Link} to="bus-route">
                Bus Route
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="weather">
                Weather
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="Complaint">
                Complaint
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="https://cmrcet.ac.in/">
                CMRCET
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            <Nav.Link as={Link} to="#">
              {currentUser.email}
            </Nav.Link>
            <Nav.Link as={Link} to="update-profile">
              Update Profile
            </Nav.Link>
            <Button variant="outline-info" onClick={handleLogout}>
              Log Out
            </Button>
            <Nav.Link as={Link} to="#">
              {error && <Alert variant="danger">{error}</Alert>}
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
}
