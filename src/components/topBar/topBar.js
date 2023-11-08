import React from "react";
import "./topBar.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavLink } from "react-router-dom";
import Button from "react-bootstrap/Button";

const TopBar = () => {
  return (
    <Navbar expand="lg" bg="dark" variant="dark" className="sticky-top bg-dark">
      <Container fluid>
        <Navbar.Brand href="#" className="w-25"></Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll" className="justify-content-end">
          <Nav
            style={{ maxHeight: "100px" }}
            navbarScroll
            className=" d-flex align-content-center"
          >
            <NavLink to="/home" className="nav__link">
              Home
            </NavLink>
            <NavLink to="/about" className="nav__link">
              About
            </NavLink>
            <NavLink to="/contact" className="nav__link">
              Contacts
            </NavLink>
            <NavLink to="/" className="nav__link">
              <Button variant="primary">Signup</Button>
            </NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default TopBar;
