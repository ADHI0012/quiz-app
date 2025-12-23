let current = 1;
const questions = document.querySelectorAll(".questions");
const len = questions.length;
const prevButton = document.querySelector("#previous");
const nextButton = document.querySelector("#next");
const submitButton = document.querySelector("#submit");

questions.forEach((q, index) => {
  q.style.display = index == 0 ? "block" : "none";
});

prevButton.style.display = "none";
submitButton.style.display = "none";

function showQuestion(number) {
  console.log(number);

  questions.forEach((q, index) => {
    q.style.display = index == number - 1 ? "block" : "none";

    nextButton.style.display = number == len ? "none" : "inline";
    prevButton.style.display = number == 1 ? "none" : "inline";
    submitButton.style.display = number == len ? "inline" : "none";
  });
}

nextButton.addEventListener("click", () => {
  showQuestion(++current);
});
prevButton.addEventListener("click", () => {
  showQuestion(--current);
});
