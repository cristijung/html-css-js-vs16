"use strict";
// sempre para 'executar' o .ts é necessário o compiler
// tsc nome_arquivo.ts
//depois executar no terminal o Js
// se der problema no compiler do Ts
// npm i -g typescript
//tipos básicos do Ts
var objetoCasa = 'Ropeiro';
let idade = '24';
let idades = 36;
let peso = 1.75;
const CIDADE = 'Porto Alegre';
let cores = 'vermelho'; //tipo inferido
//arrays
let num = [1, 2, 3];
let listaNomes = ['Ana', 'Bia', 'Caio'];
//types
let codigo;
codigo = 'abc';
codigo = 123;
//função genérica
function identidade(argumento) {
    return argumento;
}
let resUm = identidade('Olá mundoooo!');
let resDois = identidade(123);
let respostaUm = { resposta: 'olá' };
let respostaDois = { resposta: 123 };
let respostaTres = { resposta: false };
//let resultado: Teste = { vlr1: 12345};
