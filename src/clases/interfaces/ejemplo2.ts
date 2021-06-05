interface IPersona {
    nombre: string;
    apellido: string;
    edad: number;
    mail?: string;
}

const imprimirPersona = (persona: IPersona) => {
    console.info(`- La persona es ${persona.nombre} ${persona.apellido} y su edad es ${persona.edad}`);
}

class Cliente implements IPersona {
    constructor(
        public nombre: string, 
        public apellido: string, 
        public edad: number,
        public mail:string) {
    }
}

const clie1 = new Cliente("Juan", "Perez", 33, "jperez@gmail.com");
imprimirPersona(clie1);

const p = {
    nombre: "Doming",
    apellido: "Peron",
    segundoNombre: "Juan",
    edad: 92
};
imprimirPersona(p);
