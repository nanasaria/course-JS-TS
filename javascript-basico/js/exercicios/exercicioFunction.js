function private() {
    const form = document.querySelector('form') // Seleciona os elementos como selecionaria um css.
    const resultado = document.querySelector('.resultado')

    const pessoas = []

    /*
    form.onsubmit = function (evento) {  
    onsubmit é um evento, então é como se dissesse: "Form quando acontecer o submit, faça..." Por padrão, a função anônima do evento, recebe o evento.
       evento.preventDefault() - Método para prevenir o comportamento padrão. Ou seja, não renderizar a página outra vez.
    };
    */

    function recebeEventoForm (evento) {
        evento.preventDefault();
        const nome = form.querySelector('.nome')
        const sobrenome = form.querySelector('.sobrenome')
        const peso = form.querySelector('.peso')
        const altura = form.querySelector('.altura')

        pessoa = {
            nome: nome.value,
            sobrenome: sobrenome.value,
            peso: peso.value,
            altura: altura.value
        }

        pessoas.push(pessoa)
        mostrarPessoa()
    }

    function mostrarPessoa() {
        index = Number(pessoas.length) - 1
        resultado.innerHTML += `${pessoas[index].nome} ${pessoas[index].sobrenome} ${pessoas[index].peso} ${pessoas[index].altura} <br>`
    }

    /*
    Outra forma é usando o addEventListener que recebe o evento e uma função como argumento. 
    Diz algo como: 'Adicione uma escuta de evento submit ao meu form e faça o que minha função diz.
    */

    form.addEventListener('submit', recebeEventoForm)
}

private();