import { ITetrisConfigState, initialTetrisConfigState } from './tetris-config.state';
import { ITetrisMatrixState, initialTetrisMatrixState } from './tetris-matrix.state';

/**
 *
 */
export interface ITetrisAppState {
  config: ITetrisConfigState;
  matrix: ITetrisMatrixState;
}

/**
 *
 */
export const initialTetrisAppState: ITetrisAppState = {
  config: Object.assign({}, initialTetrisConfigState),
  matrix: Object.assign([], initialTetrisMatrixState),
};

/**
 *
 */
export function getInitialTetrisState(): ITetrisAppState {
  return initialTetrisAppState;
}
