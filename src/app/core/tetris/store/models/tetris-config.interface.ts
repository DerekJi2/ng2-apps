import { TetrisGameStatus } from '@tetris/shared/models/tetris-game-status.type';
import { ITetrisGameData } from './tetris-game-data.interface';
import { ITetrisGameSettings } from './tetris-game-settings.interface';

export interface ITetrisConfig {
    settings: ITetrisGameSettings;
    data: ITetrisGameData;
    matrix: number[][];
}
