class Nodo {
    constructor(numero) {
        this.numero = numero;
        this.next = null;
    }
}
class Lista {
    constructor() {
        this.primero = null;
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
    }
    listar() {
            let res = "";
            let temp = this.primero;
            while (temp != null) {
                res += temp.numero + "  ";
                temp = temp.next;
            }
            return res;
        }
        // eliminar y mostrar el primero
    extraerPrimero() {
            var cabeza = this.primero;
            var siguiente = cabeza.next;
            var sigui = siguiente.next;
            var temp = null;
            if (cabeza !== null) {
                temp = siguiente.next;
                sigui = siguiente;
                siguiente = null;
            }
            return sigui;
        }
        // extraer el ultimo y devolver el ultimo 
    extraerUltimo() {
        temp = this.primero;
        var ultimo = null;
        while (temp.next !== null) {
            ultimo = temp.next;
        }
    }
}

let datos = new Lista();
let num = new Nodo(2);
datos.agregar(num);
num = new Nodo(3);
datos.agregar(num);
num = new Nodo(4);
datos.agregar(num);
num = new Nodo(5);
datos.agregar(num);
num = new Nodo(8);
datos.agregar(num);
let first = datos.extraerPrimero(); //elimianr el primero
console.log(first.numero);
//let last=datos.extraerUltimo(); //elimianr y devolver el ultimo
//console.log(last.numero);
console.log(datos.listar());