import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Footer from "../componentes/Footer";

const Login = () => {

    const titleStyles = {
        padding:"6px 12px",
        fontSize:"16px",
        borderRadius:"4px",
        color:"white"
      }

      const containerStyles = {
        width:"400px",
        borderRadius:"4px",
        backgroundColor:"black"
      }

    return ( 
        <div className="container">
            <div className="row m-4 d-flex justify-content-center" style={containerStyles}>
                <>
                    <p style={titleStyles}>ACCEDER</p>
                    <form action="" className="mt-4 d-flex flex-column">
                        <label htmlFor="" className="p-4 d-flex justify-content-around">
                            <span className="text-white">Usuario</span>
                            <input type="text"/>
                        </label>
                        <label htmlFor="" className="p-4 d-flex justify-content-around">
                            <span className="text-white">Contraseña</span>
                            <input type="password"/>
                        </label>
                        <Link className="btn btn-primary" to="/articulos/addarticle">
                            Iniciar Sesion
                        </Link>
                        <Link className="btn btn-danger mt-4" to="/articulos/addarticle">
                            Registrarse
                        </Link>
                        <span className="mt-4"> 2020</span>
                    </form>
                </>
            </div>
            <Footer/>
        </div>
     );
}
 
export default Login;