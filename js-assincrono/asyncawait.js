import { rand, wait } from "./promise.js";

// método com Promise && .then() .catch()
// wait("fase 1", rand(0, 3))
//   .then((value) => {
//     console.log(value);
//     return wait("fase 2", rand(0, 3));
//   })
//   .then((fase) => {
//     console.log(fase);
//     return wait("fase 3", rand(0, 3));
//   })
//   .then(console.log)
//   .catch((error) => console.error(error));

// implementação do async/await
// tratando erros com try/catch
async function executar() {
  try {
    // then
    const fase1 = await wait("fase 1", rand(0, 3));
    console.log(fase1);
    const fase2 = await wait("fase 2", rand(0, 3));
    console.log(fase2);
    const fase3 = await wait("fase 3", rand(0, 3));
    console.log(fase3);
  } catch (error) {
    // catch
    console.error(error);
  } finally {
    // finaly
    console.log("Fim do processamento!");
  }
}

executar();
