import React, { useEffect, useState } from "react";
import "./Home.css";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavLink, useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";

const Home = () => {
  const [data, setData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const getApi = async () => {
      try {
        const res = await fetch("https://jsonplaceholder.typicode.com/photos");
        const data = await res.json();
        setData(data);
      } catch (error) {
        console.log(error);
      }
    };
    getApi();
  }, []);

  const handleClick = () => {
    navigate("/");
  };

  return (
    <>
      <Navbar
        expand="lg"
        bg="dark"
        variant="dark"
        className="sticky-top bg-dark"
      >
        <Container fluid>
          <Navbar.Brand href="#" className="w-25"></Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll" className="justify-content-end">
            <Nav style={{ maxHeight: "100px" }} navbarScroll>
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
                <Button variant="primary" onClick={handleClick}>
                  Logout
                </Button>
              </NavLink>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <section className="home">
        <h1 className=" text-center">IMAGE GALLERY</h1>
        <Container className="home_container">
          {data.map((item, index) => {
            if (index < 50) {
              return (
                <>
                  <Card style={{ width: "14rem" }} className=" m-1">
                    <Card.Img variant="top" src={item.url} width="300px" />
                    <Card.Body>
                      <Card.Text>{item.title}</Card.Text>
                    </Card.Body>
                  </Card>
                </>
              );
            }
          })}
        </Container>
      </section>
    </>
  );
};

export default Home;
