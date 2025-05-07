/**
 * Calculadora que implementa operações matemáticas básicas através de uma interface web.
 * 
 * @constructor
 * @description Cria uma instância de calculadora que manipula o elemento de display
 *              e configura os eventos de clique e tecla para realizar operações matemáticas.
 */
function Calculator() {
  /**
   * Elemento de exibição da calculadora onde os números e resultados são mostrados.
   * @type {HTMLElement}
   */
  this.display = document.querySelector(".display");
  
  /**
   * Inicializa a calculadora configurando os eventos de clique e tecla Enter.
   * @method
   * @returns {void}
   */
  this.start = () => {
    clickButtons();
    pressEnter();
  };

  /**
   * Configura o evento de pressionar a tecla Enter para realizar a operação.
   * @function
   * @private
   * @returns {void}
   */
  const pressEnter = () => {
    this.display.addEventListener("keyup", (e) => {
      if (e.keyCode === 13) {
        realizeOperation();
      }
    });
  };

  /**
   * Limpa o conteúdo do display da calculadora.
   * @function
   * @private
   * @returns {void}
   */
  const clearDisplay = () => {
    this.display.value = "";
  };

  /**
   * Remove o último caractere do display da calculadora.
   * @function
   * @private
   * @returns {void}
   */
  const deleteOneValue = () => {
    this.display.value = this.display.value.slice(0, -1);
  };

  /**
   * Configura os eventos de clique para os botões da calculadora.
   * @function
   * @private
   * @returns {void}
   */
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

  /**
   * Adiciona texto ao display da calculadora e mantém o foco nele.
   * @function
   * @private
   * @param {string} text - O texto a ser adicionado ao display
   * @returns {void}
   */
  const displayText = (text) => {
    this.display.value += text;
    this.display.focus();
  };

  /**
   * Avalia e executa a expressão matemática presente no display.
   * @function
   * @private
   * @returns {void}
   * @throws {Error} Exibe um alerta se a expressão for inválida
   */
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