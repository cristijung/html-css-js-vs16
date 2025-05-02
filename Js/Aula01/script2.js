//tipos primitivos e não primitivos

const text1 = 'Oi';
const text2 = '12365.78999';
const text3 = 'Ana Banana é uma música do TNT';
let text4 = 128;
const text5 = 128.78;
const text6 = 'Maçã';

//Tipos Não primitivos
//um objeto
let pessoa = {
    nome: 'Ana Banana',
    idade: 28,
    cidade: 'Porto Alegre'
};

//array
let cores = ['vermelho', 'verde', 'amarelo', 'laranja'];

//função
function somar(a, b) {
    return a + b;     
}

//tipos:
//primitivo: undefined, null, boolean, number, string, bigin, symbol
//não primitivo: object, array, function, date, RegExp, map, set - na forma manipular os dados - string

//exemplos
let array1 = [1, 2, 3];
let array2 = array1; // cópia por referência
array2.push(4);
console.log(array1);
console.log(array2);

let frutas = ['maçã', 'banana', 'laranja', 'morango'];
console.log(frutas);
//acessar um elemento
console.log(frutas[0]);

//add um elemento
frutas.push('uva');
console.log(frutas);

//remover um elemento no início
frutas.shift();
console.log(frutas);

//iterando sobre os elementos do array
for (let i = 0; i < frutas.length; i++) {
    console.log(frutas[i]);
}

frutas.forEach(function(frutas){
    console.log(frutas);
})

frutas[2] = 'melancia';
console.log(frutas);
frutas.unshift('jaca');
console.log(frutas);

//array de objetos
let livros = [
    {titulo: 'It', autor: 'Stephen King', ano: 1974, genero: 'Terror'},
    {titulo: 'Drácula', autor: 'Bram Stoker', ano: 1878, genero: 'Terror'},
    {titulo: 'Crime e Castigo', autor: 'Dostoevsky', ano: 1874, genero: 'Suspense'},
];
console.log(livros);