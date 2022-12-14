import { Carro } from "./classes/Carro.js";
import { DispositivoEletronico } from "./classes/DispositivoEletronico.js";
import { Smartphone } from "./classes/Smartphone.js";
import { ControleRemoto } from "./classes/ControleRemoto.js";

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

// HERANÇA

const d1 = new DispositivoEletronico("Dispositivo 1");
console.log(d1);

d1.ligar();
console.log(d1);

// instância de Smartphone
const smartphone = new Smartphone("Motorola", "Vermelho", "E7 Play");
smartphone.descricao();
smartphone.desligar();

// métodos de instância e estáticos
const controle1 = new ControleRemoto("Phillips");
controle1.aumentarVolume();
controle1.diminuirVolume(); // 0
controle1.diminuirVolume(); // 0

ControleRemoto.trocarBateria();
