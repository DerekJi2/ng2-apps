import { Component, OnInit } from '@angular/core';
import { SquareMatrixService } from '@core/tetris/services/square-matrix.service';
import { BaseTetrisComponent } from '@tetris/shared/components/base-tetris-component';

@Component({
  selector: 'app-tetris-play-board',
  templateUrl: './tetris-play-board.component.html',
  styleUrls: ['./tetris-play-board.component.scss']
})
export class TetrisPlayBoardComponent extends BaseTetrisComponent implements OnInit {

  public matrix$ = this.matrixSvc.matrix$;

  constructor(
    public matrixSvc: SquareMatrixService,
  ) {
    super();
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

  // protected reset(): Observable<any> {
  //   let config: ITetrisConfig;
  //   this.config$.pipe(tap((c) => config = c)).subscribe();

  //   const obs = this.matrix$.pipe(
  //     switchMap((matrix) => this.move$(config, matrix))
  //   );
  //   return obs;
  // }

  protected move$() {
    // console.log(`move ...`);
    // let y = config.settings.numberOfRows - 1;
    // return interval(50).pipe(
    //   take(config.settings.numberOfRows),
    //   tap(() => {
    //     console.log(`y = ${y}`);
    //     let newMatrix = Object.assign([], matrix);
    //     const builder = new TetrisMatrixBuilder(newMatrix, config.settings.numberOfRows, config.settings.numberOfCols);
    //     newMatrix = builder.setRowValues(y, 1);
    //     y--;
    //     this.store.dispatch(new UpdateMatrix(newMatrix));
    //   }),
    // );
  }

  // protected startGameLoop$(): Observable<any> {
  //   return this.config$.pipe(
  //     switchMap((config) => this.gameLoop$(config))
  //   );
  // }

  // protected gameLoop$(config: ITetrisConfig): Observable<any> {
  //   return interval(1000).pipe(
  //     tap(() => {
  //       if (config.data.status === ETetrisGameStatus.started) {
  //         this.fakeIncreaseScore(config);
  //       }
  //     })
  //   );
  // }

  // protected fakeIncreaseScore(config: ITetrisConfig): void {
  //   const newConfig = Object.assign({}, config);
  //   newConfig.data.score += 10;
  //   this.store.dispatch(new UpdateConfig(newConfig));
  // }
}
