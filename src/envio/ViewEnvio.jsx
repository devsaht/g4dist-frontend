
import axios from "axios";
import React, { useEffect,useState } from "react";
import { Link, useParams } from "react-router-dom";

const ViewEnvio = ({idEnvio}) => {

    const [envio, setEnvio] = useState({
        estado: 0,
        fecha: "",
        idUsuario:0,
        idArticulo:0,
        lugar:"",
        mensaje:"",
        email: "",
      });

      const [user, setUser] = useState({
        name: "",
        username: "",
        email: "",
      });

      const [article, setArticle] = useState({
        tipo: "",
        imagen: "",
        cantidad: 0,
        estado:1
      });

      const [loadingEnvio, setLoadingEnvio] = useState(true)

      // cargar datos del usuario y articulo
      useEffect(() => {
        
        const {idUser,idArticle} = idEnvio

        if(idUser != 0 && idArticle != 0 ){
            loadUser(idUser)
            loadArticle(idArticle)
            setLoadingEnvio(false)
        }

      }, [idEnvio])

      const loadUser = async (idUser) => {
        const result = await axios.get(`http://localhost:8090/usuarios/buscar/${idUser}`);
        await setUser(result.data);
        console.log('user '+user)
      };

      const loadArticle = async (idArticle) => {
        const result = await axios.get(`http://localhost:8090/articulos/buscar/${idArticle}`);
        await setArticle(result.data);
        console.log('article '+article)
      };
      
    return ( 
        <div>
            {loadingEnvio ? <div>Cargando Envío .. </div> : <div>Articulo Enviado..</div>}

            <Link className="btn btn-success" to={`/articulos`}>
                   Ver tabla de articulos donados
            </Link>
        </div>
     );
}
 
export default ViewEnvio;