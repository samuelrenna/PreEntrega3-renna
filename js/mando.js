const mando = {
    objeto: null, //se declara vacio por que se va a rellenar con el mando
    eventosDisponibles: `ongamepadconnected` in window, // preguntamos si hay conectado algun mando y nos devuelve true o false 
    conectado: false ,
    iniciar: function() {
        if(mando.eventosDisponibles) {
            window.addEventListener("gamepadconnected", mando.conectar);
            window.addEventListener("gamepaddisconnected", mando.desconectar);
        }else {
            mando.actualizar();
        }
    },
conectar: function(evento) {
    mando.objeto = evento.gamepad;
    mando.identificar();
},

desconectar: function(evento) {
    console.log("mando desconectado del indice %d: %s.", evento.gamepad.index, evento.gamepad.id );
    //parametros del mando %d (evento.gamepad.index) %s (evento.gamepad.id) seria la ubicacion de donde esta conectado el mando.

},
actualizar: function(){
    if (!mando.eventosDisponibles) {
    mandos = null;
// try catch funcion para hacer codigo con riesgo que pueda romper el codigo, se hace aparte para que no afecte al codigo general
        try {
            mandos = navigator.getGamepads ? navigator.getGamepads() : (navigator.webkitGetGamepads ? navigator.webkitGetGamepad : [] ) ;
            mando.objeto = mandos[0];
        if(!mando.conectado){
            mando.conectado = true;
            mando.identificar();
        }
        } catch(error){
            console.log(error.message);
    }
}
    if (!mando.objeto) {
        return;
}
    if(mando.botonPulsado(mando.objeto.buttons[0])) {
        console.log("mando: A");
}

},
botonPulsado: function(boton) {
    if (typeof(boton)== "object"){
        return boton.pressed;
    }
    return boton == 1.0;
},

identificar: function() {
    console.log("mando conectado en el indice %d:  %s.  %d ejes.",
    mando.objeto.index, mando.objeto.id, mando.objeto.buttons.length, mando.objeto.axes.length);
}

};