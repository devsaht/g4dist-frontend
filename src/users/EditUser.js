import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import Loader from "../componentes/Loader";

export default function EditUser({idSavedUser = 0}) {
  let navigate = useNavigate();

  const { id } = useParams();

  const [user, setUser] = useState({
    username: "",
    direccion: "",
    apellidos: "",
    email: "",
  });

  const [loading, setLoading] = useState(true)

  const { username,apellidos,direccion, email } = user;

  const onInputChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    loadUser();
  }, []);

  const onSubmit = async (e) => {
    e.preventDefault();
    await axios.put(`http://localhost:8090/usuarios/actualizar/${id}`, user);
    navigate("/");
  };

  const loadUser = async () => {
    const result = await axios.get(`http://localhost:8090/usuarios/buscar/${ idSavedUser===0 ? id: idSavedUser}`)
    setUser(result.data)
    setLoading(false)
    
    console.log(user)
  };

  return (
        <div className={idSavedUser===0 ?`row col-md-6 border rounded p-4 mt-2 shadow` : ``}>
          
          <h2 className="text-center m-4">Datos de usuario</h2>
          {loading ? <Loader/> : (
            <form onSubmit={(e) => onSubmit(e)}>
            <div className="mb-3">
              <label htmlFor="Username" className="form-label">
                Nombres
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Enter your name"
                name="username"
                value={`${username} ${apellidos}`}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="Email" className="form-label">
                Email
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Enter your username"
                name="email"
                value={email}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="Direccion" className="form-label">
                Direccion
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Enter your e-mail address"
                name="direccion"
                value={direccion}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <button type="submit" className="btn btn-outline-primary">
              Submit
            </button>
            <Link className="btn btn-outline-danger mx-2" to="/">
              Cancel
            </Link>
          </form>
          )}
        </div>
  );
}
