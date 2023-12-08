/*rejilla para ubicacion de tile del mapa*/

function Punto (x, y) {
    this.x = x;
    this.y = y;
}
//con prototype hacemos que solo sea una instancia pero siempre sera distinta
Punto.prototype.coincide = function(punto) {
    return(this.x === punto.x && this.y === punto.y) ? true : false;
}