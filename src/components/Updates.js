import React from "react";
import { useCollectionData } from "react-firebase-hooks/firestore";
import { Card, ListGroup, Container } from "react-bootstrap";
import firebase from "firebase/app";
import "firebase/firestore";
const firestore = firebase.firestore();

function Updates() {
  return (
    <Container
      style={{
        marginTop: "1.5rem",
        marginBottom: "3rem",
        padding: "1.6rem"
      }}
    >
      <Card
        style={{
          backgroundColor: "#2b2a2a"
        }}
      >
        <Card.Header
          style={{
            color: "#ffffff"
          }}
        >
          BUS UPDATES
        </Card.Header>
        <ListGroup
          style={{
            color: "#000"
          }}
          variant="flush"
        >
          {<Helper />}
        </ListGroup>
      </Card>
    </Container>
  );
}

function Helper() {
  const messagesRef = firestore.collection("businfo");
  const query = messagesRef.orderBy("createdAt", "asc").limit(5);
  const [messages] = useCollectionData(query, { idField: "id" });
  return <>{messages && messages.map(msg => <ListGroup.Item key={msg.id}>{<ChatMessage message={msg} />}</ListGroup.Item>)}</>;
}

function ChatMessage(props) {
  const { text } = props.message;
  return text;
}

export default Updates;
