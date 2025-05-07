const table = document.querySelector("table");
const display = document.querySelector(".display");

let values = [];
let resultOperation;

function calculadora() {
  const { firstValue, secondValue } = divideValues();

  return {
    firstValue,
    secondValue,
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
    deleteOneValue: function () {
      const value = display.value;
      values.pop();
      const newValue = value.slice(0, -1);
      display.value = newValue;
    },
    resetValues: function () {
      display.value = "";
      values = [];
    },
  };
}

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

table.addEventListener("click", (e) => {
  const tagElement = e.target.tagName;
  const valueElement = e.target.textContent;

  const calc = calculadora();

  if (tagElement === "BUTTON") {
    if (valueElement === "C") {
      calc.resetValues();
    } else if (valueElement === "«") {
      calc.deleteOneValue();
    } else if (valueElement === "=") {
      resultOperation = calc.calculate();

      if (isNaN(resultOperation)) {
        display.value = "";
        return alert("Não foi possível calcular.");
      }

      if (resultOperation === undefined) {
        display.value = "";
        return alert("Não foi possível calcular.");
      }

      display.value = resultOperation;
    } else {
      if (valueElement !== undefined) {
        display.value += valueElement;
      }
      values.push(valueElement);
    }
  }
});
