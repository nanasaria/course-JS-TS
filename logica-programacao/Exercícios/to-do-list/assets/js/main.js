const entrada = document.querySelector(".entrada");
const tarefasHtml = document.querySelector(".tarefas");
const addTarefa = document.querySelector(".addTarefa");

// const ul = document.createElement("ul");
// tarefasHtml.appendChild(ul);

addTarefa.addEventListener("click", (e) => {
  createTarefa();
  entrada.value = "";
});

function createTarefa() {
  const li = document.createElement("li");
  const buttonDelete = document.createElement("button");

  buttonDelete.className = "excluirTarefa";
  li.innerHTML = entrada.value;
  tarefasHtml.appendChild(li);
  li.appendChild(buttonDelete);
  buttonDelete.innerText = "Excluir";
}

document.addEventListener("click", (e) => {
  if (e.target.classList.contains("excluirTarefa")) {
    e.target.closest("li").remove();
  }
});
