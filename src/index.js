import { GameController } from './game_controller';
import { Board } from './board';
import { Game } from './game';
import { Player } from './player';

const board = new Board([1, 2, 3, 4, 5, 6, 7, 8, 9]);
console.log("HELOOOO")
const game = new Game(board);
console.log("Game", game)
const gameController = new GameController(game);
console.log("GameController", gameController)

document.getElementById('test').innerHTML = board.grid;
