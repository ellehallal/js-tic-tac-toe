import { Board } from './board';
import { Player } from './player';
import { Game } from './game';
import { GameController } from './game_controller';

const board = new Board([1, 2, 3, 4, 5, 6, 7, 8, 9]);
const game = new Game(board);
const gameController = new GameController(game);

const startButton = document.getElementById('start-button')
const whosPlaying = document.getElementById('whos-playing')
const one = document.getElementById('one');
const two = document.getElementById('two');
const three = document.getElementById('three');
const four = document.getElementById('four');
const five = document.getElementById('five');
const six = document.getElementById('six');
const seven = document.getElementById('seven');
const eight = document.getElementById('eight');
const nine = document.getElementById('nine');

const positionOne = board.grid[0];
const positionTwo = board.grid[1];
const positionThree = board.grid[2];
const positionFour = board.grid[3];
const positionFive = board.grid[4];
const positionSix = board.grid[5];
const positionSeven = board.grid[6];
const positionEight = board.grid[7];
const positionNine = board.grid[8];

const currentPlayer = () => {
  whosPlaying.innerHTML = `Player ${gameController.game.currentPlayer} moves`
}

const showBoard = () => {
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
  currentPlayer();
}

startButton.addEventListener('click', startGame)

one.addEventListener('click', () => {
  gameController.takeTurn(1);
  one.innerHTML = board.grid[0];
  currentPlayer();
});

two.addEventListener('click', () => {
  gameController.takeTurn(2);
  two.innerHTML = board.grid[1];
  currentPlayer();
});

three.addEventListener('click', () => {
  gameController.takeTurn(3);
  three.innerHTML = board.grid[2];
  currentPlayer();
});

four.addEventListener('click', () => {
  gameController.takeTurn(4);
  four.innerHTML = board.grid[3];
  currentPlayer();
});

five.addEventListener('click', () => {
  gameController.takeTurn(5);
  five.innerHTML = board.grid[4];
  currentPlayer();
});

six.addEventListener('click', () => {
  gameController.takeTurn(6);
  six.innerHTML = board.grid[5];
  currentPlayer();
});

seven.addEventListener('click', () => {
  gameController.takeTurn(7);
  seven.innerHTML = board.grid[6];
  currentPlayer();
});

eight.addEventListener('click', () => {
  gameController.takeTurn(8);
  eight.innerHTML = board.grid[7];
  currentPlayer();
});

nine.addEventListener('click', () => {
  gameController.takeTurn(9);
  nine.innerHTML = board.grid[8];
  currentPlayer();
});
