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

function singleTurn(event) {
  const cellIdWord = event.target.id;
  let selectedCell = document.getElementById(cellIdWord);
  const cellIdNumber = numbers[cellIdWord];
  if(gameController.game.board.gameIsATie() === false && gameController.game.board.hasPlayerWon() === false) {
    gameController.takeTurn(cellIdNumber);
    selectedCell.innerHTML = board.grid[cellIdNumber - 1];
  }
  currentPlayer();
  tieOrWin();
}

document.getElementById('player-grid').addEventListener('click', singleTurn)

const numbers = {
  'one': 1,
  'two': 2,
  'three': 3,
  'four': 4,
  'five': 5,
  'six': 6,
  'seven': 7,
  'eight': 8,
  'nine': 9,
};

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
