const forms = document.querySelector("form");
const cpf_input = document.querySelector(".cpf");

class CPF {
  constructor(cpf) {
    this.cpf = cpf.replace(/\D+/g, "");
  }

  isValid() {
    if (typeof this.cpf === "undefined") return false;
    if (this.cpf.length !== 11) return false;
    if (this.isSequence()) return false;

    const cpfPart = this.cpf.slice(0, -2);
    const digit1 = this.createDigit(cpfPart);
    const digit2 = this.createDigit(cpfPart + digit1);

    const newCpf = cpfPart + digit1 + digit2;
    return newCpf === this.cpf;
  }

  createDigit(cpfPart) {
    const cpfArray = Array.from(cpfPart);
    let regret = cpfArray.length + 1;

    let total = cpfArray.reduce((ac, val) => {
      ac += regret * Number(val);
      regret--;
      return ac;
    }, 0);

    const digit = 11 - (total % 11);
    return digit > 9 ? "0" : String(digit);
  }

  isSequence() {
    const sequence = this.cpf[0].repeat(this.cpf.length);
    return sequence === this.cpf;
  }

  messageError(message) {
    const li = document.createElement("li");
    li.innerText = message;
    error.appendChild(li);
  }
}

forms.addEventListener("submit", (event) => {
  event.preventDefault();

  const cpf = new CPF(cpf_input.value);
  console.log(forms)
  if (!cpf.isValid()) return cpf.messageError("CPF Inválido");
  return cpf.messageError("")
});
