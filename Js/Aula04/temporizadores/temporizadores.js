//temporizadores

setTimeout(function() {
    console.log('Essa função será executada após 3 segundos');
}, 3000);

//---------------------------------------------------------------------
function operacaoAssincrona(tempo, callback) {
    console.log('Iniciando a operação assíncrona ...');

    // é só uma simulação - parte central
    setTimeout(function() {
        console.log(`Operação assíncrona concluída após ${tempo} milissegundos!`);
        callback();
    }, tempo);
}
operacaoAssincrona(4000, function() {
    console.log('O callback foi executado!!!');
});

console.log('Aqui será executado antes a "Operação Assíncrona"');

//--------------------------------------------------------
//setInterval
function mostrarHora() {
    const agora = new Date();
    console.log(`Hora atual: ${agora.toLocaleTimeString()}`);
}
const intervalo = setInterval(mostrarHora, 2000);

setTimeout(() => {
    clearInterval(intervalo);
    console.log('Hora parada');
});


//--------------------------------------------------------
function hora() {
    const agoraDois = new Date();
    const opcoes = { hour: '2-digit', minute: '2-digit', second: '2-digit'};
    console.log(`Hora atual: ${agoraDois.toLocaleTimeString('pt-br', opcoes)}`);
}
setInterval(hora, 1000);

