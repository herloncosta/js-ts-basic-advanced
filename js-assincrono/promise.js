function rand(min, max) {
  min *= 1000;
  max *= 1000;

  return Math.floor(Math.random() * (max - min) + min);
}

function wait(msg, timeSeconds) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      typeof msg === "string"
        ? resolve(msg)
        : reject("Bad request: message should be string.");
    }, timeSeconds);
  });
}

wait("Message 1", rand(1, 3))
  .then((response) => {
    console.log(response);
    return wait(1223, rand(1, 3));
  })
  .then((response) => {
    console.log(response);
  })
  .catch((error) => console.error(error))
  .finally(() => console.log("I will always run."));
