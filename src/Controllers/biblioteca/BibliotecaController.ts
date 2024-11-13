import { BibliotecaService } from '../../models/biblioteca/BibliotecaService';
import { Livro } from '../../models/biblioteca/Livro';
import { AlunoService } from '../../models/aluno/AlunoService';

export class BibliotecaController {
    private bibliotecaService: BibliotecaService;
    private alunoService: AlunoService;

    constructor() {
        this.bibliotecaService = new BibliotecaService();
        this.alunoService = new AlunoService();  
    }

   
    async inicializar(): Promise<void> {
        await this.bibliotecaService.inicializar(); 
    }

    async realizarReserva(idLivro: string, idAluno: string): Promise<void> {
        try {
            await this.bibliotecaService.inicializar();
            await this.alunoService.inicializar();

            const livro = this.bibliotecaService.buscarLivroPorId(Number(idLivro));
            const aluno = this.alunoService.buscarAluno(idAluno);

            if (livro && aluno && aluno.status === "Ativo") {
                const livroReservado = this.bibliotecaService.reserva(livro, idAluno);

                if (livroReservado) {
                    console.log(`Livro '${livroReservado.titulo}' reservado com sucesso para o aluno '${aluno.nome}'`);
                } else {
                    console.log("Não foi possível realizar a reserva.");
                }
            } else {
                console.log("Livro ou aluno não encontrado ou aluno não está ativo.");
            }
        } catch (error) {
            console.error("Erro ao realizar a reserva:", error);
        }
    }

    async buscarLivroPorId(id: number): Promise<Livro | undefined> {
        await this.bibliotecaService.inicializar();
        return this.bibliotecaService.buscarLivroPorId(id);
    }


    async listarLivrosReservadosPorAluno(idAluno: string): Promise<any[]> {
        try {
            const livrosReservados = await this.bibliotecaService.listarLivrosDoAluno(idAluno);
            return livrosReservados;
        } catch (error) {
            console.error('Erro ao buscar livros reservados:', error);
            throw error; 
        }
    }




    async cancelarReserva(idLivro: string): Promise<void> {
        await this.bibliotecaService.inicializar();
        await this.alunoService.inicializar();

        const Livro = this.bibliotecaService.buscarLivroPorId(Number(idLivro))

        this.bibliotecaService.cancelarReserva(Livro);

    
    }
}
