import { BibliotecaData } from "./BibliotecaData";
import { Livro } from "./Livro";

export class BibliotecaService {
    async inicializar(): Promise<void> {
        await BibliotecaData.inicializar();
    }

    buscarLivroPorId(id: number): Livro | undefined { 
        const livrosCache = BibliotecaData.getCache();
        return livrosCache.find(livro => Number(livro.id) === id);
    }

    listarLivrosDoAluno(idAluno: string): Livro[] {
        const livrosCache = BibliotecaData.getCache();
        return livrosCache.filter(livro => livro.idAluno === idAluno);
    }

    reserva(livro: Livro, idAluno: string): Livro | undefined {
        if (livro.status !== "Reservado") {
            livro.status = "Reservado";
            livro.idAluno = idAluno;
            return livro;
        } else {
            console.log(`Livro '${livro.titulo}' já foi reservado pelo aluno de ID ${idAluno}`);
            return undefined;
        }
    }

    cancelarReserva(livro: Livro): Livro | undefined {
        const livrosCache = BibliotecaData.getCache();
        const livroEncontrado = livrosCache.find(livroItem => livroItem.id === livro.id);

        if (livroEncontrado) {
            if (livroEncontrado.status === "Reservado") {
                livroEncontrado.status = null;
                livroEncontrado.idAluno = undefined;
                console.log(`Reserva do livro '${livroEncontrado.titulo}' foi cancelada com sucesso.`);
                return livroEncontrado;
            } else {
                console.log("Livro não está reservado.");
                return undefined;
            }
        } else {
            console.log("Livro não encontrado");
            return undefined;
        }
    }
}
