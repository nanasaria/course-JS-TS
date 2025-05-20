/*
Babel é um compilador de JavaScript.
*/

const nome = "Beyoncé";
const obj = { nome };
const novoObj = { ...obj };
novoObj.nome = "Madonna";
novoObj.profissao = "cantora";
console.log(obj);
console.log(novoObj);
