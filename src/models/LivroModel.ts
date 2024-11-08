import axios from 'axios';
const BASE_URL_BIBLIOTECA = 'https://qiiw8bgxka.execute-api.us-east-2.amazonaws.com/acervo/biblioteca';

export class Livro {
    public id: string;
    public titulo: string;
    public autor: string;
    public ano: number;
    public status: string;

    constructor(data: Partial<Livro>) {
        Object.assign(this, data);
    }

    async listarLivros(): Promise<Livro[]> {
            const response = await axios.get(BASE_URL_BIBLIOTECA);
            if (!Array.isArray(response.data)) {
                console.error("Os dados retornados não são um array:", response.data);
                return [];
            }

            return response.data.map((livro: any) =>
                new Livro({ 
                    id: livro.id, 
                    titulo: livro.titulo, 
                    autor: livro.autor, 
                    ano: livro.ano, 
                    status: livro.status 
                })
            );
       
    }
}
