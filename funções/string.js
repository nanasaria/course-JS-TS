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
*/
