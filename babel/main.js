const nome = "Herlon"
const obj = { nome }
const novoObj = { ...obj }

const [base, altura] = [10, 20]

class Pessoa {
  constructor(nome, sobrenome) {
    this.nome = nome
    this.sobrenome = sobrenome
  }
}
