//ctrl + f5 limpia cache
//aca ejecutaremos todo 
//namespace espacio de nombres
// aca va todo lo que vamos a iniciar o sea para que funcione

/*const inicio = {
    iniciarjuego: function(){
        console.log("Juego iniciado");
        ajax.cargarArchivo("maps/desierto48.json")
        teclado.iniciar();
        dimensiones.iniciar();
        mando.iniciar()
        inicio.recargaTiles();
        buclePrincipal.iterar();
    },
    // en este for anidado es mejor usar let ya que con const nos rompio el codigo pero solo en la declaracion de X Y
    recargaTiles: function() {
        document.getElementById("juego").innerHTML = "";
        for ( let y = 0; y < dimensiones.obtenerTilesVerticales(); y++) {
            for( let x = 0; x < dimensiones.obtenerTilesHorizontales(); x++) {
                const r = new Rectangulo(x * dimensiones.ladoTiles, y * dimensiones.ladoTiles, dimensiones.ladoTiles, dimensiones.ladoTiles);
            }
        }

    }*/
const inicio ={ 
    iniciadores: [
        maquinaEstados.iniciar(),
        teclado.iniciar (),
        mando.iniciar (),
        buclePrincipal.iterar()
    ],
    iniciarjuego: function() {
        inicio.encadenarInicios(this.iniciadores.shift()); // se cambio "inicio.iniciadores.shift()" a "this.iniciadores.shift()"
        //inicio.encadenarInicios(inicio.iniciadores.shift());//shift se encargara de borrar el contenido del array iniciadores despues de usar cada funcion
    },
    encadenarInicios: function (iniciador) {
        if(iniciador) {
            iniciador(() => inicio.encadenarInicios(this.iniciadores.shift())); // se cambio // Cambiar "iniciadores.shift()" a "this.iniciadores.shift()"
            //iniciador (() => inicio.encadenarInicios(iniciadores.shift()));
        }
    }
};

document.addEventListener("DOMContentLoaded", function(){
    inicio.iniciarjuego();
},false );