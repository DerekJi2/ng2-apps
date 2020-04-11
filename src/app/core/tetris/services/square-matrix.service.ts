import { Injectable } from '@angular/core';
import { interval, Observable, BehaviorSubject } from 'rxjs';
import { take, tap } from 'rxjs/operators';
import { TetrisMatrixBuilder } from '@tetris/shared/builders/tetris-matrix.builder';
import { Store } from '@ngrx/store';
import { ITetrisAppState } from '../store/states/tetris-app.state';
import { ITetrisConfig } from '../../../tetris-game/shared/models/store/tetris-config.interface';
import { selectTetrisConfig } from '../store/selectors/tetris-config.selectors';
import { UpdateMatrix } from '../store/actions/tetris-matrix.actions';
import { TetrisMatrix } from '@tetris/shared/models/tetris-matrix.type';
import { selectTetrisMatrix } from '../store/selectors/tetris-matrix.selectors';
import { initialTetrisConfigState, initialSettings, initialData, initialMatrix } from '../store/states/tetris-config.state';

interface IMatrixServiceSubjects {
  config: BehaviorSubject<ITetrisConfig>;
  matrix: BehaviorSubject<TetrisMatrix>;
}

@Injectable({
  providedIn: 'root'
})
export class SquareMatrixService {

  public subjects: IMatrixServiceSubjects = {
    config: new BehaviorSubject<ITetrisConfig>({
      settings: initialSettings(),
      data: initialData(),
    }),
    matrix: new BehaviorSubject<TetrisMatrix>(initialMatrix()),
  };

  public config$ = this.subjects.config.asObservable();
  public matrix$ = this.subjects.matrix.asObservable();
  protected config: ITetrisConfig;
  protected matrix: TetrisMatrix;

  constructor(
    // protected store: Store<ITetrisAppState>
  ) {
    // this.config$.pipe(tap((config) => this.config = config)).subscribe();
  }

  get numberOfRows() { return this.config.settings.numberOfRows || 0; }
  get numberOfCols() { return this.config.settings.numberOfCols || 0; }
  get configData() { return this.config; }

  getMatrix() { return this.matrix; }

  initialize(): TetrisMatrix {
    this.matrix = [];
    for (let y = 0; y < this.numberOfRows; y++) {
      const row: number[] = [];
      for (let x = 0; x < this.numberOfCols; x++) {
        row.push(0);
      }
      this.matrix.push(row);
    }

    return this.getMatrix();
  }

  /**
   *
   * @param x coordinate number on X-axis
   * @param y coordinate number on Y-axis
   * @param v the value to be set
   */
  setCellValue(x: number, y: number, v: number = null): void {
    if (v !== null) {
      this.matrix[y][x] = v;
    }
  }

  /**
   *
   * @param y the coordinate number of the row on Y-axis
   * @param v the value to be set
   */
  public setRowValues(y: number, v: number): void {
    for (let x = 0; x < this.numberOfCols; x++) {
      this.setCellValue(x, y, v);
    }
  }

  /**
   *
   */
  public reset(): void {
    console.log('matrix service: reset');

    this.initialize();
    // this.store.dispatch(new UpdateMatrix(this.getMatrix()));

    this.spreadUp().subscribe();
  }

  /**
   *
   */
  public spreadUp(value: number = 1): Observable<number> {
    console.log('matrix service: spreadUp');
    let y = this.config.settings.numberOfRows - 1;
    const move$ = interval(50)
    .pipe(
      // take(3),
      take(this.config.settings.numberOfRows),
      tap(() => {
        console.log(`y = ${y}`);
        this.setRowValues(y--, value);

        console.log('dispatch ...');
        console.log(this.matrix);
        // this.store.dispatch(new UpdateMatrix(this.matrix));
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
