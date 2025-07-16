testy.style.display = "none";
Starty.style.display = "block";
modal.style.display = "none";
closey.style.display = "none";
subt.style.display = "none";
resulty.style.display = "none";
you.style.display = "none";
quest.style.display = "none";
let currentQuestion = 0;
let score = 0;

const data = [
  {
    question: "Who was the first man created by God ?",
    options: [
      "(A) Adam(A.S)",
      "(B) Idris(A.S)",
      "(C) Noah(A.S)",
      "(D) Muhammad(S.A.W)",
    ],
    answer: "(A) Adam(A.S)",
  },

  {
    question: "What year did Nigeria became a republic ? ",
    options: ["(A) 1973", "(B) 1960", "(C) 1963 ", "(D) 1961"],
    answer: "(C) 1963",
  },
  {
    question: "Choose the noun phrase in the listed",
    options: [
      "(A) A gigantic Dinosaur",
      " (B) from under the seat",
      " (C) fill up",
      " (D) come here",
    ],
    answer: "(A) A gigantic Dinosaur",
  },
  {
    question: "Carrots are ____ ?",
    options: ["(A) Protein", "(B) Fruits", "(C) Vegetable", "(D) Carbohydrate"],
    answer: "(C) Vegetable",
  },
  {
    question: "2x + 5 = 10 what is the value of x ?",
    options: ["(A) 2", "(B) 3", "(C) 3.5", "(D) 2.5"],
    answer: "(D) 2.5",
  },
  {
    question: "What is the full meaning of PS ?",
    options: [
      " (A) Play-Station",
      "(B) Post-Script",
      " (C) Please Sing",
      "(D) Please Sit",
    ],
    answer: "(B) Post-Script",
  },
  {
    question: "Weed are _____ plants?",
    options: ["(A) unwanted", "(B) ripe", "(C) marijuana", "(D) wanted"],
    answer: "(A) unwanted",
  },
  {
    question: "DG brand means ____ ?",
    options: [
      "(A) Dolce Gabbana",
      "(B) Director-General",
      "(C) Do Good",
      " (D) Dog",
    ],
    answer: "(A) Dolce Gabbana",
  },
  {
    question: "Tsetsefly causes ____ ?",
    options: [
      "  (A) Excessive sleep",
      "  (B) Excessive sugar",
      "(C) Diabetes",
      "  (D) Excessive fat",
    ],
    answer: "(A) Excessive sleep",
  },
  {
    question: "Which is spelt well ?",
    options: [
      " (A) psychological ",
      "(B) psycological",
      "(C) sycological ",
      "(D) sychological",
    ],
    answer: "(A) psychological",
  },
  {
    question: "The winner of 2016 EPL season is ?",
    options: ["(A) ManCity ", "(B) Man Utd ", "(C) Liverpool", "(D) Chelsea"],
    answer: "(D) Chelsea",
  },
];
const handleStart = () => {
  testy.style.display = "block";
  Starty.style.display = "none";
  generateBtn();
  showQuestion();
};

const generateBtn = () => {
  buttons.innerHTML = " ";
  data.forEach((_, index) => {
    const btn = document.createElement("button");
    btn.innerText = index + 1;
    btn.className =
      "bg-transparent hover:bg-gray-400 text-black text-sm text-center font-bold py-3 px-3  h-10 rounded";
    btn.onclick = () => {
      currentQuestion = index;
      showQuestion();
    };
    buttons.appendChild(btn);
  });
};

const showQuestion = () => {
  const quiz = data[currentQuestion];
  question.innerHTML = quiz.question;
  options.innerHTML = "";

  quiz.options.forEach((opt) => {
    const btn = document.createElement("button");
    btn.className =
      "options bg-blue-500 hover:bg-blue-600 text-white rounded px-4 py-2 my-2 w-full text-left";
    btn.innerText = opt;
    btn.onclick = () => {
      const allButtons = options.querySelectorAll("button");
      allButtons.forEach((b) =>
        b.classList.remove("bg-green-500", "ring", "ring-offset-2")
      );
      btn.classList.add("bg-green-500", "ring", "ring-offset-2");
      checkAnswer(opt.trim());
    };

    options.appendChild(btn);
  });
};

const nextQuestion = () => {
  if (currentQuestion < data.length - 1) {
    currentQuestion += 1;
    showQuestion();
  }
};

const previousQuestion = () => {
  if (currentQuestion > 0) {
    currentQuestion -= 1;
    showQuestion();
  }
};

const checkAnswer = (selected) => {
  const quiz = data[currentQuestion];
  const correct = quiz.answer;

  if (selected === correct && !quiz.isAnswered) {
    score++;
    quiz.isAnswered = true;
  }
};
const result = () => {
  display.innerHTML = `Quiz finished! Your score is ${score} out of ${data.length}`;
  closey.style.display = "block";
  testy.style.display = "none";
  subt.style.display = "none";
  resulty.style.display = "block";
};
const finish = () => {
  quest.style.display = "block";
  fin.style.display = "none";
};
const handleClose = () => {
  you.style.display = "block";
  testy.style.display = "none";
  resulty.style.display = "none";
  subt.style.display = "none";
};
const Submit = () => {
  subt.style.display = "block";
  testy.style.display = "none";
};

const autoSubmit = () => {
  result();
  Starty.style.display = "none"
};
setTimeout(() => {
  autoSubmit();
}, 1000 * 60);


const handleYes = () => {
  subt.style.display = "block";
  testy.style.display = "none";
};
const handleCancel = () => {
  testy.style.display = "block";
  fin.style.display = "block";
  hey.style.display = "none";
  can.style.display = "none";
  autho.style.display = "none";
};
let timeLeft = 60; 
let countdownInterval;

const timer = () => {
  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;
  const minCountDown = String(minutes).padStart(2, '0');
  const secCountDown = String(seconds).padStart(2, '0');

down.innerHTML = `${minCountDown}:${secCountDown}`;
  timeLeft--;
  if (timeLeft < 0) {
    clearInterval(countdownInterval);
    autoSubmit(); 
  }
};
countdownInterval = setInterval(timer, 1000);
timer();


