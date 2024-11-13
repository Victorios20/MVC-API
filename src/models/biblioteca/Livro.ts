export class Livro {
    id: string;
    titulo: string;
    autor: string;
    ano: number;
    status: string;  
    idAluno?: string;  

    constructor(data: Partial<Livro>) {
        Object.assign(this, data);
    }
}
