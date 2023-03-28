import React from "react";
import { NavLink } from "react-router-dom";
import { Container, Nav, Navbar, Row } from "react-bootstrap";

const Header = () => {
  return (
    <Navbar bg="primary" variant="dark" as={"header"}>
      <Container>
        <Navbar.Brand>Weather Imp</Navbar.Brand>
        <Nav>
          <Nav.Item>
            <Nav.Link>
              <NavLink
                className={({ isActive }) => (isActive ? "active" : "inactive")}
                to="/"
              >
                Current
              </NavLink>
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link>
              <NavLink
                className={({ isActive }) => (isActive ? "active" : "inactive")}
                to="/hourly"
              >
                Hourly
              </NavLink>
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link>
              <NavLink
                className={({ isActive }) => (isActive ? "active" : "inactive")}
                to="/threeday"
              >
                Three Day
              </NavLink>
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link>
              <NavLink
                className={({ isActive }) => (isActive ? "active" : "inactive")}
                to="/about"
              >
                About
              </NavLink>
            </Nav.Link>
          </Nav.Item>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Header;
