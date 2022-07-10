import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import Loader from "../componentes/Loader";
import Inicio from "../componentes/Inicio";
import SobreNosotros from "../componentes/SobreNosotros";
import Footer from "../componentes/Footer";

export default function Home() {
  const [users, setUsers] = useState([]);

  const { id } = useParams();

  useEffect(() => {
    loadUsers();
  }, []);

  const loadUsers = async () => {
    const result = await axios.get("http://localhost:8090/usuarios/listar");
    setUsers(result.data);
  };

  const deleteUser = async (id) => {
    await axios.delete(`http://localhost:8090/usuarios/eliminar/${id}`);
    loadUsers();
  };

  const divTitleStyles = {
    display:"flex",
    flexDirection:"row",
    padding:"12px",
    fontSize:"32px",
    borderRadius:"4px",
    border:"2px solid rgb(13, 110, 253)",
    marginBottom:"16px"
  }

  const btnStyles = {
    padding:"6px 12px",
    fontSize:"16px",
    borderRadius:"4px",
    backgroundColor:"rgb(13, 110, 253)",
    marginLeft:"32px",
    color:"white"
  }

  return (
    <div className="container">
      <div className="py-4">
        {/* <div style={divTitleStyles}>
          USUARIOS
          <Link className="btn" style={btnStyles} to="/articulos">
            Articulos
          </Link>
          <Link className="btn" style={btnStyles} to="/transaccion">
            Donaciones
          </Link>
        </div> */}
        <Inicio/>
        <SobreNosotros/>
        <Footer/>
        { users.length ===0 ? <Loader/> : (
          <table className="table table-dark  table-hover border shadow">
          <thead>
            <tr>
              <th scope="col">N°</th>
              <th scope="col">DNI</th>
              <th scope="col">Apellidos</th>
              <th scope="col">Nombres</th>
              <th scope="col">Email</th>
              <th scope="col">Direccion</th>
              <th scope="col">Acciones</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={index}>
                <th scope="row" key={index}>
                  {index + 1}
                </th>
                <td>{user.dni}</td>
                <td>{user.apellidos}</td>
                <td>{user.username}</td>
                <td>{user.email}</td>
                <td>{user.direccion}</td>
                <td>
                  <button
                    className="btn btn-danger mx-2"
                    onClick={() => deleteUser(user.id)}
                    >
                    Eliminar
                  </button>
                  <Link className="btn btn-success" to={`/edituser/${user.id}`}>
                   Editar
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        )}
        
      </div>
    </div>
  );
}
