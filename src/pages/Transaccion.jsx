import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useParams, useNavigate } from "react-router-dom";
import Loader from "../componentes/Loader";
import AddUser from "../users/AddUser";
import EditUser from "../users/EditUser";
import AddArticle from "../articles/AddArticle";
import ViewEnvio from "../envio/ViewEnvio";

const Transaccion = () => {

    const [idSavedUser, setIdSavedUser ] = useState(0);
    const [idArticle, setIdArticle ] = useState(0);

    const [idEnvio, setIdEnvio] = useState({
        idUser:0,
        idArticle:0
    })
    const [loadingEnvio, setLoadingEnvio] = useState(false)

    useEffect(() => {
      if(idArticle != 0){
          const envio = {
              idUser:idSavedUser,
              idArticle
          }
          setIdEnvio(envio)
          setLoadingEnvio(true)
      }
    }, [idArticle])
    

    return ( 
        <div className="container">
            <div className="row">
                {loadingEnvio ?  <ViewEnvio idEnvio={idEnvio}/> : (
                    <>
                        <div className="col-md-6 border rounded p-4 mt-2 shadow">
                            { idSavedUser==false ?  <AddUser idSavedUser={idSavedUser} setIdSavedUser={setIdSavedUser} /> : <EditUser idSavedUser={idSavedUser}/>}
                        </div>
                        <div className="col-md-5 border rounded p-4 mt-2 ms-2 shadow">
                            <AddArticle setIdArticle={setIdArticle}/>
                        </div>
                    </>
                )}
            </div>
        </div>
     );
}
 
export default Transaccion;