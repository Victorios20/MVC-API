import { Disciplina } from '../models/DisciplinaModel';
import { IController } from '../interfaces/IController';

export class DisciplinaController implements IController<Disciplina> {
    private matriculas: Disciplina[] = [];
    private disciplinaModel = new Disciplina({})
    async listar(): Promise<Disciplina[]> {
        return await this.disciplinaModel.listarDisciplinas();
    }

    async buscar(id: string): Promise<Disciplina | null> {
        const disciplinas = await this.listar();
        return disciplinas.find(d => d.id === id) || null;
    }

    async adicionar(disciplina: Disciplina): Promise<void> {
        this.matriculas.push(disciplina);
    }

    async remover(id: string): Promise<void> {
        this.matriculas = this.matriculas.filter(d => d.id !== id);
    }
}
