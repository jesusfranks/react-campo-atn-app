import React from "react";
import { Container, Navbar } from "react-bootstrap";

export const NavComponent = () => {
  return (
    <>
      <Navbar bg="light" variant="light">
        <Container>
          <Navbar.Brand href="#home">
            <img
              alt=""
              src="/static/atn_logo.png"
              width="150"
              height="70"
              className="d-inline-block align-top"
            />
          </Navbar.Brand>
        </Container>
      </Navbar>
    </>
  );
};
