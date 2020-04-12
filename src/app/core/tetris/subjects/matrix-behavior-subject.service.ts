import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { TetrisMatrix } from '@tetris/shared/models/tetris-matrix.type';
import { initialMatrix } from '@tetris/shared/models/models/tetris-initial-values';

@Injectable({
  providedIn: 'root'
})
export class MatrixBehaviorSubjectService extends BehaviorSubject<TetrisMatrix> {
  protected data: TetrisMatrix = Object.assign([], initialMatrix());

  constructor() {
    super(initialMatrix());
  }

  get value$() { return this.asObservable(); }
  get value() { return Object.assign([], this.data); }

  read() { this.next(this.data); }

  update(data: TetrisMatrix) {
    this.data = data;
    this.next(data);
  }
}
