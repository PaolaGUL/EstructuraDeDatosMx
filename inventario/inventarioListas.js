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