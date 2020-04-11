import { TetrisMatrix } from '../models/tetris-matrix.type';

export class TetrisMatrixBuilder {
  constructor(
    protected matrix: TetrisMatrix = [],
    public numberOfRows: number = 20,
    public numberOfCols: number = 10,
  ) {
  }

  get matrixData() { return this.matrix; }

  /**
   * Initialize the matrix
   */
  initialize(): TetrisMatrix {
    this.matrix = [];
    for (let y = 0; y < this.numberOfRows; y++) {
      const row: number[] = [];
      for (let x = 0; x < this.numberOfCols; x++) {
        row.push(0);
      }
      this.matrix.push(row);
    }

    return this.matrixData;
  }

  /**
   * Move Left
   */
  moveLeft(): TetrisMatrix {
    return this.matrixData;
  }

  /**
   * Move Right
   */
  moveRight(): TetrisMatrix {
    return this.matrixData;
  }

  /**
   * Move Down (one step)
   */
  moveDown(): TetrisMatrix {
    return this.matrixData;
  }

  /**
   * Move Down to the bottom
   */
  dropOff(): TetrisMatrix {
    return this.matrixData;
  }

  /**
   * Eliminate all the full rows
   */
  resolves(): TetrisMatrix {
    return this.matrixData;
  }

  /**
   *
   * @param x coordinate number on X-axis
   * @param y coordinate number on Y-axis
   * @param v the value to be set
   */
  setCellValue(x: number, y: number, v: number = null): TetrisMatrix {
    if (v !== null) {
      this.matrix[y][x] = v;
    }

    return this.matrixData;
  }

  /**
   *
   * @param y the coordinate number of the row on Y-axis
   * @param v the value to be set
   */
  public setRowValues(y: number, v: number): TetrisMatrix {
    for (let x = 0; x < this.numberOfCols; x++) {
      this.setCellValue(x, y, v);
    }

    return this.matrixData;
  }

}
