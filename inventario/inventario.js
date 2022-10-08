const inventario = document.createElement('div');

// añadir al vector los productos
// ordenar lo productos en el vector
// eliminar por codigo => devolver si existe o null
// buscar por codigo
//recuperar todos lista
// recuperar todos lista inversa

const form = document.createElement('form');

// Código
let lcodigo = document.createElement('label');
lcodigo.innerText = 'Código: ';
let codigo = document.createElement('input');
codigo.id = 'codigoP';

form.append(lcodigo);
form.append(codigo);

let espacio = document.createElement('br');
let espacio1 = document.createElement('br');

form.append(espacio);
form.append(espacio1);

// Nombre
let lnombre = document.createElement('label');
lnombre.innerText = 'Nombre: ';
let nombre = document.createElement('input');
nombre.id = 'nombreP';

form.append(lnombre);
form.append(nombre);

const espacio2 = document.createElement('br');
const espacio3 = document.createElement('br');

form.append(espacio2);
form.append(espacio3);
//Cantidad
let lcantidad = document.createElement('label');
lcantidad.innerText = 'Cantidad: ';
let cantidad = document.createElement('input');
cantidad.id = 'cantP';

form.append(lcantidad);
form.append(cantidad);

let espacio4 = document.createElement('br');
let espacio5 = document.createElement('br');


form.append(espacio4);
form.append(espacio5);

// costo
let lcosto = document.createElement('label');
lcosto.innerText = 'Costo: ';
let costo = document.createElement('input');
costo.id = 'costoP';

form.append(lcosto);
form.append(costo);

let espacio6 = document.createElement('br');
let espacio7 = document.createElement('br');

form.append(espacio6);
form.append(espacio7);

const botones = document.createElement('div');

//Boton de Agregar
const botonA = document.createElement('div');
botonA.id = 'contAgregar';
let btnAgregar = document.createElement('button');
btnAgregar.innerText = 'Agregar';
btnAgregar.id = 'agregar';
botonA.append(btnAgregar);

//Boton de eliminar
const botonE = document.createElement('div');
botonE.id = 'contEliminar';
let btnEliminar = document.createElement('button');
btnEliminar.innerText = 'Eliminar';
btnEliminar.id = 'eliminar';
botonE.append(btnEliminar);

//Buscar Producto
const botonB = document.createElement('div');
botonB.id = 'contBuscar';
let btnBuscar = document.createElement('button');
btnBuscar.innerText = 'Buscar';
btnBuscar.id = 'buscar';
botonB.append(btnBuscar);

// Recuperar Productos Lista Ordenada
const botonRLO = document.createElement('div');
botonRLO.id = 'contLista';
let btnRecuperar = document.createElement('button');
btnRecuperar.innerText = 'Recuperar Lista';
btnRecuperar.id = 'recuperar';
botonRLO.append(btnRecuperar);

// Recuperar Productos Lista Inversa
const botonRLI = document.createElement('div');
botonRLI.id = 'contListaInversa';
let btnRecuperarInversa = document.createElement('button');
btnRecuperarInversa.innerText = 'Recuperar Lista Inversa';
btnRecuperarInversa.id = 'recuperarI';
botonRLI.append(btnRecuperarInversa);

botones.append(botonA);
botones.append(botonE);
botones.append(botonB);
botones.append(botonRLO);
botones.append(botonRLI);


form.append(botones);

inventario.append(form);

const contenido = document.getElementById('contenido');

contenido.append(inventario);
//donde tengo los productos, por el evento en lo botones
let codigoP = document.getElementById('codigoP');
let nombreP = document.getElementById('nombreP');
let cantP = document.getElementById('cantP');
let costoP = document.getElementById('costoP');

const productosI = [codigoP, nombreP, cantP, costoP];

function agregarP() {
    productosI.push(codigoP, nombreP, cantP, costoP);
    // let resultado = document.createElement('p');
    // resultado.innerText = 'Se ha agregado correctamente';
    if (productosI.length = !0) {
        //botonA.append(resultado);
        let resultado = document.writeln('Se ha agregado corretamente');
    }
    return resultado;
}
agregar.addEventListenner('click', agregarP());

function ordenar(codigoP) {
    for (let i = 0; i < productosI.length; i = +4) {
        if (codigoP > 0) {
            if ((codigoP - 1) < codigoP) {
                productosI[i + 4] = codigoP;
            }
        } else {
            productosI[0] = codigoP;
        }
    }
}

function buscar(codigoP) {
    ordenar();
    let mitad = productosI.length / 2;
    if (codigoP < productosI.length) {
        if (productosI[mitad] == codigoP) {
            let resultado = document.createElement('p');
            resultado.innerText = 'Se encontro el producto' + productosI[mitad + 1];
        } else {
            if (productosI[mitad] < codigoP) {
                // se va hacia la izquierda
                if (productosI[mitad + 4] == codigoP) {
                    let resultado = document.createElement('p');
                    resultado.innerText = 'Se encontro el producto' + productosI[mitad + 5];
                }

            } else {
                // se va a la derecha
                if (productosI[mitad] > codigoP) {
                    let resultado = document.createElement('p');
                    resultado.innerText = 'Se encontro el producto' + productosI[mitad - 5];
                }
            }
        }
    }
}

function listar() {

}

function linstarInverso() {

}
/*function eliminar(codigoP) {
    let resultado = document.createElement('p');
    for (let i = 0; i <= productosI.length; i += 4) {
        if (productosI[i] == codigoP) {
            productosI[i] = '';
            productosI[i + 1] = '';
            productosI[i + 2] = '';
            productosI[i + 3] = '';
            resultado.innerText = 'Si existe';
            botonE.append(resultado);
        } else {
            resultado.innerText = 'null';
            botonE.append(resultado);
        }
    }
}*/
//eliminar.addEventListenner('click', eliminar());