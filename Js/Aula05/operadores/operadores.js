//operadores
//operadores Spread(...)

const array1 = [1, 2, 3, 4];
const array2 = [0, ...array1, 5];
console.log(array2);

//passando uma função
function somar(a, b, c) {
    return a + b + c;
}

const numeros = [22, 45, 60];
const resultado = somar(...numeros);
console.log(resultado);

//copiando
const arrayOriginal = [1, 2, 3];
const arrayCopia = [...arrayOriginal];

arrayCopia.push(4);
console.log(arrayOriginal);
console.log(arrayCopia);

const objetoOriginal = { nome: 'Ana', idade: 24};
const objetoCopia = { ...objetoOriginal, profissao: 'Dentista' };

console.log(objetoOriginal);
console.log(objetoCopia);

//concatenar arrays
const arrayUm = [1, 2, 3, 4, 5];
const arrayDois = [10, 22, 34, 48, 52];
const arrayConcatenado = [...arrayUm, ...arrayDois];
console.log(arrayConcatenado);

//-------------------------------------------------
//Operador Rest(...)

//coletandp argumentos em uma função

function minhaFuncao(primeiro, segundo, ...restante) {
    console.log('Primeiro: ', primeiro);
    console.log('Segundo: ', segundo);
    console.log('Restante: ', restante);
}

minhaFuncao(10, 20, 30, 40, 50, 60);

//----------------------------------------------
// Desestruturação

//com objeto
const pessoa = { nome: 'Ana', idade: 34, cidade: 'POA', profissao: 'Desenvolvedoera'};
const { nome, idade, ...detalhes} = pessoa;

console.log('O Nome é: ', nome);
console.log(idade);
console.log(detalhes);

const user = { nomes: 'Bia', idades: 34, email: 'bia@email.com' };
const { nomes, idades } = user;
console.log(nomes);
console.log(idades);
const { email: enderecoEmail1 } = user; 
console.log(enderecoEmail1);

//com arrays
const cores = ['vermelho', 'verde', 'roxo'];

const [corUm, corDois] = cores;
console.log(corUm);
console.log(corDois);

const[elementoUm, elementoTres] = cores;
console.log(elementoUm);
console.log(elementoTres);

//usando o rest para obter todos os elementos
frutas = ['morango', 'uva', 'maçã', 'abacaxi', 'mamão'];
const [head, ...tail] = frutas;
console.log(head);
console.log(tail);


//desestruturação aninhada
const pessoaDetalhada = {
    nome: 'Ana',
    idade: 28,
    endereco: {
        rua: 'R. ABC',
        num: 123,
        cidade: 'POA'
    }
};

const { nome: nomePessoa, endereco: {cidade} } = pessoaDetalhada;
console.log(nomePessoa);
console.log(cidade);

//com funções
function mostrarInfos({ name, age, city }) {
    console.log(`Nome: ${name}, Idade: ${age}, Cidade: ${city}`);
}

const pessoaFuncao = { name: 'Mariana', age: 28, city: 'Caxias do Sul'};
mostrarInfos(pessoaFuncao);

