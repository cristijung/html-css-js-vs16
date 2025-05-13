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
var CategoriaGato;
(function (CategoriaGato) {
    CategoriaGato["Egracado"] = "funny";
    CategoriaGato["Gordo"] = "chubby";
    CategoriaGato["Fofo"] = "fluffy";
})(CategoriaGato || (CategoriaGato = {}));
function buscarImagemGato(categoria) {
    return __awaiter(this, void 0, void 0, function* () {
        const apiUrl = `https://api.thecatapi.com/v1/images/search?category=${categoria}`;
        const resposta = yield fetch(apiUrl);
        if (!resposta.ok) {
            throw new Error(`Erro na requisição: ${resposta.status} ${resposta.statusText}`);
        }
        const dados = yield resposta.json();
        return dados[0];
    });
}
function exibirInformacoes(gato) {
    console.log(`
        Id do Gato: ${gato.id}
        URL da Imagem: ${gato.url}
        Categorias: ${gato.categories ? gato.categories.map((cat) => cat.name).join(", ")
        : 'N/'}
        `);
}
