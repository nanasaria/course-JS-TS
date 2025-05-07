function Calculator() {
  this.display = document.querySelector(".display");
  this.start = () => {
    clickButtons();
    pressEnter();
  };

  const pressEnter = () => {
    this.display.addEventListener("keyup", (e) => {
      if (e.keyCode === 13) {
        realizeOperation();
      }
    });
  };

  const clearDisplay = () => {
    this.display.value = "";
  };

  const deleteOneValue = () => {
    this.display.value = this.display.value.slice(0, -1);
  };

  const clickButtons = () => {
    document.addEventListener("click", (e) => {
      const el = e.target;

      if (el.classList.contains("btn-num")) {
        displayText(el.innerText);
      }
      if (el.classList.contains("btn-clear")) {
        clearDisplay();
      }
      if (el.classList.contains("btn-del")) {
        deleteOneValue();
      }

      if (el.classList.contains("btn-eq")) {
        realizeOperation();
      }
    });
  };

  const displayText = (text) => {
    this.display.value += text;
  };

  const realizeOperation = () => {
    let expression = this.display.value;

    try {
      expression = eval(expression);

      if (!expression) {
        alert("Conta inválida");
        this.clearDisplay();
        return;
      }

      this.display.value = expression;
    } catch (error) {
      alert("Conta inválida");
      return;
    }
  };
}

const calculadora = new Calculator();
calculadora.start();
