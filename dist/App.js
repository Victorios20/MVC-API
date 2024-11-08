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
const prompt_sync_1 = __importDefault(require("prompt-sync"));
const AlunoController_1 = require("./Controllers/AlunoController");
const DisciplinaController_1 = require("./Controllers/DisciplinaController");
const BibliotecaController_1 = require("./Controllers/BibliotecaController");
const AlunoView_1 = require("./views/AlunoView");
const DisciplinaView_1 = require("./views/DisciplinaView");
const BibliotecaView_1 = require("./views/BibliotecaView");
// Criando a função de prompt
const prompt = (0, prompt_sync_1.default)();
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        const alunoController = new AlunoController_1.AlunoController();
        const disciplinaController = new DisciplinaController_1.DisciplinaController();
        const bibliotecaController = new BibliotecaController_1.BibliotecaController();
        const alunoView = new AlunoView_1.AlunoView(alunoController);
        const disciplinaView = new DisciplinaView_1.DisciplinaView(disciplinaController);
        const bibliotecaView = new BibliotecaView_1.BibliotecaView(bibliotecaController);
        // // Pedindo o ID do aluno ao usuário
        // const idAluno = prompt("Por favor, insira o ID ou o NOME do aluno que deseja buscar: ");
        // await alunoView.buscarAluno(idAluno);
        // await bibliotecaView.mostrarLivros();
        yield disciplinaView.mostrarDisciplinas();
    });
}
main();
