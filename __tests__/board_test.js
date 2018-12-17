import { Board } from '../src/board';

describe('newBoard', () => {
  const newBoard = new Board;

  it('has the name test', () => {
    expect(newBoard.name).toEqual("test");
  });
})
