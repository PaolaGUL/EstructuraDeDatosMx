// Resolver el siguiente problema para encontrar los numeros primos menores a 
//1000 usando el metodo de la coladera de eratostenes.
//Resolver el siguiente problema para encontrar los numeros primos menores a 
// 1000 usando el metodo de la coladera de eratostenes.

//var n = 10;
let numeros = new Array();
for (var i = 0; i <= 1000; i++) {
    numeros[i] = 1;
    if (i <= 2) {
        var primos = new Array();
        primos[i] = i;
        console.log(primos[i]);
    }
    //console.log(numeros[i]);
}





//console.log('Hola mundo');