import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import Loader from "../componentes/Loader";

export default function Home() {
  const [users, setUsers] = useState([]);

  const { id } = useParams();

  useEffect(() => {
    loadUsers();
  }, []);

  const loadUsers = async () => {
    const result = await axios.get("http://localhost:8080/usuarios/listar");
    setUsers(result.data);
  };

  const deleteUser = async (id) => {
    await axios.delete(`http://localhost:8080/usuarios/eliminar/${id}`);
    loadUsers();
  };

  return (
    <div className="container">
      <div className="py-4">
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
