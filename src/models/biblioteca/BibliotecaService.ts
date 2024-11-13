import axios from "axios";
import { Livro } from "./Livro";

const BASE_URL = 'https://qiiw8bgxka.execute-api.us-east-2.amazonaws.com/acervo/biblioteca';

export class BibliotecaService {
    private livrosCache: Livro[] = [];

    async inicializar(): Promise<void> {
        if (this.livrosCache.length === 0) {
            console.log('///////////////////////////inicializou Biblioteca cache///////////////////////////');
            const response = await axios.get(BASE_URL);
            this.livrosCache = response.data;
        } else {
            console.log('///////////////////////////array Biblioteca Cache preenchido///////////////////////////');
        }
    }

    buscarLivroPorId(id: number): Livro | undefined { 
        const Livro = this.livrosCache.find(livro => Number(livro.id) === id);
        return Livro;
    }


        listarLivrosDoAluno(idAluno: string): Livro[] {
            return this.livrosCache.filter(livro => livro.idAluno === idAluno);
        }
    


        reserva(Livro: Livro, idAluno: string): Livro | undefined {
            if (Livro.status !== "Reservado") {
                Livro.status = "Reservado";
                Livro.idAluno = idAluno;  
                return Livro;
            } else {
                console.log(`Livro '${Livro.titulo}' já foi reservado pelo aluno de ID ${idAluno}`);
                return undefined;
            }
        }
    
    
    
    cancelarReserva(LivroId: Livro): Livro | undefined {
        const livro = this.livrosCache.find(livro => livro.id === LivroId.id);
    
        if (livro) {
            if (livro.status === "Reservado") {
                livro.status = null;
                livro.idAluno = undefined; 
                console.log(`Reserva do livro '${livro.titulo}' foi cancelada com sucesso.`);
                return livro;
            } else if (livro.status !== "Reservado") {
                console.log("Livro não está reservado.");
                return undefined;
            } else {
                console.log("Livro reservado por outro aluno.");
                return undefined;
            }
        } else {
            console.log("Livro não encontrado");
            return undefined;
        }
    }
}
