window.onload = function () {

    function generarPapeletas(){
        let papeletas = document.getElementsByClassName('papeleta');
        for (let i = 0; i < papeletas.length; i++) {
            let contenedor = document.createElement("SPAN");
            let numero = Math.ceil(Math.random() * 99).toString();
            let contenido = document.createTextNode(numero.padStart(2, "0"));
            contenedor.className = "numero";
            contenedor.style.fontSize = "90px";
            contenedor.style.padding = "30px";
            contenedor.style.margin = "30px";
            contenedor.style.color = "blue";
            contenedor.style.border = "1px solid black";
            contenedor.style.backgroundColor = "#F5F5DC";
            contenedor.appendChild(contenido);
            if (papeletas[i].childNodes.length === 0){
                papeletas[i].appendChild(contenedor);
            } else {
                papeletas[i].replaceChild(contenedor,papeletas[i].childNodes[0]);
            }
            

        }
        document.getElementById('sorteo').disabled = false;
    }
    function sorteo(){
        let contenedor = document.createElement("P");
        let ganador = Math.ceil(Math.random() * 99).toString().padStart(2, "0");
        let contenido = document.createTextNode(ganador);
        contenedor.style.fontSize = "90px";
        contenedor.style.padding = "30px";
        contenedor.style.margin = "30px";
        contenedor.style.border = "1px solid black";
        contenedor.style.backgroundColor = "#F5F5DC";
        contenedor.appendChild(contenido);
        let newDiv = document.createElement("DIV");
        newDiv.appendChild(contenedor);
        newDiv.style.maxWidth = "236px";
        newDiv.id = "resultado";
        let old = document.getElementById("resultado");
        if (old) {
            document.body.replaceChild(newDiv, old);
        } else{
            document.body.insertAdjacentElement('beforeend', newDiv);
        }
        let numeros = document.getElementsByClassName('numero');
        for (let i = 0; i < numeros.length; i++) {
            if (numeros[i].innerText === ganador){
                numeros[i].style.color = "green";
            } else {
                numeros[i].style.color = "red";
            }
        }
        document.getElementById('sorteo').disabled = true;
    }
    document.getElementById('generar').addEventListener('click',generarPapeletas);
    document.getElementById('sorteo').addEventListener('click', sorteo);
};

