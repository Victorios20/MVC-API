import axios from "axios";
import { Aluno } from "./Aluno";

const BASE_URL = 'https://rmi6vdpsq8.execute-api.us-east-2.amazonaws.com/msAluno';

export class AlunoService {
    private alunosCache: Aluno[] = [];


     async inicializar(): Promise<void> {
        if (this.alunosCache.length === 0) {
            console.log('///////////////////////////inicializou Aluno cache///////////////////////////');
            const response = await axios.get(BASE_URL);
            this.alunosCache = await response.data.map((aluno: Aluno) => new Aluno(aluno));
            
        } else {
            console.log('///////////////////////////array Aluno Cache preenchido///////////////////////////');
        }
    }

    listarAlunosHistoria(): Aluno[] {
        return this.alunosCache.filter(
            (aluno: Aluno) => aluno.curso === 'História' && aluno.modalidade === 'Presencial');
    }

    buscarAluno(idOuNome: string): Aluno | null {
        return this.alunosCache.find(
            (aluno: Aluno) => String(aluno.id) === idOuNome || aluno.nome.toLowerCase() === idOuNome.toLowerCase()
        ) || null;
    }

    
}
