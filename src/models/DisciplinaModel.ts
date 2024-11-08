import axios from "axios";
const BASE_URL_DISCIPLINA = 'https://rmi6vdpsq8.execute-api.us-east-2.amazonaws.com/msDisciplina';

export class Disciplina {
    public id: string;
    public curso: string;
    public nome: string;

    constructor(data: Partial<Disciplina>) {
        Object.assign(this, data);
    }

    async listarDisciplinas(): Promise<Disciplina[]> {
        
            const response = await axios.get(BASE_URL_DISCIPLINA);
            if (!Array.isArray(response.data)) {
                console.error("Os dados retornados não são um array:", response.data);
                return [];
            }

            return response.data.map((disciplina: any) => 
                new Disciplina({ id: disciplina.id, curso: disciplina.curso, nome: disciplina.nome })
            );
    }
}
