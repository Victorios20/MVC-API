
import { Aluno } from "./Aluno";
import { AlunoData } from "./AlunoData";

export class AlunoService {
    private alunoData = new AlunoData();

    async inicializar(): Promise<void> {
        await this.alunoData.inicializar();
    }

    listarAlunosHistoria(): Aluno[] {
        return this.alunoData.getCache();
    }

    buscarAluno(idOuNome: string): Aluno | null {
        return this.alunoData.getCache().find(
            (aluno: Aluno) => String(aluno.id) === idOuNome || aluno.nome.toLowerCase() === idOuNome.toLowerCase()
        ) || null;
    }
}
