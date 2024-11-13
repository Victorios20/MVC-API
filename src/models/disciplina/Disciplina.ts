export class Disciplina {
    id: string;
    nome: string;
    curso: string;

    constructor(data: Partial<Disciplina>) {
        Object.assign(this, data);
    }
}
