import React from "react";
import { Button, Col, Container, Form, Row, Spinner } from "react-bootstrap";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import FileInputs from "./FileInputs";
import { trackPromise, usePromiseTracker } from "react-promise-tracker";
import {
  interviewInicialState,
  dependencies,
  token,
  clienteRespuesta,
  plazo,
  tipoCredito,
  APIURL,
} from "../objects/client";
import { useForm } from "../hooks/useForm";
import { useState } from "react";
import axios from "axios";

const FileInputsForm = () => {
  const [formValues, handleInputChange, handleInputChangeToUpperCase] = useForm(
    interviewInicialState
  );
  const [cliente, setCliente] = useState(clienteRespuesta);
  const { promiseInProgress } = usePromiseTracker();

  const enviarDatos = async (e) => {
    e.preventDefault();
    const config = {
      headers: { Authorization: `Bearer ${token}` },
    };
    trackPromise(
      axios
        .post(`${APIURL}/api/v1/clients/newInterview`, formValues, config)
        .then(function (response) {
          setCliente(response.data);
        })
        .catch(function (error) {
          console.log(error);
        })
    );
  };

  return (
    <Container>
      <Form onSubmit={enviarDatos}>
        <h2 className="text-center fontWeight mb-3 mt-3">
          Nombre Completo del cliente
        </h2>
        <Row>
          <Col md>
            <Form.Group className="mb-3" controlId="groupFirst_last_name">
              <Form.Control
                type="text"
                placeholder="Primer apellido"
                name="first_last_name"
                value={formValues.first_last_name.toUpperCase()}
                onChange={handleInputChangeToUpperCase}
              />
            </Form.Group>
          </Col>
          <Col md>
            <Form.Group className="mb-3" controlId="groupSec_last_name">
              <Form.Control
                type="text"
                placeholder="Segundo apellido"
                name="sec_last_name"
                value={formValues.sec_last_name.toUpperCase()}
                onChange={handleInputChangeToUpperCase}
              />
            </Form.Group>
          </Col>
          <Col md>
            <Form.Group className="mb-3" controlId="groupName">
              <Form.Control
                type="text"
                placeholder="Primer nombre"
                name="name"
                value={formValues.name.toUpperCase()}
                onChange={handleInputChangeToUpperCase}
              />
            </Form.Group>
          </Col>
          <Col md>
            <Form.Group className="mb-3" controlId="groupName2">
              <Form.Control
                type="text"
                placeholder="Otros nombres..."
                name="name2"
                value={formValues.name2.toUpperCase()}
                onChange={handleInputChangeToUpperCase}
              />
              <Form.Text className="text-muted">(Opcional)</Form.Text>
            </Form.Group>
          </Col>
        </Row>
        <h4 className="fontWeight">Dependencia</h4>
        <Row>
          <Col md>
            <FloatingLabel
              controlId="floatingInputDependence"
              label="Dependencia"
              className="mb-3"
            >
              <Form.Select
                name="dependence"
                id="dependence"
                value={formValues.dependence}
                onChange={handleInputChange}
              >
                {dependencies.map((dep) => {
                  return (
                    <option key={dep} value={dep}>
                      {dep}
                    </option>
                  );
                })}
              </Form.Select>
            </FloatingLabel>
          </Col>
        </Row>
        <h4 className="fontWeight">Datos del nuevo crédito</h4>
        <Row>
          <Col md>
            <FloatingLabel controlId="amount" label="Monto" className="mb-3">
              <Form.Control
                type="number"
                steps="any"
                placeholder="0"
                name="amount"
                value={formValues.amount}
                onChange={handleInputChange}
              />
            </FloatingLabel>
          </Col>
          <Col md>
            <FloatingLabel
              controlId="floatingInputTerm"
              label="Plazo"
              className="mb-3"
            >
              <Form.Select
                id="term"
                name="term"
                value={formValues.term}
                onChange={handleInputChange}
              >
                {plazo.map((pla) => {
                  return (
                    <option key={pla} value={pla}>
                      {pla} Quincenas
                    </option>
                  );
                })}
              </Form.Select>
            </FloatingLabel>
          </Col>
          <Col md>
            <FloatingLabel
              controlId="floatingInputMSG"
              label="Tipo de crédito"
              className="mb-3"
            >
              <Form.Select
                id="msg"
                name="msg"
                value={formValues.msg}
                onChange={handleInputChange}
              >
                {tipoCredito.map((msg) => {
                  return (
                    <option key={msg} value={msg}>
                      {msg}
                    </option>
                  );
                })}
              </Form.Select>
            </FloatingLabel>
          </Col>
        </Row>
        <Row>
          <Col md>
            <FloatingLabel
              controlId="city"
              label="Ciudad y estado de la venta"
              className="mb-3"
            >
              <Form.Control
                type="text"
                placeholder="0"
                name="city"
                value={formValues.city}
                onChange={handleInputChangeToUpperCase}
              />
            </FloatingLabel>
          </Col>
          <Col md>
            <FloatingLabel
              controlId="date"
              label="Fecha de venta"
              className="mb-3"
            >
              <Form.Control
                type="date"
                placeholder="0"
                name="date"
                value={formValues.date}
                onChange={handleInputChange}
              />
            </FloatingLabel>
          </Col>
          <Col md>
            <Form.Group className="mb-3" controlId="groupQuestion">
              <Form.Label className="fontWeight">¿Crédito previo?</Form.Label>
              <br></br>
              <Form.Check
                name="question"
                id="question"
                label="Si"
                type="radio"
                value="Si"
                onChange={handleInputChange}
                inline
                required
              />
              <Form.Check
                name="question"
                id="question"
                label="No"
                type="radio"
                value="No"
                onChange={handleInputChange}
                inline
              />
            </Form.Group>
          </Col>
        </Row>
        <div className="text-center mb-3 mt-3">
          {promiseInProgress ? (
            cliente.id > 0 ? null : (
              <Button variant="warning" disabled>
                <Spinner
                  as="span"
                  animation="grow"
                  size="sm"
                  role="status"
                  aria-hidden="true"
                />
                Enviando...
              </Button>
            )
          ) : cliente.id > 0 ? null : (
            <Button variant="success" type="submit">
              Enviar formulario a mesa de control
            </Button>
          )}
        </div>
      </Form>
      {cliente.id > 0 ? (
        <FileInputs type="precaptura" client_id={cliente.id} />
      ) : null}
    </Container>
  );
};

export default FileInputsForm;
