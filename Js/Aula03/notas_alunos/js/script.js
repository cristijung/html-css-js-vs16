document.addEventListener('DOMContentLoaded', () => {
    const alunos = [];
    const listaAlunosElement = document.getElementById('alunos-lista');
    const btnCadastrar = document.getElementById('btn-cadastrar');
    const inputNome = document.getElementById('nome');
    const inputNota1 = document.getElementById('nota1');
    const inputNota2 = document.getElementById('nota2');
    const mediaTurmaElement = document.getElementById('media-turma');
    const cadastroAlunoDiv = document.getElementById('cadastro-aluno');
    let alunoEditandoIndex = -1; 

    const calcularMedia = (n1, n2) => (parseFloat(n1) + parseFloat(n2)) / 2;

    const exibirAlunos = () => {
        listaAlunosElement.innerHTML = '';

        alunos.forEach((aluno, indice) => {
            const listItem = document.createElement('li');
            let situacao = calcularMedia(aluno.notas[0], aluno.notas[1]) >= 7 ? 'aprovado' : 'reprovado';
            listItem.innerHTML = `
                Nome: ${aluno.nome}, Notas: ${aluno.notas.join(', ')},
                Média: ${calcularMedia(aluno.notas[0], aluno.notas[1]).toFixed(2)}
                <span class="${situacao}">${situacao.toUpperCase()}</span>
                <button class="btn btn-sm btn-warning btn-editar" data-index="${indice}">Editar</button>
                <button class="btn btn-sm btn-danger btn-excluir" data-index="${indice}">Excluir</button>
            `;
            listaAlunosElement.appendChild(listItem);
        });

        // add os listeners para os botões de editar e excluir após a renderização
        document.querySelectorAll('.btn-editar').forEach(button => {
            button.addEventListener('click', editarAluno);
        });

        document.querySelectorAll('.btn-excluir').forEach(button => {
            button.addEventListener('click', excluirAluno);
        });

        // calcula e exibe a média da turma usando reduce - observar direitinho o reduce 
        const somaMedias = alunos.reduce((acumulador, aluno) => {
            return acumulador + calcularMedia(aluno.notas[0], aluno.notas[1]);
        }, 0);

        const mediaDaTurma = alunos.length > 0 ? (somaMedias / alunos.length).toFixed(2) : 'Nenhum aluno cadastrado';
        mediaTurmaElement.textContent = `Média da Turma: ${mediaDaTurma}`;
    };

    const cadastrarEditarAluno = () => {
        const nome = inputNome.value.trim();
        const nota1 = inputNota1.value.trim();
        const nota2 = inputNota2.value.trim();

        if (nome && !isNaN(nota1) && !isNaN(nota2) && nota1 >= 0 && nota1 <= 10 && nota2 >= 0 && nota2 <= 10) {
            const novoAluno = {
                nome: nome,
                notas: [parseFloat(nota1), parseFloat(nota2)]
            };

            if (alunoEditandoIndex > -1) {
                alunos[alunoEditandoIndex] = novoAluno;
                alunoEditandoIndex = -1; // para resetar o índice de edição
                btnCadastrar.textContent = 'Cadastrar'; // alteração do texto do botão
            } else {
                alunos.push(novoAluno);
            }

            inputNome.value = '';
            inputNota1.value = '';
            inputNota2.value = '';
            exibirAlunos();
        } else {
            alert('Por favor, preencha o nome e as notas corretamente (0 a 10).');
        }
    };

    const editarAluno = (event) => {
        const indice = parseInt(event.target.dataset.index);
        const alunoParaEditar = alunos[indice];

        inputNome.value = alunoParaEditar.nome;
        inputNota1.value = alunoParaEditar.notas[0];
        inputNota2.value = alunoParaEditar.notas[1];
        alunoEditandoIndex = indice;
        btnCadastrar.textContent = 'Salvar Edição';
        cadastroAlunoDiv.scrollIntoView({ behavior: 'smooth' }); 
    };

    const excluirAluno = (event) => {
        const indice = parseInt(event.target.dataset.index);
        if (confirm(`Tem certeza que deseja excluir o aluno "${alunos[indice].nome}"?`)) {
            alunos.splice(indice, 1);
            exibirAlunos();
        }
    };

    btnCadastrar.addEventListener('click', cadastrarEditarAluno);

    // exibe a lista inicial (vazia)
    exibirAlunos();
});




