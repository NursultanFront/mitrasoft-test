import { useState } from "react";
import { Nav, Navbar, NavDropdown } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Collapse from "react-bootstrap/Collapse";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <>
      <Navbar collapseOnSelect expand={false} bg="dark" variant="dark">
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Brand as={Link} to="/">
          Main
        </Navbar.Brand>

        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav>
            <Nav.Link as={Link} to="/" href="features">
              Список постов
            </Nav.Link>
            <Nav.Link as={Link} to="/about" href="pricing">
              Обо мне
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
}
