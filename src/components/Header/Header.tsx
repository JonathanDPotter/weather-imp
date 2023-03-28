import { NavLink } from "react-router-dom";
import { Container, Nav, Navbar, Row } from "react-bootstrap";

const Header = () => {
  return (
    <Navbar bg="primary" variant="dark" as={"header"}>
      <Container>
        <Navbar.Brand>Weather Imp</Navbar.Brand>
        <Nav>
          <Nav.Item>
            <NavLink
              className={({ isActive }) =>
                `nav-link ${isActive ? "active" : "inactive"}`
              }
              to="/"
            >
              Current
            </NavLink>
          </Nav.Item>
          <Nav.Item>
            <NavLink
              className={({ isActive }) =>
                `nav-link ${isActive ? "active" : "inactive"}`
              }
              to="/hourly"
            >
              Hourly
            </NavLink>
          </Nav.Item>
          <Nav.Item>
            <NavLink
              className={({ isActive }) =>
                isActive ? "active nav-link" : "inactive nav-link"
              }
              to="/threeday"
            >
              Three Day
            </NavLink>
          </Nav.Item>
          <Nav.Item>
            <NavLink
              className={({ isActive }) =>
                isActive ? "active nav-link" : "inactive nav-link"
              }
              to="/about"
            >
              About
            </NavLink>
          </Nav.Item>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Header;
