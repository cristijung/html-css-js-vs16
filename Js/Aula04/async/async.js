//async e await

async function esperarESaudar(nome) {
    console.log(`Oi, ${nome}! Aguarde um momento ....`);

    await new Promise(resolve => setTimeout(resolve, 2000));
    console.log(`Prazer em te conhecer, ${nome}`);
}

esperarESaudar('Ana Banana');