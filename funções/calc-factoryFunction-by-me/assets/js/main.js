const table = document.querySelector("table");
const display = document.querySelector(".display");

let values = [];
let resultOperation;

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
      display.value = resultOperation;
    } else {
      if (valueElement !== undefined) {
        display.value += valueElement;
      }
      values.push(valueElement);
    }
  }
});
