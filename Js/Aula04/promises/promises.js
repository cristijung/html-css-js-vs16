
const tempo = (duration) => {
    return new Promise((resolve, reject) => {
      setTimeout(resolve, duration);
    });
  };  
  tempo(4000).then(function () {
    console.log("Apareceu depois de 4s");
  });

  // outro exemplo
  //sintaxe do fluxo de uma Promise
  function umaFuncao() {
    return new Promise((resolve, reject) => {
        const sucesso = false;

        if (sucesso) {
            resolve('Operação bem sucedida');
        } else {
            reject('Erro na operação;')
        }
    });
  }

  umaFuncao()
  .then((resultado) => {
    console.log(resultado)
  })
  .catch((erro) => {
    console.log(erro);
  })