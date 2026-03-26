let display = document.getElementById("display");
display.value = 0;

function increament() {
  display.value += 1;
  display.textContent = display.value;
}
function decreament() {
  if (display.value <= 0) return;
  display.value -= 1;
  display.textContent = display.value;
}
function reset() {
  display.value = 0;
  display.textContent = display.value;
}
