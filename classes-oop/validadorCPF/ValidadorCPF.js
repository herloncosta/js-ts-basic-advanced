// exemplo: 070.987720-03 (gerado apenas para teste)

export class Validador {
  constructor(cpf) {
    Object.defineProperty(this, "cpfSemPontuacao", {
      writable: false,
      enumerable: false,
      configurable: false,
      value: cpf.replace(/\D+/g, ""),
    });
  }

  verificarSequencia() {
    return this.cpfSemPontuacao.charAt(0).repeat(11) === this.cpfLimpo;
  }

  geraNovoCPF() {
    const cpfSemDigitos = this.cpfSemPontuacao.slice(0, -2);
    const digito1 = Validador.geraDigito(cpfSemDigitos);
    const digito2 = Validador.geraDigito(cpfSemDigitos + digito1);
    this.novoCPF = cpfSemDigitos + digito1 + digito2;
  }

  static geraDigito(cpfSemDigitos) {
    let total = 0;
    let reverso = cpfSemDigitos.length + 1;

    for (let stringNumerica of cpfSemDigitos) {
      total += reverso * Number(stringNumerica);
      reverso--;
    }

    const digito = 11 - (total % 11);
    return digito <= 9 ? String(digito) : "0";
  }

  validar() {
    if (!this.cpfSemPontuacao) return false;
    if (typeof this.cpfSemPontuacao !== "string") return false;
    if (this.cpfSemPontuacao.length !== 11) return false;
    if (this.verificarSequencia()) return false;
    this.geraNovoCPF();
    console.log(this.novoCPF);
    return this.novoCPF === this.cpfSemPontuacao;
  }
}
