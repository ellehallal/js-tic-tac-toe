import { Game } from '../src/game';

class GameController {
  constructor() {
    this.game = new Game;
    this.currentPlayerCanMakeMove = true;
  }
}

// start() {
// }

if(this.currentPlayerCanMakeMove === true) {
  if(game.makeMove(currentPlayer, chosen_position) === true) {
    this.currentPlayerCanMakeMove = false;
  } else {
    game.makeMove(currentPlayer, change_chosen_position);
  };

  if(game.canContinuePlaying()) {
    game.switchPlayer();
    return (this.currentPlayerCanMakeMove = true);
  }

} else {
    game.isTieOrIsWon();
  }

module.exports = { GameController };
