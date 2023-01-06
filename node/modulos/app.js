// importação externa (não precisa ser passado o caminho, apenas o nome do módulo)
const axios = require("axios")
// importação local (necessário passar o caminho do módulo)
const { falarNome, nome, sobrenome } = require("./mod1")
// importação de módulos nativos (também não é necessário passar o caminho, apenas o nome do módulo)
const path = require("path")

console.log(falarNome())

axios("https://www.otaviomiranda.com.br/files/json/pessoas.json")
  .then(response => response.data)
  .then(data => data.filter(pessoa => pessoa.nome[0] === "A"))
  .then(console.log)
  .catch(error => console.error(error))

console.log(path.posix)
