import Bateria from "./Bateria";
import Chip from "./Chip";

class Celular {
    private _bateria: Bateria;
    private _modelo: string;
    private _marca: string;
    private _chips: Chip[];

    constructor(marca: string, modelo:string, marcaBateria: string, capacidadBateria: number) {
        this._marca = marca;
        this._modelo = modelo;
        this._bateria = new Bateria(marcaBateria, capacidadBateria);
        this._chips = [];
    }

    public agregarChip(chip: Chip) {
        this._chips.push(chip);
    }

    public mostrar() {
        console.info(`Celular: ${this._marca} - Modelo: ${this._modelo}`);
        console.info(this._bateria.mostrar());
        for(let c of this._chips) {
            console.info(c.mostrar());
        }
    }
}

export default Celular;
