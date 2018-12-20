import { GameController } from '../src/game_controller';

describe('GameController', () => {

  let gameController;
  beforeEach(() => {
    gameController = new GameController;
  });

  it('creates an instance of the Game class when initialized', () => {
    expect(typeof gameController.game === 'object').toEqual(true);
  });

  it('allows a player to make a move', () => {
    gameController.takeTurn(3)
    expect(gameController.game.grid).toEqual([1, 2, 'x', 4, 5, 6, 7, 8, 9]);
  });

  it('allows a second player to make a move', () => {
    gameController.takeTurn(3)
    gameController.takeTurn(5)
    expect(gameController.game.grid).toEqual([1, 2, 'x', 4, 'o', 6, 7, 8, 9]);
  });
})
