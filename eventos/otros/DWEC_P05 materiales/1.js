window.onload = function () {
    let enlaces = document.getElementsByTagName('a');
    let textos = document.getElementsByTagName('p');

    function ocultar(evento) {
        evento.preventDefault();
        let enlace = evento.target;
        if (enlace.ocultar) {
            enlace.innerText = "Mostrar contenido";
            textos[evento.target.indice].style.display = "none";
        } else {
            enlace.innerText = "Ocultar contenido";
            textos[evento.target.indice].style.display = "block";
        }
        enlace.ocultar = !enlace.ocultar;
    }

    for (let i = 0; i < enlaces.length; i++) {
        enlaces[i].indice = i;
        enlaces[i].ocultar = true;
        enlaces[i].addEventListener('click', ocultar);
    }
}