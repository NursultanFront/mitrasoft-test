import { useState } from "react";
import { Nav, Navbar, NavDropdown } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Collapse from "react-bootstrap/Collapse";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <>
      <Navbar collapseOnSelect expand={false} bg="dark" variant="dark">
        <Navbar.Brand href="#home">Main</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav>
            <Nav.Link as={Link} to="/" href="features">
              Features
            </Nav.Link>
            <Nav.Link as={Link} to="/about" href="pricing">
              Pricing
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
}
