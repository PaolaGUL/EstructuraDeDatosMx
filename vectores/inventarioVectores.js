// Parte del vector con el inventario

// let codProducto = document.getElementById("codigoP");
// let nombreP = document.getElementById("nombreP");
// let cantidadP = document.getElementById("cantidadP");
// let costo = document.getElementById("costo");

// declarando el array producto

// let producto = [];
// producto[0][0] = document.getElementById('codigoP');
// producto[0][1] = document.getElementById('nombreP');
// producto[0][2] = document.getElementById('cantidadP');
// producto[0][3] = document.getElementById('costo');

function agregar() {
    let producto = [];
    let i = document.getElementById('ingresar');
    i.parseInt();
    for (var c = 0; c <= i; i++) {
        producto[c][0] = document.getElementById('codigoP');
        producto[c][1] = document.getElementById('nombreP');
        producto[c][2] = document.getElementById('cantidadP');
        producto[c][3] = document.getElementById('costo');
    }

}