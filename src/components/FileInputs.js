import React, { useRef } from "react";
import axios from "axios";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { rutas } from "../objects/client";

const FileInputs = ({cliente, status}) => {
  const ineAFile = useRef();
  const ineRFile = useRef();
  const cDomicilio = useRef();
  const eCuenta = useRef();
  const talones = useRef();

  const sendData = async (e) => {
    e.preventDefault();
    const files = [
      ineAFile.current.files[0],
      ineRFile.current.files[0],
      cDomicilio.current.files[0],
      eCuenta.current.files[0],
      ...talones.current.files
    ];
    files.forEach(async (file, index) => {
      const formData = new FormData();
      formData.append(rutas[index], file);
      return await axios
        .post(`http://127.0.0.1:3333/document/${rutas[index]}`, formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        })
        .then(function (response) {
          console.log(response);
        })
        .catch(function (error) {
          console.log(error);
        });
      
    });
  };

  return (
    <>
      <Container>
        <Form onSubmit={sendData}>
          <div className="border mt-3">
            <h3>
              Toma fotografías de cada documento oficial y subelo en su entrada
              correspondiente
            </h3>
            <Row>
              <Col md className="mb-3">
                <Form.Label>INE (Adverso)</Form.Label>
                <Form.Control
                  type="file"
                  name="ineA"
                  ref={ineAFile}
                  encType="multipart/form-data"
                />
              </Col>
              <Col md className="mb-3">
                <Form.Label>INE (Reverso)</Form.Label>
                <Form.Control
                  type="file"
                  name="ineR"
                  ref={ineRFile}
                  encType="multipart/form-data"
                />
              </Col>
            </Row>
            <Row>
              <Col md className="mb-3">
                <Form.Label>Comprobante de domicilio</Form.Label>
                <Form.Control
                  type="file"
                  name="cDomicilio"
                  ref={cDomicilio}
                  encType="multipart/form-data"
                />
              </Col>
              <Col md className="mb-3">
                <Form.Label>Estado de cuenta</Form.Label>
                <Form.Control
                  type="file"
                  name="eCuenta"
                  ref={eCuenta}
                  encType="multipart/form-data"
                />
              </Col>
            </Row>
            <Row>
              <Col>
                <Form.Group controlId="formFileMultiple" className="mb-3">
                  <Form.Label>Talones de pago (Minimo 2)</Form.Label>
                  <Form.Control
                    type="file"
                    multiple
                    name="talones"
                    ref={talones}
                    encType="multipart/form-data"
                  />
                </Form.Group>
              </Col>
            </Row>
          </div>

          <div className="text-center mb-3 mt-3">
            <Button variant="success" type="submit">
              Enviar a mesa de control
            </Button>
          </div>
        </Form>
      </Container>
    </>
  );
};

export default FileInputs;
