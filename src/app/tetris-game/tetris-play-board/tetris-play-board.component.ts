import { Component, OnInit } from '@angular/core';
import { SquareMatrixService } from '@core/tetris/services/square-matrix.service';
import { BaseTetrisComponent } from '@tetris/shared/components/base-tetris-component';
import { ITetrisAppState } from '@core/tetris/store/states/tetris-app.state';
import { Store } from '@ngrx/store';
import { interval, timer, Observable, of, forkJoin } from 'rxjs';
import { tap, switchMap, take } from 'rxjs/operators';
import { ETetrisGameStatus } from '@tetris/shared/models/tetris-game-status.enum';
import { UpdateConfig } from '@core/tetris/store/actions/tetris-config.actions';
import { ITetrisConfig } from '@tetris/shared/models/store/tetris-config.interface';
import { UpdateMatrix } from '@core/tetris/store/actions/tetris-matrix.actions';
import { TetrisMatrixBuilder } from '@tetris/shared/builders/tetris-matrix.builder';

@Component({
  selector: 'app-tetris-play-board',
  templateUrl: './tetris-play-board.component.html',
  styleUrls: ['./tetris-play-board.component.scss']
})
export class TetrisPlayBoardComponent extends BaseTetrisComponent implements OnInit {

  public readonly matrixX = 10;
  public readonly matrixY = 20;
  public squareMatrix: number[][] = [];
  protected builder: TetrisMatrixBuilder = new TetrisMatrixBuilder([], 20, 10);

  public matrix$ = this.matrixSvc.matrix$;

  constructor(
    public matrixSvc: SquareMatrixService,
    protected store: Store<ITetrisAppState>
  ) {
    super(store);
  }

  ngOnInit() {
    this.matrixSvc.reset();
    // this.reset().subscribe();
    // {
    //   let config: ITetrisConfig;
    //   this.config$.pipe(tap((c) => config = c)).subscribe();
    //   const matrix = this.builder.initialize();
    //   this.store.dispatch(new UpdateMatrix(matrix));

    //   this.move$(config, matrix).subscribe();
    // }

    // this.matrixSvc.reset();
    // this.matrixSvc.spreadUpAndDown();
  }

  protected reset(): Observable<any> {
    let config: ITetrisConfig;
    this.config$.pipe(tap((c) => config = c)).subscribe();

    const obs = this.matrix$.pipe(
      switchMap((matrix) => this.move$(config, matrix))
    );
    return obs;
  }

  protected move$(config: ITetrisConfig, matrix: number[][]) {
    console.log(`move ...`);
    let y = config.settings.numberOfRows - 1;
    return interval(50).pipe(
      take(config.settings.numberOfRows),
      tap(() => {
        console.log(`y = ${y}`);
        let newMatrix = Object.assign([], matrix);
        const builder = new TetrisMatrixBuilder(newMatrix, config.settings.numberOfRows, config.settings.numberOfCols);
        newMatrix = builder.setRowValues(y, 1);
        y--;
        this.store.dispatch(new UpdateMatrix(newMatrix));
      }),
    );
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
