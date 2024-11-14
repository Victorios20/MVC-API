import axios from "axios";
import { Disciplina } from "./Disciplina";
import { IData } from "../interface/IData";

const BASE_URL_DISCIPLINA = 'https://sswfuybfs8.execute-api.us-east-2.amazonaws.com/disciplinaServico/msDisciplina';

export class DisciplinaData implements IData<Disciplina> {
    private disciplinasCache: Disciplina[] = [];

    async inicializar(): Promise<void> {
        if (this.disciplinasCache.length === 0) {
            console.log('///////////////////////////Inicializando cache de Disciplinas///////////////////////////');
            const response = await axios.get(BASE_URL_DISCIPLINA);
            this.disciplinasCache = response.data.map((disciplina: Disciplina) => new Disciplina(disciplina));
        } else {
            console.log('///////////////////////////Cache de Disciplinas já preenchido///////////////////////////');
        }
    }

    getCache(): Disciplina[] {
        return this.disciplinasCache;
    }
}
