// cuando podemos acceder a readonly

abstract class Persona {
    protected _nombre: string;
    protected readonly _dni: number;
    protected _precioHora: number; 

    constructor(n: string, d: number, precio: number) {
        this._nombre = n;
        this._dni = d;
        this._precioHora = precio;
    }

    abstract calcularSueldo(horasTrabajadas: number): number;

}
//const p = new Persona("Romina", 939393, 33);

class Empleado extends Persona {
    
    constructor(n: string, d: number, precio: number) {
        super(n, d, precio);
    }
    
    calcularSueldo(horasTrabajadas: number): number {
        this._precioHora = this._precioHora * 1.2;
        // this._dni = 300303; no puede porque es readonly
        return horasTrabajadas * this._precioHora;
    }
}

const e = new Empleado("Romina", 39393939, 29);
console.info('Mi sueldo es de ' + e.calcularSueldo(233));