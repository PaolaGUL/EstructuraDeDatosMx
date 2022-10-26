// Examen de Listas
// guardar un nodo de una lista enlazada simple, 
// cada nodo guardara un texto y un numero

// La clase lista enlazada debe tener los metodos:
/**
 * AgregarInicio(nuevo) pone el nodo al inicio de la lista
 */

class Nodo {
    constructor(text, num) {
        this.num = num + ' ' + text;
        this.next = null;
        //this.dato = num +' '+ text;
    }
}

class Lista {
    constructor() {
        this.primero = null;
        this.posicion = posicion;
        this.tamanio = 0;
    }
    agregar(nuevo) {
        if (this.primero == null)
            this.primero = nuevo;

        else {
            let temp = this.primero;
            while (temp.next != null)
                temp = temp.next;
            temp.next = nuevo;
        }
        this.tamanio++;
        //return (temp.next);
    }
    AgregarInicio(nuevo) {
            var cabeza = this.num;
            var siguiente = cabeza.next;
            // var sigui = siguiente.next;
            var tempi = null;
            if (cabeza != null) {
                tempi = siguiente;
                siguiente = cabeza;
                this.num = nuevo;
            }
            this.tamanio++;
            return cabeza;
        }
        /** Extraer(posicion), recibira la posicion y va a eliminar
         * ese nodo, devolviendolo, consider que el primer
         * elemento esta en la posicion 1, en caso de que la
         * posicion no exista, deberá devolver null
         */
    Extraer(posicion) {
            if (posicion < 0 || posicion > this.tamanio) {
                return null;
            } else {
                let actual = this.num;
                let antes = null;
                for (let i = 1; i <= posicion; i++) {
                    antes = actual;
                    actual = actual.next;
                }
                antes.next = actual.next;
                this.tamanio--;
                return antes;
            }
        }
        /**Intercambia(dato1, dato2) va a encontrar los nodos
         * que contienen esos datos, en caso de existir,
         * deberá intercambiarlos dentro de la lista
         * (no modificar el dato del nodo), lo hace con la 
         * primer aparicion de cada dato buscado
         */
    Intercambia(dato1, dato2) {
            let actual = this.num;
            let antes = null;
            let temp = null;

            for (let i = 1; i <= this.tamanio; i++) {
                antes = actual;
                actual = actual.next;
                if (antes != null) {
                    if (antes === dato1) {
                        antes = dato2;
                        actual = actual;
                    }
                    if (antes === dato2) {
                        antes = dato1;
                        actual = actual;
                    }
                }
            }
            return antes;
        }
        /**EliminarDeAtras(dato) elimina la ultima ocurrencia
         * que exista de el dato, es decir, hace la eliminacion
         * pero de atras hacia adelante.
         */
    EliminarDeAtras(dato) {
        let actual = this.num;
        let despues = actual.next;

        for (let i = 1; i <= this.tamanio; i++) {
            let cont = 0;
            if (dato === actual) {
                cont++;
                if (i === this.tamanio) {
                    actual = despues;
                    despues = null;
                } else {
                    actual = despues;
                    despues = actual.next;
                }
            }
        }
        return actual;
    }
    Imprimir() {
        let actual = null;
        let despues = actual.next;

        for (let i = 1; i <= this.tamanio; i++) {
            actual = despues;
            despues = actual.next;
            return actual;
        }
    }
}

let examen = new Lista();
let num = new Nodo(leche, 1);
datos.agregar(num);
num = new Nodo(pan, 2);
datos.agregar(num);
num = new Nodo(refresco, 3);
datos.agregar(num);
num = new Nodo(carne, 4);
datos.agregar(num);
console.log(examen.Imprimir());
num = new Nodo(pollo, 5);
datos.agregarInicio(num);
console.log(examen.Imprimir());