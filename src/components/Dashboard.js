import React, { useState } from "react";
import { Button, Alert } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
export default function Dashboard() {
  const [error, setError] = useState("");

  const { currentUser, logout } = useAuth();
  const history = useHistory();

  async function handleLogout() {
    setError("");
    try {
      await logout();
      history.push("/login");
    } catch {
      setError("Failed to logout");
    }
  }
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <Link aclassName="navbar-brand" to="/">
            CMRCET BUS APP
          </Link>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link
                  className="nav-link active"
                  aria-current="page"
                  to="/home"
                >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="bus-route">
                  Bus Route
                </Link>
              </li>
            </ul>
          </div>
          <div className="d-flex flex-row-reverse">
            <Button className="btn btn-dark btn-sm" onClick={handleLogout}>
              Log Out
            </Button>
            <Link to="/update-profile" className="btn btn-primary btn-sm mr-3">
              Update Profile
            </Link>
            <div className="ml-5 mr-3">
              <strong>email: </strong>
              {currentUser.email}
            </div>
            {error && <Alert variant="danger">{error}</Alert>}
          </div>
        </div>
      </nav>
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
