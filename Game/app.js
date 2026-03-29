const btns = document.querySelectorAll(".btns");
const msg = document.getElementById("msg");
const reset = document.getElementById("reset");
const turn = document.getElementById("turn-msg");
const winMsg = document.querySelector(".winner-msg");

let trunX = true;
const winningPatterns = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [6, 4, 2],
];

let count = 0;
btns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    count += 1;
    if (trunX) {
      turn.textContent = "O's turn";
      btn.textContent = "X";
      trunX = false;
    } else {
      turn.textContent = "X's turn";
      btn.textContent = "O";
      trunX = true;
    }
    btn.disabled = true;
    checkWinning();
  });
});

//enable buttons
const enableBtn = () => {
  winMsg.style.display = "none";
  for (let btn of btns) {
    btn.disabled = false;
    btn.textContent = "";
    turn.textContent = "X's turn";
  }
};

//disable buttons
const disableBtn = () => {
  for (let bts of btns) {
    bts.disabled = true;
  }
};

//Winner msg
const winnerMsg = (winner) => {
  winMsg.style.display = "inline-block";
  msg.textContent = `Winner is ${winner}`;
  count = 0;
  turn.textContent = "";
  disableBtn();
};
//draw game
const drawGame = () => {
  winMsg.style.display = "inline-block";
  msg.textContent = "Draw the Game Try again";
  count = 0;
  turn.textContent = "";
};

function checkWinning() {
  for (let patterns of winningPatterns) {
    let val0 = btns[patterns[0]].innerText;
    let val1 = btns[patterns[1]].innerText;
    let val2 = btns[patterns[2]].innerText;

    if (val0 != "" && val1 != "" && val2 != "") {
      if (val0 === val1 && val1 === val2) {
        winnerMsg(val0);
      }
      if (count == 9) {
        drawGame();
      }
    }
  }
}

reset.addEventListener("click", enableBtn);
