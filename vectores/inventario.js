window.onload = function() {
    //const agregar = document.getElementById('agregar');
    window.productos = [];
}

function agregar() {
    let codigo = document.getElementById('codigoP').value;
    productos.push(codigo);
    let nombre = document.getElementById('nombreP').value;
    productos.push(nombre);
    let cantidad = document.getElementById('cantidadP').value;
    productos.push(cantidad);
    let costo = document.getElementById('costoP').value;
    productos.push(costo);

    let salida = document.getElementById('salida');
    salida.innerHTML = '';
    let resultado = document.createElement('p');
    resultado.innerText = 'Se ha agregado correctamente';

    salida.appendChild(resultado);


    //document.getElementById('demo').innerHTML = "Se ha agregado correctamente";
    document.write("Se ha agredado correctamente");
}
agregar.onclick = agregarPro;

function modificar() {
    agregarPro();
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

function mostrar() {
    var p = document.createElement('p');
    p = document.write(producto[0] + ' ' + producto[1] + ' ' + producto[2] + ' ' + producto[3]);
    p.appendChild();

}

function inverso() {
    document.writeln(producto[3] + ' ' + producto[2] + ' ' + producto[1] + ' ' + producto[0]);
}