
import { Disciplina } from "./Disciplina";
import { DisciplinaData } from "./DisciplinaData";

export class DisciplinaService {
    private disciplinaData = new DisciplinaData();

    async inicializar(): Promise<void> {
        await this.disciplinaData.inicializar();
    }

}
