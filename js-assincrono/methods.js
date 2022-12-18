import { wait, rand } from "./promise.js";

// Promise.all
const promises = [
  "some value",
  wait("message 1", rand(1, 3)),
  wait("message 2", rand(1, 3)),
  "other value",
];

Promise.all(promises)
  .then((responses) => console.log(responses))
  .catch((error) => console.log(error));
