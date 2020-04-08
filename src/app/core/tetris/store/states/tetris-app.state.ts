import { ITetrisConfigState, initialTetrisConfigState } from './tetris-config.state';

/**
 *
 */
export interface ITetrisAppState {
  config: ITetrisConfigState;
}

/**
 *
 */
export const initialTetrisAppState: ITetrisAppState = {
  config: Object.assign({}, initialTetrisConfigState),
};

/**
 *
 */
export function getInitialTetrisState(): ITetrisAppState {
  return initialTetrisAppState;
}
