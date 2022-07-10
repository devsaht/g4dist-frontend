import Articulo from './Articulo'

export default class Ropa implements Articulo{
    alto = 0;
    ancho = 0;

    escribir(){
        return "Se guardó artículo de tipo ropa"; 
    }
}