import { writeFile } from 'node:fs/promises'
import { resolve } from 'node:path'

const filePath = resolve('..', 'data', 'pessoas.json')

const pessoas = [
  { nome: 'Maria' },
  { nome: 'José' },
  { nome: 'Rosa' },
  { nome: 'João' }
]

const pessoasJson = JSON.stringify(pessoas, '', 2)

const save = (data, path) => {
  writeFile(path, data, { encoding: 'utf-8', flag: 'w' })
}

save(pessoasJson, filePath)
