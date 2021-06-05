interface IAcuatico {
    potencia: number;
    nudos: number;
    calcVelKm(): number;
}

interface ITerrestre {
    cantRuedas: number;
}

class Anfibio implements IAcuatico, ITerrestre {
    potencia: number;
    nudos: number;
    cantRuedas: number;

    constructor(potencia: number, nudos: number, canRuedas: number) {
        this.potencia = potencia;
        this.nudos = nudos;
        this.cantRuedas = canRuedas;
    }
    
    calcVelKm(): number {
        return 33;
    }
}

class Barco implements IAcuatico {
    potencia: number = 0;
    nudos: number = 0;

    calcVelKm(): number {
        throw new Error("Method not implemented.");
    }

}

class Auto implements ITerrestre {
    cantRuedas: number = 4;
}

const ingresarAlMar = (vehiculo: IAcuatico) => {
    console.info(vehiculo);
};


const auto = new Auto();
const barco = new Barco();
const anfi = new Anfibio(33, 22, 4);

ingresarAlMar(barco);