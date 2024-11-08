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
exports.DisciplinaView = void 0;
class DisciplinaView {
    constructor(controller) {
        this.controller = controller;
    }
    mostrarDisciplinas() {
        return __awaiter(this, void 0, void 0, function* () {
            const disciplinas = yield this.controller.listar();
            console.log("Disciplinas disponíveis:");
            disciplinas.forEach(disciplina => console.log(`${disciplina.nome} (${disciplina.id})`));
        });
    }
    buscarDisciplina(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const disciplina = yield this.controller.buscar(id);
            if (disciplina) {
                console.log(`Disciplina encontrada: ${disciplina.nome}`);
            }
            else {
                console.log("Disciplina não encontrada.");
            }
        });
    }
    adicionarDisciplina(disciplina) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.controller.adicionar(disciplina);
            console.log(`Disciplina ${disciplina.nome} adicionada com sucesso.`);
        });
    }
    removerDisciplina(id) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.controller.remover(id);
            console.log(`Disciplina removida com sucesso.`);
        });
    }
}
exports.DisciplinaView = DisciplinaView;
