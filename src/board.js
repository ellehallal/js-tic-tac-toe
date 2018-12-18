class Board {
  constructor() {
    this.grid = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    this.winningCombos = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [2, 4, 6],
      [0, 4, 8]
    ]
  }

  putMarkOnGrid(mark, position) {
    this.grid[position - 1] = mark;
  }

  isValidPosition(position) {
    return typeof this.grid[position - 1] === 'number';
  }

  hasPlayerWon(mark) {
    let checkCombos = false;
    this.winningCombos.forEach(combo => {
      combo.forEach(() => {
        let position1 = combo[0];
        let position2 = combo[1];
        let position3 = combo[2];
        if(this.grid[position1] === mark && this.grid[position2] === mark && this.grid[position3] === mark){
          checkCombos = true;
        }
      })
    })
    return checkCombos;
  }
}

module.exports = { Board };
