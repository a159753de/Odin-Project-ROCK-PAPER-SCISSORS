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

let playerScore = 0;
let computerScore = 0;

function playRound(playerSelection, computerSelection) {
  playerSelection = prompt("Please enter your choice:");
  computerSelection = computerPlay();
  //tie
  if (playerSelection.toLowerCase() === computerSelection) {
    return console.log("Tie");
  } else if (
    //palyer loses
    (playerSelection.toLowerCase() === "rock" &&
      computerSelection === "paper") ||
    (playerSelection.toLowerCase() === "paper" &&
      computerSelection === "scissor") ||
    (playerSelection.toLowerCase() === "scissor" &&
      computerSelection === "rock")
  ) {
    computerScore++;
    return console.log("Computer wins");
  } else if (
    // player wins
    (playerSelection.toLowerCase() === "rock" &&
      computerSelection === "scissor") ||
    (playerSelection.toLowerCase() === "scissor" &&
      computerSelection === "paper") ||
    (playerSelection.toLowerCase() === "paper" && computerSelection === "rock")
  ) {
    playerScore++;
    return console.log("Player wins");
  }
}

function game() {
  for (let i = 0; i < 5; i++) {
    playRound();
  }

  if (playerScore > computerScore) {
    return alert("Final winner:Player!");
  } else if (playerScore < computerScore) {
    return alert("Final winner:Computer!");
  } else {
    return alert("Tie!!");
  }
}
game();
