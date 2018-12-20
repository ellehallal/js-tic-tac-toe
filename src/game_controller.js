import { Game } from '../src/game';

class GameController {
  constructor() {
    this.game = new Game;
  }

  takeTurn(position) {
    this.game.makeMove(this.game.currentPlayer, position);
  }

  togglePlayer() {
    this.game.switchPlayer();
  }

  canContinuePlaying(){
    return this.game.canContinuePlaying(this.game.currentPlayer);
  }

  isATieOrWon(){
    return this.game.isTieOrIsWon();
  }

  start() {
    while(this.canContinuePlaying) {
      this.takeTurn(position);
      this.togglePlayer();
    }
    return this.isTieOrIsWon();
  }

}

module.exports = { GameController };
