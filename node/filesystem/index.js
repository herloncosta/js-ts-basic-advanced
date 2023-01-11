import { readdir, stat } from "node:fs/promises"

// listando arquivos da pasta atual
readdir("./")
  .then(console.log)
  .catch(console.error)

// listando arquivos da pasta anterior
readdir("../")
  .then(console.log)
  .catch(error => console.error)

// obtendo informações dos arquivos da pasta atual
readdir("./")
  .then(files => {
    return files
  })
  .then(files => {
    files.forEach(file => {
      stat(file)
        .then(data => console.log(file, data))
    })
  })
  .catch(console.error)
