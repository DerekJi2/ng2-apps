import { Injectable } from '@angular/core';
import { interval, Observable } from 'rxjs';
import { take, tap } from 'rxjs/operators';
import { TetrisMatrixBuilder } from '@tetris/shared/builders/tetris-matrix.builder';
import { TetrisMatrix } from '@tetris/shared/models/tetris-matrix.type';
import { ConfigBehaviorSubjectService } from '../subjects/config-behavior-subject.service';
import { MatrixBehaviorSubjectService } from '../subjects/matrix-behavior-subject.service';

@Injectable({
  providedIn: 'root'
})
export class SquareMatrixService {

  public config$ = this.configSubject.value$;
  public matrix$ = this.matrixSubject.value$;

  constructor(
    protected configSubject: ConfigBehaviorSubjectService,
    protected matrixSubject: MatrixBehaviorSubjectService,
  ) {
  }

  get numberOfRows() { return this.config && this.config.settings ? this.config.settings.numberOfRows : 0; }
  get numberOfCols() { return this.config && this.config.settings ? this.config.settings.numberOfCols : 0; }
  get config() { return this.configSubject.value; }
  get matrix() { return this.matrixSubject.value; }

  getMatrix() { return this.matrix; }

  initialize(): void {
    const matrix = [];
    for (let y = 0; y < this.numberOfRows; y++) {
      const row: number[] = [];
      for (let x = 0; x < this.numberOfCols; x++) {
        row.push(0);
      }
      matrix.push(row);
    }

    this.matrixSubject.update(matrix);
  }

  /**
   *
   * @param matrix TetrixMatrix
   * @param x coordinate number on X-axis
   * @param y coordinate number on Y-axis
   * @param v the value to be set
   */
  setCellValue(matrix: TetrisMatrix, x: number, y: number, v: number = null): void {
    if (v !== null) {
      matrix[y][x] = v;
    }
  }

  /**
   *
   * @param matrix TetrixMatrix
   * @param y the coordinate number of the row on Y-axis
   * @param v the value to be set
   */
  public setRowValues(matrix: TetrisMatrix, y: number, v: number): void {
    for (let x = 0; x < this.numberOfCols; x++) {
      this.setCellValue(matrix, x, y, v);
    }
  }

  /**
   *
   */
  public reset(): void {
    console.log('matrix service: reset');

    this.initialize();

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
      take(this.config.settings.numberOfRows),
      tap(() => {
        console.log(`y = ${y}`);
        const newMatrix = this.matrix;
        this.setRowValues(newMatrix, y--, value);

        this.matrixSubject.update(newMatrix);
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
