const output = document.querySelector(".output")

axios("/js-assincrono/fetch-axios/src/data/itens.json")
  .then(response => output.innerHTML = response.data)
