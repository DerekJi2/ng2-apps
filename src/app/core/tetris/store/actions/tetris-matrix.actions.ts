import { Action } from '@ngrx/store';

import { TetrisGameStatus } from '@tetris/shared/models/tetris-game-status.type';

export enum ETetrisMatrixActions {
  GetMatrix = '[Matrix] Get Tetris Matrix',
  GetMatrixSuccess = '[Matrix] Get Tetris Matrix Success',

  UpdateMatrix = '[Matrix] Update Tetris Matrix',
  UpdateMatrixSuccess = '[Matrix] Update Tetris Matrix Success'
}

export class GetMatrix implements Action {
  public readonly type = ETetrisMatrixActions.GetMatrix;
}

export class GetMatrixSuccess implements Action {
  public readonly type = ETetrisMatrixActions.GetMatrixSuccess;
  constructor(public payload: number[][]) {}
}

export class UpdateMatrix implements Action {
  public readonly type = ETetrisMatrixActions.UpdateMatrix;
  constructor(public payload: number[][]) {}
}

export class UpdateMatrixSuccess implements Action {
  public readonly type = ETetrisMatrixActions.UpdateMatrixSuccess;
  constructor(public payload: number[][]) {}
}

export type TetrisMatrixActions =
  | GetMatrix | GetMatrixSuccess
  | UpdateMatrix | UpdateMatrixSuccess
  ;

