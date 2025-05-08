//fetch - função do js nativa
//async await

//função do btn
document.getElementById('fetch-cat').addEventListener('click', async() => {
    const catImages = await fetchImages(10);
    const catContainer = document.getElementById('cat-container');
    catContainer.innerHTML = '';

    catImages.forEach(catImages => {
        const card = createCard(catImages);
        catContainer.appendChild(card);
    });
});


//função async responsável por obter imgs da API
async function fetchImages(numberOfImages) {
    try {
        const response = await fetch(`https://api.thecatapi.com/v1/images/search?limit=${numberOfImages}`);
        if (!response.ok) {
            throw new Error("Ocorreu um erro de conexão" + response.statusText);
        }
        const data = await response.json();
        return data.map(item => item.url);
    } catch (error) {
        console.log("Ocorreu um erro com a operação Fetch", error);
        return[];
    }    
}

//função criando os cards
function createCard(imageUrl) {
    const card = document.createElement('div');
    card.className = `card col-md-4 mb-4 mx1`;
    card.innerHTML = `
        <img src="${imageUrl}" class="card-img-top" alt="Imagem de gato" />
        <div class="card-body">
            <h3>Gatos Lindos</h3>
            <p class="card-text">Gatinhos bonitinhos e maravilhosos</p>
        </div>
    `;
    return card;    
}


