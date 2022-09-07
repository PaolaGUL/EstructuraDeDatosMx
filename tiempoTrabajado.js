/* Mostrar las horas, minutos y segundos trabajados de una persona
Siempre entra y sale el mismo día.
*/
let hrE = 08;
let minE = 30;
let segE = 20;

let hrS = 16;
let minS = 34;
let segS = 26;

function Contar() {
    var contarS = 0;
    var contarM = 0;
    var contarH = 0;
    while (segE <= segS) {
        contarS += 1;
        segE += 1;
    }
    while (minE <= minS) {
        contarM += 1;
        minE += 1;
    }
    while (hrE <= hrS) {
        contarH += 1;
        hrE += 1;
    }
    return ('El tiempo que trabajo durante el día es: ' + contarH + ':' + contarM + ':' + contarS);
}


var tiempo = Contar();

console.log(tiempo);