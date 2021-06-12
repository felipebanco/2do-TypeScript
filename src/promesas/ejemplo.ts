const db = [
    { id: 1, nombre: "Romina" },
    { id: 2, nombre: "Pablo" },
    { id: 3, nombre: "Lucia" },
    { id: 4, nombre: "Damian" },
];

const buscarId = (id: number): Promise<any> => {
    const res = db.find(el => el.id === id);

    const promesa = new Promise(function(resuelve, rechaza) {
        setTimeout(()=> {
            if(res) {
                resuelve(res);
            }else {
                rechaza(`No se pudo encontrar el id ${id} en la db.`);
            }
        }, 2000);
    });
    
    return promesa;
}

const app = async () => {
    console.info("--- Inicio de aplicación");

    try {

        const finished = Promise.all([
            await buscarId(2),
            await buscarId(3)]
        );

        const result = await finished;
        console.info(result);

        const p1 = await buscarId(2);
        console.info(p1);
        const p2 = await buscarId(3);
        console.info(p2);

    } catch (err) {
        console.error("-------------", err);
    }

    console.info("--- fin");
};

app();
console.info("--- otro fin");

const sumar = (a: number, b: number): number => a + b;
console.info(sumar(3, 4));


/*
buscarId(3).then(
    (res) => {
        console.info(res)
        return buscarId(4);
    }
).then(
    (res) => {
        console.info(res);
        console.info("--- fin app")
    }
).catch(
    (error) => {
        console.info(error);
        console.info("--- fin app")
    }
);
*/
