// // Resolver el siguiente problema para encontrar los numeros primos menores a 
// 1000 usando el metodo de la coladera de eratostenes.
limite = 1000;
var primos = [];
var numeros = Array();
var superLimite = Math.sqrt(limite);

for (var i = 0; i < limite; i++) { // llenando el arreglo en 1
    numeros.push(1);
    console.log(numeros[i]);
}

for (var i = 2; i < superLimite; i++) {
    if (numeros[i]) {
        for (var j = i * i; j < limite; j += i) {
            numeros[j] = 0;
            //console.log(numeros[j]);
        }
    }
}

// for (var i = 2; i < limite; i++) {
//     if (numeros[i]) {
//         primos.push(i);
//     }
//     console.log(primos[i]);
// }