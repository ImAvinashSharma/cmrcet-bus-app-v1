import React from "react";

export default function Footer() {
  return (
    <div>
      <footer>
        <div
          style={{
            position: "fixed",
            left: "0",
            bottom: "0",
            width: "100%",
            backgroundColor: "#333a40",
            textAlign: "center"
          }}
        >
          <p className="text-white text-center mt-3">© 2021 CMR College of Engineering &amp; Technology</p>
        </div>
      </footer>
    </div>
  );
}
