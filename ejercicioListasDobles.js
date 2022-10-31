/*Considerando el siguiente código, escribir el método para listar y para invertir.*/
class Nodo {
    constructor(numero) {
        this.numero = numero;
        this.sig = null;
        this.ant = null;
    }
}
class ListaDoble {
    constructor() {
        this.primero = null;
        this.ultimo = null;
    }

    agregar(nuevo) {
        if (this.primero == null) {
            this.primero = nuevo;
            this.ultimo = nuevo;
        } else {
            this.ultimo.sig = nuevo
            nuevo.ant = this.ultimo;
            this.ultimo = nuevo
        }
    }
    invertir() {
        var final = this.ultimo;
        final.sig = null;
        var anterior = this.ultimo.ant;
        while (final !== null) {
            final.sig = final;
            final = anterior;
            anterior = this.ultimo.ant;
            //final.ant = final.ant.ant;
            return final;
        }
    }
    listar() {
        var inicio = null;
        var num = this.primero;
        var siguiente = num.sig;
        while (num !== null) {
            inicio = num;
            num = siguiente;
            siguiente = num.sig;
            return inicio;
        }
    }
}


let ldoble = new ListaDoble();
let nodo = new Nodo(2);
ldoble.agregar(nodo);
nodo = new Nodo(5);
ldoble.agregar(nodo);
nodo = new Nodo(7);
ldoble.agregar(nodo);
nodo = new Nodo(8);
ldoble.agregar(nodo);
nodo = new Nodo(9);
ldoble.agregar(nodo);
//ldoble.invertir();
//console.log(ldoble.invertir());
console.log(ldoble.listar());