import { Board } from '../src/board';
import { Player } from '../src/player';

class Game {
  constructor() {
    this.board = new Board();
    this.player = new Player();
    this.grid = this.board.grid;
    this.player1 = this.player.player1;
    this.player2 = this.player.player2;
    this.currentPlayer = this.player.player1;
  }

  switchPlayer(currentPlayer) {
    if(currentPlayer === this.player1){
      this.currentPlayer = this.player2;
    } else {
      this.currentPlayer = this.player1;
    };
  }

  makeMove(currentPlayer, position) {
    if(this.board.isValidPosition(position)) {
      this.board.putMarkOnGrid(currentPlayer, position)
    } else {
      return 'position not available'
    };
  };

  canContinuePlaying(currentPlayer) {
    if(this.board.hasPlayerWon(currentPlayer) === false && this.board.gameIsATie() === false) {
      return true
    } else {
      return false
    };
  };

  isTieOrIsWon(currentPlayer){
    if(this.board.hasPlayerWon(currentPlayer)){
      return `${currentPlayer} has won`;
    } else if(this.board.gameIsATie()) {
      return "Tie";
    }
  }
}

module.exports = { Game };
