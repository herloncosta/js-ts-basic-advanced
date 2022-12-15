export class ControleRemoto {
  constructor(tv) {
    this.tv = tv;
    this.volume = 0;
  }

  // métodos de instância
  aumentarVolume() {
    if (this.volume >= 40) return;
    this.volume += 2;
    console.log(`Volume: ${this.volume}`);
  }

  diminuirVolume() {
    if (this.volume <= 0) return;
    this.volume -= 2;
    console.log(`Volume: ${this.volume}`);
  }

  // método estático
  static trocarBateria() {
    console.log("Bateria trocada!");
  }
}
