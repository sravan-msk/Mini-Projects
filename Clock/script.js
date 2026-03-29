const time = document.getElementById("time");

function getTime() {
  const date = new Date();
  let hours = date.getHours();
  const meridium = hours >= 12 ? "PM" : "AM";
  hours = hours % 12;
  hours = hours.toString().padStart(2, 0);
  const minutes = date.getMinutes().toString().padStart(2, 0);
  const seconds = date.getSeconds().toString().padStart(2, 0);
  time.textContent = `${hours} : ${minutes} : ${seconds}  ${meridium}`;
}

setInterval(() => {
  getTime();
}, 1000);
