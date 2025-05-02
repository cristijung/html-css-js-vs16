//variaveis e tipos 

//com var
var altura = 6;
var comprimento = 22;
area = altura * comprimento;
var area;
console.log(area);

//com let
let areas;
let alturas = 8;
let comprimentos = 22;
areas = alturas * comprimentos;
console.log(areas);

//com const
const forma = 'quadrado';
const alturaTres = 125698.789;
const comprimentoTres = 24;
let areaTres;

if (forma === 'quadrado') {
    areaTres = alturaTres * comprimentoTres;
} else {
    areaTres = (alturaTres * comprimentoTres) / 2;
}

console.log(areaTres);

//trabalhando com strings
let nome = 'Ana';
let idade = 32;
let alturaPessoa = 1.74;
let peso = 58.89;
let dados = "Nome: ".concat(nome, "- Idade: " + idade + " - Altura: " + altura);

console.log(nome + idade + alturaPessoa + peso);
console.log("Nome: " + nome + "\nIdade: " + idade + "\nAltura: " + alturaPessoa + "\nPeso: " + peso);
console.log(`Nome: ${nome} - Idade: ${idade} - Altura: ${alturaPessoa}, com peso de: ${peso}`);
console.log(dados);

const cidade = 'Porto Alegre';
const municipio = 'PORTO ALEGRE';
const maiusculo = cidade.toUpperCase();
console.log(cidade);
console.log(cidade === maiusculo);
console.log(maiusculo === municipio);

const numUm = 456;
const numDois = '789';
const numTres = 12;
console.log(numUm + numDois + numTres); //só concatena
console.log(numUm + numTres + numDois); //soma os 2 primeiros e concatena o terceiro
console.log(numUm + Number(numDois) + numTres); //converteu o numDois em número e somou os valores

// = operador de atribuição
// == igualdade abstrata: compara dois valores após realizar a conversaõ do tipo
// os valores não precisam ter o mesmo tipo
// === igualdade estrita: os valores devem ser os mesmos e do mesmo tipo

let numero = 5;
let texto = '5';
console.log(numero == texto); //true
console.log(numero === texto); //false

let var1 = null;
let var2;  //indefinido - undefined

console.log(var1 == var2);
console.log(var1 === var2);

//undefined, null e NaN

//undefined
let nomes;
console.log(nomes);


//NaN - Not a Number
//representa um valor numérico que não é um número válido
let valor = 'abc';
console.log(Number(valor)); 
console.log(5 + NaN);
console.log (Infinity * 0);

console.log(isNaN(NaN));
console.log(isNaN('123')); //saída false pq '123' pode ser convertido em nº
console.log(isNaN('abcd')); //true

//null
//valor q representa ausência de um valor
let sobrenome = 'Silva';
sobrenome = null;
console.log(sobrenome);
console.log(typeof null);
//o tipo de null é object e isso é um erro q faz parte do Js

