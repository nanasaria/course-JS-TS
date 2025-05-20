/* 
Promises 
Representam o resultado futuro de uma operação
assíncrona.

Características:

1. Estados: 
- Pending: Operação ainda não concluída.
- Fullfilled: A operação foi concluída.
- Rejected: A operação falhou.

2. Métodos principais:
.then() - Manipula o resultado bem-sucedido.
.catch() - Captura e trata erros.
.finally() - Executa o código independentemente do resultado.

3. Métodos estáticos úteis:
Promise.all() - Aguarda todas as promises serem resolvidas.
Promise.race() - Retorna o resultado da primeira promise 
resolvida.
Promise.resolve() - Cria uma promise já resolvida.
Promise.reject() - Cria uma promise já rejeitada.
*/

function esperaAi(msg, tempo) {
  /* 
    Construtor da Promise que recebe uma função.
    A função tem 2 parâmetros:
    1 - resolve: Executa um código bem sucedido.
    2 - reject: Rejeita um código que deu erro.
    */
  return new Promise((resolve, reject) => {
    if (typeof msg !== "string") reject("Não é uma string");
    setTimeout(() => {
      console.log(msg);
      resolve(msg); /* -> Resolvendo a promise */
    }, tempo);
  });
}

/* 
then é executado quando resolver a Promise e sempre que 
chamarmos o resolve, o then() é executado.
Sempre que chamarmos o reject, o catch é executado.

then() e catch() também recebem funções.
Podemos retornar outra Promise dentro de um then().

Se houver um erro (reject), vai direto para o catch().
*/
esperaAi("Frase", 3000)
  .then((resposta) => {
    console.log(resposta);
    return esperaAi("Frase 2", 5000);
  })
  .then((resposta) => {
    console.log(resposta);
  })
  .catch((e) => {
    console.log("ERRO", e);
  });

const promises = [
  "Primeiro valor",
  esperaAi("Promise 1", 3000),
  esperaAi("Promise 2", 500),
  esperaAi("Promise 3", 1000),
  "Outro valor",
];

/* Para resolver todas as promises */
Promise.all(promises)
  .then((valor) => {
    console.log(valor);
  })
  .catch((erro) => {
    console.log(erro);
  });

/*
  Async/Await

  Comumente utilizado com try/catch para tratar erros.

  O Async/Await permite escrever código assíncrono.

  Async: Palavra-chave que declara uma função assíncrona.
  Await: Palavra-chave que pausa a execução da função até que uma
  Promise seja resolvida.

  - Funções async sempre retornam uma Promise.
  - O await só pode ser usado dentro de funções async.
  - Tratamento de erros com Try/catch
*/

async function executa() {
  const frase1 = await esperaAi("Frase 1 no executa", 5000);
  console.log(frase1);

  const frase2 = await esperaAi("Frase 2 no executa", 2000);
  console.log(frase2);
}

executa();
