class CPF {
  constructor(cpf) {
    this.cpf = cpf.replace(/\D+/g, "");
  }

  validate() {
    if (typeof this.cpf === "undefined") return false;
    if (this.cpf.length !== 11) return false;
    if (this.isSequencia()) return false;

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

  isSequencia() {
    const sequencia = this.cpf[0].repeat(this.cpf.length);
    return sequencia === this.cpf;
  }
}

const cpf = new CPF("705.484.450-52");
cpf.validate();
