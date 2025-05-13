//isso não se faz
var valorDesconhecido = unknown;
valorDesconhecido = 10;
valorDesconhecido = 'Olá';
valorDesconhecido = { nome: 'Ana', idade: 30 };
console.log(valorDesconhecido.nome);
if (typeof valorDesconhecido === 'object' && valorDesconhecido !== null && 'nome' in valorDesconhecido) {
    console.log(valorDesconhecido.toLowerCase());
}
