import React, { useState, useRef } from "react";
import bussData from "./assets/busNo.json";
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
    let bn = searchRef.current.value;
    if (isNumeric(bn)) {
      if (bn <= 61) {
        const binfo = [
          "Route  ➡️ ",
          data[bn].Route,
          <br />,
          "Vehicle No ➡️ " + data[bn].VehicleNo,
          <br />,
          "Time ➡️ " + data[bn].Time + " AM",
          <br />,
          "Bus Incharge ➡️ " + data[bn].BusIncharge,
          <br />,
          "Bus Incharge Cell No. ➡️ " + data[bn].BusInchargeCellNo,
          <br />,
          "Driver Name ➡️ " + data[bn].DriverName,
          <br />,
          "Driver Cell No. ➡️ " + data[bn].DriverCellNo,
          <br />,
          "Capacity ➡️ " + data[bn].Cpty
        ];
        bn = 0;
        setBninfo(binfo);
      } else {
        const rm = [""];
        setData(rm);
        setError1("Error Buss No does not exist");
      }
    } else {
      setData(null);
      setError1("Error Enter a Valid Number");
    }
  }
  return (
    <>
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
            {error1 && <Alert variant="danger">{error1}</Alert>}
            <>{bninfo}</>
          </div>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </div>
    </>
  );
}
