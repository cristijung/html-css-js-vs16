// sempre para 'executar' o .ts é necessário o compiler
// tsc nome_arquivo.ts
//depois executar no terminal o Js
//tipos básicos do Ts
var objetoCasa = 'Ropeiro';
var idade = '24';
var idades = 36;
var peso = 1.75;
var CIDADE = 'Porto Alegre';
var cores = 'vermelho'; //tipo inferido
//arrays
var num = [1, 2, 3];
var listaNomes = ['Ana', 'Bia', 'Caio'];
//types
var codigo;
codigo = 'abc';
codigo = 123;
//função genérica
function identidade(argumento) {
    return argumento;
}
var resUm = identidade('Olá mundoooo!');
var resDois = identidade(123);
var respostaUm = { resposta: 'olá' };
var respostaDois = { resposta: 123 };
var respostaTres = { resposta: false };
//let resultado: Teste = { vlr1: 12345};
