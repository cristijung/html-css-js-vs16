//enumeradores

enum Cor {
    Vermelho,
    Verde,
    Amarelo,
    Azul,
    Roxo,
}

let minhaCor: Cor = Cor.Vermelho;
console.log(minhaCor);

enum DiaDaSemana {
    Domingo,
    Segunda,
    Terça,
    Quarta,
    Quinta,
    Sexta,
    Sábado,
}

function obterDiaDaSemana(dia: DiaDaSemana): string {
    switch (dia) {
        case DiaDaSemana.Domingo:
            return "Domingo";
        case DiaDaSemana.Segunda:
            return "Segunda";
        case DiaDaSemana.Terça:
            return "Terça";
        case DiaDaSemana.Quarta:
            return "Quarta";
        case DiaDaSemana.Quinta:
            return "Quinta";
        case DiaDaSemana.Sexta:
            return "Sexta";
        case DiaDaSemana.Sábado:
            return "Sábado";
    }
}

enum StatusCodes {
    NotFound = 404,
    Success = 200,
    Accepted = 202,
    BadRequest = 400,
    BadGateway = 500,
}

console.log(StatusCodes.Accepted);
