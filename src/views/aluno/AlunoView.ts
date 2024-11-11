import { AlunoController } from '../../Controllers/aluno/AlunoController';

export class AlunoView {
    private controller: AlunoController;

    constructor(controller: AlunoController) {
        this.controller = controller;
    }


    async inicializar(){
        await this.controller.inicializar();
    }
    async mostrarAlunosDeHistoria(): Promise<void> {
        console.log("Alunos do curso de História, modalidade presencial: ");
        const alunos = await this.controller.listarAlunosHistoria();
        if (alunos.length > 0) {
            alunos.forEach(aluno => console.log(`${aluno.nome} (${aluno.id})`));
        } else {
            console.log("Nenhum aluno encontrado.");
        }
    }

    async mostrarDetalhesAluno(idOuNome: string): Promise<void> {
        const aluno = await this.controller.buscarAluno(idOuNome);
        if (aluno) {
            console.log(`Aluno encontrado: ${aluno.nome}, Curso: ${aluno.curso}, Modalidade: ${aluno.modalidade}, Status: ${aluno.status}`);
        } else {
            console.log("Aluno não encontrado.");
        }
    }
}
