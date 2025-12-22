let paddedSec = document.querySelector("#seconds");
let paddedMin = document.querySelector("#minutes");
let paddedHour = document.querySelector("#hours");
let container = document.querySelector(".content");
const quizForm = document.querySelector("#quizForm");
let duration = 30000;

let remSec, remMin, remHour;

function quizTime() {
  if (duration <= 0) {
    console.log("QUIZ OVER!");
    quizForm.submit();
    container.innerHTML = "<h2> TIME UP, THANKS FOR ATTENDING ! </h2>";
    paddedSec.innerText = "00";
    return;
  }

  let totalSeconds = Math.floor(duration / 1000);
  remHour = Math.floor(totalSeconds / 3600);
  remMin = Math.floor((totalSeconds - remHour * 3600) / 60);
  remSec = totalSeconds - remHour * 3600 - remMin * 60;
  remSec = paddedSec.innerText = remSec.toString().padStart(2, "0");
  paddedMin.innerText = remMin.toString().padStart(2, "0");
  paddedHour.innerText = remHour.toString().padStart(2, "0");
  duration -= 1000;
}

let timerId = setInterval(quizTime, 1000);
