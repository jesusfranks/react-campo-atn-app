import React from "react";
import { useState } from "react";
import axios from "axios";
import { Button, Col, Container, Form, Row, Spinner } from "react-bootstrap";
import { trackPromise, usePromiseTracker } from "react-promise-tracker";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import FileInputs from "./FileInputs";
import { useForm } from "../hooks/useForm";
import {
  interviewInicialState,
  dependencies,
  estadosDeVentas,
  plazo,
  token,
  clienteRespuesta,
  tiposReferencias,
  tipoCredito,
  APIURL,
} from "../objects/client";

const InterviewForm = () => {
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
    <>
      <Container>
        <h1 className="text-center mb-3 mt-3 fontWeight">
          Entrevista a nuevo cliente
        </h1>
        <Form onSubmit={enviarDatos}>
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
          <h3 className="fontWeight">Información de la dependencia</h3>
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
            <Col md>
              <FloatingLabel
                controlId="floatingInputPlace"
                label="Lugar del empleo"
                className="mb-3"
              >
                <Form.Control
                  type="text"
                  placeholder="0"
                  name="place"
                  value={formValues.place}
                  onChange={handleInputChangeToUpperCase}
                />
              </FloatingLabel>
            </Col>
          </Row>
          <Row>
            <Col md>
              <FloatingLabel
                controlId="floatingInputOcupation"
                label="Ocupación"
                className="mb-3"
              >
                <Form.Control
                  type="text"
                  placeholder="0"
                  name="occupation"
                  value={formValues.occupation}
                  onChange={handleInputChangeToUpperCase}
                />
              </FloatingLabel>
            </Col>
            <Col md>
              <FloatingLabel
                controlId="floatingInputJob"
                label="Puesto"
                className="mb-3"
              >
                <Form.Control
                  type="text"
                  placeholder="0"
                  name="job"
                  value={formValues.job}
                  onChange={handleInputChangeToUpperCase}
                />
              </FloatingLabel>
            </Col>
            <Col md>
              <FloatingLabel
                controlId="floatingInputTWY"
                label="Años de antigüedad"
                className="mb-3"
              >
                <Form.Control
                  type="number"
                  placeholder="0"
                  name="time_working_y"
                  value={formValues.time_working_y}
                  onChange={handleInputChange}
                />
              </FloatingLabel>
            </Col>
            <Col md>
              <FloatingLabel
                controlId="floatingInputTWM"
                label="Meses de antigüedad"
                className="mb-3"
              >
                <Form.Control
                  type="number"
                  placeholder="0"
                  name="time_working_m"
                  value={formValues.time_working_m}
                  onChange={handleInputChange}
                />
              </FloatingLabel>
            </Col>
          </Row>
          <Row>
            <Col md>
              <FloatingLabel
                controlId="floatingInputJob_Phone"
                label="Teléfono"
                className="mb-3"
              >
                <Form.Control
                  type="number"
                  placeholder="0"
                  name="job_phone"
                  value={formValues.job_phone}
                  onChange={handleInputChange}
                />
              </FloatingLabel>
            </Col>
            <Col md>
              <FloatingLabel
                controlId="floatingInputExtension"
                label="Ext"
                className="mb-3"
              >
                <Form.Control
                  type="number"
                  placeholder="0"
                  name="extension"
                  value={formValues.extension}
                  onChange={handleInputChange}
                />
              </FloatingLabel>
            </Col>
            <Col md>
              <Form.Group className="mb-3" controlId="groupGender">
                <Form.Label className="fontWeight">
                  Tipo de contratación
                </Form.Label>
                <br></br>
                <Form.Check
                  name="type"
                  id="type"
                  label="Base"
                  type="radio"
                  value="B"
                  onClick={handleInputChange}
                  inline
                  required
                />
                <Form.Check
                  name="type"
                  id="type"
                  label="Confianza"
                  type="radio"
                  value="C"
                  onClick={handleInputChange}
                  inline
                />
                <Form.Check
                  name="type"
                  id="type"
                  label="Eventual"
                  type="radio"
                  value="E"
                  onClick={handleInputChange}
                  inline
                />
                <Form.Check
                  name="type"
                  id="type"
                  label="Jubilado o pensionado"
                  type="radio"
                  value="J"
                  onClick={handleInputChange}
                  inline
                />
              </Form.Group>
            </Col>
          </Row>
          <h4 className="fontWeight">Dirección de la dependencia</h4>
          <Row>
            <Col md>
              <FloatingLabel
                controlId="floatingInputStreet"
                label="Calle"
                className="mb-3"
              >
                <Form.Control
                  type="text"
                  placeholder="0"
                  name="street"
                  value={formValues.street}
                  onChange={handleInputChangeToUpperCase}
                />
              </FloatingLabel>
            </Col>
            <Col md>
              <FloatingLabel
                controlId="floatingInputNumber"
                label="Número"
                className="mb-3"
              >
                <Form.Control
                  type="text"
                  placeholder="0"
                  name="number"
                  value={formValues.number}
                  onChange={handleInputChange}
                />
              </FloatingLabel>
            </Col>
            <Col md>
              <FloatingLabel
                controlId="floatingInputIntNumber"
                label="Número interior"
                className="mb-3"
              >
                <Form.Control
                  type="number"
                  placeholder="0"
                  name="int_number"
                  value={formValues.int_number}
                  onChange={handleInputChange}
                />
              </FloatingLabel>
            </Col>
          </Row>
          <Row>
            <Col md>
              <FloatingLabel
                controlId="floatingInputIntSuburb"
                label="Colonia"
                className="mb-3"
              >
                <Form.Control
                  type="text"
                  placeholder="0"
                  name="suburb"
                  value={formValues.suburb}
                  onChange={handleInputChangeToUpperCase}
                />
              </FloatingLabel>
            </Col>
            <Col md>
              <FloatingLabel
                controlId="floatingInputTown"
                label="Municipio"
                className="mb-3"
              >
                <Form.Control
                  type="text"
                  placeholder="0"
                  name="town"
                  value={formValues.town}
                  onChange={handleInputChangeToUpperCase}
                />
              </FloatingLabel>
            </Col>
            <Col md>
              <FloatingLabel
                controlId="floatingInputPostal_code"
                label="Código postal"
                className="mb-3"
              >
                <Form.Control
                  type="number"
                  placeholder="0"
                  name="postal_code"
                  value={formValues.postal_code}
                  onChange={handleInputChange}
                />
              </FloatingLabel>
            </Col>
          </Row>
          <Row>
            <Col md>
              <FloatingLabel
                controlId="floatingInputState"
                label="Estado"
                className="mb-3"
              >
                <Form.Select
                  id="state"
                  name="state"
                  value={formValues.state}
                  onChange={handleInputChange}
                >
                  {estadosDeVentas.map((estado) => {
                    return (
                      <option key={estado} value={estado}>
                        {estado}
                      </option>
                    );
                  })}
                </Form.Select>
              </FloatingLabel>
            </Col>
            <Col md>
              <FloatingLabel
                controlId="floatingInputIntCrosses"
                label="Cruzamientos"
                className="mb-3"
              >
                <Form.Control
                  type="text"
                  placeholder="0"
                  name="crosses"
                  value={formValues.crosses}
                  onChange={handleInputChangeToUpperCase}
                />
              </FloatingLabel>
            </Col>
          </Row>
          <h4 className="text-center fontWeight mb-3">
            Nombre Completo del cliente
          </h4>
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
              {/* <Form.Label>NOMBRE COMPLETO</Form.Label> */}
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
          <Row>
            <Col md>
              <Form.Group className="mb-3" controlId="groupGender">
                <Form.Label className="fontWeight">Sexo</Form.Label>
                <br></br>
                <Form.Check
                  name="gender"
                  id="gender"
                  label="Hombre"
                  type="radio"
                  value="H"
                  onClick={handleInputChange}
                  inline
                  required
                />
                <Form.Check
                  name="gender"
                  id="gender"
                  label="Mujer"
                  type="radio"
                  value="M"
                  onClick={handleInputChange}
                  inline
                />
              </Form.Group>
            </Col>
            <Col md>
              <Form.Group className="mb-3" controlId="groupGender">
                <Form.Label className="fontWeight">Estado civil</Form.Label>
                <br></br>
                <Form.Check
                  name="civil_status"
                  id="civil_status"
                  label="Soltero"
                  type="radio"
                  value="SOLTERO"
                  onClick={handleInputChange}
                  inline
                  required
                />
                <Form.Check
                  name="civil_status"
                  id="civil_status"
                  label="Casado"
                  type="radio"
                  value="CASADO"
                  onClick={handleInputChange}
                  inline
                />
                <Form.Check
                  name="civil_status"
                  id="civil_status"
                  label="Divorciado"
                  type="radio"
                  value="DIVORCIADO"
                  onClick={handleInputChange}
                  inline
                />
                <Form.Check
                  name="civil_status"
                  id="civil_status"
                  label="Viudo"
                  type="radio"
                  value="VIUDO"
                  onClick={handleInputChange}
                  inline
                />
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col md>
              <Form.Group className="mb-3" controlId="groupGender">
                <Form.Label className="fontWeight">Tipo de vivienda</Form.Label>
                <br></br>
                <Form.Check
                  name="type_housing"
                  id="type_housing"
                  label="Propia"
                  type="radio"
                  value="PROPIA"
                  onClick={handleInputChange}
                  inline
                  required
                />
                <Form.Check
                  name="type_housing"
                  id="type_housing"
                  label="Renta"
                  type="radio"
                  value="RENTA"
                  onClick={handleInputChange}
                  inline
                />
                <Form.Check
                  name="type_housing"
                  id="type_housing"
                  label="Familiar"
                  type="radio"
                  value="FAMILIAR"
                  onClick={handleInputChange}
                  inline
                />
              </Form.Group>
            </Col>
            <Col md>
              <FloatingLabel
                controlId="floatingInputLTY"
                label="Años viviendo allí"
                className="mb-3"
              >
                <Form.Control
                  type="number"
                  placeholder="0"
                  name="living_there_y"
                  value={formValues.living_there_y}
                  onChange={handleInputChange}
                />
              </FloatingLabel>
            </Col>
            <Col md>
              <FloatingLabel
                controlId="floatingInputLTM"
                label="Meses viviendo allí"
                className="mb-3"
              >
                <Form.Control
                  type="number"
                  placeholder="0"
                  name="living_there_m"
                  value={formValues.living_there_m}
                  onChange={handleInputChange}
                />
              </FloatingLabel>
            </Col>
          </Row>
          <Row>
            <Col md>
              <FloatingLabel
                controlId="floatingInputEmail"
                label="Email"
                className="mb-3"
              >
                <Form.Control
                  type="email"
                  placeholder="@"
                  name="email"
                  value={formValues.email}
                  onChange={handleInputChange}
                />
              </FloatingLabel>
            </Col>
            <Col md>
              <FloatingLabel
                controlId="floatingInputCellphone"
                label="Celular"
                className="mb-3"
              >
                <Form.Control
                  type="number"
                  placeholder="0"
                  name="cellphone"
                  value={formValues.cellphone}
                  onChange={handleInputChange}
                />
              </FloatingLabel>
            </Col>
            <Col md>
              <FloatingLabel
                controlId="floatingInputPhone"
                label="Teléfono fijo"
                className="mb-3"
              >
                <Form.Control
                  type="number"
                  placeholder="0"
                  name="phone"
                  value={formValues.phone}
                  onChange={handleInputChange}
                />
              </FloatingLabel>
            </Col>
          </Row>
          <h4 className="fontWeight">Conyuge (opcional)</h4>
          <Row>
            <Col md>
              <FloatingLabel
                controlId="floatingInputcon_name"
                label="Nombre"
                className="mb-3"
              >
                <Form.Control
                  type="text"
                  placeholder="0"
                  name="con_name"
                  value={formValues.con_name}
                  onChange={handleInputChangeToUpperCase}
                />
              </FloatingLabel>
            </Col>
            <Col md>
              <FloatingLabel
                controlId="floatingInputcon_name2"
                label="Otros nombres (opcional)"
                className="mb-3"
              >
                <Form.Control
                  type="text"
                  placeholder="0"
                  name="con_name2"
                  value={formValues.con_name2}
                  onChange={handleInputChangeToUpperCase}
                />
              </FloatingLabel>
            </Col>
            <Col md>
              <FloatingLabel
                controlId="floatingInputcon_first_last_name"
                label="Primer apellido"
                className="mb-3"
              >
                <Form.Control
                  type="text"
                  placeholder="0"
                  name="con_first_last_name"
                  value={formValues.con_first_last_name}
                  onChange={handleInputChangeToUpperCase}
                />
              </FloatingLabel>
            </Col>
            <Col md>
              <FloatingLabel
                controlId="floatingInputcon_sec_last_name"
                label="Segundo apellido"
                className="mb-3"
              >
                <Form.Control
                  type="text"
                  placeholder="0"
                  name="con_sec_last_name"
                  value={formValues.con_sec_last_name}
                  onChange={handleInputChangeToUpperCase}
                />
              </FloatingLabel>
            </Col>
          </Row>
          <Row>
            <Col md>
              <FloatingLabel
                controlId="floatingInputcon_nacionality"
                label="Nacionalidad"
                className="mb-3"
              >
                <Form.Control
                  type="text"
                  placeholder="0"
                  name="con_nacionality"
                  value={formValues.con_nacionality}
                  onChange={handleInputChangeToUpperCase}
                />
              </FloatingLabel>
            </Col>
            <Col md>
              <FloatingLabel
                controlId="con_birth"
                label="Fecha de nacimiento"
                className="mb-3"
              >
                <Form.Control
                  type="date"
                  placeholder="0"
                  name="con_birth"
                  value={formValues.con_birth}
                  onChange={handleInputChange}
                />
              </FloatingLabel>
            </Col>
          </Row>
          <h4 className="fontWeight">Referencias personales</h4>
          <h6 className="fontWeight">Primera</h6>
          <Row>
            <Col md>
              <FloatingLabel
                controlId="floatingInputref1_name"
                label="Nombre"
                className="mb-3"
              >
                <Form.Control
                  type="text"
                  placeholder="0"
                  name="ref1_name"
                  value={formValues.ref1_name}
                  onChange={handleInputChangeToUpperCase}
                />
              </FloatingLabel>
            </Col>
            <Col md>
              <FloatingLabel
                controlId="floatingInputref1_name2"
                label="Otros nombres (opcional)"
                className="mb-3"
              >
                <Form.Control
                  type="text"
                  placeholder="0"
                  name="ref1_name2"
                  value={formValues.ref1_name2}
                  onChange={handleInputChangeToUpperCase}
                />
              </FloatingLabel>
            </Col>
            <Col md>
              <FloatingLabel
                controlId="floatingInputref1_first_last_name"
                label="Primer apellido"
                className="mb-3"
              >
                <Form.Control
                  type="text"
                  placeholder="0"
                  name="ref1_first_last_name"
                  value={formValues.ref1_first_last_name}
                  onChange={handleInputChangeToUpperCase}
                />
              </FloatingLabel>
            </Col>
            <Col md>
              <FloatingLabel
                controlId="floatingInputref1_sec_last_name"
                label="Segundo apellido"
                className="mb-3"
              >
                <Form.Control
                  type="text"
                  placeholder="0"
                  name="ref1_sec_last_name"
                  value={formValues.ref1_sec_last_name}
                  onChange={handleInputChangeToUpperCase}
                />
              </FloatingLabel>
            </Col>
          </Row>
          <Row>
            <Col md>
              <FloatingLabel
                controlId="ref1_phone"
                label="teléfono"
                className="mb-3"
              >
                <Form.Control
                  type="number"
                  placeholder="0"
                  name="ref1_phone"
                  value={formValues.ref1_phone}
                  onChange={handleInputChange}
                />
              </FloatingLabel>
            </Col>
            <Col md>
              <FloatingLabel
                controlId="ref1_relationship"
                label="Relación"
                className="mb-3"
              >
                <Form.Select
                  id="ref1_relationship"
                  name="ref1_relationship"
                  value={formValues.ref1_relationship}
                  onChange={handleInputChange}
                >
                  {tiposReferencias.map((relation) => {
                    return (
                      <option key={relation} value={relation}>
                        {relation}
                      </option>
                    );
                  })}
                </Form.Select>
              </FloatingLabel>
            </Col>
            <Col md>
              <FloatingLabel
                controlId="ref1_longer"
                label="Antigüedad"
                className="mb-3"
              >
                <Form.Control
                  type="number"
                  placeholder="0"
                  name="ref1_longer"
                  value={formValues.ref1_longer}
                  onChange={handleInputChange}
                />
              </FloatingLabel>
            </Col>
          </Row>
          <h6 className="fontWeight">Segunda</h6>
          <Row>
            <Col md>
              <FloatingLabel
                controlId="floatingInputref2_name"
                label="Nombre"
                className="mb-3"
              >
                <Form.Control
                  type="text"
                  placeholder="0"
                  name="ref2_name"
                  value={formValues.ref2_name}
                  onChange={handleInputChangeToUpperCase}
                />
              </FloatingLabel>
            </Col>
            <Col md>
              <FloatingLabel
                controlId="floatingInputref2_name2"
                label="Otros nombres (opcional)"
                className="mb-3"
              >
                <Form.Control
                  type="text"
                  placeholder="0"
                  name="ref2_name2"
                  value={formValues.ref2_name2}
                  onChange={handleInputChangeToUpperCase}
                />
              </FloatingLabel>
            </Col>
            <Col md>
              <FloatingLabel
                controlId="floatingInputref2_first_last_name"
                label="Primer apellido"
                className="mb-3"
              >
                <Form.Control
                  type="text"
                  placeholder="0"
                  name="ref2_first_last_name"
                  value={formValues.ref2_first_last_name}
                  onChange={handleInputChangeToUpperCase}
                />
              </FloatingLabel>
            </Col>
            <Col md>
              <FloatingLabel
                controlId="floatingInputref2_sec_last_name"
                label="Segundo apellido"
                className="mb-3"
              >
                <Form.Control
                  type="text"
                  placeholder="0"
                  name="ref2_sec_last_name"
                  value={formValues.ref2_sec_last_name}
                  onChange={handleInputChangeToUpperCase}
                />
              </FloatingLabel>
            </Col>
          </Row>
          <Row>
            <Col md>
              <FloatingLabel
                controlId="ref2_phone"
                label="teléfono"
                className="mb-3"
              >
                <Form.Control
                  type="number"
                  placeholder="0"
                  name="ref2_phone"
                  value={formValues.ref2_phone}
                  onChange={handleInputChange}
                />
              </FloatingLabel>
            </Col>
            <Col md>
              <FloatingLabel
                controlId="ref2_relationship"
                label="Relación"
                className="mb-3"
              >
                <Form.Select
                  id="ref2_relationship"
                  name="ref2_relationship"
                  value={formValues.ref2_relationship}
                  onChange={handleInputChange}
                >
                  {tiposReferencias.map((relation) => {
                    return (
                      <option key={relation} value={relation}>
                        {relation}
                      </option>
                    );
                  })}
                </Form.Select>
              </FloatingLabel>
            </Col>
            <Col md>
              <FloatingLabel
                controlId="ref2_longer"
                label="Antigüedad"
                className="mb-3"
              >
                <Form.Control
                  type="number"
                  placeholder="0"
                  name="ref2_longer"
                  value={formValues.ref2_longer}
                  onChange={handleInputChange}
                />
              </FloatingLabel>
            </Col>
          </Row>
          <h4 className="fontWeight">Información del promotor</h4>
          <Row>
            <Col md>
              <FloatingLabel
                controlId="code"
                label="Código del promotor"
                className="mb-3"
              >
                <Form.Control
                  type="number"
                  placeholder="0"
                  name="code"
                  value={formValues.code}
                  onChange={handleInputChange}
                />
              </FloatingLabel>
            </Col>
            <Col md>
              <FloatingLabel
                controlId="promotor_name"
                label="Nombre completo"
                className="mb-3"
              >
                <Form.Control
                  type="text"
                  placeholder="0"
                  name="promotor_name"
                  value={formValues.promotor_name}
                  onChange={handleInputChangeToUpperCase}
                />
              </FloatingLabel>
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

        {cliente.id > 0 ? <FileInputs client_id={cliente.id} /> : null}
      </Container>
    </>
  );
};

export default InterviewForm;
