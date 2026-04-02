let timmer;
let isRunning = false;
let startTime = 0;
let elapsedTime = 0;

let display = document.getElementById("display");

function start() {
  if (!isRunning) {
    startTime = new Date() - elapsedTime;
    timmer = setInterval(update, 10);
    isRunning = true;
  }
}

function update() {
  elapsedTime = new Date() - startTime;

  let milliSeconds = Math.floor((elapsedTime % 1000) / 10);
  let seconds = Math.floor((elapsedTime / 1000) % 60);
  let miutes = Math.floor((elapsedTime / (1000 * 60)) % 60);
  let hours = Math.floor((elapsedTime / (1000 * 60 * 10)) % 60);

  seconds = seconds.toString().padStart(2, 0);
  miutes = miutes.toString().padStart(2, 0);
  hours = hours.toString().padStart(2, 0);

  display.textContent = `${hours} : ${miutes} : ${seconds} : ${milliSeconds}`;
}

function stop() {
  clearInterval(timmer);
  isRunning = false;
}
function reset() {
  clearInterval(timmer);
  isRunning = false;
  elapsedTime = 0;
  startTime = 0;
  display.textContent = "00 : 00 : 00 : 00";
}
