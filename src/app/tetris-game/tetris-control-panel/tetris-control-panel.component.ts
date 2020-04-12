import { Component, OnInit } from '@angular/core';
import { BaseTetrisComponent } from '@tetris/shared/components/base-tetris-component';
import { ITetrisConfig } from '@tetris/shared/models/store/tetris-config.interface';
import { TetrisConfigService } from '@core/tetris/services/tetris-config.service';
import { SquareMatrixService } from '@core/tetris/services/square-matrix.service';

@Component({
  selector: 'app-tetris-control-panel',
  templateUrl: './tetris-control-panel.component.html',
  styleUrls: ['./tetris-control-panel.component.scss']
})
export class TetrisControlPanelComponent extends BaseTetrisComponent implements OnInit {

  public matrix$ = this.matrixSvc.matrix$;
  public config$ = this.matrixSvc.config$;

  constructor(
    protected service: TetrisConfigService,
    public matrixSvc: SquareMatrixService,
  ) {
    super();
  }

  ngOnInit() {
  }

  btnStartClick(config: ITetrisConfig) { this.service.start(config); }
  btnResumeClick(config: ITetrisConfig) { this.service.resume(config); }
  btnPauseClick(config: ITetrisConfig) { this.service.pause(config); }
  btnStopClick(config: ITetrisConfig) { this.service.stop(config); }

}
