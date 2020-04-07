import { createSelector } from '@ngrx/store';
import { ITetrisConfigState } from '../states/tetris-config.state';
import { ITetrisAppState } from '../states/tetris-app.state';

const configState = (state: ITetrisAppState) => state.config;

export const selectTetrisConfig = createSelector(
  configState,
  (state: ITetrisConfigState) => state.config
);
