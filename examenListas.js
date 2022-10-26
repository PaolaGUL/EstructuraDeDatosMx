// Examen de Listas
// guardar un nodo de una lista enlazada simple, 
// cada nodo guardara un texto y un numero

// La clase lista enlazada debe tener los metodos:
/**
 * AgregarInicio(nuevo) pone el nodo al inicio de la lista
 */

class Nodo {
    constructor(num, text) {
        this.num = num;
        this.tex = text;
        this.next = null;
        //this.nuevo = num + ' ' + text;
    }
}

class Lista {
    constructor() {
        this.primero = null;
        // this.posicion = posicion;
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
            var cabeza = this.primero;
            var siguiente = cabeza.next;
            // var sigui = siguiente.next;
            var tempi = null;
            if (cabeza != null) {
                tempi = siguiente;
                siguiente = cabeza;
                this.primero = nuevo;
            }
            this.tamanio++;
            return this.primero;
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
                let actual = this.primero;
                let antes = null;
                for (let i = 1; i <= posicion; i++) {
                    if (i === posicion) {
                        antes = actual;
                        actual = antes.next;
                    } else {
                        antes = actual;
                        actual = actual.next;
                    }
                }
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
            let actual = this.primero;
            let siguiente = actual.next;
            let antes = null;
            //let temp = null;

            for (let i = 1; i <= this.tamanio; i++) {
                antes = actual;
                actual = siguiente;
                siguiente = actual.next;
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
        let actual = this.primero;
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
        let despues = this.primero;

        for (let i = 1; i <= this.tamanio; i++) {
            actual = despues;
            despues = despues.next;
            return actual;
        }
    }
}

let examen = new Lista();
let num = new Nodo(1, 'leche');
examen.agregar(num);
num = new Nodo(2, 'pan');
examen.agregar(num);
num = new Nodo(3, 'refresco');
examen.agregar(num);
//num = new Nodo(4, 'carne');
//examen.agregar(num);
console.log(examen.Imprimir());
num = new Nodo(5, 'pollo');
examen.AgregarInicio(num);
console.log(examen.AgregarInicio(num));
examen.Extraer(1);
console.log(examen.Imprimir())
    //examen.Intercambia((1, 'leche'), (2, 'pan'));
    //console.log(examen.Imprimir());
examen.EliminarDeAtras((3, 'refresco'));
console.log(examen.Imprimir())