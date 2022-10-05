// mostrar la pareja de números amigos menores a 1000

function mostrar() {
    for (var i = 0; i < 1000; i++) { // genero los num
        if (((i - 1) != i)) { // num diferentes
            let suma = 0;
            for (var j = 1; j < (i - 1); j++) { // 
                if ((i - 1) % j == 0) {
                    suma = suma + j;
                    if (suma < i) {
                        let suma1 = 0;
                        for (var k = 1; k < i; k++) {
                            if (i % k == 0) {
                                suma1 = suma1 + k;
                                if (suma1 < (i - 1)) {
                                    return (i, (i - 1));
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}

console.log(mostrar());