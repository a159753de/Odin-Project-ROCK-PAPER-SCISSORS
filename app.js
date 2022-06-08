let playerScore = 0;
let computerScore = 0;
const buttons = document.querySelectorAll("button");
//score result
const roundWinner = document.querySelector(".roundWinner");
const finalWinner = document.querySelector(".finalWinner");
function computerPlay() {
  //產生0~2的隨機數
  let randoNumber = Math.floor(Math.random() * 3);
  if (randoNumber === 0) {
    return "rock";
  } else if (randoNumber === 1) {
    return "paper";
  } else {
    return "scissor";
  }
}

//猜拳
function playRound(playerSelection) {
  let computerSelection = computerPlay();
  let result = "";

  //tie
  if (playerSelection === computerSelection) {
    result = `Tie! <br/><br/>
    Computer is ${computerSelection}<br/><br/>
    Player score:${playerScore}<br/><br/>
    Computer score:${computerScore}`;
  } else if (
    //palyer loses
    (playerSelection === "rock" && computerSelection === "paper") ||
    (playerSelection === "paper" && computerSelection === "scissor") ||
    (playerSelection === "scissor" && computerSelection === "rock")
  ) {
    computerScore++;
    result = `Computer wins!<br/><br/>
    Computer is ${computerSelection}<br/><br/>
    Player score:${playerScore} <br/><br/>
    Computer score:${computerScore}`;
  } else if (
    // player wins
    (playerSelection === "rock" && computerSelection === "scissor") ||
    (playerSelection === "scissor" && computerSelection === "paper") ||
    (playerSelection === "paper" && computerSelection === "rock")
  ) {
    playerScore++;
    result = `Player wins!<br/><br/>
    Computer is ${computerSelection}<br/><br/>
    Player score:${playerScore}<br/><br/>
    Computer score:${computerScore}`;
  }
  roundWinner.innerHTML = result;

  //判斷是是否5局，5局就終止(還沒做)
  if (playerScore === 5) {
    finalWinner.innerHTML = "The final winner is: Player!";
    disabledButtons();
  } else if (computerScore === 5) {
    finalWinner.innerHTML = "The final winner is: Computer!";
    disabledButtons();
  }
}

//click
buttons.forEach(function (button) {
  button.addEventListener("click", function () {
    const player = button.value;

    playRound(player);
  });
});
//disabled buttons
function disabledButtons() {
  buttons.forEach((element) => {
    element.disabled = true;
  });
}
