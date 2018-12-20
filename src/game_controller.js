import { Game } from '../src/game';

class GameController {
  constructor() {
    this.game = new Game;
    this.currentPlayer = this.game.currentPlayer;
    this.currentPlayerCanMakeMove = true;
    this.gameIsActive = true;
  }

  takeTurn(position) {
    this.game.makeMove(this.currentPlayer, position);
    return this.game.switchPlayer(this.currentPlayer);
  }

  togglePlayer() {
    return this.game.switchPlayer(this.currentPlayer);
  }

  start() {
    while(this.gameIsActive === true) {
      if(this.currentPlayerCanMakeMove === true) {
        if(game.makeMove(currentPlayer, chosen_position) === true) {
          this.currentPlayerCanMakeMove = false;
        } else {
          game.makeMove(currentPlayer, change_chosen_position);
        };
      } else if(this.currentPlayerCanMakeMove === false) {
        if(game.canContinuePlaying()) {
          game.switchPlayer();
          this.currentPlayerCanMakeMove = true;
        } else {
          this.gameIsActive = false;
        }
      }
    };
    game.isTieOrIsWon();
  }
}

module.exports = { GameController };
