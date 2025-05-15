/*
Classe

Constructor é executado sempre que instancia a classe. 
*/

class Pessoa {
  constructor(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;
  }

  falar() {
    console.log(`${this.nome} está falando.`);
  }
}

const p1 = new Pessoa("Justin", "Bieber");

/*
Getters e Setters

Symbol é usado para criar identificadores únicos.
O valor de um Symbol é único e imutável.
A principal utilidade do Symbol é criar propriedades de
objetos únicas que não colidem com outras, mesmo
que tenham o mesmo nome.

Para acessar get deve acessar como propriedade e não como
método.
Para colocar um valor, também acessamos como propriedade
mas usamos o "=" -> Atribuição.
*/

const _velocidade = Symbol("velocidade");

class Carro {
  constructor(nome) {
    this.nome = nome;
    this[_velocidade] = 0;
  }

  /* Setter -> Para mudar o valor da propriedade */
  set velocidade(valor) {
    if (typeof valor !== "number") return;
    if (valor >= 100 || valor <= 0) return;
    this[_velocidade] = valor;
  }

  /* Getter -> Para pegar o valor da propriedade */
  get velocidade() {
    return this[_velocidade];
  }

  acelerar() {
    if (this[_velocidade] >= 100) return;
    this[_velocidade]++;
  }

  freiar() {
    if (this[_velocidade] <= 0) return;
    this[_velocidade]--;
  }
}

const c1 = new Carro("Mustang");
c1.velocidade = 50;
console.log(c1);

/* Herança com classes */
class DispositivoEletronico {
  constructor(name) {
    this.name = name;
    this.ligado = false;
  }

  ligar() {
    if (this.ligado) {
      console.log(this.name + " Dispositivo já ligado");
      return;
    }

    this.ligado = true;
  }

  desligar() {
    if (!this.ligado) {
      console.log(this.name + " Dispositivo já desligado");
      return;
    }

    this.ligado = false;
  }
}

const d1 = new DispositivoEletronico("Smartphone");
d1.ligar();
d1.desligar();
console.log(d1);

/*
O extends é utilizado para fazer a herança, ou seja,
herdar as propriedades e métodos de outra classe.

Quando se utiliza o extends na classe filha, é
necessário chamar super() antes de usar this, 
porque o super() chama o construtor da classe pai.
*/
class Smartphone extends DispositivoEletronico {
  constructor(name, color, modelo) {
    super(name); // -> Chama o constructor da classe pai.

    /* Atributos específicos da classe Smartphone */
    this.color = color;
    this.modelo = modelo;
  }
}

const s1 = new Smartphone("Xiaomi", "Preto", "Redmi note 14");
console.log(s1);

class Tablet extends DispositivoEletronico {
  constructor(name, temWifi) {
    super(name); // -> Chama o constructor da classe pai.

    /* Atributos específicos da classe Tablet */
    this.temWifi = temWifi;
  }
}
