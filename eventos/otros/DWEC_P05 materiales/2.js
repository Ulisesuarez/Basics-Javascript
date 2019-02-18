window.onload = function () {
    let original = document.getElementById('info').cloneNode(true);
    let infoP = document.getElementsByTagName('p');
    document.body.addEventListener('mousemove', function (event) {
        document.body.replaceChild(original, document.getElementById('info'));
        document.getElementById('info').style.backgroundColor = 'white';
        infoP[0].innerHTML = "Navegador [" + event.clientX + "," + event.clientY + "]";
        infoP[1].innerHTML = "Página [" + event.pageX + "," + event.pageY + "]";
    });
    document.body.addEventListener('mousedown', function (event) {
        document.body.replaceChild(original, document.getElementById('info'));
        document.getElementById('info').style.backgroundColor = 'yellow';
        let textoIzquierdo = event.button === 0 ? "Sí" : "No";
        let textoDerecho = event.button === 2 ? "Sí" : "No";
        infoP[2].innerHTML = "Click izquierdo " + textoIzquierdo;
        infoP[3].innerHTML = "Click derecho " + textoDerecho;
    });
    document.body.addEventListener('keydown', function (event) {
        let padre = document.createElement('div');
        let titulo = document.createElement('h1');
        titulo.innerText = "Tecla";
        let caracter = document.createElement("p");
        let codigo = document.createElement("p");
        caracter.innerText = "Carcácter: " + event.key;
        codigo.innerText = "Código: " + event.keyCode;
        padre.appendChild(titulo);
        padre.appendChild(caracter);
        padre.appendChild(codigo);
        padre.style.backgroundColor = "blue";
        padre.id = "info";
        document.body.replaceChild(padre, document.getElementById('info'));
    })
}