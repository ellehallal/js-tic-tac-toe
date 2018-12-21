import { Game } from '../src/game';

describe('Game', () => {

  let game;
  beforeEach(() => {
    game = new Game;
  });

  it('creates an instance of the Board class when initialized', () => {
    expect(game.grid).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9]);
  });

  it('creates an instance of the player 1 when initialized', () => {
    expect(game.player1).toEqual('x');
  });

  it('creates an instance of the player 2 when initialized', () => {
    expect(game.player2).toEqual('o');
  });

  it('sets the current player to player 1 when initialized', () => {
    expect(game.currentPlayer).toEqual('x');
  });

  it('switches from one player to another', () => {
    game.switchPlayer()
    expect(game.currentPlayer).toEqual('o');
  });

  it('allows a player to make a move', () => {
    game.makeMove(game.currentPlayer, 3)
    expect(game.grid).toEqual([1, 2, 'x', 4, 5, 6, 7, 8, 9]);
  });
  //
  it('does not allow a player to make a move if the position is taken', () => {
    game.makeMove(game.currentPlayer, 3)
    game.switchPlayer()
    game.makeMove(game.currentPlayer, 3)
    game.makeMove(game.currentPlayer, 5)
    expect(game.grid).toEqual([1, 2, 'x', 4, 'o', 6, 7, 8, 9]);
  });
  //
  it('knows the game has ended', () => {
    game.makeMove(game.currentPlayer, 1)
    game.switchPlayer()
    game.makeMove(game.currentPlayer, 2)
    game.switchPlayer()
    game.makeMove(game.currentPlayer, 3)
    game.switchPlayer()
    game.makeMove(game.currentPlayer, 5)
    game.switchPlayer()
    game.makeMove(game.currentPlayer, 4)
    game.switchPlayer()
    game.makeMove(game.currentPlayer, 7)
    game.switchPlayer()
    game.makeMove(game.currentPlayer, 6)
    game.switchPlayer()
    game.makeMove(game.currentPlayer, 9)
    game.switchPlayer()
    game.makeMove(game.currentPlayer, 8)
    expect(game.canContinuePlaying(game.currentPlayer)).toEqual(false);
  });

  it('knows the game can still be played', () => {
    game.makeMove(game.currentPlayer, 1)
    game.switchPlayer()
    game.makeMove(game.currentPlayer, 2)
    game.switchPlayer()
    game.makeMove(game.currentPlayer, 3)
    game.switchPlayer()
    game.makeMove(game.currentPlayer, 5)
    game.switchPlayer()
    game.makeMove(game.currentPlayer, 4)
    game.switchPlayer()
    game.makeMove(game.currentPlayer, 7)
    game.switchPlayer()
    game.makeMove(game.currentPlayer, 6)
    game.switchPlayer()
    game.makeMove(game.currentPlayer, 9)
    expect(game.canContinuePlaying(game.currentPlayer)).toEqual(true);
  });

  it('knows the game has ended and is a tie', () => {
    game.makeMove(game.currentPlayer, 1)
    game.switchPlayer()
    game.makeMove(game.currentPlayer, 2)
    game.switchPlayer()
    game.makeMove(game.currentPlayer, 3)
    game.switchPlayer()
    game.makeMove(game.currentPlayer, 5)
    game.switchPlayer()
    game.makeMove(game.currentPlayer, 4)
    game.switchPlayer()
    game.makeMove(game.currentPlayer, 7)
    game.switchPlayer()
    game.makeMove(game.currentPlayer, 6)
    game.switchPlayer()
    game.makeMove(game.currentPlayer, 9)
    game.switchPlayer()
    game.makeMove(game.currentPlayer, 8)
    expect(game.isTieOrIsWon()).toEqual("Tie");
  });

  it('knows the game has ended and that a player has won', () => {
    game.makeMove(game.currentPlayer, 5)
    game.switchPlayer()
    game.makeMove(game.currentPlayer, 3)
    game.switchPlayer()
    game.makeMove(game.currentPlayer, 2)
    game.switchPlayer()
    game.makeMove(game.currentPlayer, 4)
    game.switchPlayer()
    game.makeMove(game.currentPlayer, 8)
    expect(game.isTieOrIsWon()).toEqual("Win");
  });

})
