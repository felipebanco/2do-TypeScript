class Chip {
    constructor(
        private _empresa: string, 
        private _numero: number
    ) {
    }

    mostrar(): string {
        return `Chip: ${this._empresa} - Nro: ${this._numero}`;
    }
}

export default Chip;