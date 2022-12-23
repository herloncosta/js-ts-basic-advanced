function render() {
  const links = document.querySelectorAll(".links a");
  links.forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      loadPageHtmlData(link);
    });
  });
}

async function loadPageHtmlData(link) {
  const url = link.getAttribute("href");
  const response = await fetch(url);
  const html = await response.text();

  insertHtmlInPage(html);
}

function insertHtmlInPage(data) {
  const container = document.getElementById("page-container");
  container.innerHTML = data;
}

render();
