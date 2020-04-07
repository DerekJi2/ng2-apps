import { Component, OnInit } from '@angular/core';
import { SquareMatrixService } from '@core/tetris/services/square-matrix.service';
import { BaseTetrisComponent } from '@tetris/shared/components/base-tetris-component';
import { ITetrisAppState } from '@core/tetris/store/states/tetris-app.state';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-tetris-play-board',
  templateUrl: './tetris-play-board.component.html',
  styleUrls: ['./tetris-play-board.component.scss']
})
export class TetrisPlayBoardComponent extends BaseTetrisComponent implements OnInit {

  public readonly matrixX = 10;
  public readonly matrixY = 20;
  public squareMatrix: number[][] = [];

  constructor(
    public matrixSvc: SquareMatrixService,
    protected store: Store<ITetrisAppState>
  ) {
    super(store);
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
