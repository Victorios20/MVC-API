import { Livro } from '../models/LivroModel';
import { BibliotecaController } from '../Controllers/BibliotecaController';

export class BibliotecaView {
    private controller: BibliotecaController;

    constructor(controller: BibliotecaController) {
        this.controller = controller;
    }

    async mostrarLivros(): Promise<void> {
        const livros = await this.controller.listar();
        console.log("Livros disponíveis na biblioteca:");
        livros.forEach(livro => console.log(`${livro.titulo} (${livro.id}) - ${livro.status}`));
    }

    async buscarLivro(id: string): Promise<void> {
        const livro = await this.controller.buscar(id);
        if (livro) {
            console.log(`Livro encontrado: ${livro.titulo} por ${livro.autor}`);
        } else {
            console.log("Livro não encontrado.");
        }
    }

    async reservarLivro(livro: Livro): Promise<void> {
        await this.controller.adicionar(livro);
        console.log(`Livro ${livro.titulo} reservado com sucesso.`);
    }

    async cancelarReserva(id: string): Promise<void> {
        await this.controller.remover(id);
        console.log("Reserva cancelada com sucesso.");
    }
}
