import React from "react";
import { Container, Row, ButtonGroup, Button } from "react-bootstrap";
//import PropTypes from "prop-types";

const OpcionEntrevista = ({ handleChangeOpcion }) => {
  return (
    <>
      <Container>
        <Row>
          <ButtonGroup aria-label="selection" className="mt-3">
            <Button
              variant="secondary"
              onClick={() => handleChangeOpcion(true)}
            >
              Entrevista digital
            </Button>
            <Button
              variant="secondary"
              onClick={() => handleChangeOpcion(false)}
            >
              Subir formato pre-captura
            </Button>
          </ButtonGroup>
        </Row>
      </Container>
    </>
  );
};

//OpcionEntrevista.propTypes = {};

export default OpcionEntrevista;
