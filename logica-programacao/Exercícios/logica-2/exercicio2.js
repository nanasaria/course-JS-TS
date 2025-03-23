/*
Escreva uma função chamada ePaisagem que recebe dois argumentos,
largura e altura de uma imagem (number).
Retorne true se a imagem estiver no modo paisagem.
*/

const ePaisagem = (altura, largura) => {
  if (isNaN(altura)) {
    return "altura inválida";
  } else if (isNaN(largura)) {
    return "largura inválida";
  }

  return Number(largura) > Number(altura);
};

console.log(ePaisagem(200, 250));
