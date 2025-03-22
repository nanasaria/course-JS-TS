const container = document.querySelector(".container");

function private() {
  const elementos = [
    { tag: "p", texto: "Frase 1" },
    { tag: "div", texto: "Frase 2" },
    { tag: "footer", texto: "Frase 3" },
    { tag: "section", texto: "Frase 4" },
  ];

  for (let i = 0; i < elementos.length; i++) {
    container.innerHTML += `<${elementos[i].tag}> ${elementos[i].texto} </${elementos[i].tag}> <br>`;
  }
}

private();
