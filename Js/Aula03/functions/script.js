// Continuação de funções

//ex. funções de primeira ordem: são funçoes tratadas como qualquer outro valor no Js.
//como se fossem um number, string, object ou mesmo uma colection

//ex1.
let minhaFuncao = function() {
    console.log('Olá Mundo!')
}

//ex2.
function aplicarOperacao(lista, operacao) {
    const resultado = [];
    for (let i = 0; i < lista.lenght; i++) {

        resultado.push(operacao(lista[i]));
    }
    return resultado;
}

//arrow function
(parametros) => {

    //corpo da função
}

//tradicional
function adicionar(x, y) {
    return x + y;
}

//arrow function
//1.

const add = (x, y) => {
    return x + y;
}

//2;
const somar = (x, y) => x + y;

//3.
let numero = 2;
const dobro = numero => numero * 2;

//função pura
function mais(a, b) {
    return a + b;
}

console.log(mais(2, 4));
let resultado = mais(5, 10);
console.log(resultado);

//função impura
function mostrarMensagem(mensagem) {
    console.log(mensagem);
}

mostrarMensagem('Olá Mundo!');