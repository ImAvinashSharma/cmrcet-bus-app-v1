import React, { useState, useRef } from "react";
import bussData from "./busNo.json";
import { Button, Alert, Form } from "react-bootstrap";

export default function BussRoute() {
  const [error1, setError1] = useState("");
  const [data, setData] = useState(bussData);
  const [bninfo, setBninfo] = useState("");
  const searchRef = useRef();
  function isNumeric(str) {
    if (typeof str != "string") return false;
    return !isNaN(str) && !isNaN(parseFloat(str));
  }
  function handleSubmit(e) {
    e.preventDefault();
    setError1("");
    const bn = searchRef.current.value;
    if (isNumeric(bn)) {
      if (bn < 60) {
        const info = data[bn].Route;
        setBninfo(`Route :: ${info}`);
      } else {
        setError1("Error Buss No does not exist");
      }
    } else {
      setError1("Error Enter a Valid Number");
      setData(null);
    }
  }
  return (
    <div className="d-flex flex-column align-items-center justify-content-center">
      <Form onSubmit={handleSubmit}>
        <Form.Group id="text">
          <Form.Label>Bus No.</Form.Label>
          <Form.Control type="text" ref={searchRef} required />
        </Form.Group>
        <div className="mb-3">
          {error1 && <Alert variant="danger">{error1}</Alert>}
          <p>{bninfo}</p>
        </div>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
}
