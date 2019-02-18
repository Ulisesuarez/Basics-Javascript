window.onload = function () {
    let ancho = window.innerWidth;
    let alto = window.innerHeight;
    document.body.addEventListener('click', function (evento) {
        let info = [];
        if (evento.clientY < alto / 2) {
            info.push("Arriba");
        } else {
            info.push("Abajo");
        }
        if (evento.clientX > ancho / 2) {
            info.push("Derecha");
        } else {
            info.push("Izquierda");
        }
        alert(info.join(" - "));
    });
    let linea = document.createElement('hr');
    linea.style.position = "absolute";
    linea.style.top = alto / 2 + "px";
    linea.style.width = "100%";
    linea.style.height = "1px";
    document.body.appendChild(linea);
    let lineav = document.createElement('div');
    lineav.style.borderLeft = "1px solid black";
    lineav.style.position = "absolute";
    lineav.style.top = "0";
    lineav.style.left = ancho / 2 + "px";
    lineav.style.height = "100%";
    lineav.style.width = "1px";
    document.body.appendChild(lineav);

}