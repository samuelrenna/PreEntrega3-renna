const teclado = {
    teclas: new Array(),
    iniciar: function () {
        document.onkeydown = teclado.guardarTecla;
    },
    guardarTecla: function(e) {
teclado.teclas.push(e.key);
console.log(e.key);
    },
    teclaPulsada: function(codigoTecla){
        return(teclado.teclas.indexOf(codigoTecla) !== -1) ? true : false; //si devuelve -1 HAY UN ERROR (EL ? EVALUA LA CONDICION DEL RETURN)
    },
    reiniciar: function() {
        teclado.teclas = new Array();
    }
}

// recordar que todas las funciones hay que enviarlas a INICIAR si no no va a funcionar