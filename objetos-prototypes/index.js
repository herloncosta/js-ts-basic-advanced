const falar = {
  falar() {
    console.log(`${this.nome} está falando.`);
  },
};

const comer = {
  comer() {
    console.log(`${this.nome} está comendo!`);
  },
};

const beber = {
  beber() {
    console.log(`${this.nome} está bebendo!`);
  },
};

// composição | mixin
// Object.assign({}, falar, comer, beber)
const pessoaPrototype = { ...falar, ...comer, ...beber };

function criaPessoa(nome, sobrenome) {
  return Object.create(pessoaPrototype, {
    nome: { value: nome },
    sobrenome: { value: sobrenome },
  });
}

const p1 = criaPessoa("Herlon", "Costa");
const p2 = criaPessoa("Diego", "Costa");
console.log(p2.comer());
