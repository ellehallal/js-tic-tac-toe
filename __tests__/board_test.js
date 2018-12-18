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
  });

  it('returns true if position is available', () => {
    expect(board.isValidPosition(8)).toEqual(true);
  });

  it('returns false if position is not available', () => {
    board.putMarkOnGrid('x',3)
    expect(board.isValidPosition(3)).toEqual(false);
  });

  it('can check whether 1, 2, and 3 have the mark x', () => {
    board.putMarkOnGrid('x',1)
    board.putMarkOnGrid('x',2)
    board.putMarkOnGrid('x',3)
    expect(board.hasPlayerWon('x')).toEqual(true);
  });

  it('can check whether 1, 2, and 3 have the mark o', () => {
    board.putMarkOnGrid('o',1)
    board.putMarkOnGrid('o',2)
    board.putMarkOnGrid('o',3)
    expect(board.hasPlayerWon('o')).toEqual(true);
  });

  it('can check whether player has won in a column', () => {
    board.putMarkOnGrid('x',5)
    board.putMarkOnGrid('o',3)
    board.putMarkOnGrid('x',2)
    board.putMarkOnGrid('o',4)
    board.putMarkOnGrid('x',8)
    expect(board.hasPlayerWon('x')).toEqual(true);
  });

  it('can check whether player has won diagonally', () => {
    board.putMarkOnGrid('o',1)
    board.putMarkOnGrid('x',2)
    board.putMarkOnGrid('o',5)
    board.putMarkOnGrid('x',3)
    board.putMarkOnGrid('o',9)
    expect(board.hasPlayerWon('o')).toEqual(true);
  });

  it('can count total moves made', () => {
    board.putMarkOnGrid('o',1)
    board.putMarkOnGrid('x',2)
    board.putMarkOnGrid('o',5)
    board.putMarkOnGrid('x',3)
    board.putMarkOnGrid('o',9)
    expect(board.moves).toEqual(5);
  });
});
