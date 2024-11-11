import { Aluno } from '../../models/aluno/Aluno';

export interface IAlunoController {
    listarAlunosHistoria(): Promise<Aluno[]>;
    buscarAluno(idOuNome: string): Promise<Aluno | null>;
    
}
