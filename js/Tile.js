/*tile cuadros del mapa*/

function Tile (xEnTiles, yEnTiles, z , ancho, alto, sprite) {
    this.rectangulo = new Rectangulo(xEnTiles, yEnTiles, ancho, alto);
    this.zIndex = z;
    this.sprite = sprite ;
    this.idHTML = "x" + xEnTiles + "y" + yEnTiles + "z" + z; // x0y0z0
    this.html = '<div id="' + this.idHTML + '"></div>';
}

Tile.prototype.aplicarEstilos = function() {
    if(!document.getElementById(this.idHTML)){
        throw("El ID " + this.idHTML + "no existe en la hoja"); // throw da sentencia a errores graves y los muestra en la consola
    }
/*
    document.getElementById(this.idHTML).style.position = "absolute";
    document.getElementById(this.idHTML).style.left = (this.rectangulo.x * this.rectangulo.ancho) + "px";
    document.getElementById(this.idHTML).style.top = (this.rectangulo.y * this.rectangulo.alto) + "px";
    document.getElementById(this.idHTML).style.width = this.rectangulo.ancho + "px";
    document.getElementById(this.idHTML).style.height = this.rectangulo.alto + "px";
    document.getElementById(this.idHTML).style.zIndex = "" + this.zIndex; // si ponemos un string vacio y le sumamos el valor numerico transforma todo en el string
    document.getElementById(this.idHTML).style.background = "url('" + this.sprite.rutaHojaOrigen + "')";

    const x = this.sprite.posicionEnHoja.x;
    const y = this.sprite.posicionEnHoja.y;
    
    document.getElementById(this.idHTML).style.backgroundPosition = "-" + x + "px -" + y + "px";// va con negativos por la hoja de sprite de tile
    document.getElementById(this.idHTML).style.backgroundClip = "border-box" ;
    document.getElementById(this.idHTML).style.outline = "1px solid transparent";
*/
    const tileElement = document.getElementById(this.idHTML);  // Se creó una variable para simplificar el código

    tileElement.style.position = "absolute";
    tileElement.style.left = (this.rectangulo.x * this.rectangulo.ancho) + "px";
    tileElement.style.top = (this.rectangulo.y * this.rectangulo.alto) + "px";
    tileElement.style.width = this.rectangulo.ancho + "px";
    tileElement.style.height = this.rectangulo.alto + "px";
    tileElement.style.zIndex = "" + this.zIndex;
    tileElement.style.background = "url('" + this.sprite.rutaHojaOrigen + "')";

    const x = this.sprite.posicionEnHoja.x;
    const y = this.sprite.posicionEnHoja.y;
    
    tileElement.style.backgroundPosition = "-" + x + "px -" + y + "px";
    tileElement.style.backgroundClip = "border-box" ;
    tileElement.style.outline = "1px solid transparent";
}