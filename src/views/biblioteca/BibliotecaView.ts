import { BibliotecaController } from '../../Controllers/biblioteca/BibliotecaController'

export class BibliotecaView {
    private bibliotecaController: BibliotecaController;

    constructor() {
        this.bibliotecaController = new BibliotecaController();
    }

    async reservarLivro(idLivro: string, idAluno: string): Promise<void> {
        console.log("\n=================================================");
        console.log("         Realizando Reserva de Livro             ");
        console.log("=================================================");
        console.log(`📚 Livro ID  : ${idLivro}`);
        console.log(`👤 Aluno ID  : ${idAluno}`);
        console.log("-------------------------------------------------");

        await this.bibliotecaController.realizarReserva(idLivro, idAluno);

        console.log("=================================================\n");
    }
    

    
    async buscarLivro(id: string): Promise<void> {
        console.log("\n=================================================");
        console.log("                 Busca de Livro                  ");
        console.log("=================================================");
        console.log(`🔍 ID do Livro Pesquisado: ${id}`);
        console.log("-------------------------------------------------");
    
        try {
            const livro = await this.bibliotecaController.buscarLivroPorId(Number(id));
            
            if (livro) {
                console.log("📖 Livro Encontrado:");
                console.log(`   - Título       : ${livro.titulo}`);
                console.log(`   - Autor        : ${livro.autor}`);
                console.log(`   - Ano          : ${livro.ano}`);
                console.log(`   - Status       : ${livro.status}`);
                console.log(`   - ID do Aluno  : ${livro.idAluno ? livro.idAluno : "Não reservado"}`);
            } else {
                console.log("❌ Livro não encontrado.");
            }
        } catch (error) {
            console.error("❌ Erro ao buscar o livro:", error);
        }
    
        console.log("=================================================\n");
    }
    

    async listarLivrosReservadosPorAluno(idAluno: string): Promise<void> {
        console.log("\n=================================================");
        console.log("       Listagem de Livros Reservados             ");
        console.log("=================================================");
        console.log(`🔍 ID do Aluno: ${idAluno}`);
        console.log("-------------------------------------------------");
    
        try {
            const livrosReservados = await this.bibliotecaController.listarLivrosReservadosPorAluno(idAluno);
            if (livrosReservados.length > 0) {
                console.log(`Livros reservados pelo aluno com ID '${idAluno}':`);
                livrosReservados.forEach(livro => {
                    console.log(`- ${livro.titulo} 📖`);
                });
            } else {
                console.log(`Nenhum livro encontrado para o aluno com ID '${idAluno}'.`);
            }
        } catch (error) {
            console.error("❌ Erro ao listar os livros reservados:", error);
        }
    
        console.log("=================================================\n");
    }



    async cancelarReserva(idLivro: string): Promise<void> {
        console.log("\n==============================================");
        console.log("         Tentativa de Cancelamento de Reserva de Livro      ");
        console.log("==============================================");
        console.log(`🔍 ID do Livro: ${idLivro}`);
        console.log("----------------------------------------------");
    
        try {
            await this.bibliotecaController.cancelarReserva(idLivro);
            console.log(`✅ Tentativa de Reserva do livro com ID ${idLivro} foi finalizada.`);
        } catch (error) {
            console.error("❌ Erro ao cancelar a reserva:", error);
        }
    
        console.log("==============================================\n");
    }
    
}
