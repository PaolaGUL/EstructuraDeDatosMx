// Parte del vector con el inventario

// let codProducto = document.getElementById("codigoP");
// let nombreP = document.getElementById("nombreP");
// let cantidadP = document.getElementById("cantidadP");
// let costo = document.getElementById("costo");

// declarando el array producto

//let producto = [];
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

    function verificarA() {
        return document.getElementById('demo').innerHTML = "Se ha agregado correctamente";
    }

    function buscarM() {
        let prob = [];
        prob[0][0] = document.getElementById('codigoPro');
        let cont = 0;
        while (cont <= i) {
            if (producto[cont][0] == porb[0][0]) {
                function modificar() {
                    producto[cont][1] = document.getElementById('nombrePro');
                    producto[cont][2] = document.getElementById('cantidadPro');
                    producto[cont][3] = document.getElementById('costoPro');
                }
            } else {
                document.getElementById('demo').innerHTML = "No se encontro el producto";
            }
            cont++;
        }
        document.getElementById('demo1').innerHTML = "Se ha modificado correctamente";
    }

}