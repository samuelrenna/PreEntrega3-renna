function PaletasSprites(datosSprites) {
    this.rutaImagen = datosSprites.image;

    this.anchoImagen = parseInt(datosSprites.imagewidth);
    this.altoImagen = parseInt(datosSprites.imageheight);

    this.anchoSprites = parseInt(datosSprites.tilewidth);
    this.altoSprites = parseInt(datosSprites.tileheight);

    this.primerSpriteSobreUno = parseInt(datosSprites.firstgid);

    this.anchoImagenMedidoenSprites = this.anchoImagen / this.anchoSprites;
    this.altoImagenMedidoenSprites = this.altoImagen / this.altoSprites;
    this.totalSprites = this.anchoImagenMedidoenSprites * this.altoImagenMedidoenSprites;

    this.sprites = [];

    for (let s = 0; s < this.totalSprites; s++) {
        const idActualSobreZero = this.primerSpriteSobreUno - 1 + s;
        this.sprites.push(new Sprite(this.rutaImagen, idActualSobreZero, this.obtenerPosicionDesdeIdSprite(idActualSobreZero)));
        //this.sprites.push(new Sprites(this.rutaImagen, idActualSobreZero, this.obtenerPosicionDesdeIdSprite(idActualSobreZero)));
    }
}

PaletasSprites.prototype.obtenerPosicionDesdeIdSprite = function (idSpriteSobreZero) {
    const y = Math.floor(idSpriteSobreZero / this.anchoImagenMedidoenSprites);//floor redondea hacia abajo 
    const x = idSpriteSobreZero % this.anchoImagenMedidoenSprites;// % entrega el resto de una divicion 
    return new Punto(x * this.anchoSprites, y * this.altoSprites);
};