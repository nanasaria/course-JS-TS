let num = Number(prompt("Digite um número"));
const raiz = Math.sqrt(num);
const isNan = Number.isNaN(num);
const arrendondarCima = Math.ceil(num);
const arrendondarBaixo = Math.floor(num);
const casaDecimal = num.toFixed(2);

const numHtml = document.getElementById("numero-titulo");
const raizHtml = document.getElementById("raiz");
const nanHtml = document.getElementById("nan");
const arredondarBaixoHtml = document.getElementById("arredondar-baixo");
const arredondarCimaHtml = document.getElementById("arredondar-cima");
const casasDecimaisHtml = document.getElementById("casas-decimais");
const texto = document.getElementById("texto");

numHtml.innerHTML = num;
raizHtml.innerHTML = raiz;
nanHtml.innerHTML = isNan;
arredondarBaixoHtml.innerHTML = arrendondarBaixo;
arredondarCimaHtml.innerHTML = arrendondarCima;
casasDecimaisHtml.innerHTML = casaDecimal;

// Você também pode:
texto.innerHTML = `<p>Seu número é: ${num}</p>`;
texto.innerHTML += `<p>Seu número -2 é: ${num + 2}</p>`;
texto.innerHTML += `<p>Raiz quadrada: ${raiz}</p>`;
texto.innerHTML += `<p>É NaN: ${isNan}</p>`;
texto.innerHTML += `<p>Arredondando para baixo: ${arrendondarBaixo}</p>`;
texto.innerHTML += `<p>Arredondando para cima: ${arrendondarCima}</p>`;
texto.innerHTML += `<p>Com duas casas decimais: ${casaDecimal}</p>`;
