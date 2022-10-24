const inventario = document.createElement('div');

// Agregar, buscar, elminiar, insertar, listar, listar inverso

const form = document.createElement('form');

let esp = document.createElement('br');
let esp1 = document.createElement('br');

form.append(esp);
form.append(esp1);

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

//

inventario.append(form);

contenido.append(inventario);