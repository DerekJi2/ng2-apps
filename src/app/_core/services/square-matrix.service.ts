import { Injectable } from '@angular/core';
import { interval, Observable } from 'rxjs';
import { take, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SquareMatrixService {

  public readonly numberOfRows = 20;
  public readonly numberOfCols = 10;

  private matrix: number[][] = [];

  constructor() { }

  /**
   * 
   */
  public reset(): void {
    this.matrix = [];

    for (let y = 0; y < this.numberOfRows; y++) {
      const row: number[] = [];
      for (let x = 0; x < this.numberOfCols; x++) {
        row.push(0);
      }
      this.matrix.push(row);
    }
  }

  /**
   * 
   * @param y number
   */
  public row(y: number): number[] {
    return this.matrix[y];
  }

  /**
   * 
   */
  public columns(): Array<number[]> {
    return this.matrix;
  }

  /**
   * 
   * @param x number
   * @param y number
   * @param v number
   */
  public value(x: number, y: number, v: number = null) {
    if (v !== null) {
      this.matrix[y][x] = v;
    }
    return this.matrix[y][x];
  }

  /**
   * 
   * @param y number
   * @param v number
   */
  public setRowValues(y: number, v: number): void {
    for (let x = 0; x < this.numberOfCols; x++) {
      this.value(x, y, v);
    }
  }

  /**
   * 
   */
  public async spreadUpAndDown(): Promise<void> {
    await this.spreadUp().toPromise();
    await this.spreadDown().toPromise();
  }

  /**
   * 
   */
  public spreadUp(value: number = 1): Observable<number> {
    let y = this.numberOfRows - 1;
    const move$ = interval(50)
    .pipe(
      take(this.numberOfRows),
      tap(() => {
        console.log(`y = ${y}`);
        this.setRowValues(y--, value);
      }),
    );

    return move$;
  }

  public spreadDown(value: number = 0): Observable<number> {
    let y = 0;
    const move$ = interval(50)
    .pipe(
      take(this.numberOfRows),
      tap(() => {
        console.log(`y = ${y}`);
        this.setRowValues(y++, value);
      }),
    );

    return move$;
  }

}
