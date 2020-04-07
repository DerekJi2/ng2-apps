import { TetrisGameStatus } from '@tetris/shared/models/tetris-game-status.type';

export interface ITetrisConfig {
    speed: number;
    level: number;
    muted: boolean;
}
