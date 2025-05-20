/* Fetch já retorna por padrão uma Promise */
// fetch("pagina1.html")
//   .then((resposta) => {
//     if (resposta.status !== 200) throw new Error("ERRO 404");

//     return resposta.text();
//   })
//   .then((html) => console.log(html))
//   .catch((e) => console.error(e));

document.addEventListener("click", (e) => {
  const el = e.target;
  const tag = el.tagName.toLowerCase();

  if (tag === "a") {
    e.preventDefault();
    carregaPagina(el);
  }
});

async function carregaPagina(el) {
  const href = el.getAttribute("href");
  /* 
  Primeiro then retorna a response. A response é uma promise
  também, então é necessário outro then.
  
  fetch(href)
    .then((response) => response.text())
    .then((html) => carregaResultado(html))
    .catch((error) => console.error(error));
  */

  try {
    const response = await fetch(href);
    if (response.status !== 200) throw new Error("ERRO 404!");
    const html = await response.text();
    carregaResultado(html);
  } catch (error) {
    console.error(error);
  }
}

function carregaResultado(response) {
  const resultado = document.querySelector(".resultado");
  resultado.innerHTML = response;
}
