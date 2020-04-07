
import { Injectable } from '@angular/core';
import { Effect, ofType, Actions } from '@ngrx/effects';
import { switchMap, map, withLatestFrom } from 'rxjs/operators';
import { of } from 'rxjs';

import { ETetrisConfigActions, GetConfig, GetConfigSuccess, UpdateConfig, UpdateConfigSuccess } from '../actions/tetris-config.actions';
import { Store, select } from '@ngrx/store';
import { ITetrisAppState } from '../states/tetris-app.state';
import { ITetrisConfig } from '../models/tetris-config.interface';
import { TetrisConfigService } from '@core/tetris/services/tetris-config.service';
import { selectTetrisConfig } from '../selectors/tetris-config.selectors';

@Injectable()
export class TetrisConfigEffects {
  /**
   * get config
   */
  @Effect()
  getConfig$ = this.action$.pipe(
    ofType<GetConfig>(ETetrisConfigActions.GetConfig),
    switchMap(() => this.configService.getConfig()),
    switchMap((config: ITetrisConfig) => {
      return of(new GetConfigSuccess(config));
    })
  );

  /**
   * update config
   */
  @Effect()
  updateConfig$ = this.action$.pipe(
    ofType<UpdateConfig>(ETetrisConfigActions.UpdateConfig),

    map((action: UpdateConfig) => action.payload),
    withLatestFrom(this.store.pipe(select(selectTetrisConfig))),
    switchMap(([config, items]) => {
      return of(new UpdateConfigSuccess(config));
    })
  );

  constructor(
    private configService: TetrisConfigService,
    private action$: Actions,
    private store: Store<ITetrisAppState>
  ) {}
}
