const numbers = document.getElementById("number");
const lowerCase = document.getElementById("lowercase");
const upperCase = document.getElementById("uppercase");
const symbols = document.getElementById("symbols");

const btn = document.getElementById("btn");
const display = document.getElementById("display");
const note = document.querySelector(".note");

function passwordGen(numbers, lowerCase, upperCase, symbols) {
  const includeNumbers = "0123456789";
  const includesLoewrCase = "abcdefghijklmnopqrstuvwxyz";
  const includeUpperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const includeSymbols = "`!@#$%^&*()-+=_.,/?";

  let allowChar = "";
  allowChar += numbers ? includeNumbers : "";
  allowChar += lowerCase ? includesLoewrCase : "";
  allowChar += upperCase ? includeUpperCase : "";
  allowChar += symbols ? includeSymbols : "";
  let password = "";

  let n = 9;
  if (allowChar == 0) {
    note.textContent = "Note : please select any checkbox.";
    return "";
  }
  for (let i = 0; i < n; i++) {
    let random = Math.floor(Math.random() * allowChar.length);
    password += allowChar[random];
  }
  return password;
}

btn.addEventListener("click", () => {
  let pswd = passwordGen(
    numbers.checked,
    lowerCase.checked,
    upperCase.checked,
    symbols.checked,
  );
  display.value = pswd;
});
