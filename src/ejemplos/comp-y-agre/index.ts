import Celular from "./Celular";
import Chip from "./Chip";

export const ejemploAgreYComp = () => {
    
    let celular: Celular | null = new Celular("Motorola", "v3", "Energizer", 250);
    // agregamos chip para mostrar agregación
    const chip1 = new Chip("Personal", 1234567);
    celular.agregarChip(chip1);

    const chip2 = new Chip("Movistar", 3444333);
    celular.agregarChip(chip2);

    celular.mostrar();
}
