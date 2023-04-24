const timer = document.querySelector('.timer');
const hoursSpan = timer.querySelector('.hours');
const minutesSpan = timer.querySelector('.minutes');
const secondsSpan = timer.querySelector('.seconds');

let hours = 0;
let minutes = 0;
let seconds = 0;
let timerInterval;

function startTimer() {
  timerInterval = setInterval(updateTimer, 1000);
}

function pauseTimer() {
  clearInterval(timerInterval);
}

function resetTimer() {
  hours = 0;
  minutes = 0;
  seconds = 0;
  updateTimer();
}

function updateTimer() {
  seconds++;
  if (seconds >= 60) {
    seconds = 0;
    minutes++;
    if (minutes >= 60) {
      minutes = 0;
      hours++;
    }
  }

  hoursSpan.textContent = padNumber(hours);
  minutesSpan.textContent = padNumber(minutes);
  secondsSpan.textContent = padNumber(seconds);
}

function padNumber(number) {
  return number.toString().padStart(2, '0');
}

const startBtn = document.getElementById('start-btn');
const pauseBtn = document.getElementById('pause-btn');
const resetBtn = document.getElementById('reset-btn');

startBtn.addEventListener('click', startTimer);
pauseBtn.addEventListener('click', pauseTimer);
resetBtn.addEventListener('click', resetTimer);
