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
const AlunoController_1 = require("./Controllers/aluno/AlunoController");
const AlunoView_1 = require("./views/AlunoView");
// Criando a função de prompt
const prompt = (0, prompt_sync_1.default)();
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        const alunoController = new AlunoController_1.AlunoController();
        const alunoView = new AlunoView_1.AlunoView(alunoController);
        let opcao;
        do {
            console.log('\nEscolha uma opção:');
            console.log('1. Listar alunos de História');
            console.log('2. Buscar aluno por ID ou nome');
            console.log('0. Sair');
            opcao = prompt('Digite a opção: ');
            switch (opcao) {
                case '1':
                    yield alunoView.mostrarAlunosDeHistoria();
                    break;
                case '2':
                    const idOuNome = prompt('Digite o ID ou nome do aluno: ');
                    yield alunoView.mostrarDetalhesAluno(idOuNome);
                    break;
                case '0':
                    console.log('Saindo...');
                    break;
                default:
                    console.log('Opção inválida. Tente novamente.');
                    break;
            }
        } while (opcao !== '0');
    });
}
main();
