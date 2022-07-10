import Articulo from './Articulo'

export default class Juguete implements Articulo{
    alto = 0;
    ancho = 0;

    public escribir(){
        return "Se guardó artículo de tipo juguete";
    }
}

