import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {

  const titleStyles = {
    fontSize:"32px",
    fontWeight:"600"
  }

  const navStyles = {
    backgroundColor:"black",
  }
  return (
    <div>
      <nav className="navbar navbar-expand-lg" style={navStyles}>
        <div className="container-fluid">
          <Link style={titleStyles} className="navbar-brand" to="/">
            <img src="images/sanmarcos.png" alt="" width="72" height="96"/>
            <span className="ms-4">FISITraperos</span>
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

          <div>
            <Link className="btn btn-outline-light m-2" to="/login">
              Inicio
            </Link>
            <Link className="btn btn-outline-light m-2" to="/adduser">
              Sobre Nosotros
            </Link>
            <Link className="btn btn-outline-light m-2" to="/adduser">
              Contacto
            </Link>
            <Link className="btn btn-outline-light m-4 btn-danger" to="/login">
              Iniciar Sesion
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
}
