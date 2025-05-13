interface Produto {
    nome: string;
    descricao?: string;
    codigo?: string;
    precoCusto?: number;
    precoVenda: number;
    estoque: number;
    categoria: string;
}

let produtos: Produto[] = [];
let formCadastroProduto: HTMLFormElement | null = null;
let tabelaProdutosBody: HTMLTableSectionElement; 

document.addEventListener('DOMContentLoaded', () => {
    formCadastroProduto = document.getElementById('form-cadastro-produto') as HTMLFormElement | null;
    tabelaProdutosBody = document.querySelector('#tabela-produtos tbody') as HTMLTableSectionElement; // inicializa aqui

    if (formCadastroProduto) {
        formCadastroProduto.addEventListener('submit', (event) => {
            event.preventDefault();
            cadastrarProduto();
        });
    }

    atualizarTabelaProdutos(); // chamada inicial para exibir dados (se houver....)
});

function cadastrarProduto() {
    const nomeInput = document.getElementById('nome') as HTMLInputElement | null;
    const descricaoInput = document.getElementById('descricao') as HTMLTextAreaElement | null;
    const codigoInput = document.getElementById('codigo') as HTMLInputElement | null;
    const precoCustoInput = document.getElementById('preco-custo') as HTMLInputElement | null;
    const precoVendaInput = document.getElementById('preco-venda') as HTMLInputElement | null;
    const estoqueInput = document.getElementById('estoque') as HTMLInputElement | null;
    const categoriaInput = document.getElementById('categoria') as HTMLSelectElement | null;

    if (nomeInput && precoVendaInput && estoqueInput && categoriaInput) {
        const novoProduto: Produto = {
            nome: nomeInput.value,
            descricao: descricaoInput?.value,
            codigo: codigoInput?.value,
            precoCusto: precoCustoInput?.valueAsNumber,
            precoVenda: precoVendaInput.valueAsNumber,
            estoque: estoqueInput.valueAsNumber,
            categoria: categoriaInput.value
        };

        produtos.push(novoProduto);
        atualizarTabelaProdutos();
        formCadastroProduto?.reset(); 
    } else {
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

function editarProduto(index: number) {
    console.log(`Editar produto no índice: ${index}`);
    // colocar a lógica de edição (abrir formulário preenchido, etc.)
}

function excluirProduto(index: number) {
    if (confirm(`Tem certeza que deseja excluir o produto "${produtos[index].nome}"?`)) {
        produtos.splice(index, 1);
        atualizarTabelaProdutos();
    }
}