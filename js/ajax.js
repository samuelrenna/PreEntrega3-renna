/* archivo para cargar tiled del mapa */

const ajax = {
    cargarArchivo: function(ruta, manipularDatos) {
        const peticion = new XMLHttpRequest();
        peticion.onreadystatechange = function() {
            /* estados de la petición
            0 = (unsent) = no iniciado o no cargado
            1 = (opened) = conectado al servidor
            2 = (headers_received) = petición recibida
            3 = (loading) = cargando o procesando petición
            4 = (done) = listo o petición finalizada, respuesta lista
            */
        if(peticion.readyState === XMLHttpRequest.DONE ) {
            if (peticion.status === 200 ) {
                manipularDatos(JSON.parse(peticion.responseText));
                //console.log(JSON.parse(peticion.responseText));
            }else if (peticion.status === 400 ) {
                console.log("error");
            } else {
                console.log("error tipo loco");
            }
        }
        };

        peticion.open("GET", ruta , true);
        peticion.send();
    }
} 