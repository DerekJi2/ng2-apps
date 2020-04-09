import { ITetrisConfig } from '../models/tetris-config.interface';
import { ITetrisGameData } from '../models/tetris-game-data.interface';
import { ETetrisGameStatus } from '@tetris/shared/models/tetris-game-status.enum';
import { ITetrisGameSettings } from '../models/tetris-game-settings.interface';

export interface ITetrisConfigState {
  config: ITetrisConfig;
}


export const initialSettings = (): ITetrisGameSettings => {
  return {
    numberOfRows: 20,
    numberOfCols: 10,
    speed: 1,
    level: 1,
    muted: false
  };
};

export const initialData = (): ITetrisGameData => {
  return {
    score: 0,
    next: null,
    status: ETetrisGameStatus.stopped,
  };
};

export const initialMatrix = (): number[][] => {
  const matrix = [];

  const settings = initialSettings();
  for (let y = 0; y < settings.numberOfRows; y++) {
    const row: number[] = [];
    for (let x = 0; x < settings.numberOfCols; x++) {
      row.push(0);
    }
    matrix.push(row);
  }
  return matrix;
};

export const initialTetrisConfigState: ITetrisConfigState = {
  config:  {
    settings: initialSettings(),
    data: initialData(),
    matrix: initialMatrix(),
  },
};
