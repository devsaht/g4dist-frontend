import Juguete from "./Juguete";
import Ropa from "./Ropa";

class FactoriaArticulo{

    public tipoArticulo (tipo: String){

        if(tipo==="juguete"){
            let temp = new Juguete();
            return temp.escribir();
            
        }else if(tipo==="ropa"){
            let temp = new Ropa();
            return temp.escribir();
        }
    }
}