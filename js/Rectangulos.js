//generador de rectangulos
//funcion constructora para rectangulos


function Rectangulo(x, y, ancho, alto){
    this.x = x;
    this.y = y;
    this.ancho = ancho;
    this.alto = alto;
}

/*function Rectangulo(x, y, ancho, alto){
    this.x = x;
    this.y = y;
    this.ancho = ancho;
    this.alto = alto;
    esto lo eliminamos para empezar a generar el mapa real ↓
    this.id = x + "r" + y; //crear los id de nuestros rectangulos ejemplo ( x=11 r y=23) para quedar (11r23)
    this.insertarDOM()
}
//introducir datos en html y al css
esto lo eliminamos para empezar a generar el mapa real ↓
Rectangulo.prototype.insertarDOM = function(){
    let div = '<div id="'  + this.id +  '"></div>' ;
    let html = document.getElementById("juego").innerHTML ;
    let color ='#' + Math.floor(Math.random() *16777215 ).toString(16); //obtener numeros de hexadecimal aleatorios para colores en css
    document.getElementById("juego").innerHTML = html + div ;
    document.getElementById(this.id).style.position = "absolute";
    document.getElementById(this.id).style.left = this.x + "px";
    document.getElementById(this.id).style.top = this.y + "px";
    document.getElementById(this.id).style.width = this.ancho + "px";
    document.getElementById(this.id).style.height = this.alto + "px";
    document.getElementById(this.id).style.background = color;
}*/