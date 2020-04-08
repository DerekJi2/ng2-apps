import { Component, OnInit } from '@angular/core';
import { SquareMatrixService } from '@core/tetris/services/square-matrix.service';
import { BaseTetrisComponent } from '@tetris/shared/components/base-tetris-component';
import { ITetrisAppState } from '@core/tetris/store/states/tetris-app.state';
import { Store } from '@ngrx/store';
import { interval, timer, Observable } from 'rxjs';
import { tap, switchMap } from 'rxjs/operators';
import { ETetrisGameStatus } from '@tetris/shared/models/tetris-game-status.enum';
import { UpdateConfig } from '@core/tetris/store/actions/tetris-config.actions';
import { ITetrisConfig } from '@core/tetris/store/models/tetris-config.interface';

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

    this.startGameLoop$().subscribe();
  }

  protected startGameLoop$(): Observable<any> {
    return this.config$.pipe(
      switchMap((config) => this.gameLoop$(config))
    );
  }

  protected gameLoop$(config: ITetrisConfig): Observable<any> {
    return interval(1000).pipe(
      tap(() => {
        if (config.data.status === ETetrisGameStatus.started) {
          this.fakeIncreaseScore(config);
        }
      })
    );
  }

  protected fakeIncreaseScore(config: ITetrisConfig): void {
    const newConfig = Object.assign({}, config);
    newConfig.data.score += 10;
    this.store.dispatch(new UpdateConfig(newConfig));
  }
}
