const agregar = document.getElementById('agregar');
let producto = [];

function agregarPro() {
    producto[0] = document.getElementById('codigoP');
    producto[1] = document.getElementById('nombreP');
    producto[2] = document.getElementById('cantidadP');
    producto[3] = document.getElementById('costo');
    //document.getElementById('demo').innerHTML = "Se ha agregado correctamente";
    document.write("Se ha agredado correctamente");
}
agregar.onclick = agregarPro;

function modificar() {
    let prob = [];
    prob[0] = document.getElementById('codigoPro');
    prob[0].parseInt();
    producto[0].parseInt();
    if (producto[0] == porb[0]) {
        producto[1] = document.getElementById('nombrePro');
        producto[2] = document.getElementById('cantidadPro');
        producto[3] = document.getElementById('costoPro');
        //verificar();
        document.getElementById('demo2').innerHTML = "Se ha modificado correctamente";
    } else {
        document.getElementById('demo2').innerHTML = "No se encontro el producto";
    }
}

function eliminar() {
    let prob = [];
    prob[0] = document.getElementById('codigoPro');
    prob[0].parseInt();
    producto[0].parseInt();
    if (producto[0] == prob[0]) {
        producto[1] = '';
        producto[2] = '';
        producto[3] = '';
        document.getElementById('demo2').innerHTML = "Se ha eliminado correctamente";
    } else {
        document.getElementById('demo2').innerHTML = "No se encontro el producto";
    }
}