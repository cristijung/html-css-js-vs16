"use strict";
let produtos = [];
let formCadastroProduto = null;
let tabelaProdutosBody; // Remove o null daqui
document.addEventListener('DOMContentLoaded', () => {
    formCadastroProduto = document.getElementById('form-cadastro-produto');
    tabelaProdutosBody = document.querySelector('#tabela-produtos tbody'); // inicializa aqui
    if (formCadastroProduto) {
        formCadastroProduto.addEventListener('submit', (event) => {
            event.preventDefault();
            cadastrarProduto();
        });
    }
    atualizarTabelaProdutos(); // chamada inicial para exibir dados (se houver....)
});
function cadastrarProduto() {
    const nomeInput = document.getElementById('nome');
    const descricaoInput = document.getElementById('descricao');
    const codigoInput = document.getElementById('codigo');
    const precoCustoInput = document.getElementById('preco-custo');
    const precoVendaInput = document.getElementById('preco-venda');
    const estoqueInput = document.getElementById('estoque');
    const categoriaInput = document.getElementById('categoria');
    if (nomeInput && precoVendaInput && estoqueInput && categoriaInput) {
        const novoProduto = {
            nome: nomeInput.value,
            descricao: descricaoInput === null || descricaoInput === void 0 ? void 0 : descricaoInput.value,
            codigo: codigoInput === null || codigoInput === void 0 ? void 0 : codigoInput.value,
            precoCusto: precoCustoInput === null || precoCustoInput === void 0 ? void 0 : precoCustoInput.valueAsNumber,
            precoVenda: precoVendaInput.valueAsNumber,
            estoque: estoqueInput.valueAsNumber,
            categoria: categoriaInput.value
        };
        produtos.push(novoProduto);
        atualizarTabelaProdutos();
        formCadastroProduto === null || formCadastroProduto === void 0 ? void 0 : formCadastroProduto.reset();
    }
    else {
        console.error("Algum elemento do formulário não foi encontrado.");
    }
}
function atualizarTabelaProdutos() {
    tabelaProdutosBody.innerHTML = '';
    produtos.forEach((produto, index) => {
        const row = tabelaProdutosBody.insertRow();
        const nomeCell = row.insertCell();
        nomeCell.textContent = produto.nome;
        const codigoCell = row.insertCell();
        codigoCell.textContent = produto.codigo || '-';
        const precoVendaCell = row.insertCell();
        precoVendaCell.textContent = produto.precoVenda.toFixed(2);
        const estoqueCell = row.insertCell();
        estoqueCell.textContent = produto.estoque.toString();
        const actionsCell = row.insertCell();
        const editarButton = document.createElement('button');
        editarButton.textContent = 'Editar';
        editarButton.addEventListener('click', () => editarProduto(index));
        actionsCell.appendChild(editarButton);
        const excluirButton = document.createElement('button');
        excluirButton.textContent = 'Excluir';
        excluirButton.addEventListener('click', () => excluirProduto(index));
        actionsCell.appendChild(excluirButton);
    });
}
function editarProduto(index) {
    console.log(`Editar produto no índice: ${index}`);
    // colocar a lógica de edição (abrir formulário preenchido, etc.)
}
function excluirProduto(index) {
    if (confirm(`Tem certeza que deseja excluir o produto "${produtos[index].nome}"?`)) {
        produtos.splice(index, 1);
        atualizarTabelaProdutos();
    }
}
