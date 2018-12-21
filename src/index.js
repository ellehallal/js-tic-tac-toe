import { GameController } from './game_controller';
import { Board } from './board';
import { Game } from './game';
import { Player } from './player';

const board = new Board([1, 2, 3, 4, 5, 6, 7, 8, 9]);
const game = new Game(board);
const gameController = new GameController(game);

document.getElementById('test').innerHTML = board.grid;
