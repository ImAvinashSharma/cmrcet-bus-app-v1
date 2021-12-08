import React, { useRef, useState } from "react";
import { useCollectionData } from "react-firebase-hooks/firestore";
import firebase from "firebase/app";
import "firebase/firestore";
import { auth } from "../firebase";

const firestore = firebase.firestore();

function BusInfo() {
  return (
    <div>
      {auth.currentUser.uid === "QFpi0G7XF5VB1sIWnHWTBzTO9rR2" ? (
        <>
          <div
            style={{
              minHeight: "100vh",
              backgroundColor: "#282c34",
              maxWidth: "728px",
              margin: "0 auto"
            }}
          >
            <header
              style={{
                backgroundColor: "#181717",
                height: "10vh",
                minHeight: "50px",
                color: "white",
                position: "fixed",
                width: "100%",
                maxWidth: "728px",
                top: "0",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                zIndex: "99",
                padding: "10px",
                boxSizing: "border-box"
              }}
            >
              <h1 style={{ alignText: "center" }}>BUS INFORMATION (UPDATES)</h1>
            </header>
            <Helper />
          </div>
        </>
      ) : (
        <center style={{ color: "RED" }}>
          <h1>ACCESS DENIED</h1>
          <h3>403</h3>
        </center>
      )}
    </div>
  );
}

function Helper() {
  const dummy = useRef();
  const messagesRef = firestore.collection("businfo");
  const query = messagesRef.orderBy("createdAt", "asc").limit(5);

  const [messages] = useCollectionData(query, { idField: "id" });

  const [formValue, setFormValue] = useState("");

  const sendMessage = async e => {
    e.preventDefault();
    const { uid } = auth.currentUser;
    await messagesRef.add({
      text: formValue,
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
      uid
    });

    setFormValue("");
    dummy.current.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <>
      <main
        style={{
          padding: "10px",
          height: "80vh",
          margin: "10vh 0 10vh",
          overflowY: "scroll",
          display: "flex",
          flexDirection: "column"
        }}
      >
        {messages && messages.map(msg => <ChatMessage key={msg.id} message={msg} />)}
        <span ref={dummy}></span>
      </main>

      <form
        onSubmit={sendMessage}
        style={{
          height: "10vh",
          position: "fixed",
          bottom: "0",
          backgroundColor: "rgb(24, 23, 23)",
          width: "100%",
          maxWidth: "728px",
          display: "flex",
          fontSize: "1.5rem"
        }}
      >
        <textarea
          value={formValue}
          onChange={e => setFormValue(e.target.value)}
          placeholder="Complaint"
          rows="4"
          cols="50"
          style={{
            lineHeight: "1.5",
            width: "100%",
            fontSize: "1.5rem",
            background: "rgb(58, 58, 58)",
            color: "white",
            outline: "none",
            border: "none",
            padding: "0 10px"
          }}
        />

        <button type="submit" disabled={!formValue} style={{ width: "20%", backgroundColor: "rgb(56, 56, 143)" }}>
          🕊️
        </button>
      </form>
    </>
  );
}

function ChatMessage(props) {
  const { text } = props.message;
  const uidAdmin = "QFpi0G7XF5VB1sIWnHWTBzTO9rR2";
  return (
    <>
      {uidAdmin === auth.currentUser.uid ? (
        <div>
          <p
            style={{
              marginBottom: "12px",
              lineHeight: "24px",
              padding: "10px 20px",
              borderRadius: "25px",
              position: "relative",
              color: "black",
              textAlign: "center",
              background: "#e5e5ea"
            }}
          >
            {text}
          </p>
        </div>
      ) : (
        <p></p>
      )}
    </>
  );
}

export default BusInfo;
