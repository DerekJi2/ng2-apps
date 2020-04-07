import { ITetrisConfig } from '../models/tetris-config.interface';
import { ITetrisGameData } from '../models/tetris-game-data.interface';
import { ETetrisGameStatus } from '@tetris/shared/models/tetris-game-status.enum';

export interface ITetrisConfigState {
  config: ITetrisConfig;
  data: ITetrisGameData;
}


const initialConfig: ITetrisConfig = {
  speed: 1,
  level: 1,
  muted: false
};

const initialData: ITetrisGameData = {
  score: 0,
  next: null,
  status: ETetrisGameStatus.stopped,
};

export const initialTetrisConfigState: ITetrisConfigState = {
  config: initialConfig,
  data: initialData,
};
