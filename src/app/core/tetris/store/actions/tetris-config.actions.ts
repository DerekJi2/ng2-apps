import { Action } from '@ngrx/store';

import { ITetrisConfig } from '../models/tetris-config.interface';

export enum ETetrisConfigActions {
  GetConfig = '[Config] Get Tetris Config',
  GetConfigSuccess = '[Config] Get Tetris Config Success',

  UpdateConfig = '[Config] Update Tetris Config',
  UpdateConfigSuccess = '[Config] Update Tetris Config Success'
}

export class GetConfig implements Action {
  public readonly type = ETetrisConfigActions.GetConfig;
}

export class GetConfigSuccess implements Action {
  public readonly type = ETetrisConfigActions.GetConfigSuccess;
  constructor(public payload: ITetrisConfig) {}
}

export class UpdateConfig implements Action {
  public readonly type = ETetrisConfigActions.UpdateConfig;
  constructor(public payload: ITetrisConfig) {}
}

export class UpdateConfigSuccess implements Action {
  public readonly type = ETetrisConfigActions.UpdateConfigSuccess;
  constructor(public payload: ITetrisConfig) {}
}

export type TetrisConfigActions =
  | GetConfig | GetConfigSuccess
  | UpdateConfig | UpdateConfigSuccess
  ;

