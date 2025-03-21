const dateNow = document.querySelector('.date')

function private() {
    const date = new Date()
    const day = date.getDate() < 10 ? `0${date.getDate()}` : date.getDate()
    const year = date.getFullYear()
    let month = date.getMonth() + 1
    const hour = date.getHours()
    const minute = date.getMinutes()
    let dayWeek = date.getDay()

    switch(dayWeek) {
        case 0: dayWeek = 'Domingo'
        break;
        case 1: dayWeek = 'Segunda-feira'
        break;
        case 2: dayWeek = 'Terça-feira'
        break;
        case 3: dayWeek = 'Quarta-feira'
        break;
        case 4: dayWeek = 'Quinta-feira'
        break;
        case 5: dayWeek = 'Sexta-feira'
        break;
        case 6: dayWeek = 'Sábado'
        break;
        default: dayWeek = 'Não foi possível saber o dia da semana'
    }

    switch(month){
        case 1: month = 'Janeiro'
        break;
        case 2: month = 'Fevereiro'
        break;
        case 3: month = 'Março'
        break;
        case 4: month = 'Abril'
        break;
        case 5: month = 'Maio'
        break;
        case 6: month = 'Junho'
        break;
        case 7: month = 'Julho'
        break;
        case 8: month = 'Agosto'
        break;
        case 9: month = 'Setembro'
        break;
        case 10: month = 'Outubro'
        break;
        case 11: month = 'Novembro'
        break;
        case 12: month = 'Dezembro'
        break;
        default: month = 'Não foi possível saber o mês'
    }

    dateNow.innerHTML = `${dayWeek}, ${day} de ${month} de ${year} <br> ${hour}:${minute}`
}

private()

/*
Outro modo:
const dateNow = document.querySelector('.date')
const data = new Date()

dateNow.innerHTML = data.toLocaleString('pt-BR', { dateStyle: 'full', timeStyle: 'short' });
*/