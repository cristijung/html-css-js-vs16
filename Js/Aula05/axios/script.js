//axios

const catContainer = document.getElementById('cat-container');

axios.get(`https://api.thecatapi.com/v1/images/search`)
.then(response => {
    const [catData] = response.data;

    //na linha: Object.entries({...catData}) --> Cria uma cópia superficial do objeto catData usando o spread operator (...).
    // usa Object.entries() para converter essa cópia em um array de arrays,
    // onde cada subarray contém a chave e o valor de uma propriedade do objeto.
    // ex: [['name', 'Whiskers'], ['age', 3]]
    const catCard = `
        <div class="cat-card">
        <img src='${catData.url}' alt='Gato maravilhos' />
        <h3>Detalhes do gato</h3>
        <ul>
            ${Object.entries({...catData}).map(([key, value]) => ` 
                <li><b>${key}: </b> ${value}</li>
            `).join('')}
        </ul>        
        </div>
    `

    catContainer.innerHTML += catCard;
})

.catch(error => {
    console.error('Erro ao buscar a imagem', error);
})
