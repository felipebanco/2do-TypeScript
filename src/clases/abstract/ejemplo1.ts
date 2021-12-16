abstract class Animal {
    private cantPatas: number;
    private raza: string;

    constructor(cantPatas: number, raza: string) {
        this.cantPatas = cantPatas;
        this.raza = raza;
    }

    describirese(): string {
        return `Tengo ${this.cantPatas} patas y mi raza es ${this.raza}`;
    }

    //pueden o no tener metodos abstractos
    abstract saludame(nombre: string): string;

    hablar(nombre: string): void {
        console.info("Hola... yo soy... " + this.saludame(nombre));
    }

}

class Perro extends Animal {
    constructor(cantPatas: number, raza: string) {
        super(cantPatas, raza);
    }

    saludame(nombre: string): string {
        return `wow wow el perro y tu nombre es: ${nombre}`;
    }
}

class Gato extends Animal {

    constructor(cantPatas: number, raza: string) {
        super(cantPatas, raza);
    }

    saludame(nombre: string): string {
        return `miau miau el gato y tu nombre es: ${nombre}`;
    }
}

const p1 = new Perro(4, "Dalmata");
// no lo puedo ver porque es protected... p1.saludame("Juan Perez");
p1.hablar("Juan Perez");
console.info(p1.describirese());
// NOOO se puede instanciar... const a1 = new Animal(4, "Perro");


// polimorfismo
const animales: Animal[] = [];

animales.push(new Perro(4, "Dalmata"));
animales.push(new Perro(4, "Salchica"));
animales.push(new Gato(4, "Siames"));

for(let animal of animales) {
    console.info(animal.saludame("Pepe Grillo"));
    console.info(animal.describirese());
}
