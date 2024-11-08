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
Object.defineProperty(exports, "__esModule", { value: true });
exports.DisciplinaController = void 0;
const DisciplinaModel_1 = require("../models/DisciplinaModel");
class DisciplinaController {
    constructor() {
        this.matriculas = [];
    }
    listar() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield new DisciplinaModel_1.Disciplina({}).listarDisciplinas();
        });
    }
    buscar(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const disciplinas = yield this.listar();
            return disciplinas.find(d => d.id === id) || null;
        });
    }
    adicionar(disciplina) {
        return __awaiter(this, void 0, void 0, function* () {
            this.matriculas.push(disciplina);
        });
    }
    remover(id) {
        return __awaiter(this, void 0, void 0, function* () {
            this.matriculas = this.matriculas.filter(d => d.id !== id);
        });
    }
}
exports.DisciplinaController = DisciplinaController;
