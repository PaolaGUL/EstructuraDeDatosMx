let producto = [];

function agregar() {
    producto[0] = document.getElementById('codigoP');
    producto[1] = document.getElementById('nombreP');
    producto[2] = document.getElementById('cantidadP');
    producto[3] = document.getElementById('costo');
    return document.getElementById('demo').innerHTML = "Se ha agregado correctamente";
}