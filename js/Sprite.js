function Sprite(ruta, idSobreZero, posicionEnHoja) {
    const elementosRuta = ruta.split("/");
    this.rutaHojaOrigen = "img/" + elementosRuta[elementosRuta.length - 1];
    this.idSobreZero = idSobreZero ;
    this.idSobreUnodSobreUno = idSobreZero + 1;
    this.posicionEnHoja = posicionEnHoja ;
    }