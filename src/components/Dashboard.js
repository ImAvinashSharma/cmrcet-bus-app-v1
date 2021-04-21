import React from "react";
import Header from "./Header";
export default function Dashboard() {
  return (
    <>
      <Header />
      <h2 className="text-center mt-4 mb-4">
        <strong>Profile</strong>
      </h2>
      <footer>
        <div
          style={{
            position: "fixed",
            left: "0",
            bottom: "0",
            width: "100%",
            backgroundColor: "#212529",
            color: "#ffffff",
            textAlign: "center"
          }}
        >
          <p className="text-white text-center mt-3">
            © 2020 CMR College of Engineering &amp; Technology
          </p>
        </div>
      </footer>
      <>
        <bussData />
        <div>
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
        </div>
      </>
    </>
  );
}
