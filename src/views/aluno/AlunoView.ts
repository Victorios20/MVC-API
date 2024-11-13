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
        console.log("\n===============================================");
        console.log("      Alunos do Curso de História (Presencial)  ");
        console.log("===============================================\n");
    
        const alunos = await this.controller.listarAlunosHistoria();
        
        if (alunos.length > 0) {
            alunos.forEach(aluno => {
                console.log(`📖 Nome: ${aluno.nome}`);
                console.log(`🆔 ID  : ${aluno.id}`);
                console.log("-----------------------------------------------");
            });
        } else {
            console.log("❌ Nenhum aluno encontrado no curso de História.");
        }
    
        console.log("===============================================\n");
    }
    

    async mostrarDetalhesAluno(idOuNome: string): Promise<void> {
        const aluno = await this.controller.buscarAluno(idOuNome);
        if (aluno) {
            console.log("\n=============================");
            console.log("        Aluno Encontrado      ");
            console.log("=============================");
            console.log(`📚 Nome        : ${aluno.nome}`);
            console.log(`🎓 Curso       : ${aluno.curso}`);
            console.log(`🏫 Modalidade  : ${aluno.modalidade}`);
            console.log(`📜 Status      : ${aluno.status}`);
            console.log(`🆔 ID          : ${aluno.id}`);
            console.log("=============================\n");
        } else {
            console.log("\n=============================");
            console.log("   ❌ Aluno não encontrado    ");
            console.log("=============================\n");
        }
    }
    
}
