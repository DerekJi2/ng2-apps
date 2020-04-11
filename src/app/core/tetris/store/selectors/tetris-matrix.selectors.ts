import { createSelector } from '@ngrx/store';
import { ITetrisMatrixState } from '../states/tetris-matrix.state';
import { ITetrisAppState } from '../states/tetris-app.state';

const matrixState = (state: ITetrisAppState) => state.matrix;

export const selectTetrisMatrix = createSelector(
  matrixState,
  (state: ITetrisMatrixState) => state.matrix
);
