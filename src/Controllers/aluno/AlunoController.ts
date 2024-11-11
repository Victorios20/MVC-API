import { IAlunoController } from './IAlunoController'; 
import { AlunoService } from '../../models/aluno/AlunoService';
import { Aluno } from '../../models/aluno/Aluno';

export class AlunoController implements IAlunoController {
    private alunoService: AlunoService;

    constructor() {
        this.alunoService = new AlunoService();
    }
    async inicializar(){
        await this.alunoService.inicializar();
    }
    async listarAlunosHistoria(): Promise<Aluno[]> {
        await this.alunoService.inicializar(); 
        return this.alunoService.listarAlunosHistoria();
    }

    async buscarAluno(idOuNome: string): Promise<Aluno | null> {
        await this.alunoService.inicializar(); 
        return this.alunoService.buscarAluno(idOuNome);
    }
}
