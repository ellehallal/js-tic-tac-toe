import { Board } from '../src/board';

class Game {
  constructor() {
    const board = new Board();
    this.grid = board.grid
  }
}

module.exports = { Game };
