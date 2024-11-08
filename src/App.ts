import promptSync from 'prompt-sync';
import { AlunoController } from './Controllers/AlunoController';
import { DisciplinaController } from './Controllers/DisciplinaController';
import { BibliotecaController } from './Controllers/BibliotecaController';
import { AlunoView } from './views/AlunoView';
import { DisciplinaView } from './views/DisciplinaView';
import { BibliotecaView } from './views/BibliotecaView';

// Criando a função de prompt
const prompt = promptSync();

async function main() {
    const alunoController = new AlunoController();
    const disciplinaController = new DisciplinaController();
    const bibliotecaController = new BibliotecaController();

    const alunoView = new AlunoView(alunoController);
    const disciplinaView = new DisciplinaView(disciplinaController);
    const bibliotecaView = new BibliotecaView(bibliotecaController);

    // // Pedindo o ID do aluno ao usuário
    // const idAluno = prompt("Por favor, insira o ID ou o NOME do aluno que deseja buscar: ");
    // await alunoView.buscarAluno(idAluno);


    // await bibliotecaView.mostrarLivros();

    await disciplinaView.mostrarDisciplinas();
}

main();
