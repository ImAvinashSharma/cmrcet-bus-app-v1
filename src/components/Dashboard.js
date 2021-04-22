import React from "react";
import Header from "./Header";
import Footer from "./Footer";
export default function Dashboard() {
  return (
    <>
      <Header />
      <h2 className="text-center mt-4 mb-4">
        <strong>Profile</strong>
      </h2>
      <Footer />
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
