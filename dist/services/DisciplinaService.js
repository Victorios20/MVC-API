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
exports.DisciplinaService = void 0;
const axios_1 = __importDefault(require("axios"));
const DisciplinaModel_1 = require("../models/DisciplinaModel");
const BASE_URL = 'https://sswfuybfs8.execute-api.us-east-2.amazonaws.com/disciplinaServico/msDisciplina';
class DisciplinaService {
    listarDisciplinas() {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield axios_1.default.get(BASE_URL);
            return response.data.map((disciplina) => new DisciplinaModel_1.Disciplina(disciplina.id, disciplina.curso, disciplina.nome));
        });
    }
}
exports.DisciplinaService = DisciplinaService;
