import React, { useState, useRef } from "react";
import payData from "./assets/pay.json";
import Header from "./Header";
import Footer from "./Footer";
import { Button, Alert, Form } from "react-bootstrap";

export default function Fees() {
  const [error1, setError1] = useState("");
  const searchRef = useRef();
  const [payinfo, setpayinfo] = useState("");
  const [data, setData] = useState(payData);
  function handleSubmit(e) {
    e.preventDefault();
    setError1("");
    let bn = searchRef.current.value - 1;
    if (bn < 3) {
      if (data[bn].status === true) {
        const binfo = ["Paid  ➡️ ", data[bn].id];
        setpayinfo(binfo);
      } else {
        const binfo = ["Not Paid  ➡️ ", data[bn].id];
        setData(null);
        setError1(binfo);
      }
    } else {
      setError1("Not valid");
    }
  }
  return (
    <>
      <Header />
      <div
        className="d-flex flex-column align-items-center justify-content-center"
        style={{ minHeight: "43vh" }}
      >
        <h2>Bus Information</h2>
        <Form onSubmit={handleSubmit}>
          <Form.Group id="text">
            <Form.Label>Bus No.</Form.Label>
            <Form.Control type="text" ref={searchRef} required />
          </Form.Group>
          <div className="mb-3">
            {error1 ? <Alert variant="danger">{error1}</Alert> : payinfo}
            <></>
          </div>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </div>
      <Footer />
    </>
  );
}
