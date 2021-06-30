import React, { useRef, useState } from "react";
import axios from "axios";
import { jsPDF } from "jspdf";
import { trackPromise, usePromiseTracker } from "react-promise-tracker";
import { Button, Col, Container, Form, Row, Spinner } from "react-bootstrap";
import { rutas, rutaspre, APIURL } from "../objects/client";

const FileInputs = ({ type, client_id }) => {
  const ineAFile = useRef();
  const ineRFile = useRef();
  const cDomicilio = useRef();
  const eCuenta = useRef();
  const precaptura = useRef();
  const talones = useRef();
  const { promiseInProgress } = usePromiseTracker();

  const subirDoc = async (doc, id, folder) => {
    const formData = new FormData();
    formData.append(folder, doc);
    try {
      trackPromise(
        axios
          .post(`${APIURL}/document/${folder}`, formData, {
            headers: {
              "Content-Type": "multipart/form-data",
              client_id: id,
            },
          })
          .then((response) => {
            console.log(response);
          })
          .catch((error) => {
            console.log(error);
          })
      );
    } catch (error) {
      alert(folder + ": " + error);
    }
  };

  const convertiraBase64 = (archivos, precaptura) => {
    archivos.forEach((archivo, index) => {
      let reader = new FileReader();
      reader.readAsDataURL(archivo);
      reader.onload = function () {
        let archivotype = [];
        let tipo = "Otro";
        try {
          archivotype = archivo.type.split("/");
          tipo = archivotype[1].toUpperCase();
        } catch (error) {}
        if (tipo === "PDF" || tipo === "PNG" || tipo === "JPEG") {
          if (tipo !== "PDF") {
            let base64 = reader.result;
            let doc = new jsPDF();
            const width = doc.internal.pageSize.getWidth() - 10;
            const height = doc.internal.pageSize.getHeight() - 10;
            doc.addImage(base64, tipo, 5, 5, width, height);
            const file = doc.output("blob");
            if (precaptura) {
              subirDoc(file, client_id, rutaspre[index]);
            } else {
              subirDoc(file, client_id, rutas[index]);
            }
          } else {
            if (precaptura) {
              subirDoc(archivo, client_id, rutaspre[index]);
            } else {
              subirDoc(archivo, client_id, rutas[index]);
            }
          }
        } else {
          alert("Seleccione un archivo compatible");
        }
      };
    });
  };

  const sendData = async (e) => {
    e.preventDefault();
    const files = [];
    if (ineAFile.current.files.length > 0) {
      files.push(ineAFile.current.files[0]);
    }
    if (ineRFile.current.files.length > 0) {
      files.push(ineRFile.current.files[0]);
    }
    if (cDomicilio.current.files.length > 0) {
      files.push(cDomicilio.current.files[0]);
    }
    if (eCuenta.current.files.length > 0) {
      files.push(eCuenta.current.files[0]);
    }
    if (precaptura.current !== undefined) {
      if (precaptura.current.files.length > 0) {
        files.push(precaptura.current.files[0]);
      }
    }
    if (talones.current.files.length > 0) {
      for (const talon of talones.current.files) {
        files.push(talon);
      }
    }
    if (files.length > 0) {
      convertiraBase64(files, true);
    } else {
      alert("Se requieren todos los documentos y no se ha registrado ninguno");
    }
  };

  return (
    <>
      <Container>
        <Form onSubmit={sendData}>
          <div className="border mt-3">
            <h3>
              Toma fotografías de cada documento oficial y subelo en su entrada
              correspondiente {client_id}
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
              {type === "precaptura" ? (
                <Col md className="mb-3">
                  <Form.Label>Formato de pre-captura</Form.Label>
                  <Form.Control
                    type="file"
                    name="precaptura"
                    ref={precaptura}
                    encType="multipart/form-data"
                  />
                </Col>
              ) : null}
            </Row>
          </div>

          <div className="text-center mb-3 mt-3">
            {promiseInProgress ? (
              <Button variant="warning" disabled>
                <Spinner
                  as="span"
                  animation="grow"
                  size="sm"
                  role="status"
                  aria-hidden="true"
                />
                Subiendo...
              </Button>
            ) : (
              <Button variant="success" type="submit">
                Enviar archivos a mesa de control
              </Button>
            )}
          </div>
        </Form>
      </Container>
    </>
  );
};

export default FileInputs;
