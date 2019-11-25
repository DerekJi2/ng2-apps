import { Component, OnInit } from '@angular/core';
import { SquareMatrixService } from '@core/services/square-matrix.service';
import { interval, pipe } from 'rxjs';
import { takeUntil, take } from 'rxjs/operators';

@Component({
  selector: 'app-tetris-play-board',
  templateUrl: './tetris-play-board.component.html',
  styleUrls: ['./tetris-play-board.component.scss']
})
export class TetrisPlayBoardComponent implements OnInit {

  public readonly matrixX = 10;
  public readonly matrixY = 20;
  public squareMatrix: number[][] = [];

  constructor(
    public matrixSvc: SquareMatrixService,
  ) {
  }

  get Columns(): Array<number[]> {
    const cols = this.matrixSvc.columns();
    console.log(cols.length);
    return cols;
  }

  public Row(x: number): number[] {
    return this.matrixSvc.row(x);
  }

  ngOnInit() {
    this.matrixSvc.reset();

    this.matrixSvc.spreadUpAndDown();
  }

}
