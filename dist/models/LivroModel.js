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
exports.Livro = void 0;
const axios_1 = __importDefault(require("axios"));
const BASE_URL_BIBLIOTECA = 'https://qiiw8bgxka.execute-api.us-east-2.amazonaws.com/acervo/biblioteca';
class Livro {
    constructor(data) {
        Object.assign(this, data);
    }
    listarLivros() {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield axios_1.default.get(BASE_URL_BIBLIOTECA);
            if (!Array.isArray(response.data)) {
                console.error("Os dados retornados não são um array:", response.data);
                return [];
            }
            return response.data.map((livro) => new Livro({
                id: livro.id,
                titulo: livro.titulo,
                autor: livro.autor,
                ano: livro.ano,
                status: livro.status
            }));
        });
    }
}
exports.Livro = Livro;
