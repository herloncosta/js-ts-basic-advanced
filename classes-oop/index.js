// CRIAÇÃO DE CLASSES
class Pessoa {
  constructor(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;
  }

  falar() {
    console.log(`${this.nome} está falando!`);
  }

  comer() {
    console.log(`${this.nome} está comendo!`);
  }

  beber() {
    console.log(`${this.nome} está bebendo!`);
  }
}

const p1 = new Pessoa("Herlon", "Costa");
console.log(p1);

// GETTERS E SETTERS
import { Carro } from "./Carro.js";

const c1 = new Carro("Chevette", 220);
// simulando botão de acelerar pressionado
for (let i = 0; i < 200; i++) {
  c1.acelerar();
}

console.log(c1); // velocidade = 100

// simulando botão de desacelerar pressionado
for (let i = 0; i < 200; i++) {
  c1.desacelerar();
}

console.log(c1); // velocidade = 0

// setter
c1.velocidade = 99;
// getter
console.log(c1.velocidade); // 99
