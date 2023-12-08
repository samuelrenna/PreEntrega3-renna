
function Mapa (objetoJSON) {
    this.posicion = new Punto( 0, 0 );
    this.posicionActualizada = new Punto( 0, 0 );

    this.anchoMedidoEnTiles = parseInt(objetoJSON.width);
    this.altoMedidoEnTiles = parseInt(objetoJSON.height);
    this.anchoDeLosTiles = parseInt(objetoJSON.tilewidth);
    this.altoDeLosTiles = parseInt(objetoJSON.tileheight);

    this.paletasSprites = [];
    this.iniciarPaletasSprites(objetoJSON.tilesets);

    this.capasTiles = [];
    this.iniciarCapas(objetoJSON.layers);

    this.iniciarRejilla();
}

Mapa.prototype.iniciarPaletasSprites = function(datosCapas) {
    for (let i = 0; i < datosCapas.length; i++) {
        this.paletasSprites.push(new PaletasSprites(datosCapas[i]));
    }
}


Mapa.prototype.iniciarCapas =  function(datosCapas) {
    for (let i = 0; i < datosCapas.length; i++) {
            switch(datosCapas[i].type){
                case "tilelayer":
                    this.capasTiles.push(new CapaMapaTiles(datosCapas[i], i, this.anchoDeLosTiles, this.altoDeLosTiles, this.paletasSprites ));
                    break;
                case "objectgroup":
                    break;
            }
        }
    }

    Mapa.prototype.iniciarRejilla = function() {
        const anchoMapaEnPixeles = this.anchoMedidoEnTiles * this.anchoDeLosTiles;
        const altoMapaEnPixeles = this.altoMedidoEnTiles * this.altoDeLosTiles;

        let html = "";

        for (let ct = 0; ct < this.capasTiles.length; ct++) {
            for (let t = 0; t < this.capasTiles[ct].tiles.length; t++){
                if(this.capasTiles[ct].tiles[t] === null) {
                    continue;// en este doble ciclo for es para rellenar la pantalla de los tiles pero en la condicion if es por si en una capa no hay tile seguimos con el siguiente tile
                }
                const tileActual= this.capasTiles[ct].tiles[t];
                html += tileActual.html;// abstraccion de html = html + tileActual.html seria mejor usar += tileActual.html
            }
        }
        document.getElementById("mapa").innerHTML = html;

        for (ct = 0; ct < this.capasTiles.length; ct++) {
            for (t = 0; t < this.capasTiles[ct].tiles.length; t++){
                if(this.capasTiles[ct].tiles[t] === null) {
                    continue;// en este doble ciclo for es para rellenar la pantalla de los tiles pero en la condicion if es por si en una capa no hay tile seguimos con el siguiente tile
                }
                const tileActual= this.capasTiles[ct].tiles[t];
                tileActual.aplicarEstilos();

            }
        }
        document.getElementsByTagName("body")[0].style.overflow = "hidden"; //accederemos a un elemento del html puntual y le esconderemos el scroll, hay que indicar en que indice quieres acceder ya que devuelve un array
    }

    Mapa.prototype.actualizar = function() {

    };

    Mapa.prototype.dibujar = function () {

    };