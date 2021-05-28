console.info("Inicio de aplicacion!");

class Persona {
    private _nombre: string;
    private _apellido: string;
    private _edad: number;

    constructor(nombre: string, apellido: string, edad: number) {
        this._nombre = nombre;
        this._apellido = apellido;
        this._edad = edad;
    }

    public quienSos(): string {
        return `Soy ${this._nombre} ${this._apellido} y mi edad es ${this._edad}`
    }
}

const per1 = new Persona("Juan", "Rodriguez", 34);
console.info(per1.quienSos());
