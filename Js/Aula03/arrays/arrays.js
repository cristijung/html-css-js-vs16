//arrays

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const numDobrados = numeros.map(function(numero) {
    return numero * 2;
});
console.log(numDobrados);

const numPares = numeros.filter(function(numero) {
    return numero % 2 === 0;
});
console.log(numPares);

//filter e map 
const numParesDobrados = numeros.filter((numero) => numero % 2 === 0).map((numero) => numero * 2);
console.log(numParesDobrados);

console.log("\n--------------------------------------\n");
//reduce: soma os elementos do array acumulando seus valores e retorna somente 1 valor
const soma = numeros.reduce(function(acumulador, numero) {
    return acumulador + numero;
});
console.log(soma);

const somar = numeros.reduce((acumulador, numero) => acumulador + numero, 0);
console.log(somar);

const vazio = [];
//reduce com zero
const somarVazio = vazio.reduce((acumulador, numero) => acumulador + numero, 0);
console.log("Soma vazia com zero: ", somarVazio); 

// const adicionarVazio = vazio.reduce((acumulador, numero) => acumulador + numero);
// console.log("Soma vazia sem zero: ", adicionarVazio); //retorna erro