import { wait, rand } from "./promise.js";

// Promise.all - retorna array com valores de todas as promises
const promises = [
  "some value",
  wait("message 1", rand(1, 3)),
  wait("message 2", rand(1, 3)),
  "other value",
];

Promise.all(promises)
  .then((responses) => console.log(`All: ${responses}`))
  .catch((error) => console.error(error));

// Promise.race - retorna o valor da primeira promise resolvida
Promise.race(promises)
  .then((response) => console.log(`Race: ${response}`))
  .catch((error) => console.error(error));
