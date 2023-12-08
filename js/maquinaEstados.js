const maquinaEstados = {
    estadoActual :  null,
    iniciar : function() {
        // Cambié "maquinaEstados" por "this" para hacer referencia al objeto actual
        //cambio!!! cambie mapamundi por pantalla de inicio para mostrar la pantalla del titulo
        this.cambiarEstado(listadoEstados.PANTALLA_TITULO);
        //maquinaEstados.cambiarEstado(listadoEstados.MAPAMUNDI);
    },
    cambiarEstado: function (nuevoEstado) {
        switch (nuevoEstado) {
            case listadoEstados.CARGANDO:
                break;
            case listadoEstados.MENU_INICIAL:
                break;
            case listadoEstados.MAPAMUNDI:
                    this.estadoActual = new EstadoMapamundi(listadoEstados.MAPAMUNDI);
                    //maquinaEstados.estadoActual = new EstadoMapamundi(listadoEstados.MAPAMUNDI);
                break;
            case listadoEstados.NIVEL:
                break;
                case listadoEstados.PANTALLA_TITULO://agregamos nuevo case de la pantalla del titulo 
				console.log("iniciando pantalla");
				maquinaEstados.estadoActual = new EstadoPantallaTitulo();
				break;
        }
    },
    actualizar: function() {
        this.estadoActual.actualizar();
        //maquinaEstados.estadoActual.actualizar();

    },
    dibujar: function() {
        this.estadoActual.dibujar();
        //maquinaEstados.estadoActual.dibujar();

    }

}

