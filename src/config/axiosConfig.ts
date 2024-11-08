import axios from 'axios';
import config from './config';

// Instância do axios para o serviço de Alunos
const alunoApi = axios.create({
  baseURL: config.ALUNO_API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Instância do axios para o serviço de Disciplinas
const disciplinaApi = axios.create({
  baseURL: config.DISCIPLINA_API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Instância do axios para o serviço de Biblioteca
const bibliotecaApi = axios.create({
  baseURL: config.BIBLIOTECA_API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Exportando as instâncias para serem usadas nos services
export { alunoApi, disciplinaApi, bibliotecaApi };
