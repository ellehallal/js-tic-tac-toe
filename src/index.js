import { Board } from './board';
import { Player } from './player';
import { Game } from './game';
import { GameController } from './game_controller';


const board = new Board([1, 2, 3, 4, 5, 6, 7, 8, 9]);
const game = new Game(board);
const gameController = new GameController(game);

document.getElementById('test').innerHTML = board.grid;

const positionOne = board.grid[0];
const positionTwo = board.grid[1];
const positionThree = board.grid[2];
const positionFour = board.grid[3];
const positionFive = board.grid[4];
const positionSix = board.grid[5];
const positionSeven = board.grid[6];
const positionEight = board.grid[7];
const positionNine = board.grid[8];

document.getElementById('one').innerHTML = positionOne;
document.getElementById('two').innerHTML = positionTwo;
document.getElementById('three').innerHTML = positionThree;
document.getElementById('four').innerHTML = positionFour;
document.getElementById('five').innerHTML = positionFive;
document.getElementById('six').innerHTML = positionSix;
document.getElementById('seven').innerHTML = positionSeven;
document.getElementById('eight').innerHTML = positionEight;
document.getElementById('nine').innerHTML = positionNine;
