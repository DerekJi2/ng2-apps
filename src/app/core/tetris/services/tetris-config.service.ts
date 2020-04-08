import { Injectable } from '@angular/core';
import { ITetrisConfig } from '../store/models/tetris-config.interface';
import { Observable, of } from 'rxjs';
import { Store } from '@ngrx/store';
import { ITetrisAppState } from '../store/states/tetris-app.state';
import { ETetrisGameStatus } from '@tetris/shared/models/tetris-game-status.enum';
import { UpdateConfig } from '../store/actions/tetris-config.actions';

@Injectable({
  providedIn: 'root'
})
export class TetrisConfigService {

  constructor(
    protected store: Store<ITetrisAppState>
  ) { }

  getConfig(): Observable<ITetrisConfig> {
    return of(null);
  }

  updateGameStatus(config: ITetrisConfig, status: ETetrisGameStatus) {
    const newConfig = Object.assign({}, config);
    newConfig.data.status = status;
    this.store.dispatch(new UpdateConfig(newConfig));
  }
}
