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
exports.AlunoController = void 0;
const AlunoService_1 = require("../models/aluno/AlunoService");
class AlunoController {
    constructor() {
        this.alunoService = new AlunoService_1.AlunoService();
    }
    listarAlunosHistoria() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.alunoService.listarAlunosHistoria();
        });
    }
    buscarAluno(idOuNome) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.alunoService.buscarAluno(idOuNome);
        });
    }
}
exports.AlunoController = AlunoController;
