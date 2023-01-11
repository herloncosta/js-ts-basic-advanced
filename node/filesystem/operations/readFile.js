import { readFile } from 'node:fs/promises';
import { resolve } from 'node:path';

const filePath = resolve('..', 'data', 'pessoas.json');

const read = (filePath) => {
  readFile(filePath, { encoding: 'utf-8' }).then(console.log)
}

read(filePath)
