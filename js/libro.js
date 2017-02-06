var nombre;
var tipo;
var editorial;
var autor;

function getData() {
    nombre = document.getElementById('Name').value;
    tipo = document.getElementById('Type').value;
    editorial = document.getElementById('Editorial').value;
    autor = document.getElementById('Autor').value;
}

function addElement() {
    getData();
    if ((nombre === null) || (nombre === "") ||
        (tipo === null) || (tipo === "") ||
        (editorial === null) || (editorial === "") ||
        (autor === null) || (autor === "")) {
        alert("Error uno o mas campos se encuentran vacios");

        
    } else {
        var table = document.getElementById('tableBiblioteca');

        var row = table.insertRow(1);
        var cel1 = row.insertCell(0);
        var cel2 = row.insertCell(1);
        var cel3 = row.insertCell(2);
        var cel4 = row.insertCell(3);

        cel1.innerHTML = nombre;
        cel2.innerHTML = tipo;
        cel3.innerHTML = editorial;
        cel4.innerHTML = autor;

        borrarElement();
    }

}

function borrarElement() {
    document.getElementById('Name').value = "";
    document.getElementById('Type').value = "";
    document.getElementById('Editorial').value = "";
    document.getElementById('Autor').value = "";
}

function init() {
    document.getElementById('addLibro').onclick = function() {
        addElement();
    };

    document.getElementById('delLibro').onclick = function() {
        delElement();
    };
}

window.onload = init;
