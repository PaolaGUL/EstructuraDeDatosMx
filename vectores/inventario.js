window.onload = function() {
    //const agregar = document.getElementById('agregar');
    window.productos = [];

}

function agregar() {
    //let codigo = document.getElementById('codigoP').value;
    let codigo = document.getElementById('codigoP').value;
    let nombre = document.getElementById('nombreP').value;
    let cantidad = document.getElementById('cantidadP').value;
    let costo = document.getElementById('costoP').value;
    productos.push(codigo);
    productos.push(nombre);
    productos.push(cantidad);
    productos.push(costo);

    let salida = document.getElementById('salida');
    salida.innerHTML = '';
    let resultado = document.createElement('p');
    resultado.innerText = 'Se ha agregado correctamente';

    salida.appendChild(resultado);


    //document.getElementById('demo').innerHTML = "Se ha agregado correctamente";
    //document.write("Se ha agredado correctamente");
}
//agregar.onclick = agregarPro;

function modificar() {
    let prob = document.getElementById('codigoPro').value;
    if (codigo == prob) {
        productos.push(prob);
        let nombreb = document.getElementById('nombrePro').value;
        //nombre = nombreb;
        productos.push(nombreb);
        let cantidadb = document.getElementById('cantidadPro').value;
        //cantidad = cantidadb;
        productos.push(cantidadb);
        let costob = document.getElementById('costoPro').value;
        //costo = costob;
        productos.push(costob);

        let salidaM = document.getElementById('salidaM');
        salidaM.innerHTML = '';
        let resultadoM = document.createElement('p');
        resultadoM.innerText = 'Se ha modificado correctamente';

        salidaM.appendChild(resultadoM);
    }
    // prob[0] = document.getElementById('codigoPro');
    // prob[0].parseInt();
    // producto[0].parseInt();
    // if (producto[0] == porb[0]) {
    //     producto[1] = document.getElementById('nombrePro');
    //     producto[2] = document.getElementById('cantidadPro');
    //     producto[3] = document.getElementById('costoPro');
    //     //verificar();
    //     document.getElementById('demo2').innerHTML = "Se ha modificado correctamente";
    // } else {
    //     document.getElementById('demo2').innerHTML = "No se encontro el producto";
    // }
}

function eliminar() {
    let prob = document.getElementById('codigoPro');
    if (codigo == prob) {
        for (var i = 0; i <= productos.length(); i++) {
            productos[i] = '';
        }
        let salidaE = document.getElementById('salidaE');
        salidaE.innerHTML = '';
        let resultadoE = document.createElement('p');
        resultadoE.innerText = 'Se ha eliminado correctamente';

        salidaE.appendChild(resultadoE);
    }
}

function mostrar() {
    let salidaMo = document.getElementById('salidaMo').value;
    salidaMo.innerText = '';

    for (var i = 0; i <= 3; i++) {
        let resultadoMo = document.createElement('p');
        resultadoMo.innerText = productos[i];

        salidaMo.appendChild(resultadoMo);
    }

}

function inverso() {
    let salidaI = document.getElementById('salidaI').value;
    salidaI.innerText = '';

    for (var i = 3; i >= 0; i++) {
        let resultadoI = document.createElement('p');
        resultadoI.innerText = productos[i];

        salidaI.appendChild(resultadoI);
    }
}

function buscar() {
    let prob = document.getElementById('codigoPro').value;
    if (codigo == prob) {
        let salidaB = document.getElementById('salidaB').value;
        salidaB.innerText = '';

        let resultadoB = document.createElement('p');
        resultadoB.innerText = "Se encontro el producto";

        salidaB.appendChild(resultadob);
    }
}