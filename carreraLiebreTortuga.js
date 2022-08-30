// Primero mostrar quien gano la carrera
// Mostrar posicion en cada avance

class Tortuga {
    constructor(xi) {
        this.xi = xi;
    }

    get posicion() {
        return this.calPosicionFinal();
    }

    calPosicionFinal() {
        this.xf = this.xi;
        // avanza primero 50% +3 => 50% = 50 pasos +3 pasos = 53 pasos
        while (this.xf <= 100) {
            var cont = 0;
            this.xf = this.xf + 53;
            cont += 1;
            if (this.xf < 100) {
                this.xf = this.xf + 14;
                cont += 1;
                while (cont < 3) {
                    this.xf = this.xf + 31;
                    cont += 1;
                }
            }
        }
        return this.xf;
    }
}

class Liebre {
    constructor(xi) {
        this.xi = xi;
    }

    get posicion() {
        return this.calPosicionFinal();
    }

    calPosicionFinal() {
        this.xf = this.xi;
        while (this.xf <= 100) {
            var cont = 1;
            this.xf = this.xf + 20;
            cont += 1;
            if (this.xf < 100) {
                this.xf = this.xf + 29;
                cont += 1;
                this.xf = this.xf - 2;
                cont += 1;
                this.xf = this.xf + 36;
                cont += 1;
                while (cont < 6) {
                    this.xf = this.xf + 13;
                }
            }
        }
        return this.xf;
    }
}

const parti1 = new Tortuga(0);

const parti2 = new Liebre(0);

if (parti1.posicion == parti2.posicion) {
    console.log("La posicion de la Tortuga es: " + parti1.posicion + " y la posicion de la Liebre es: " + parti2.posicion + "Empataron");
} else if (parti1.posicion < parti2.posicion) {
    console.log("La posicion de la Liebre es:" + parti2.posicion + ". Gano la Liebre");
} else {
    console.log("La posicion de la Tortuga es: " + parti1.posicion + ". Gano la Tortuga");
}