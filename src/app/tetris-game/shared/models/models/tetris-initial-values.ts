import { ITetrisGameSettings } from '../store/tetris-game-settings.interface';
import { ITetrisGameData } from '../store/tetris-game-data.interface';
import { ETetrisGameStatus } from '../tetris-game-status.enum';

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
