
import { Injectable } from '@angular/core';
import { Effect, ofType, Actions } from '@ngrx/effects';
import { switchMap, map, withLatestFrom } from 'rxjs/operators';
import { of } from 'rxjs';

import { ETetrisMatrixActions, GetMatrix, GetMatrixSuccess, UpdateMatrix, UpdateMatrixSuccess } from '../actions/tetris-matrix.actions';
import { Store, select } from '@ngrx/store';
import { ITetrisAppState } from '../states/tetris-app.state';
import { selectTetrisMatrix } from '../selectors/tetris-matrix.selectors';

@Injectable()
export class TetrisMatrixEffects {
  /**
   * get matrix
   */
  @Effect()
  getMatrix$ = this.action$.pipe(
    ofType<GetMatrix>(ETetrisMatrixActions.GetMatrix),
    // switchMap(() => this.matrixService.getMatrix()),
    // switchMap((matrix: number[][]) => {
    //   return of(new GetMatrixSuccess(matrix));
    // })
  );

  /**
   * update matrix
   */
  @Effect()
  updateMatrix$ = this.action$.pipe(
    ofType<UpdateMatrix>(ETetrisMatrixActions.UpdateMatrix),

    map((action: UpdateMatrix) => action.payload),
    withLatestFrom(this.store.pipe(select(selectTetrisMatrix))),
    switchMap(([matrix, items]) => {
      return of(new UpdateMatrixSuccess(Object.assign([], matrix)));
    })
  );

  constructor(
    private action$: Actions,
    private store: Store<ITetrisAppState>
  ) {}
}
