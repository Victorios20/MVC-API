import promptSync from 'prompt-sync';
import { AlunoController } from './Controllers/aluno/AlunoController';
import { AlunoView } from './views/aluno/AlunoView';
import { AlunoService } from './models/aluno/AlunoService';

const prompt = promptSync();

async function main() {
    const alunoController = new AlunoController();
    const alunoView = new AlunoView(alunoController);



    alunoView.inicializar();

    

    
    let opcao: string;

    do {
        console.log('\nEscolha uma opção:');
        console.log('1. Listar alunos de História');
        console.log('2. Buscar aluno por ID ou nome');
        console.log('0. Sair');

        opcao = prompt('Digite a opção: ');

        switch (opcao) {
            case '1':
                await alunoView.mostrarAlunosDeHistoria();
                break;
            case '2':
                const idOuNome = prompt('Digite o ID ou nome do aluno: ');
                await alunoView.mostrarDetalhesAluno(idOuNome);
                break;
            case '0':
                console.log('Saindo...');
                break;
            default:
                console.log('Opção inválida. Tente novamente.');
                break;
        }
    } while (opcao !== '0');
}

main();
