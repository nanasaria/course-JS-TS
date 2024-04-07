const time = document.querySelector('.time');
const start = document.querySelector('.start');
const pause = document.querySelector('.pause');
const clear = document.querySelector('.clear');

let timer;
let seconds = 0;

function createSeconds(second){
    const date = new Date(second * 1000);
    return date.toLocaleTimeString('pt-BR', {
        hour12: false,
        timeZone: 'UTC'
    })
}

function startTime(){
    timer = setInterval(() => {
        seconds++;
        time.innerHTML = createSeconds(seconds);
    }, 1000);
}

start.addEventListener('click', function(e){
    time.classList.remove('paused');
    clearInterval(timer);
    startTime();
})

pause.addEventListener('click', function(e){
    clearInterval(timer);
    time.classList.add('paused');
})

clear.addEventListener('click', function(e){
    clearInterval(timer);
    time.classList.remove('paused');
    time.innerHTML = '00:00:00';
    seconds = 0;
})