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
exports.BibliotecaController = void 0;
const LivroModel_1 = require("../models/LivroModel");
class BibliotecaController {
    constructor() {
        this.reservas = [];
    }
    listar() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield new LivroModel_1.Livro({}).listarLivros();
        });
    }
    buscar(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const livros = yield this.listar();
            return livros.find(l => l.id === id) || null;
        });
    }
    adicionar(livro) {
        return __awaiter(this, void 0, void 0, function* () {
            if (livro.status === 'disponível') {
                this.reservas.push(livro);
            }
            else {
                console.log("Livro não disponível para reserva.");
            }
        });
    }
    remover(id) {
        return __awaiter(this, void 0, void 0, function* () {
            this.reservas = this.reservas.filter(l => l.id !== id);
        });
    }
}
exports.BibliotecaController = BibliotecaController;
