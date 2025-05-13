"use strict";
const mercadoriaLoja = [
    { id: 1, nome: "Boné", preco: 124.99, categoria: "Acessórios" },
    { id: 2, nome: "Moleton", preco: 224.99, categoria: "Roupa" },
    { id: 3, nome: "Casaco", preco: 1325.99, categoria: "Roupa" },
    { id: 4, nome: "Sapato", preco: 670.99, categoria: "Acessórios" },
];
//função para listar todos os produtos
function listarProdutos(mercadoriaLoja) {
    mercadoriaLoja.forEach((produto) => {
        console.log(`ID: ${produto.id}, Produto: ${produto.nome}, Preço: ${produto.preco}, Categoria: ${produto.categoria}`);
    });
}
//função para filtrar
function filtrarProdutoPorCategoria(mercadoriaLoja, categoria) {
    return mercadoriaLoja.filter((produto) => produto.categoria === categoria);
}
//função para aumentar preços de todas mercadorias
function aumentarPreco(mercadoriaLoja, porcentagem) {
    return mercadoriaLoja.map((produto) => {
        const novoPreco = produto.preco * (1 + porcentagem / 100);
        const novoPrecoFormatado = parseFloat(novoPreco.toFixed(2));
        return Object.assign(Object.assign({}, produto), { preco: novoPrecoFormatado }); //retorna um novo objeto Produto, só q atualizada com o novo preço
    });
}
listarProdutos(mercadoriaLoja);
console.log("\n Produtos com Categoria Roupa: ");
listarProdutos(filtrarProdutoPorCategoria(mercadoriaLoja, "Roupa"));
const produtosComAumento = aumentarPreco(mercadoriaLoja, 10);
console.log("\n Produtos com aumento de 10%: ");
listarProdutos(produtosComAumento);
