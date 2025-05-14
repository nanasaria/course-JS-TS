const paragrafos = document.querySelector(".paragrafos");
const paragrafo = paragrafos.querySelectorAll("p");

const estilosBody = getComputedStyle(document.body);
const backgroundColorBody = estilosBody.backgroundColor;

for (let texto of paragrafo) {
  texto.style.backgroundColor = backgroundColorBody;
  texto.style.color = "white";
  texto.style.border = "2px solid white";
  texto.style.borderRadius = "10px";
  texto.style.height = "100px";
  texto.style.padding = "10px";
}
