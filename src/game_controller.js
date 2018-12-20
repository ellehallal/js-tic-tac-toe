import { Game } from '../src/game';

class GameController {
  constructor() {
    this.game = new Game;
    this.currentPlayer = this.game.currentPlayer;
    this.currentPlayerCanMakeMove = true;
    this.gameIsActive = true;
  }

  takeTurn(position) {
    this.game.makeMove(this.game.currentPlayer, position);

  }

  togglePlayer() {
    this.game.switchPlayer();
  }

// start(){
//   while(this.game.canContinuePlaying(this.game.currentPlayer) {
//     takeTurn(position)
//   }
//   this.game.isTieOrIsWon();
// }

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
