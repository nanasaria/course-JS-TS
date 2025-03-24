/*
Solução do professor salvando as tarefas no localStorage
*/

const entrada = document.querySelector(".entrada");
const tarefasHtml = document.querySelector(".tarefas");
const addTarefa = document.querySelector(".addTarefa");

entrada.addEventListener("keypress", function (e) {
  if (e.keycode === 13) {
    criaTarefa(entrada.value);
  }
});

addTarefa.addEventListener("click", function (e) {
  if (!entrada.value) return;
  criaTarefa(entrada.value);
});

document.addEventListener("click", function (e) {
  const el = e.target;

  if (el.classList.contains("apagar")) {
    el.parentElement.remove();
    salvarTarefas();
  }
});

function createLi() {
  const li = document.createElement("li");
  return li;
}

function limpaInput() {
  entrada.value = "";
  entrada.focus();
}

function criaTarefa(textoInput) {
  const li = createLi();
  li.innerText = textoInput;
  tarefasHtml.appendChild(li);
  limpaInput();
  criaBotaoApagar(li);
  salvarTarefas();
}

function criaBotaoApagar(li) {
  li.innerText += " ";
  const botaoApagar = document.createElement("button");
  botaoApagar.innerText = "Apagar";
  botaoApagar.setAttribute("class", "apagar"); // Colocar um atributo
  li.appendChild(botaoApagar);
}

function salvarTarefas() {
  const liTarefas = tarefasHtml.querySelectorAll("li");
  const listaDeTarefas = [];

  for (let tarefa of liTarefas) {
    let tarefaTexto = tarefa.innerText;
    tarefaTexto = tarefaTexto.replace("Apagar", "").trim(); // Replace vai substituir uma palavra por outra, nesse caso, nenhuma. O trim é para tirar espaço do fim.
    listaDeTarefas.push(tarefaTexto);
  }

  const tarefasJson = JSON.stringify(listaDeTarefas); // Converte JSON para string
  localStorage.setItem("tarefas", tarefasJson); // Coloca um item no localStorage
}

function adicionaTarefaSalva() {
  const tarefas = localStorage.getItem("tarefas"); // Pega item do localStorage
  const listaDeTarefas = JSON.parse(tarefas); // Converte String para JSON

  for (let tarefa of listaDeTarefas) {
    criaTarefa(tarefa);
  }
}

adicionaTarefaSalva();
