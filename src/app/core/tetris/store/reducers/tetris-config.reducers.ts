import { ETetrisConfigActions, TetrisConfigActions } from '../actions/tetris-config.actions';
import { initialTetrisConfigState, ITetrisConfigState } from '../states/tetris-config.state';


export function tetrisConfigReducers(state = initialTetrisConfigState, action: TetrisConfigActions): ITetrisConfigState {
  switch (action.type) {
    case ETetrisConfigActions.GetConfigSuccess: {
      return {
        ...state,
        config: action.payload
      };
    }

    case ETetrisConfigActions.UpdateConfigSuccess: {
      return {
        ...state,
        config: action.payload
      };
    }

    default:
      return state;
  }
}
