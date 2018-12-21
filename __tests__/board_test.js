import { Board } from '../src/board';

describe('Board', () => {

  it('can take a grid as an argument when initialized', () => {
    let board = new Board([1, 2, 3])
    expect(board.grid).toEqual([1, 2, 3]);
  });

  it('puts a mark on the grid', () => {
    let board = new Board([1, "o", 3, 4, 5, 6, "x", 8, 9])
    board.putMarkOnGrid("x", 9)
    expect(board.grid).toEqual([1, "o", 3, 4, 5, 6, "x", 8, "x"]);
  });

  it('counts number of marks on grid', () => {
    let board = new Board([1, 2, 3, "o", 5, 6, 7, 8, "x"]);
    board.checkNumberOfMovesOnGrid()
    expect(board.moves).toEqual(2);
  });

  it('can track number of moves made on the grid', () => {
    let board = new Board([1, 2, 3, "o", 5, 6, 7, 8, "x"]);
    board.checkNumberOfMovesOnGrid()
    console.log(board.moves)
    board.putMarkOnGrid("x", 1)
    board.checkNumberOfMovesOnGrid()
    expect(board.moves).toEqual(3);
  });

  it('returns true if position is available', () => {
    let board = new Board([1, "o", 3, 4, 5, 6, "x", 8, 9])
    expect(board.isValidPosition(8)).toEqual(true);
  });

  it('returns false if position is not available', () => {
    let board = new Board([1, "o", 3, 4, 5, 6, "x", 8, 9])
    expect(board.isValidPosition(2)).toEqual(false);
  });

  it('can check whether 1, 2, and 3 have the mark x', () => {
    let board = new Board(["x", "x", "x", 4, 5, "o", "o", 8, "o"])
    expect(board.hasPlayerWon('x')).toEqual(true);
  });

  it('can check whether 4, 5, and 6 have the mark o', () => {
    let board = new Board(["x", "x", 3, "o", "o", "o", "x", 8, "9"])
    expect(board.hasPlayerWon('o')).toEqual(true);
  });

  it('can check whether player has won in a row', () => {
    let board = new Board(["o", "o", 3, "x", "x", "x", "o", 8, "9"])
    expect(board.hasPlayerWon('x')).toEqual(true);
  });

  it('can check whether player has won in a column', () => {
    let board = new Board(["o", "x", 3, "o", "x", 6, "o", "x", "9"])
    expect(board.hasPlayerWon('x')).toEqual(true);
  });

  it('can check whether player has won diagonally', () => {
    let board = new Board(["o", "x", 3, "x", "o", 6, "x", 8, "o"])
    expect(board.hasPlayerWon('o')).toEqual(true);
  });

  it('can tell when the game is a tie', () => {
    let board = new Board(["x", "x", "o", "o", "x", "x", "x", "o", "o"]);
    board.checkNumberOfMovesOnGrid()
    expect(board.gameIsATie()).toEqual(true);
  });
});
