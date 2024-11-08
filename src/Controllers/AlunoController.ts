import { Aluno } from '../models/AlunoModel';
import { IController } from '../interfaces/IController';

export class AlunoController implements IController<Aluno> {
    private alunoModel = new Aluno({});

    async listar(): Promise<Aluno[]> {
        return await this.alunoModel.listarAlunos();
    }

    async buscar(id: string): Promise<Aluno | null> {
        return await this.alunoModel.buscarAluno(id);
    }

    async adicionar(aluno: Aluno): Promise<void> {
        console.log("Adicionando aluno é uma operação não implementada neste contexto.");
    }

    async remover(id: string): Promise<void> {
        console.log("Remover aluno é uma operação não implementada neste contexto.");
    }
}
