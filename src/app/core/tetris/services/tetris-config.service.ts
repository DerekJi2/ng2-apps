import { Injectable } from '@angular/core';
import { ITetrisConfig } from '../../../tetris-game/shared/models/store/tetris-config.interface';
import { Observable, of } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { ETetrisGameStatus } from '@tetris/shared/models/tetris-game-status.enum';
import { ConfigBehaviorSubjectService } from '../subjects/config-behavior-subject.service';
import { initialData, initialSettings } from '@tetris/shared/models/models/tetris-initial-values';

@Injectable({
  providedIn: 'root'
})
export class TetrisConfigService {

  constructor(
    protected configSubject: ConfigBehaviorSubjectService,
  ) { }

  getInitialConfig() {
    return Object.assign({}, {
      data: initialData(),
      settings: initialSettings(),
    });
  }

  getConfig(): Observable<ITetrisConfig> {
    return this.configSubject.value$;
  }

  updateGameStatus(config: ITetrisConfig, status: ETetrisGameStatus): void {
    const newConfig = Object.assign({}, config);
    newConfig.data.status = status;
    this.configSubject.update(newConfig);
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
