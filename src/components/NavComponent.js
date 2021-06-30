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
              style={{maxWidth: '120px', marginTop: '-5px'}}
            />
          </Navbar.Brand>
        </Container>
      </Navbar>
    </>
  );
};
