// sempre para 'executar' o .ts é necessário o compiler
// tsc nome_arquivo.ts
//depois executar no terminal o Js
// se der problema no compiler do Ts
// npm i -g typescript

//tipos básicos do Ts
var objetoCasa: string = 'Ropeiro';
let idade: string = '24';
let idades: number = 36;
let peso: number = 1.75;
const CIDADE: string = 'Porto Alegre'; 
let cores = 'vermelho'; //tipo inferido

//arrays
let num: number[] = [1, 2, 3];
let listaNomes: string[] = ['Ana', 'Bia', 'Caio'];

//interfaces 
interface Pessoa {
    nome: string;
    idade: number;
    altura: number;
    peso?: number | string; //o '?' significa q esta propriedade é opcional
    endereco: any;  //significa q esta propriedade pode receber dado de qualquer tipo
    ativo: boolean;
}

//types
let codigo: string | number;
codigo = 'abc';
codigo = 123;

interface Funcionario extends Pessoa {
    cargo: string;   
    setor: string;
    ferias: string;
    rendimentos: number;    
}

//função genérica
function identidade<T>(argumento: T): T {
    return argumento;
}

let resUm = identidade<string>('Olá mundoooo!');
let resDois = identidade<number>(123);

//interface genérica
interface Resposta<T> {
    resposta: T;
}

let respostaUm: Resposta<string> = {resposta: 'olá'};
let respostaDois: Resposta<number> = {resposta: 123};
let respostaTres: Resposta<boolean> = {resposta: false};

//assassinato do TypeScript
interface Teste {
    vlr1: any;
    vlr2: any;
    vlr3: any;
}
//let resultado: Teste = { vlr1: 12345};



