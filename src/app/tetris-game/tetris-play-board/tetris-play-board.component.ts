import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tetris-play-board',
  templateUrl: './tetris-play-board.component.html',
  styleUrls: ['./tetris-play-board.component.scss']
})
export class TetrisPlayBoardComponent implements OnInit {

  public readonly matrixX = 10;
  public readonly matrixY = 20;
  public squareMatrix: number[][] = [];

  constructor() {
    this.initSquareMatrix();
  }

  
  get Columns(): Array<number[]> {
    return this.squareMatrix;
  }

  public Row(x): number[] {
    return this.squareMatrix[x];
  }

  ngOnInit() {
  }

  
  private initSquareMatrix(): void {
    for (let y = 0; y < this.matrixY; y++) {
      const row: number[] = [];
      for (let x = 0; x < this.matrixX; x++) {
        row.push(0);
      }
      this.squareMatrix.push(row);
    }
  }

}
