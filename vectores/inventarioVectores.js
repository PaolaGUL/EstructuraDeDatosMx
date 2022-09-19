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
        producto[c][0] = document.getElementById('codigoP').value;
        producto[c][1] = document.getElementById('nombreP').value;
        producto[c][2] = document.getElementById('cantidadP').value;
        producto[c][3] = document.getElementById('costo').value;

        function buscarM() {
            let prob = [];
            prob[0][0] = document.getElementById('codigoPro').value;
            let cont = 0;
            while (cont <= i) {
                if (producto[cont][0] == porb[0][0]) {
                    function modificar() {
                        producto[cont][1] = document.getElementById('nombrePro').value;
                        producto[cont][2] = document.getElementById('cantidadPro').value;
                        producto[cont][3] = document.getElementById('costoPro').value;
                        document.writeln('Se ha modificado correctamente');
                    }
                }
            }
        }
    }
    return ('Se agrego correctamente');
}