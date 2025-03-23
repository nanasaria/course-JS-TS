const hourTimer = document.querySelector(".timer-hora");
const minuteTimer = document.querySelector(".timer-minuto");
const secondTimer = document.querySelector(".timer-segundo");
const play = document.querySelector(".iniciar");
const pause = document.querySelector(".pausar");
const zero = document.querySelector(".zerar");

const private = () => {
  let second = 0;
  let minute = 0;
  let hour = 0;
  let timer;

  play.addEventListener("click", function (e) {
    if (timer) return;
    play.style.pointerEvents = "none";

    timer = setInterval(() => {
      second++;
      if (second === 60) {
        second = 0;
        minute++;
      }
      if (minute === 60) {
        minute = 0;
        hour++;
      }

      if (hour === 24) {
        hour = 0;
      }
      updateHtml("black");
    }, 1000);
  });

  pause.addEventListener("click", function (e) {
    clearInterval(timer);
    updateHtml("#a50e54");
  });

  zero.addEventListener("click", function (e) {
    clearInterval(timer);
    second = 0;
    minute = 0;
    hour = 0;
    updateHtml("black");
  });

  function updateHtml(color) {
    secondTimer.innerHTML = second < 10 ? `0${second}` : second;
    minuteTimer.innerHTML = minute < 10 ? `0${minute}:` : `${minute}:`;
    hourTimer.innerHTML = hour < 10 ? `0${hour}:` : `${hour}:`;
    hourTimer.style.color = color;
    minuteTimer.style.color = color;
    secondTimer.style.color = color;
  }
};

private();
