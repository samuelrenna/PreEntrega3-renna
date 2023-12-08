// responsive funcion para obtener dimensiones de la ventana
//namespace espacio de nombres

const dimensiones = {
    ancho: window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth,
    alto: window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight,
    ladoTiles: 100,
    escala: 1,
    iniciar: function() {
        window.addEventListener("resize", function(eventoTamañoPantalla) {
            dimensiones.ancho = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
            dimensiones.alto = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
            inicio.recargaTiles();
        });
    },
    obtenerTilesHorizontales: function() {
        const ladoFinal = dimensiones.ladoTiles * dimensiones.escala;
        return Math.ceil(( dimensiones.ancho - ladoFinal) / ladoFinal); //recuerda que el math.ceil redondea hacia arriba
    },
    obtenerTilesVerticales: function() {
        const ladoFinal = dimensiones.ladoTiles * dimensiones.escala;
        return Math.ceil(( dimensiones.alto - ladoFinal) / ladoFinal);
    },
    obtenerTiles: function() {
        return dimensiones.obtenerTilesHorizontales() * dimensiones.obtenerTilesVerticales() ;
    }
};

