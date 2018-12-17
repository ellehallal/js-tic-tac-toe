class Board {
  constructor() {
    this.grid = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  }

  putMarkOnGrid(mark, position) {
    this.grid[position - 1] = mark;
  }

  isValidPosition(position) {
    return typeof this.grid[position - 1] === 'number';
  }
}

module.exports = { Board };
