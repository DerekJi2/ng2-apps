import { Injectable } from '@angular/core';
import { ITetrisConfig } from '../../../tetris-game/shared/models/store/tetris-config.interface';
import { Observable, of } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { ITetrisAppState } from '../store/states/tetris-app.state';
import { ETetrisGameStatus } from '@tetris/shared/models/tetris-game-status.enum';
import { UpdateConfig } from '../store/actions/tetris-config.actions';
import { selectTetrisConfig } from '../store/selectors/tetris-config.selectors';
import { initialTetrisConfigState } from '../store/states/tetris-config.state';

@Injectable({
  providedIn: 'root'
})
export class TetrisConfigService {

  constructor(
    protected store: Store<ITetrisAppState>
  ) { }

  getInitialConfig() { return Object.assign({}, initialTetrisConfigState.config); }

  getConfig(): Observable<ITetrisConfig> {
    return this.store.pipe(select(selectTetrisConfig));
  }

  updateGameStatus(config: ITetrisConfig, status: ETetrisGameStatus): void {
    const newConfig = Object.assign({}, config);
    newConfig.data.status = status;
    this.store.dispatch(new UpdateConfig(newConfig));
  }

  start(config: ITetrisConfig): void {
    const newConfig = Object.assign({}, config);
    newConfig.data.score = 0;
    this.updateGameStatus(newConfig, ETetrisGameStatus.started);
  }

  pause(config: ITetrisConfig): void {
    this.updateGameStatus(config, ETetrisGameStatus.paused);
  }

  resume(config: ITetrisConfig): void {
    this.updateGameStatus(config, ETetrisGameStatus.started);
  }

  stop(config: ITetrisConfig): void {
    this.updateGameStatus(config, ETetrisGameStatus.stopped);
  }
}
