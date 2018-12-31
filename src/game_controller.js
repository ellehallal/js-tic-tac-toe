import { Game } from '../src/game';

export class GameController {
  constructor(game) {
    this.game = game;
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
      if(this.takeTurn(position)){
        this.togglePlayer();
      } else {
        this.takeTurn(position);
      }
    }
    return this.isTieOrIsWon();
  }

}
