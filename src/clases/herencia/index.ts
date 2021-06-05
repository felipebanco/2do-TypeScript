class Persona {
    protected _nombre: string;
    private _edad: number;

    constructor(nombre: string, edad: number) {
        this._nombre = nombre;
        this._edad = edad;
    }

    protected quienSoy():string {
        return `Yo soy ${this._nombre} y mi edad es ${this._edad}`;
    }

    quienSoyPublico():string {
        return `Yo soy ${this._nombre} y mi edad es ${this._edad}`;
    }
}

class Cliente extends Persona {

    private _empresa: string;

    constructor(nombre: string, edad: number, empresa: string){
        super(nombre, edad);
        this._empresa = empresa;
    }

    describirse(): string {
        return this.quienSoy() + ` y soy de la empresa ${this._empresa}`;
    }

    detalle(): string {
        return this._nombre + " -- " + this._empresa;
    }

    get empresa() { return  this._empresa }
}

class Proveedor extends Persona {

    constructor(nombre: string, edad: number){
        super(nombre, edad);
    }

    // puede que no ande el override en la version de ts que estemos usando
    override quienSoyPublico():string {
        return `Soy proveedor y ${super.quienSoyPublico()}`;
    }
}

export const herencia = () => {
    const clie = new Cliente("Juan Perez", 33, "IMPSA");
    console.info(clie.describirse());
    console.info(clie.empresa);

    const prov = new Proveedor("IMPSA", 80);
    console.info(prov.quienSoyPublico());
};