const nome = "Herlon"
const sobrenome = "Costa"
const falarNome = () => `${nome} ${sobrenome}`

// formas de exportação CommonJS
// em ambas as formas temos o mesmo resultado

// 1 - module.exports
module.exports.nome = nome
module.exports.sobrenome = sobrenome
module.exports.falarNome = falarNome

console.log(module.exports)

// 2 - exports (referência para module.exports)
exports.nome = nome
exports.sobrenome = sobrenome
exports.falarNome = falarNome

console.log(exports)

// 3 - this (nesse caso o this aponta para o exports e o module.exports)
this.nome = nome
this.sobrenome = sobrenome
this.falarNome = falarNome

console.log(this)
