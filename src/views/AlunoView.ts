
import { AlunoController } from '../Controllers/AlunoController';

export class AlunoView {
    private controller: AlunoController;

    constructor(controller: AlunoController) {
        this.controller = controller;
    }

    async mostrarAlunos(): Promise<void> {
        console.log("Alunos: ");
        const alunos = await this.controller.listar();
        alunos.forEach(aluno => console.log(`${aluno.nome} (${aluno.id})`));
    }

    async buscarAluno(id: string): Promise<void> {
        const aluno = await this.controller.buscar(id);
        if (aluno) {
            console.log(`Aluno encontrado: ${aluno.nome}, Curso: ${aluno.curso}, Modalidade: ${aluno.modalidade}, Status: ${aluno.status}`);
        } else {
            console.log("Aluno não encontrado.");
        }
    }
}
