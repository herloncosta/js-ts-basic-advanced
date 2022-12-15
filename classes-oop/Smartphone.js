import { DispositivoEletronico } from "./DispositivoEletronico.js";

export class Smartphone extends DispositivoEletronico {
  constructor(nome, cor, modelo) {
    super(nome);
    this.cor = cor;
    this.modelo = modelo;
  }

  descricao() {
    console.log(`Nome: ${this.nome} Cor: ${this.cor} Modelo: ${this.modelo}`);
  }

  // os demais métodos são herdados da classe DispositivoEletronico
}
