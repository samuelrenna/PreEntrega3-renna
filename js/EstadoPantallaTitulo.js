function EstadoPantallaTitulo() {
    this.rutaImagenTitulo = "img/titulo.png";
    this.idHTML = "pantalla-titulo";
    this.anchoImagen = "500";
    this.altoImagen = "300";

    this.movimientoY = 0;
    this.framesAnimacion = 0;

    // input y el boton del nombre de usuario
    this.inputNombre = document.createElement('input');
    this.inputNombre.type = 'text';
    this.inputNombre.placeholder = 'Ingresa tu nombre';
    this.inputNombre.style.padding = '10px';
    this.inputNombre.style.marginBottom = '10px';

    this.botonComenzar = document.createElement('button');
    this.botonComenzar.textContent = 'Comenzar';
    this.botonComenzar.style.padding = '10px';
    this.botonComenzar.style.backgroundColor = '#3498db';
    this.botonComenzar.style.color = 'white';
    this.botonComenzar.style.border = 'none';
    this.botonComenzar.style.cursor = 'pointer';

    // lo declaramos en const para poder usarlo en la validacion y para evitar problemas de contexto y errores
    const self = this;

    // estilos para enviar al documento
    const pantallaTituloElement = document.getElementById(this.idHTML);
    pantallaTituloElement.appendChild(this.inputNombre);
    pantallaTituloElement.appendChild(this.botonComenzar);

    pantallaTituloElement.style.position = "absolute";
    pantallaTituloElement.style.width = this.anchoImagen + "px";
    pantallaTituloElement.style.height = this.altoImagen + "px";
    pantallaTituloElement.style.background = "url('" + this.rutaImagenTitulo + "')";
    pantallaTituloElement.style.backgroundClip = "border-box";
    pantallaTituloElement.style.outline = "1px solid transparent";
    pantallaTituloElement.style.transform = 'translate3d(' + (dimensiones.ancho / 2 - this.anchoImagen / 2) + 'px, ' + (dimensiones.alto / 2 - this.altoImagen / 2) + 'px, 0)';

    document.getElementsByTagName("body")[0].style.overflow = "hidden";
    document.getElementsByTagName("body")[0].style.backgroundColor = "black";


    // click en la pantalla para agregar nombre de usuario en localstorage 
    pantallaTituloElement.onclick = function(event) {
        // verifica si el click se hizo en el input o el boton
        if (event.target === self.inputNombre || event.target === self.botonComenzar) {
            return;
        }

        pantallaTituloElement.style.display = "none";

        // sirve para evitar problemas como que le doy a cualquier parte o selecciono el input y pasa de pantalla
        pantallaTituloElement.onclick = null;

        maquinaEstados.cambiarEstado(listadoEstados.MAPAMUNDI);
    }

    // evento al botón Comenzar
    this.botonComenzar.addEventListener('click', () => {
        const nombreUsuario = this.inputNombre.value;

        // el nombre va al localstorage
        localStorage.setItem('nombreUsuario', nombreUsuario);

        // Cambiamos el estado del mapa del mundo
        maquinaEstados.cambiarEstado(listadoEstados.MAPAMUNDI);
    });
}
// no se me dio bien lo de la animacion debo revisarlo mejor 
EstadoPantallaTitulo.prototype.actualizar = function(registroTemporal) {
    if(this.framesAnimacion < 30) {
        this.movimientoY++;
    }
    if(this.framesAnimacion >= 30 && this.framesAnimacion < 90) {
        this.movimientoY--;
    }
    if(this.framesAnimacion >= 90 && this.framesAnimacion < 120) {
        this.movimientoY++;
    }

    this.framesAnimacion++;

    if(this.framesAnimacion >=120) {
        this.framesAnimacion = 0;
        this.movimientoY = 0;
    }
}

EstadoPantallaTitulo.prototype.dibujar = function() {
    document.getElementById(this.idHTML).style.transform = 'translate3d(' + (dimensiones.ancho / 2 - this.anchoImagen / 2) + 'px, ' + (dimensiones.alto / 2 - this.altoImagen / 2 + this.movimientoY) + 'px, 0)';
}
