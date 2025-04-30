/*
Calculadora com factoryFunction

Contas normais

se tiver ** vira uma potência

parênteses executa a conta primeiro

Se não for possível fazer a conta, 
retorna erro em um alert: Conta inválida

O que pensei:
Pegar value dos botões depois de clicado.
Pegar input.
Executar apenas depois de apertar 
no botão de =.
*/

const table = document.querySelector("table");

const values = [];

table.addEventListener("click", (e) => {
  const tagElement = e.target.tagName;
  const valueElement = e.target.textContent;

  if (tagElement === "BUTTON") {
    if (valueElement === "C") {
      console.log("C");
    } else if (valueElement === "«") {
      console.log("Delete");
    } else {
      values.push(valueElement);
    }
  }

  console.log(values);
});

function calculadora() {}
