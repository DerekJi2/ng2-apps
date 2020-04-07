import { ActionReducerMap } from '@ngrx/store';
import { ITetrisAppState } from '../states/tetris-app.state';
import { tetrisConfigReducers } from './tetris-config.reducers';

export const tetrisAppReducers: ActionReducerMap<ITetrisAppState, any> = {
  config: tetrisConfigReducers,
};
