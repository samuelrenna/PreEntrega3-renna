function EstadoMapamundi (idEstado) {
    let that = this;
    this.mapaListo = false ;
    this.mapa = null ;
    ajax.cargarArchivo("maps/desierto48.json", function(objetoJSON){
        that.mapa = new Mapa(objetoJSON);
        that.mapaListo = true;
        console.log("mapa cargado por AJAX");
    });

}
EstadoMapamundi.prototype.actualizar = function() {
    if (!this.mapaListo) {
        return;
    }
    this.mapa.actualizar();
}

EstadoMapamundi.prototype.dibujar = function() {
    if (!this.mapaListo) {
        return;
    }
    this.mapa.dibujar();
}