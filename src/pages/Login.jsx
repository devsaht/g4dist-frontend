import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
const Login = () => {

    const titleStyles = {
        padding:"6px 12px",
        fontSize:"16px",
        borderRadius:"4px",
        backgroundColor:"rgb(13, 110, 253)",
        color:"white"
      }

      const containerStyles = {
        width:"400px",
        borderRadius:"4px",
        border:"2px solid rgb(13, 110, 253)"
      }

    return ( 
        <div className="container">
            <div className="row mt-4" style={containerStyles}>
                <p style={titleStyles}>INICIA SESIÓN</p>
                <form action="" className="mt-4 d-flex flex-column">
                    <label htmlFor="" className="p-4 d-flex justify-content-around">
                        <span>Usuario</span>
                        <input type="text"/>
                    </label>
                    <label htmlFor="" className="p-4 d-flex justify-content-around">
                        <span>Contraseña</span>
                        <input type="password"/>
                    </label>
                    <Link className="btn btn-success" to="/articulos/addarticle">
                        Iniciar Sesion
                    </Link>
                </form>
            </div>
        </div>
     );
}
 
export default Login;