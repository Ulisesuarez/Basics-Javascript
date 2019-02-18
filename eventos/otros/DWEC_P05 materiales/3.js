window.onload = function () {
    let hijos = document.getElementById('wrapper').childNodes;

    for (let i = 0; i < hijos.length; i++) {
        hijos[i].addEventListener('mouseenter', function (event) {
            document.getElementById('footer').innerText = "This is the Footer - Mouse over: " +
                event.target.id;
        });
        hijos[i].addEventListener('mouseleave', function (event) {
            document.getElementById('footer').innerText = "This is the Footer";
        });
        hijos[i].addEventListener('click', function (event) {
            console.log (event.target);
            alert(hijos[i].id);
        });
    }
}