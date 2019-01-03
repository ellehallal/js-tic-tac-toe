import { Board } from './board';
import { Player } from './player';
import { Game } from './game';
import { GameController } from './game_controller';

let board = new Board([1, 2, 3, 4, 5, 6, 7, 8, 9]);
let game = new Game(board);
let gameController = new GameController(game);

const startButton = document.getElementById('start-button');
const whosPlaying = document.getElementById('whos-playing');
const isTieOrWin = document.getElementById('tie-or-win');

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
  whosPlaying.innerHTML = `Player ${gameController.game.currentPlayer} moves`;
};

const tieOrWin = () => {
  isTieOrWin.innerHTML = gameController.isATieOrWon()
};

const showBoard = () => {
  board = new Board([1, 2, 3, 4, 5, 6, 7, 8, 9]);
  game = new Game(board);
  gameController = new GameController(game);

  one.innerHTML = '';
  two.innerHTML = '';
  three.innerHTML = '';
  four.innerHTML = '';
  five.innerHTML = '';
  six.innerHTML = '';
  seven.innerHTML = '';
  eight.innerHTML = '';
  nine.innerHTML = '';
};

const startGame = () => {
  showBoard();
  currentPlayer();
  tieOrWin();
};

startButton.addEventListener('click', startGame)

one.addEventListener('click', () => {
  gameController.takeTurn(1);
  one.innerHTML = board.grid[0];
  currentPlayer();
  tieOrWin();
});

two.addEventListener('click', () => {
  gameController.takeTurn(2);
  two.innerHTML = board.grid[1];
  currentPlayer();
  tieOrWin();
});

three.addEventListener('click', () => {
  gameController.takeTurn(3);
  three.innerHTML = board.grid[2];
  currentPlayer();
  tieOrWin();
});

four.addEventListener('click', () => {
  gameController.takeTurn(4);
  four.innerHTML = board.grid[3];
  currentPlayer();
  tieOrWin();
});

five.addEventListener('click', () => {
  gameController.takeTurn(5);
  five.innerHTML = board.grid[4];
  currentPlayer();
  tieOrWin();
});

six.addEventListener('click', () => {
  gameController.takeTurn(6);
  six.innerHTML = board.grid[5];
  currentPlayer();
  tieOrWin();
});

seven.addEventListener('click', () => {
  gameController.takeTurn(7);
  seven.innerHTML = board.grid[6];
  currentPlayer();
  tieOrWin();
});

eight.addEventListener('click', () => {
  gameController.takeTurn(8);
  eight.innerHTML = board.grid[7];
  currentPlayer();
  tieOrWin();
});

nine.addEventListener('click', () => {
  gameController.takeTurn(9);
  nine.innerHTML = board.grid[8];
  currentPlayer();
  tieOrWin();
});
