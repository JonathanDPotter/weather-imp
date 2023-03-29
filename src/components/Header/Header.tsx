import { NavLink } from "react-router-dom";
import { Col, Container, Nav, Navbar, Row } from "react-bootstrap";
import { ReactComponent as ImpLogo } from "../../assets/impLogo.svg";

const Header = () => {
  return (
    <Navbar bg="primary" variant="dark" as={"header"}>
      <Container>
        <Navbar.Brand className="h1">
          <ImpLogo className="me-3" />
          <h1 className="d-inline">Weather Imp</h1>
        </Navbar.Brand>

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
