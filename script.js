var stopwatch;
var hours = 0;
var minutes = 0;
var seconds = 0;

function start() {
  if (!stopwatch) {
    stopwatch = setInterval(timer, 1000);
  }
}

function stop() {
  clearInterval(stopwatch);
  stopwatch = null;
}

function reset() {
  clearInterval(stopwatch);
  stopwatch = null;
  hours = 0;
  minutes = 0;
  seconds = 0;
  updateDisplay();
}

function timer() {
  seconds++;

  if (seconds === 60) {
    seconds = 0;
    minutes++;

    if (minutes === 60) {
      minutes = 0;
      hours++;
    }
  }

  updateDisplay();
}

function updateDisplay() {
  var hoursDisplay = document.getElementById("hours");
  var minutesDisplay = document.getElementById("minutes");
  var secondsDisplay = document.getElementById("seconds");

  hoursDisplay.textContent = padZero(hours);
  minutesDisplay.textContent = padZero(minutes);
  secondsDisplay.textContent = padZero(seconds);
}

function padZero(value) {
  return value.toString().padStart(2, "0");
}
