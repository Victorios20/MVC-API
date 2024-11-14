// src/models/biblioteca/BibliotecaData.ts
import axios from "axios";
import { Livro } from "./Livro";
import { IData } from "../interface/IData";

const BASE_URL = 'https://qiiw8bgxka.execute-api.us-east-2.amazonaws.com/acervo/biblioteca';

export class BibliotecaData implements IData<Livro> {
    private  livrosCache: Livro[] = [];

     async inicializar(): Promise<void> {
        if (this.livrosCache.length === 0) {
            console.log('///////////////////////////inicializou Biblioteca cache///////////////////////////');
            const response = await axios.get(BASE_URL);
            this.livrosCache = response.data;
        } else {
            console.log('///////////////////////////array Biblioteca Cache preenchido///////////////////////////');
        }
    }

     getCache(): Livro[] {
        return this.livrosCache;
    }
}
