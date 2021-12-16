
class Circulo {
    static readonly PI = 3.14;
    nombre:string;

    constructor(n: string) {
        this.nombre = n;
    }

    static calcularArea(radio: number): number {
        // console.info(this.nombre); en un método estatico no puedo acceder a valores no estaticos de la clase
        return this.PI * Math.pow(radio, 2);
    }

}

class ClaseUno {
    ejecutar() {
        console.info(Circulo.PI);
        // Circulo.PI = 33333; no permite porque el atributo es readonly
    }
}

//Ls atributos y metodos estaticos no se pueden instanciar, pero si invocar desde fuera
const c1 = new ClaseUno();
c1.ejecutar();
console.info('el valor del número PI es: ',Circulo.PI);

class ClaseDos {
    ejecutar() {
        console.info(Circulo.PI);
    }
}

const c2 = new ClaseDos();
c2.ejecutar();

console.info("El area del circulo de radio 10 es: " + Circulo.calcularArea(10));