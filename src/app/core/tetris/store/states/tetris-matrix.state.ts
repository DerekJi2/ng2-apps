import { ITetrisConfig } from '../models/tetris-config.interface';
import { ITetrisGameData } from '../models/tetris-game-data.interface';
import { ETetrisGameStatus } from '@tetris/shared/models/tetris-game-status.enum';
import { ITetrisGameSettings } from '../models/tetris-game-settings.interface';
import { initialSettings } from './tetris-config.state';

export interface ITetrisMatrixState {
  matrix: number[][];
}


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

export const initialTetrisMatrixState: ITetrisMatrixState = {
  matrix: initialMatrix(),
};
