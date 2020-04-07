import { ETetrisGameStatus } from './tetris-game-status.enum';

export type TetrisGameStatus = ETetrisGameStatus.stopped | ETetrisGameStatus.started | ETetrisGameStatus.paused;
