// OBJETOS E PROTOTYPES
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
p2.comer();

//OBJETO MAP
const pessoas = [
  { id: 3, nome: "Herlon" },
  { id: 2, nome: "Diego" },
  { id: 1, nome: "Joe" },
];

const novasPessoasObj = {};

// Problema: a ordem de inserção é alterada para crescente
for (const pessoa of pessoas) {
  const { id } = pessoa;
  novasPessoasObj[id] = { ...pessoa };
}

console.log(novasPessoasObj);

// Solução
const novasPessoasMap = new Map(); // 3 => { id: 1, nome: 'Joe' }

for (const { id, nome } of pessoas) {
  novasPessoasMap.set(id, { id, nome });
}

console.log(novasPessoasMap);

for (const [key, { id, nome }] of novasPessoasMap) {
  console.log(key, id, nome);
}
