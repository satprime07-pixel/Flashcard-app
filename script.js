let flashcards = JSON.parse(localStorage.getItem('flashcards')) || [
  { q: "What is 2 + 2?", a: "4" },
  { q: "Capital of France?", a: "Paris" },
  { q: "HTML stands for?", a: "HyperText Markup Language"  }

];

let index = 0;
let showAnswer = false;

const text = document.getElementById("text");
const flipBtn = document.getElementById("flipBtn");
const nextBtn = document.getElementById("nextBtn");
const prevBtn = document.getElementById("prevBtn");
const addBtn = document.getElementById("addBtn");

const newQuestion = document.getElementById("newQuestion");
const newAnswer = document.getElementById("newAnswer");
const card = document.getElementById("card");

function renderCard() {
  text.innerText = showAnswer ? flashcards[index].a : flashcards[index].q;
  flipBtn.innerText = showAnswer ? "Show Question" : "Show Answer";
}

flipBtn.onclick = () => {
  showAnswer = !showAnswer;
  card.classList.toggle('flip');
  renderCard();
};

nextBtn.onclick = () => {
  index = (index + 1) % flashcards.length;
  showAnswer = false;
  card.classList.remove('flip');
  renderCard();
};

prevBtn.onclick = () => {
  index = (index - 1 + flashcards.length) % flashcards.length;
  showAnswer = false;
  card.classList.remove('flip');
  renderCard();
};

addBtn.onclick = () => {
  const q = newQuestion.value.trim();
  const a = newAnswer.value.trim();

  if (q && a) {
    flashcards.push({ q, a });
    localStorage.setItem('flashcards', JSON.stringify(flashcards));
    newQuestion.value = '';
    newAnswer.value = '';
    index = flashcards.length - 1;
    showAnswer = false;
    renderCard();
  }
};

renderCard();