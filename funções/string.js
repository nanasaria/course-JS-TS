/*
Funções - Avançado

Maneiras de declarar função:

1. function saudacao() {} -> Function hoisting
    A engine do JavaScript vai elevar as declarações de funções e variáveis
    declaradas com a palavra "var" para o topo do JavaScript. Ou seja,
    você pode chamar sua função antes da declaração dela.

As funções são First-class objects (Objetos de primeira classe).
Você pode lidar com uma função como se fosse um dado.

2. const souUmDado = function () {} -> Function expression
    Essa função pode ser parâmetro de outra função. Ex:
    function executaFuncao(funcao) {funcao()}
    executaFuncao(souUmDado)

3. const funçãoArrow = () => {} - Arrow Function
    Funciona como a função expression.

4. Função dentro de um Objeto

const objeto = {
    falar: function() {
        console.log("Falando...")
    }
}
objeto.falar()

Pârametros da função

Quando definimos uma função com a palavra function, fica disponível
uma variável chamada arguments que fica disponível todos os argumentos
que você envia para a função mesmo que ela não tenha parâmetros.
*/

function exemploFuncao() {
  console.log(arguments[0]); // Valor
}

exemploFuncao("Valor", 1, 2, 3, 4, 5);

/*

*/
