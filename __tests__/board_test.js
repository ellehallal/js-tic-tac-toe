import { Board } from '../src/board';

describe('Board', () => {

  let board;
  beforeEach(() => {
    board = new Board;
  });

  it('has an array with numbers 1-9 when initialized', () => {
    expect(board.grid).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9]);
  });

  it('puts a mark on the grid', () => {
    board.putMarkOnGrid('x',1)
    expect(board.grid[0]).toEqual('x');
  })

  it('returns true if position is available', () => {
    expect(board.isValidPosition(8)).toEqual(true);
  })

  it('returns false if position is not available', () => {
    board.putMarkOnGrid('x',3)
    expect(board.isValidPosition(3)).toEqual(false);
  })
})
