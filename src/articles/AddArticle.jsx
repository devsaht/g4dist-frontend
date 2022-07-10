import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const AddArticle = ({setIdArticle = 0}) => {
    let navigate = useNavigate();

    const [article, setArticle] = useState({
        tipo: "",
        imagen: "",
        cantidad: "",
        estado: ""
      });
    
      const { tipo, imagen,cantidad, estado } = article;
    
      const onInputChange = (e) => {
        setArticle({ ...article, [e.target.name]: e.target.value });
      };
    
      const onSubmit = async (e) => {
        e.preventDefault();
        console.log(article)
        await axios.post("http://localhost:8090/articulos/guardar", article)
         .then(res=>setArticle(res.data.id));
        navigate("/articulos");
        alert('Envio registrado');
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
    
      const onClickEnvio = () =>{
        // 

      }
      return (
            // <div className="col-md-4 offset-md-3 border rounded p-4 mt-2 shadow">
            <div className="col-md-4 offset-md-3 border rounded p-4 mt-2 shadow">
            <h2 className="text-center m-6">Registrar Articulo</h2>
    
    <form onSubmit={(e) => onSubmit(e)}>
      {/* <div style={divStyles}>
        <label htmlFor="Tipo" style={labelStyles} className="form-label">
          Tipo
        </label>
        <input
          styles="display: inline"
          type={"text"}
          className="form-control"
          placeholder="Ingrese tipo de artículo"
          name="tipo"
          value={tipo}
          onChange={(e) => onInputChange(e)}
        />
      </div> */}

      <div style={divStyles}>
        <label htmlFor="Estado" style={labelStyles} className="form-label">
          Tipo
        </label>
        <select 
          styles="display: inline"
          type={"text"}
          className="form-control"
          placeholder="Seleccione estado del artículo"

          name="estado"
          value={estado}
          onChange={(e) => onInputChange(e)}
        >
          <option value="1">Ropa</option>
          <option value="3">Juguete</option>
        </select>
      </div>

      <div style={divStyles}>
        <label htmlFor="Imagen" style={labelStyles} className="form-label">
          Imagen
        </label>
        <input
          styles="display: inline"
          type={"text"}
          className="form-control"
          placeholder="Ingrese link de la imagen"
          name="imagen"
          value={imagen}
          onChange={(e) => onInputChange(e)}
        />
      </div>
      
      <div style={divStyles}>
        <label htmlFor="Cantidad" style={labelStyles} className="form-label">
          Cantidad
        </label>
        <input
          styles="display: inline"
          type={"cantidad"}
          className="form-control"
          placeholder="Ingrese cantidad"
          name="cantidad"
          value={cantidad}
          onChange={(e) => onInputChange(e)}
        />
      </div>

      <div style={divStyles}>
        <label htmlFor="Estado" style={labelStyles} className="form-label">
          Estado
        </label>
        <select 
          styles="display: inline"
          type={"text"}
          className="form-control"
          placeholder="Seleccione estado del artículo"

          name="estado"
          value={estado}
          onChange={(e) => onInputChange(e)}
        >
          <option value="1">Bueno</option>
          <option value="2" selected>Malo</option>
          <option value="3">Regular</option>
        </select>
      </div>

      <Link className="btn btn-danger mt-4" to="/articulos/addarticle">
        Enviar Donacion
      </Link>
      <Link className="btn btn-outline-danger mx-2" to="/">
        Cancelar
      </Link>
    </form>
            </div>
      );
}
 
export default AddArticle;