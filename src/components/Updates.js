import React from "react";
import { useCollectionData } from "react-firebase-hooks/firestore";
import { Card, ListGroup } from "react-bootstrap";
import firebase from "firebase/app";
import "firebase/firestore";
const firestore = firebase.firestore();

function Updates() {
  return (
    <div>
      <Card style={{ width: "18rem" }}>
        <Card.Header>BUS UPDATES</Card.Header>
        <ListGroup variant="flush">{<Helper />}</ListGroup>
      </Card>
    </div>
  );
}

function Helper() {
  const messagesRef = firestore.collection("businfo");
  const query = messagesRef.orderBy("createdAt", "asc").limit(5);
  const [messages] = useCollectionData(query, { idField: "id" });
  return <>{messages && messages.map(msg => <ListGroup.Item key={msg.id}>msg</ListGroup.Item>)}</>;
}

export default Updates;
