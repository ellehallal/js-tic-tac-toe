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
})
