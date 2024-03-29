// All code should be written in this file.
let playerOneMoveOneType, playerOneMoveTwoType, playerOneMoveThreeType;
let playerOneMoveOneValue, playerOneMoveTwoValue, playerOneMoveThreeValue;

let playerTwoMoveOneType, playerTwoMoveTwoType, playerTwoMoveThreeType;
let playerTwoMoveOneValue, playerTwoMoveTwoValue, playerTwoMoveThreeValue;

function setPlayerMoves(
  player,
  moveOneType,
  moveOneValue,
  moveTwoType,
  moveTwoValue,
  moveThreeType,
  moveThreeValue
) {
  // create failfast return if any of the values were not provided
  if (
    !moveOneType ||
    !moveOneValue ||
    !moveTwoType ||
    !moveTwoValue ||
    !moveThreeType ||
    !moveThreeValue
  ) {
    return;
  }
  if (
    !isValidMoveType(moveOneType) ||
    !isValidMoveType(moveTwoType) ||
    !isValidMoveType(moveThreeType)
  ) {
    return;
  }
  if (
    !isValidMoveValue(moveOneValue) ||
    !isValidMoveValue(moveTwoValue) ||
    !isValidMoveValue(moveThreeValue)
  ) {
    return;
  }
  if (moveOneValue + moveTwoValue + moveThreeValue > 99) {
    return;
  }

  if (player === "Player One") {
    playerOneMoveOneType = moveOneType;
    playerOneMoveOneValue = moveOneValue;
    playerOneMoveTwoType = moveTwoType;
    playerOneMoveTwoValue = moveTwoValue;
    playerOneMoveThreeType = moveThreeType;
    playerOneMoveThreeValue = moveThreeValue;
  } else if (player === "Player Two") {
    playerTwoMoveOneType = moveOneType;
    playerTwoMoveOneValue = moveOneValue;
    playerTwoMoveTwoType = moveTwoType;
    playerTwoMoveTwoValue = moveTwoValue;
    playerTwoMoveThreeType = moveThreeType;
    playerTwoMoveThreeValue = moveThreeValue;
  }
}

// create helper function `isValidMoveType()` with parameters `moveType` to validate value 'rock', 'paper' or 'scissors'

function isValidMoveType(moveType) {
  return moveType === "rock" || moveType === "paper" || moveType === "scissors";
}

// create helper function `isValidMoveValue()` accepts arguments of `moveValue` and checks thats it is >=1 and <=99
function isValidMoveValue(moveValue) {
  return moveValue >= 1 && moveValue <= 99;
}

// 18:28
