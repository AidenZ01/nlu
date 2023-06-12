import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import logo from "../imgs/logo.png";
import "./NavMenu.css";
import { Link } from "react-router-dom";

function NavMenu({ data }) {
  const flavorsArr = data
    .map((flavor) => flavor[1])
    .filter((item, i, ar) => ar.indexOf(item) === i);

  return (
    <Navbar bg="light" expand="lg" sticky="top">
      <Container>
        <Navbar.Brand as={Link} to="/">
          <img
            src={logo}
            width="200"
            className="d-inline-block align-top"
            alt="logo"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto mb-2 mb-lg-0 text-center">
            <NavDropdown title="Capabilities" id="basic-nav-dropdown">
              <NavDropdown.Item as={Link} to="/design">
                Design
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/production">
                Production
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/certification">
                Certification
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Flavors" id="dropdown-split-basic">
              <NavDropdown.Item as={Link} to="/flavors">
                Flavors
              </NavDropdown.Item>
              <NavDropdown.Divider />
              {flavorsArr.map((flavor, idx) => (
                <NavDropdown.Item key={idx} as={Link} to={`/flavors/${flavor}`}>
                  {flavor}
                </NavDropdown.Item>
              ))}
            </NavDropdown>
            <Nav.Link as={Link} to="/about">
              About Us
            </Nav.Link>
            <Nav.Link as={Link} to="/contact">
              Contact Us
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavMenu;
