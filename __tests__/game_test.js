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
    game.switchPlayer(game.currentPlayer)
    expect(game.currentPlayer).toEqual('o');
  });

  it('allows a player to make a move', () => {
    game.makeMove(game.currentPlayer, 3)
    expect(game.grid).toEqual([1, 2, 'x', 4, 5, 6, 7, 8, 9]);
  });

  it('does not allow a player to make a move if the position is taken', () => {
    game.makeMove(game.currentPlayer, 3)
    game.switchPlayer
    expect(game.makeMove(game.currentPlayer, 3)).toEqual('position not available');
  });

  it('knows whether the game is finished or not', () => {
    game.makeMove(game.currentPlayer, 1)
    game.switchPlayer
    game.makeMove(game.currentPlayer, 2)
    game.switchPlayer
    game.makeMove(game.currentPlayer, 3)
    game.switchPlayer
    game.makeMove(game.currentPlayer, 5)
    game.switchPlayer
    game.makeMove(game.currentPlayer, 4)
    game.switchPlayer
    game.makeMove(game.currentPlayer, 7)
    game.switchPlayer
    game.makeMove(game.currentPlayer, 6)
    game.switchPlayer
    game.makeMove(game.currentPlayer, 9)
    game.switchPlayer
    game.makeMove(game.currentPlayer, 8)
    expect(game.canContinuePlaying()).toEqual(false);
  });

})
