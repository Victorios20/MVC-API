import axios from "axios";
const BASE_URL = 'https://rmi6vdpsq8.execute-api.us-east-2.amazonaws.com/msAluno';

export class Aluno {
    public id: string
    public nome: string
    public curso: string
    public modalidade: string
    public status: string

    constructor(data: Partial<Aluno>) {
        Object.assign(this, data);
    }


    

    async listarAlunos(): Promise<Aluno[]> {
        console.log("cheguei aq")
        const response = await axios.get(BASE_URL);
        console.log(response)
        return response.data
            .filter((aluno: Aluno) => aluno.curso === 'História' && aluno.modalidade === 'presencial')
            .map((aluno: Aluno) => new Aluno(aluno));
    }

    async buscarAluno(idOuNome: string): Promise<Aluno | null> {
        const response = await axios.get(BASE_URL);
        if (!Array.isArray(response.data)) {
            console.error("Os dados retornados não são um array:", response.data);
            return null;
        }
    
        const alunoEncontrado = response.data.find(
            (aluno: Aluno) => aluno.id.toString() === idOuNome || aluno.nome.toLowerCase() === idOuNome.toLowerCase()
        );
    
        return alunoEncontrado ? new Aluno(alunoEncontrado) : null;
    }
    
}
