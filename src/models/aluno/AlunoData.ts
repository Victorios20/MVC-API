// src/models/aluno/AlunoData.ts
import axios from "axios";
import { Aluno } from "./Aluno";
import { IData } from "../interface/IData";

const BASE_URL = 'https://rmi6vdpsq8.execute-api.us-east-2.amazonaws.com/msAluno';

export class AlunoData implements IData<Aluno> {
    private alunosCache: Aluno[] = [];

    async inicializar(): Promise<void> {
        if (this.alunosCache.length === 0) {
            const response = await axios.get(BASE_URL);
            this.alunosCache = response.data
                .map((aluno: Aluno) => new Aluno(aluno))
                .filter((aluno: Aluno) => aluno.curso === 'História' && aluno.modalidade === 'Presencial');
        }
    }

    getCache(): Aluno[] {
        return this.alunosCache;
    }
}
