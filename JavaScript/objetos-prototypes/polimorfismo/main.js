//Superclasse - Classe base para todos os tipos de conta bancária
function Conta(agencia, conta, saldo) {
  this.agencia = agencia;  // Número da agência bancária
  this.conta = conta;      // Número da conta
  this.saldo = saldo;      // Saldo disponível na conta
}

// Método para sacar dinheiro da conta
Conta.prototype.sacar = function (valor) {
  // Verifica se há saldo suficiente para o saque
  if (valor > this.saldo) {
    console.log(`Saldo insuficiente: R$${this.saldo}`);
    return;
  }

  this.saldo -= valor;     // Subtrai o valor do saldo
  this.verSaldo();         // Exibe o saldo atualizado
};

// Método para depositar dinheiro na conta
Conta.prototype.depositar = function (valor) {
  this.saldo += valor;     // Adiciona o valor ao saldo
  this.verSaldo();         // Exibe o saldo atualizado
};

// Método para visualizar o saldo atual da conta
Conta.prototype.verSaldo = function () {
  console.log(
    `Ag/c.: ${this.agencia}/${this.conta} \nSaldo: R$${this.saldo.toFixed(2)}`
  );
};

// Subclasse ContaCorrente - Herda de Conta e adiciona limite de crédito
function ContaCorrente(agencia, conta, saldo, limite) {
  Conta.call(this, agencia, conta, saldo);  // Chama o construtor da superclasse
  this.limite = limite;    // Limite de crédito adicional disponível
}

// Estabelece a herança: ContaCorrente herda de Conta
ContaCorrente.prototype = Object.create(Conta.prototype);
ContaCorrente.constructor = ContaCorrente;  // Corrige o construtor

// Sobrescreve o método sacar para incluir o limite de crédito (polimorfismo)
ContaCorrente.prototype.sacar = function (valor) {
  // Verifica se o valor excede o saldo + limite
  if (valor > this.saldo + this.limite) {
    console.log(`Saldo insuficiente: R$${this.saldo}`);
    return;
  }

  this.saldo -= valor;     // Subtrai o valor do saldo (pode ficar negativo até o limite)
  this.verSaldo();         // Exibe o saldo atualizado
};

// Subclasse ContaPoupanca - Herda de Conta sem modificações adicionais
function ContaPoupanca(agencia, conta, saldo) {
  Conta.call(this, agencia, conta, saldo);  // Chama o construtor da superclasse
}

// Estabelece a herança: ContaPoupanca herda de Conta
ContaPoupanca.prototype = Object.create(Conta.prototype);
ContaPoupanca.constructor = ContaPoupanca;  // Corrige o construtor