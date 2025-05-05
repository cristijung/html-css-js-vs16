//ex. simples de função anônima e atribuída a uma variável
const dobrar = function (numero) {
  return numero * 2;
};

//ex. função nomeada e que pode não retornar um valor
function exibirOla(nome) {
  console.log(`Olá, ${nome}`);
}

exibirOla("Ana Banana");
let resultadoOla = exibirOla("João");
console.log(resultadoOla);

//ex. funções com múltiplos parametros
function nomeCompleto(nome, sobrenome) {
  return `${nome} ${sobrenome}`;
}

let infoNome = nomeCompleto("Ana", "Souza");
console.log(infoNome);

//ex. com parametro e iteração
function calcularTabuada(numero) {
  if (typeof numero !== "number" || !Number.isInteger(numero)) {
    return "Por favor, forneça um nº inteiro válido!";
  }

  console.log(`Tabuada do ${numero}: `);
  for (let i = 1; i <= 10; i++)
  {
    const resultado = numero * i;
    console.log(`${numero} x ${i} = ${resultado}`);
  }
}

calcularTabuada(2);
calcularTabuada(6);
calcularTabuada('dez');
calcularTabuada(3.5);

