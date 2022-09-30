// mostrar la pareja de números amigos menores a 1000

function mostrar() {
    for (var i = 0; i < 1000; i++) { // genero los num
        if (((i - 1) != i)) { // num diferentes
            let suma = 0;
            for (var j = 1; j < i; j++) { // 
                if ((i - 1) % j == 0) {
                    suma = suma + j;
                }
            }
        }
    }
}