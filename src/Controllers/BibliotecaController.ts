import { Livro } from '../models/LivroModel';
import { IController } from '../interfaces/IController';

export class BibliotecaController implements IController<Livro> {
    private reservas: Livro[] = [];
    private livroModel = new Livro({})

    async listar(): Promise<Livro[]> {
        return await this.livroModel.listarLivros();
    }

    async buscar(id: string): Promise<Livro | null> {
        const livros = await this.listar();
        return livros.find(l => l.id === id) || null;
    }

    async adicionar(livro: Livro): Promise<void> {
        if (livro.status === 'disponível') {
            this.reservas.push(livro);
        } else {
            console.log("Livro não disponível para reserva.");
        }
    }

    async remover(id: string): Promise<void> {
        this.reservas = this.reservas.filter(l => l.id !== id);
    }
}
