import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function AddUser() {
  let navigate = useNavigate();

  const [user, setUser] = useState({
    dni: "",
    username: "",
    password: "",
    email: "",
    apellidos: "",
    direccion: "",
  });

  const { dni, username,password, email, apellidos,direccion } = user;

  const onInputChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:8080/usuarios/guardar", user);
    navigate("/");
  };


  const divStyles = {
    display:"flex",
    flexDirection:"row",
    paddingBottom:"12px"
  }

  const labelStyles = {
    width:"128px",
    textAlign:"left"
  }

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
          <h2 className="text-center m-4">Registrar Usuario</h2>

          <form onSubmit={(e) => onSubmit(e)}>
            <div style={divStyles}>
              <label htmlFor="Dni" style={labelStyles} className="form-label">
                DNI
              </label>
              <input
                styles="display: inline"
                type={"text"}
                className="form-control"
                placeholder="Ingrese dni"
                name="dni"
                value={dni}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div style={divStyles}>
              <label htmlFor="Username" style={labelStyles} className="form-label">
                Usuario
              </label>
              <input
                styles="display: inline"
                type={"text"}
                className="form-control"
                placeholder="Ingrese usuario"
                name="username"
                value={username}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            
            <div style={divStyles}>
              <label htmlFor="Email" style={labelStyles} className="form-label">
                Correo
              </label>
              <input
                styles="display: inline"
                type={"text"}
                className="form-control"
                placeholder="Ingrese email"
                name="email"
                value={email}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div style={divStyles}>
              <label htmlFor="Username" style={labelStyles} className="form-label">
                Contraseña
              </label>
              <input
                styles="display: inline"
                type={"password"}
                className="form-control"
                placeholder="Ingrese contraseña"
                name="password"
                value={password}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div style={divStyles}>
              <label htmlFor="Email" style={labelStyles} className="form-label">
                Apellido
              </label>
              <input
                styles="display: inline"
                type={"text"}
                className="form-control"
                placeholder="Ingrese apellidos"
                name="apellidos"
                value={apellidos}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div style={divStyles}>
              <label htmlFor="Email" style={labelStyles} className="form-label">
                Direccion
              </label>
              <input
                styles="display: inline"
                type={"text"}
                className="form-control"
                placeholder="Ingrese direccion"
                name="direccion"
                value={direccion}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <button type="submit" className="btn btn-outline-primary">
              Guardar
            </button>
            <Link className="btn btn-outline-danger mx-2" to="/">
              Cancelar
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
}
