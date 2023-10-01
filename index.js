const score = {
  wins: 0,
  losses: 0,
  ties: 0,
};

updateScoreElement();

function gamePlay(playerMove) {
  console.log(playerMove);
  let computerMove = computerMove1();
  let result;
  if (playerMove === "rock") {
    if (computerMove === "rock") result = "tie";
    else if (computerMove === "paper") result = "lose";
    else result = "win";
  } else if (playerMove === "paper") {
    if (computerMove === "rock") result = "win";
    else if (computerMove === "paper") result = "tie";
    else result = "lose";
  } else {
    if (computerMove === "rock") result = "lose";
    else if (computerMove === "paper") result = "win";
    else result = "tie";
  }

  if (result === "win") score.wins++;
  else if (result === "lose") score.losses++;
  else score.ties++;
  showResult(playerMove, computerMove, result);
  updateScoreElement();
}

function computerMove1() {
  const rand = Math.random();

  if (rand >= 0 && rand < 1 / 3) return "rock";
  else if (rand >= 1 / 3 && rand < 2 / 3) return "paper";
  else return "scissor";
}

function updateScoreElement() {
  document.querySelector(
    ".js-score"
  ).innerHTML = `Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`;
}

function showResult(playerMove, computerMove, result) {
  let playerImg = getIconForMove(playerMove);
  let computerImg = getIconForMove(computerMove);
  let resultMsg = `<p>You ${result}.</p>
      <p>You <img class="css-result-icon" src="${playerImg}"/> <img class="css-result-icon" src="${computerImg}"/> computer</p>`;
  document.querySelector(".js-result").innerHTML = resultMsg;
}

function showStats() {
  let stats = `score win ${score.wins}, losses ${score.losses}, ties ${score.ties}.`;
}

function getIconForMove(move) {
  let resultImg;
  if (move === "rock") {
    resultImg = "images/rock-emoji.png";
  } else if (move === "paper") {
    resultImg = "images/paper-emoji.png";
  } else {
    resultImg = "images/scissors-emoji.png";
  }
  return resultImg;
}