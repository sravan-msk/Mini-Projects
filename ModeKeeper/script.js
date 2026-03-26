const btn = document.getElementById("button");
const check = document.getElementById("check");
const body = document.body;

let theme = localStorage.getItem("theme");

if (theme === "dark") {
  body.classList.add("dark");
  check.checked = true;
} else {
  body.classList.add("light");
  check.checked = false;
}

btn.addEventListener("click", () => {
  body.classList.toggle("dark");
  if (body.classList.contains("dark")) {
    localStorage.setItem("theme", "dark");
  } else {
    localStorage.setItem("theme", "light");
  }
});
