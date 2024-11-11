"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AlunoService = void 0;
const axios_1 = __importDefault(require("axios"));
const Aluno_1 = require("./Aluno");
const BASE_URL = 'https://rmi6vdpsq8.execute-api.us-east-2.amazonaws.com/msAluno';
class AlunoService {
    listarAlunosHistoria() {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield axios_1.default.get(BASE_URL);
            return response.data
                .filter((aluno) => aluno.curso === 'História' && aluno.modalidade === 'presencial')
                .map((aluno) => new Aluno_1.Aluno(aluno));
        });
    }
    buscarAluno(idOuNome) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield axios_1.default.get(BASE_URL);
            const alunoEncontrado = Array.isArray(response.data)
                ? response.data.find((aluno) => aluno.id.toString() === idOuNome || aluno.nome.toLowerCase() === idOuNome.toLowerCase())
                : null;
            return alunoEncontrado ? new Aluno_1.Aluno(alunoEncontrado) : null;
        });
    }
}
exports.AlunoService = AlunoService;
