/**1. Crear un ciclo que llene con aleatorios
 * entre 21 y 80 un vector de 10
 */
for (var j = 1; j < 10; j++) {
    for (var i = 0; i < 10; i++) {
        let aleatorios = [];
        if (j >= 21 && j <= 80) {
            aleatorios[i] = j;
        }
        console.log(aleatorios[i]);
    }
}

/**2. Crear un función que reciba un vector 
 * y devuelva cuantos números impares hay
 */
var tamanio = 3;
var vector = [3, 6, 7];

function num(vector) {
    let impar = 0;
    for (let i = 0; i < tamanio; i++) {
        if ((vector[i] % 2) != 0) {
            impar++;
        }
    }
    return impar;
}

let cantidad = num(vector);
console.log('La cantidad de números impares en el vector es:' + cantidad);

/**3. Crear una función que reciba un vector con datos
 * calcule el promedio y diga cuantos numeros son iguales
 * al promedio
 */
let tam = 3;
let datos = [31, 4, 9];

function promedio(datos) {
    let suma = 0;
    var prome = 0;
    for (var i = 0; i < tam; i++) {
        suma = suma + datos[i];
    }
    prome = suma / tam;
    var cantP = 0;
    for (var i = 0; i < tam; i++) {
        if ((datos[i]) == prome) {
            cantP++;
        }
    }
    return ('El promedio de todos los datos es: ' + prome + " y la cantidad de números iguales al promedio es: " + cantP);
}
console.log(promedio(datos));
/**4. Crear una función que reciba dos vectores que pueden
 * tener tamaños diferentes y muestre en pantalla
 * cuantos valores hay en común.
 */
var tam1 = 3;
var tam2 = 4;
let vec1 = [tam1];
let vec2 = [tam2];

function iguales(vec1, vec2) {

}