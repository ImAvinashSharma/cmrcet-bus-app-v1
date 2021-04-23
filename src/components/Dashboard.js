import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import BusRoute from "./BusRoute";
import Weather from "./Weather";
import { Card, CardDeck, Container } from "react-bootstrap";

export default function Dashboard() {
  return (
    <>
      <Header />
      <h2 className="text-center mt-4 mb-4">
        <strong>Profile</strong>
      </h2>
      <Container>
        <CardDeck>
          <Card>
            <Card.Text>
              <BusRoute />
            </Card.Text>
            <Card.Footer>
              <small className="text-muted">Last updated 3 mins ago</small>
            </Card.Footer>
          </Card>
          <Card>
            <Card.Text>
              <Weather />
            </Card.Text>
            <Card.Footer>
              <small className="text-muted">Last updated 5 mins ago</small>
            </Card.Footer>
          </Card>
        </CardDeck>
      </Container>
      <Footer />
      <>
        {/**<div>
          <input
            style={{ transform: "rotate(90deg)" }}
            type="range"
            className="form-range"
            id="customRange1"
            min="0"
            max="50"
          ></input>
          <label for="customRange1" className="form-label">
            distance
          </label>
        </div> */}
      </>
    </>
  );
}
