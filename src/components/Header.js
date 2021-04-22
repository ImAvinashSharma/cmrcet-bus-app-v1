import React, { useState } from "react";
import { Button, Alert } from "react-bootstrap";
import HomeIcon from "@material-ui/icons/Home";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import DirectionsBusIcon from "@material-ui/icons/DirectionsBus";
import EmailIcon from "@material-ui/icons/Email";
import WbSunnyIcon from "@material-ui/icons/WbSunny";

export default function Header() {
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
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link
                  className="nav-link active pl-0 pr-1 ml-0"
                  aria-current="page"
                  to="/"
                >
                  <HomeIcon />
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="bus-route">
                  <DirectionsBusIcon /> Bus Route
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="weather">
                  <WbSunnyIcon /> Weather
                </Link>
              </li>
            </ul>
          </div>

          <div className="d-flex flex-row-reverse">
            <Button className="btn btn-dark btn-sm" onClick={handleLogout}>
              Log Out
            </Button>
            <Link to="/update-profile" className="link-primary mr-3">
              Update Profile
            </Link>
            <div className="ml-2 mr-3">{currentUser.email}</div>
            <EmailIcon />
            {error && <Alert variant="danger">{error}</Alert>}
          </div>
        </div>
      </nav>
    </div>
  );
}
