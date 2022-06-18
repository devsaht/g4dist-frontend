import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const AddArticle = () => {
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
        await axios.post("http://localhost:8090/articulos/guardar", article);
        navigate("/articulos");
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
              <h2 className="text-center m-4">Registrar Articulo</h2>
    
              <form onSubmit={(e) => onSubmit(e)}>
                <div style={divStyles}>
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
                  <input
                    styles="display: inline"
                    type={"text"}
                    className="form-control"
                    placeholder="Ingrese estado del artículo"
                    name="estado"
                    value={estado}
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
 
export default AddArticle;