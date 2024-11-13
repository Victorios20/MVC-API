import promptSync from 'prompt-sync';
import { AlunoController } from './Controllers/aluno/AlunoController';
import { AlunoView } from './views/aluno/AlunoView';
import { BibliotecaService } from './models/biblioteca/BibliotecaService';
import { AlunoService } from './models/aluno/AlunoService';
import { BibliotecaController } from './Controllers/biblioteca/BibliotecaController';
import { BibliotecaView } from './views/biblioteca/BibliotecaView';

const prompt = promptSync();

async function main() {
    const alunoController = new AlunoController();
    const alunoView = new AlunoView(alunoController);
    const biblioteca = new BibliotecaService();
    const alunoService = new AlunoService();
    const bibliotecaController = new BibliotecaController();
    const bibliotecaView = new BibliotecaView();

    let opcao: string;

    do {
        console.log('\nEscolha uma opção:');
        console.log('1. Gerenciar Biblioteca');
        console.log('2. Gerenciar Alunos');
        console.log('0. Sair');

        opcao = prompt('Digite a opção: ');

        switch (opcao) {
            case '1':
                let opcaoBiblioteca: string;

                do {
                    console.log('\nEscolha uma opção para a Biblioteca:');
                    console.log('1. Listar livros reservados por aluno');
                    console.log('2. Reservar livro');
                    console.log('3. Cancelar reserva de livro');
                    console.log('0. Voltar ao menu principal');

                    opcaoBiblioteca = prompt('Digite a opção: ');

                    switch (opcaoBiblioteca) {
                        case '1':
                            const idAlunoReservado = prompt('Digite o ID do aluno: ');
                            await bibliotecaView.listarLivrosReservadosPorAluno(idAlunoReservado);
                            break;
                        case '2':
                            const idLivroReserva = prompt('Digite o ID do livro para reserva: ');
                            const idAlunoReserva = prompt('Digite o ID do aluno para reserva: ');
                            await bibliotecaView.reservarLivro(idLivroReserva, idAlunoReserva);
                            break;
                        case '3':
                            const idLivroCancelamento = prompt('Digite o ID do livro para cancelar a reserva: ');
                            await bibliotecaView.cancelarReserva(idLivroCancelamento);
                            break;
                        case '0':
                            console.log('Voltando ao menu principal...');
                            break;
                        default:
                            console.log('Opção inválida. Tente novamente.');
                            break;
                    }
                } while (opcaoBiblioteca !== '0');
                break;
            
            case '2':
                let opcaoAluno: string;

                do {
                    console.log('\nEscolha uma opção para os Alunos:');
                    console.log('1. Listar alunos de História');
                    console.log('2. Buscar aluno por ID ou nome');
                    console.log('0. Voltar ao menu principal');

                    opcaoAluno = prompt('Digite a opção: ');

                    switch (opcaoAluno) {
                        case '1':
                            await alunoView.mostrarAlunosDeHistoria();
                            break;
                        case '2':
                            const idOuNome = prompt('Digite o ID ou nome do aluno: ');
                            await alunoView.mostrarDetalhesAluno(idOuNome);
                            break;
                        case '0':
                            console.log('Voltando ao menu principal...');
                            break;
                        default:
                            console.log('Opção inválida. Tente novamente.');
                            break;
                    }
                } while (opcaoAluno !== '0');
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
