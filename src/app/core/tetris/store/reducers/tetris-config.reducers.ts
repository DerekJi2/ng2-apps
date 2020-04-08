import { ETetrisConfigActions, TetrisConfigActions } from '../actions/tetris-config.actions';
import { initialTetrisConfigState, ITetrisConfigState } from '../states/tetris-config.state';


export function tetrisConfigReducers(state = initialTetrisConfigState, action: TetrisConfigActions): ITetrisConfigState {
  const newState = Object.assign({}, state);
  switch (action.type) {
    case ETetrisConfigActions.GetConfigSuccess: {
      return {
        ...newState,
        config: action.payload
      };
    }

    case ETetrisConfigActions.UpdateConfigSuccess: {
      return {
        ...newState,
        config: action.payload
      };
    }

    default:
      return newState;
  }
}
