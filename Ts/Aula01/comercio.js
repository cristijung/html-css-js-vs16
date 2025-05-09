var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var mercadoriaLoja = [
    { id: 1, nome: "Boné", preco: 124.99, categoria: "Acessórios" },
    { id: 2, nome: "Moleton", preco: 224.99, categoria: "Roupa" },
    { id: 3, nome: "Casaco", preco: 1325.99, categoria: "Roupa" },
    { id: 4, nome: "Sapato", preco: 670.99, categoria: "Acessórios" },
];
//função para listar todos os produtos
function listarProdutos(mercadoriaLoja) {
    mercadoriaLoja.forEach(function (produto) {
        console.log("ID: ".concat(produto.id, ", Produto: ").concat(produto.nome, ", Pre\u00E7o: ").concat(produto.preco, ", Categoria: ").concat(produto.categoria));
    });
}
//função para filtrar
function filtrarProdutoPorCategoria(mercadoriaLoja, categoria) {
    return mercadoriaLoja.filter(function (produto) { return produto.categoria === categoria; });
}
//função para aumentar preços de todas mercadorias
function aumentarPreco(mercadoriaLoja, porcentagem) {
    return mercadoriaLoja.map(function (produto) {
        var novoPreco = produto.preco * (1 + porcentagem / 100);
        var novoPrecoFormatado = parseFloat(novoPreco.toFixed(2));
        return __assign(__assign({}, produto), { preco: novoPrecoFormatado }); //retorna um novo objeto Produto, só q atualizada com o novo preço
    });
}
listarProdutos(mercadoriaLoja);
console.log("\n Produtos com Categoria Roupa: ");
listarProdutos(filtrarProdutoPorCategoria(mercadoriaLoja, "Roupa"));
var produtosComAumento = aumentarPreco(mercadoriaLoja, 10);
console.log("\n Produtos com aumento de 10%: ");
listarProdutos(produtosComAumento);
