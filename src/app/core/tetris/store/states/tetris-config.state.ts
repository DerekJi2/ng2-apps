import { ITetrisConfig } from '../models/tetris-config.interface';
import { ITetrisGameData } from '../models/tetris-game-data.interface';
import { ETetrisGameStatus } from '@tetris/shared/models/tetris-game-status.enum';
import { ITetrisGameSettings } from '../models/tetris-game-settings.interface';

export interface ITetrisConfigState {
  config: ITetrisConfig;
}


const initialSettings: ITetrisGameSettings = {
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
  config:  {
    settings: Object.assign({}, initialSettings),
    data: Object.assign({}, initialData),
  },
};
