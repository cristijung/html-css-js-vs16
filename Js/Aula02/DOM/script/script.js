
//ex1. destacar texto
function destacarTexto() {
    let elemento = document.getElementById('paragrafo');
    elemento.classList.toggle('destacado');
}

//ex2. contador

let count = 0;

function incrementarUm() {
    atualizar(++count);
}

function decrementarUm() {
    if (count > 0) {
        atualizar(--count);
    }
}

function resetarCount() {
    count = 0;
    atualizar(count);
}

function atualizar(count) {
    document.getElementById('trocar').innerText = count;
}

// innerText --> foco é no texto, com a renderização do texto. Herda estilização do CSS
// innerHTML --> foco no conteúdo do HTML, lida com este conteúdo e sua aplicação é mais completa, porém tem 
// 2 fatores importantes: 1- ignora estilização - é só elemento HTML
// 2 - se atribuirmos uma string ao innerHTML, o navegador vai interpretar essa string como um código HTML e,
// isso significa q podemos mudar os elementos de forma dinâmica.


//ex3. script tabuada
function calcularTabuadaDOM() {
    const numeroInput = document.getElementById('numeroTabuada');
    const resultadoDiv = document.getElementById('resultadoTabuada');
    const numero = parseInt(numeroInput.value);

    resultadoDiv.innerHTML = ''; //p limpar qualquer resultado anterior

    if (isNaN(numero) || !Number.isInteger(numero)) {
        resultadoDiv.textContent = 'Por favor, insira um nº inteiro válido.';
        return;
    }

    const tituloTabuada = document.createElement('h2');
    tituloTabuada.textContent = `Tabuada do ${numero}`;
    resultadoDiv.appendChild(tituloTabuada);

    const listaTabuada = document.createElement('ul');
    for (let i = 1; i <= 10; i++) {
        const resultado = numero * i;
        const itemLista = document.createElement('li');
        itemLista.textContent = `${numero} x ${i} = ${resultado}`;
        listaTabuada.appendChild(itemLista);
    }

    resultadoDiv.appendChild(listaTabuada);
}