import { Component, OnInit } from '@angular/core';
import { BaseTetrisComponent } from '@tetris/shared/components/base-tetris-component';
import { Store } from '@ngrx/store';
import { ITetrisAppState } from '@core/tetris/store/states/tetris-app.state';
import { ETetrisGameStatus } from '@tetris/shared/models/tetris-game-status.enum';
import { ITetrisConfigState } from '@core/tetris/store/states/tetris-config.state';
import { UpdateConfig } from '@core/tetris/store/actions/tetris-config.actions';
import { ITetrisConfig } from '@tetris/shared/models/store/tetris-config.interface';
import { TetrisConfigService } from '@core/tetris/services/tetris-config.service';

@Component({
  selector: 'app-tetris-control-panel',
  templateUrl: './tetris-control-panel.component.html',
  styleUrls: ['./tetris-control-panel.component.scss']
})
export class TetrisControlPanelComponent extends BaseTetrisComponent implements OnInit {

  constructor(
    protected store: Store<ITetrisAppState>,
    protected service: TetrisConfigService,
  ) {
    super(store);
  }

  ngOnInit() {
  }

  btnStartClick(config: ITetrisConfig) { this.service.start(config); }
  btnResumeClick(config: ITetrisConfig) { this.service.resume(config); }
  btnPauseClick(config: ITetrisConfig) { this.service.pause(config); }
  btnStopClick(config: ITetrisConfig) { this.service.stop(config); }

}
