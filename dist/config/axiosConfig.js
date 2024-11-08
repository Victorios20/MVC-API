"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.bibliotecaApi = exports.disciplinaApi = exports.alunoApi = void 0;
const axios_1 = __importDefault(require("axios"));
const config_1 = __importDefault(require("./config"));
// Instância do axios para o serviço de Alunos
const alunoApi = axios_1.default.create({
    baseURL: config_1.default.ALUNO_API_BASE_URL,
    headers: {
        'Content-Type': 'application/json',
    },
});
exports.alunoApi = alunoApi;
// Instância do axios para o serviço de Disciplinas
const disciplinaApi = axios_1.default.create({
    baseURL: config_1.default.DISCIPLINA_API_BASE_URL,
    headers: {
        'Content-Type': 'application/json',
    },
});
exports.disciplinaApi = disciplinaApi;
// Instância do axios para o serviço de Biblioteca
const bibliotecaApi = axios_1.default.create({
    baseURL: config_1.default.BIBLIOTECA_API_BASE_URL,
    headers: {
        'Content-Type': 'application/json',
    },
});
exports.bibliotecaApi = bibliotecaApi;
