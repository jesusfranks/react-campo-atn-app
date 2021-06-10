import React from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import { useForm } from "../hooks/useForm";
import {
  interviewInicialState,
  dependencies,
  estadosDeVentas,
  plazo,
} from "../objects/client";
import FileInputs from './FileInputs';

export const InterviewForm = () => {
  const [formValues, handleInputChange] = useForm(interviewInicialState);
  const [status, setstatus] = useState(false);
  const [cliente, setCliente] = useState('');
  const enviarDatos = async (e) => {
    console.log(formValues);
    e.preventDefault();
  };

  return (
    <>
      <Container>
        <h1 className="text-center mb-3 mt-3 fontWeight">Entrevista a nuevo cliente</h1>
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
                  onChange={handleInputChange}
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
                  onChange={handleInputChange}
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
                  onChange={handleInputChange}
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
                  onChange={handleInputChange}
                />
              </FloatingLabel>
            </Col>
            <Col md>
              <FloatingLabel
                controlId="floatingInputTWY"
                label="Años de atigüedad"
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
                label="Meses de atigüedad"
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
                <Form.Label className="fontWeight">Tipo de contratación</Form.Label>
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
                  onChange={handleInputChange}
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
                  onChange={handleInputChange}
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
                  onChange={handleInputChange}
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
                  onChange={handleInputChange}
                />
              </FloatingLabel>
            </Col>
          </Row>
          <h5 className="text-center mb-3">Nombre Completo del cliente</h5>
          <Row>
            <Col md>
              <Form.Group className="mb-3" controlId="groupFirst_last_name">
                <Form.Control
                  type="text"
                  placeholder="Primer apellido"
                  name="first_last_name"
                  value={formValues.first_last_name.toUpperCase()}
                  onChange={handleInputChange}
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
                  onChange={handleInputChange}
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
                  onChange={handleInputChange}
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
                  onChange={handleInputChange}
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
                  value="Soltero"
                  onClick={handleInputChange}
                  inline
                  required
                />
                <Form.Check
                  name="civil_status"
                  id="civil_status"
                  label="Casado"
                  type="radio"
                  value="Casado"
                  onClick={handleInputChange}
                  inline
                />
                <Form.Check
                  name="civil_status"
                  id="civil_status"
                  label="Divorciado"
                  type="radio"
                  value="Divorciado"
                  onClick={handleInputChange}
                  inline
                />
                <Form.Check
                  name="civil_status"
                  id="civil_status"
                  label="Viudo"
                  type="radio"
                  value="Viudo"
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
                  value="Propia"
                  onClick={handleInputChange}
                  inline
                  required
                />
                <Form.Check
                  name="type_housing"
                  id="type_housing"
                  label="Renta"
                  type="radio"
                  value="Renta"
                  onClick={handleInputChange}
                  inline
                />
                <Form.Check
                  name="type_housing"
                  id="type_housing"
                  label="Familiar"
                  type="radio"
                  value="Familiar"
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
                label="Nombre completo"
                className="mb-3"
              >
                <Form.Control
                  type="text"
                  placeholder="0"
                  name="con_name"
                  value={formValues.con_name}
                  onChange={handleInputChange}
                />
              </FloatingLabel>
            </Col>
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
                  onChange={handleInputChange}
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
                controlId="ref1_name"
                label="Nombre completo"
                className="mb-3"
              >
                <Form.Control
                  type="text"
                  placeholder="0"
                  name="ref1_name"
                  value={formValues.ref1_name}
                  onChange={handleInputChange}
                />
              </FloatingLabel>
            </Col>
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
                <Form.Control
                  type="text"
                  placeholder="0"
                  name="ref1_relationship"
                  value={formValues.ref1_relationship}
                  onChange={handleInputChange}
                />
              </FloatingLabel>
            </Col>
            <Col md>
              <FloatingLabel
                controlId="ref1_longer"
                label="Meses de atigüedad"
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
                controlId="ref2_name"
                label="Nombre completo"
                className="mb-3"
              >
                <Form.Control
                  type="text"
                  placeholder="0"
                  name="ref2_name"
                  value={formValues.ref2_name}
                  onChange={handleInputChange}
                />
              </FloatingLabel>
            </Col>
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
                <Form.Control
                  type="text"
                  placeholder="0"
                  name="ref2_relationship"
                  value={formValues.ref2_relationship}
                  onChange={handleInputChange}
                />
              </FloatingLabel>
            </Col>
            <Col md>
              <FloatingLabel
                controlId="ref2_longer"
                label="Meses de atigüedad"
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
                  onChange={handleInputChange}
                />
              </FloatingLabel>
            </Col>
          </Row>

          <div className="text-center mb-3 mt-3">
            <Button variant="success" type="submit">
              Enviar a mesa de control
            </Button>
          </div>
        </Form>
      </Container>
      <FileInputs cliente={cliente} status={status}/>
    </>
  );
};
