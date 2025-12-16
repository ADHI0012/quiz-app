const button = document.querySelector(".btn.btn-success");
const qn = document.querySelector('input[name="question"]');
const o1 = document.querySelector('input[name="option1"]');
const o2 = document.querySelector('input[name="option2"]');
const o3 = document.querySelector('input[name="option3"]');
const o4 = document.querySelector('input[name="option4"]');
const ca = document.querySelector('select[name="correctOption"]');
const q = document.querySelector('label[for="q"]');
let i = 1;
const maxQuestions = parseInt(button.getAttribute("data-max-questions"), 10);
const container = document.querySelector(".container");
const doneButton = document.querySelector(".btn.btn-primary");
const h1 = document.querySelector("h1");
const title = document.querySelector("span");

button.addEventListener("click", function (e) {
  if (i > maxQuestions) {
    alert(`You have reached the maximum of ${maxQuestions} questions!`);
    button.disabled = true;
    return;
  }
  const requestBody = {
    question: qn.value,
    option1: o1.value,
    option2: o2.value,
    option3: o3.value,
    option4: o4.value,
    correctOption: ca.value,
  };
  fetch(`/questions?title=${title}`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(requestBody),
  })
    .then((data) => {
      o1.value = "";
      o2.value = "";
      o3.value = "";
      o4.value = "";
      qn.value = "";
      ca.value = "";
      i++;
      q.innerText = `Question ${i}`;
    })
    .catch((err) => console.error("Error:", err));
});
