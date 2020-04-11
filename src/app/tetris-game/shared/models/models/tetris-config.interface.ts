import { ITetrisGameSettings } from '../store/tetris-game-settings.interface';
import { ITetrisGameData } from '../store/tetris-game-data.interface';

export interface ITetrisConfig {
    settings: ITetrisGameSettings;
    data: ITetrisGameData;
}
