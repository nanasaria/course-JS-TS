/**
 * Seletor para a tabela da calculadora
 * @type {HTMLTableElement}
 */
const table = document.querySelector("table");

/**
 * Seletor para o display da calculadora
 * @type {HTMLInputElement}
 */
const display = document.querySelector(".display");

/**
 * Array para armazenar os valores e operadores inseridos pelo usuário
 * @type {Array<string>}
 */
let values = [];

/**
 * Variável para armazenar o resultado da operação
 * @type {number|undefined}
 */
let resultOperation;

/**
 * Factory function que cria uma calculadora
 * @returns {Object} Objeto calculadora com métodos para realizar operações
 */
function calculadora() {
  const { firstValue, secondValue } = divideValues();

  // Operando apenas 2 valores
  return {
    firstValue,
    secondValue,
    /**
     * Calcula o resultado da operação entre dois valores
     * @returns {number} Resultado da operação matemática
     */
    calculate: function () {
      if (values.includes("+")) {
        return Number(this.firstValue) + Number(this.secondValue);
      }
      if (values.includes("-")) {
        return Number(this.firstValue) - Number(this.secondValue);
      }
      if (values.includes("**")) {
        return Number(this.firstValue) ** Number(this.secondValue);
      }
      if (values.includes("*")) {
        return Number(this.firstValue) * Number(this.secondValue);
      }
      if (values.includes("/")) {
        return Number(this.firstValue) / Number(this.secondValue);
      }
    },
    /**
     * Remove o último valor inserido no display e no array de valores
     */
    deleteOneValue: function () {
      const value = display.value;
      values.pop();
      const newValue = value.slice(0, -1);
      display.value = newValue;
    },
    /**
     * Limpa o display e o array de valores
     */
    resetValues: function () {
      display.value = "";
      values = [];
    },
  };
}

/**
 * Divide os valores inseridos em dois operandos separados pelo operador
 * @returns {Object} Objeto contendo o primeiro e segundo valor da operação
 */
function divideValues() {
  let firstValue;
  let secondValue;

  const operators = ["+", "-", "*", "/"];

  const indexOperator = values.findIndex((value) => operators.includes(value));

  firstValue = values.slice(0, indexOperator).join("").toString();
  secondValue = values
    .slice(indexOperator + 1)
    .join("")
    .toString();

  return { firstValue, secondValue };
}

/**
 * Event listener para os cliques na calculadora
 * Gerencia todas as interações do usuário com os botões da calculadora
 */
table.addEventListener("click", (e) => {
  const tagElement = e.target.tagName;
  const valueElement = e.target.textContent;

  const calc = calculadora();

  if (tagElement === "BUTTON") {
    if (valueElement === "C") {
      // Limpa todos os valores
      calc.resetValues();
    } else if (valueElement === "«") {
      // Remove o último valor inserido
      calc.deleteOneValue();
    } else if (valueElement === "=") {
      // Calcula o resultado da operação
      resultOperation = calc.calculate();

      // Verifica se o resultado é válido
      if (isNaN(resultOperation)) {
        display.value = "";
        return alert("Não foi possível calcular.");
      }

      if (resultOperation === undefined) {
        display.value = "";
        return alert("Não foi possível calcular.");
      }

      // Exibe o resultado no display
      display.value = resultOperation;
    } else {
      // Adiciona o valor ao display e ao array de valores
      if (valueElement !== undefined) {
        display.value += valueElement;
      }
      values.push(valueElement);
    }
  }
});