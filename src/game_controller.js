import { Game } from '../src/game';

class GameController {
  constructor() {
    this.game = new Game;
    this.currentPlayerCanMakeMove = true;
    this.gameIsActive = true;
  }

// start() {
  while this.gameIsActive === true do {
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
// }
}

module.exports = { GameController };
