const computerChoiceDisplay = document.getElementById("computer-choice");
const userChoiceDisplay = document.getElementById("user-choice");
const resultDisplay = document.getElementById("result");
const possibleChoices = document.querySelectorAll("button");
const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
// const color =document.querySelector(".color");
let userChoice;
let computerChoice;
let result;

possibleChoices.forEach((possibleChoice) =>
  possibleChoice.addEventListener("click", (e) => {
    userChoice = e.target.id;
    userChoiceDisplay.innerHTML = userChoice;
    generateComputerChoice();

    getResult();

    let hexColor = "#";
    for (let i = 0; i < 6; i++) {
      hexColor += hex[getRandomNumber()];
      console.log(hexColor);
    }
    // color.textContent = hexColor
    document.body.style.backgroundColor = hexColor;
  })
);

function generateComputerChoice() {
  const randomNumber = Math.floor(Math.random() * possibleChoices.length);

  if (randomNumber === 1) {
    computerChoice = "rock";
  }
  if (randomNumber === 2) {
    computerChoice = "scissors";
  }
  if (randomNumber === 3) {
    computerChoice = "paper";
  }
  computerChoiceDisplay.innerHTML = computerChoice;
}

function getResult() {
  if (computerChoice === userChoice) {
    result = "its a draw!";
  }
  if (computerChoice === "rock" && userChoice === "paper") {
    result = "You win!";
  }
  if (computerChoice === "rock" && userChoice === "scissors") {
    result = "You lose!";
  }
  if (computerChoice === "scissors" && userChoice === "paper") {
    result = "You lose!";
  }
  if (computerChoice === "scissors" && userChoice === "rock") {
    result = "You win!";
  }
  if (computerChoice === "paper" && userChoice === "rock") {
    result = "You lose!";
  }
  if (computerChoice === "paper" && userChoice === "scissors") {
    result = "You win!";
  }
  resultDisplay.innerHTML = result;
}

function getRandomNumber() {
  return Math.floor(Math.random() * hex.length);
  console.log(getRandomNumber());
}
