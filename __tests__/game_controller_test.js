import { GameController } from '../src/game_controller';

describe('GameController', () => {

  let gameController;
  beforeEach(() => {
    gameController = new GameController;
  });

  it('creates an instance of the Game class when initialized', () => {
    expect(typeof gameController.game === 'object').toEqual(true);
  });
})
