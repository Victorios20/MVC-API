export interface IAlunoView {
    mostrarAlunosDeHistoria(): Promise<void>;
    mostrarDetalhesAluno(idOuNome: string): Promise<void>;
}
