class Bateria {
    private _marca: string;
    private _capacidad: number;

    constructor(marca: string, capacidad: number) {
        this._marca = marca;
        this._capacidad = capacidad;
    }

    mostrar(): string {
        return `Bateria: ${this._marca} - cap: ${this._capacidad}`;
    }
}

export default Bateria;