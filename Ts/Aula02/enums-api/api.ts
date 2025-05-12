enum CategoriaGato {
    Egracado = 'funny',
    Gordo = 'chubby',
    Fofo = 'fluffy',
}

type DadosGato = {
    id: string,
    url: string,
    categories?: { id: number, name: string }[];
};

async function buscarImagemGato(categoria: CategoriaGato): Promise<DadosGato> {
    const apiUrl = `https://api.thecatapi.com/v1/images/search?category=${categoria}`;
    const resposta = await fetch(apiUrl);

    if (!resposta.ok) {
        throw new Error(
            `Erro na requisição: ${resposta.status} ${resposta.statusText}`
        );
    }

    const dados: DadosGato[] = await resposta.json();
    return dados [0];
}

function exibirInformacoes(gato: DadosGato): void {
    console.log(`
        Id do Gato: ${gato.id}
        URL da Imagem: ${gato.url}
        Categorias: ${
            gato.categories ? gato.categories.map((cat) => cat.name).join(", ")
            : 'N/'
        }
        `);
}
