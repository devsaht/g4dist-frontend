import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {

  const titleStyles = {
    fontSize:"32px",
    fontWeight:"600"
  }
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <div className="container-fluid">
          <Link style={titleStyles} className="navbar-brand" to="/">
            CRUD - G4
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <Link className="btn btn-outline-light" to="/adduser">
            Agregar Usuario
          </Link>
        </div>
      </nav>
    </div>
  );
}