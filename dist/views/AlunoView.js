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
exports.AlunoView = void 0;
class AlunoView {
    constructor(controller) {
        this.controller = controller;
    }
    mostrarAlunos() {
        return __awaiter(this, void 0, void 0, function* () {
            console.log("Alunos: ");
            const alunos = yield this.controller.listar();
            alunos.forEach(aluno => console.log(`${aluno.nome} (${aluno.id})`));
        });
    }
    buscarAluno(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const aluno = yield this.controller.buscar(id);
            if (aluno) {
                console.log(`Aluno encontrado: ${aluno.nome}, Curso: ${aluno.curso}, Modalidade: ${aluno.modalidade}, Status: ${aluno.status}`);
            }
            else {
                console.log("Aluno não encontrado.");
            }
        });
    }
}
exports.AlunoView = AlunoView;
