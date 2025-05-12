//enumeradores
var Cor;
(function (Cor) {
    Cor[Cor["Vermelho"] = 0] = "Vermelho";
    Cor[Cor["Verde"] = 1] = "Verde";
    Cor[Cor["Amarelo"] = 2] = "Amarelo";
    Cor[Cor["Azul"] = 3] = "Azul";
    Cor[Cor["Roxo"] = 4] = "Roxo";
})(Cor || (Cor = {}));
var minhaCor = Cor.Vermelho;
console.log(minhaCor);
var DiaDaSemana;
(function (DiaDaSemana) {
    DiaDaSemana[DiaDaSemana["Domingo"] = 0] = "Domingo";
    DiaDaSemana[DiaDaSemana["Segunda"] = 1] = "Segunda";
    DiaDaSemana[DiaDaSemana["Ter\u00E7a"] = 2] = "Ter\u00E7a";
    DiaDaSemana[DiaDaSemana["Quarta"] = 3] = "Quarta";
    DiaDaSemana[DiaDaSemana["Quinta"] = 4] = "Quinta";
    DiaDaSemana[DiaDaSemana["Sexta"] = 5] = "Sexta";
    DiaDaSemana[DiaDaSemana["S\u00E1bado"] = 6] = "S\u00E1bado";
})(DiaDaSemana || (DiaDaSemana = {}));
function obterDiaDaSemana(dia) {
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
var StatusCodes;
(function (StatusCodes) {
    StatusCodes[StatusCodes["NotFound"] = 404] = "NotFound";
    StatusCodes[StatusCodes["Success"] = 200] = "Success";
    StatusCodes[StatusCodes["Accepted"] = 202] = "Accepted";
    StatusCodes[StatusCodes["BadRequest"] = 400] = "BadRequest";
    StatusCodes[StatusCodes["BadGateway"] = 500] = "BadGateway";
})(StatusCodes || (StatusCodes = {}));
console.log(StatusCodes.Accepted);
