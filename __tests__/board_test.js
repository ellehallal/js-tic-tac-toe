import { Board } from '../src/board';

describe('Board', () => {

  let board;
  beforeEach(() => {
    board = new Board;
  });

  it('has an array with numbers 1-9 when initialized', () => {
    expect(board.grid).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9]);
  });
})
