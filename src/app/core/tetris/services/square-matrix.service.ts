import { Injectable } from '@angular/core';
import { interval, Observable } from 'rxjs';
import { take, tap } from 'rxjs/operators';
import { TetrisMatrixBuilder } from '@tetris/shared/builders/tetris-matrix.builder';
import { Store } from '@ngrx/store';
import { ITetrisAppState } from '../store/states/tetris-app.state';
import { ITetrisConfig } from '../store/models/tetris-config.interface';
import { selectTetrisConfig } from '../store/selectors/tetris-config.selectors';
import { UpdateMatrix } from '../store/actions/tetris-matrix.actions';
import { TetrisMatrix } from '@tetris/shared/models/tetris-matrix.type';

@Injectable({
  providedIn: 'root'
})
export class SquareMatrixService {

  public config$ = this.store.select(selectTetrisConfig);
  public config: ITetrisConfig;

  constructor(
    protected store: Store<ITetrisAppState>
  ) {
    this.config$.pipe(tap((config) => this.config = config)).subscribe();
  }

  /**
   *
   */
  public reset(): void {
    console.log('matrix service: reset');
    this.config$.pipe(tap((config) => this.config = config)).subscribe();

    const initialMatrix = new TetrisMatrixBuilder().initialize();
    this.store.dispatch(new UpdateMatrix(initialMatrix));

    this.spreadUp(initialMatrix).subscribe();
  }

  /**
   *
   */
  public spreadUp(matrix: TetrisMatrix, value: number = 1): Observable<number> {
    console.log('matrix service: spreadUp');
    let y = this.config.settings.numberOfRows - 1;
    const move$ = interval(50)
    .pipe(
      // take(3),
      take(this.config.settings.numberOfRows),
      tap(() => {
        console.log(`y = ${y}`);
        const builder = new TetrisMatrixBuilder(matrix, this.config.settings.numberOfRows, this.config.settings.numberOfCols);
        const newMatrix = Object.assign([], builder.setRowValues(y--, value));

        console.log('dispatch ...');
        console.log(newMatrix);
        this.store.dispatch(new UpdateMatrix(newMatrix));
      }),
    );

    return move$;
  }

  public spreadDown(builder: TetrisMatrixBuilder, value: number = 0): Observable<number> {
    let y = 0;
    const move$ = interval(50)
    .pipe(
      take(builder.numberOfRows),
      tap(() => {
        console.log(`y = ${y}`);
        builder.setRowValues(y++, value);
      }),
    );

    return move$;
  }

}
