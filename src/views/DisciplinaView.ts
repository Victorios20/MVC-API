import { Disciplina } from '../models/DisciplinaModel';
import { DisciplinaController } from '../Controllers/DisciplinaController';

export class DisciplinaView {
    private controller: DisciplinaController;

    constructor(controller: DisciplinaController) {
        this.controller = controller;
    }

    async mostrarDisciplinas(): Promise<void> {
        const disciplinas = await this.controller.listar();
        console.log("Disciplinas disponíveis:");
        disciplinas.forEach(disciplina => console.log(`${disciplina.nome} (${disciplina.id})`));
    }

    async buscarDisciplina(id: string): Promise<void> {
        const disciplina = await this.controller.buscar(id);
        if (disciplina) {
            console.log(`Disciplina encontrada: ${disciplina.nome}`);
        } else {
            console.log("Disciplina não encontrada.");
        }
    }

    async adicionarDisciplina(disciplina: Disciplina): Promise<void> {
        await this.controller.adicionar(disciplina);
        console.log(`Disciplina ${disciplina.nome} adicionada com sucesso.`);
    }

    async removerDisciplina(id: string): Promise<void> {
        await this.controller.remover(id);
        console.log(`Disciplina removida com sucesso.`);
    }
}
