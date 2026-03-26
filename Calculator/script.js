const display = document.getElementById("display");

function append(input) {
  display.value += input;
}
function cleaarAll() {
  display.value = "";
}
function clearOne() {
  display.value = display.value.slice(0, -1);
}

function cal() {
  try {
    display.value = eval(display.value);
  } catch (error) {
    display.value = "Eroor";
  }
}

document.addEventListener("keydown", (e) => {
  const allowedKeys = [
    "0",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "+",
    "-",
    "*",
    "/",
    "%",
  ];
  if (allowedKeys.includes(e.key)) {
    append(e.key);
  }
  if (e.key === "Backspace") {
    clearOne();
  }
  if (e.key === "Enter") {
    cal();
  }
});
