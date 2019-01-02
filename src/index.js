import { Board } from './board';
import { Player } from './player';
import { Game } from './game';
import { GameController } from './game_controller';

const startButton = document.getElementById('start-button')
const one = document.getElementById('one');
const two = document.getElementById('two');
const three = document.getElementById('three');
const four = document.getElementById('four');
const five = document.getElementById('five');
const six = document.getElementById('six');
const seven = document.getElementById('seven');
const eight = document.getElementById('eight');
const nine = document.getElementById('nine');




const board = new Board([1, 2, 3, 4, 5, 6, 7, 8, 9]);
const game = new Game(board);
const gameController = new GameController(game);

const showBoard = () => {
  const positionOne = board.grid[0];
  const positionTwo = board.grid[1];
  const positionThree = board.grid[2];
  const positionFour = board.grid[3];
  const positionFive = board.grid[4];
  const positionSix = board.grid[5];
  const positionSeven = board.grid[6];
  const positionEight = board.grid[7];
  const positionNine = board.grid[8];

  one.innerHTML = positionOne;
  two.innerHTML = positionTwo;
  three.innerHTML = positionThree;
  four.innerHTML = positionFour;
  five.innerHTML = positionFive;
  six.innerHTML = positionSix;
  seven.innerHTML = positionSeven;
  eight.innerHTML = positionEight;
  nine.innerHTML = positionNine;
}



const startGame = () => {

  showBoard();

}

startButton.addEventListener("click", startGame)
one.addEventListener("click", gameController.takeTurn(positionOne))
