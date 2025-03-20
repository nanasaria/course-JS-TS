function private() {
    const form = document.querySelector('form')
    const resultado = document.querySelector('.resultado')
    const imcHtml = document.querySelector('.imc')

    //IMC = peso / (altura x altura)
    function calcularIMC(evento) {
        evento.preventDefault();
        const peso = form.querySelector('.peso')
        const altura = form.querySelector('.altura')
        const imc = (parseFloat(peso.value) / (Math.pow(parseFloat(altura.value), 2))).toFixed(2)

        if (imc <= 18.5){
            resultado.innerHTML = `Seu IMC é ${imc}`
            imcHtml.innerHTML = `você está Abaixo do peso`
        } else if (imc > 18.5 && imc <= 24.9) {
            resultado.innerHTML = `Seu IMC é ${imc}`
            imcHtml.innerHTML = `você está com Peso normal`
        } else if (imc >= 25 && imc <= 29.9) {
            resultado.innerHTML = `Seu IMC é ${imc}`
            imcHtml.innerHTML = `você está com Sobrepeso`
        } else if (imc >= 30 && imc <= 34.9) {
            resultado.innerHTML = `Seu IMC é ${imc}`
            imcHtml.innerHTML = ` você está com Obesidade grau 1`
        } else if (imc >= 35 && imc <= 39.9) {
            resultado.innerHTML = `Seu IMC é ${imc}`
            imcHtml.innerHTML = ` você está com Obesidade grau 2`
        } else if (imc >= 40) {
            resultado.innerHTML = `Seu IMC é ${imc}`
            imcHtml.innerHTML = ` você está com Obesidade grau 3`
        } else{
            imcHtml.innerHTML = `Peso inválido`
        }
    }

    form.addEventListener('submit', calcularIMC)
}

private()