import { ITetrisConfig } from '../models/tetris-config.interface';

export interface ITetrisConfigState {
  config: ITetrisConfig;

}

export const initialTetrisConfigState: ITetrisConfigState = {
  config: null
};
