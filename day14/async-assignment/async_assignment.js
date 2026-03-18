const MAX_VAL = 10;
let timerId;
var endNote = "타이머 종료!";

document.getElementById("startTimer").addEventListener("click", function () {
  const inputEl = document.getElementById("timerInput");
  const displayEl = document.getElementById("timerDisplay");
  const startBtn = document.getElementById("startTimer");

  const inputParts = inputEl.value.split(",");
  const seconds = Number(inputParts[0]);

  if (isNaN(seconds) || seconds < 1 || seconds > MAX_VAL || inputEl.value === "") {
    displayEl.textContent = "유효한 숫자(1-10)를 입력하세요!";
    displayEl.classList.add("error");
    return;
  }

  clearInterval(timerId);
  displayEl.classList.remove("error");
  startBtn.disabled = true;

  function runTimer(count = 10) {
    let timeLeft = count;
    displayEl.textContent = "타이머: " + timeLeft + "초";

    timerId = setInterval(function () {
      timeLeft--;
      displayEl.textContent = "타이머: " + timeLeft + "초";

      if (timeLeft <= 0) {
        clearInterval(timerId);
        displayEl.textContent = endNote;
        startBtn.disabled = false;
      }
    }, 1000);
  }

  runTimer(seconds);
});