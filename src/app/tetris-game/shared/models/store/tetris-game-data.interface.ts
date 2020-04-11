import { TetrisGameStatus } from '@tetris/shared/models/tetris-game-status.type';

export interface ITetrisGameData {
    score: number;
    next: any;
    status: TetrisGameStatus;
}
