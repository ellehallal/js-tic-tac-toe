import { Board } from '../src/board';
import { Player } from '../src/player';

class Game {
  constructor() {
    const board = new Board();
    const player = new Player();
    this.grid = board.grid;
    this.player1 = player.player1;
    this.player2 = player.player2;
  }
}

module.exports = { Game };