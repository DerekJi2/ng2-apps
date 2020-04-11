import { ETetrisMatrixActions, TetrisMatrixActions } from '../actions/tetris-matrix.actions';
import { initialTetrisMatrixState, ITetrisMatrixState } from '../states/tetris-matrix.state';


export function tetrisMatrixReducers(state = initialTetrisMatrixState, action: TetrisMatrixActions): ITetrisMatrixState {
  const newState = Object.assign({}, state);
  switch (action.type) {
    case ETetrisMatrixActions.GetMatrixSuccess: {
      return {
        ...newState,
        matrix: action.payload
      };
    }

    case ETetrisMatrixActions.UpdateMatrixSuccess: {
      return {
        ...newState,
        matrix: Object.assign([], action.payload)
      };
    }

    default:
      return newState;
  }
}
