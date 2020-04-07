import { Component, OnInit } from '@angular/core';
import { BaseTetrisComponent } from '@tetris/shared/components/base-tetris-component';
import { Store } from '@ngrx/store';
import { ITetrisAppState } from '@core/tetris/store/states/tetris-app.state';

@Component({
  selector: 'app-tetris-control-panel',
  templateUrl: './tetris-control-panel.component.html',
  styleUrls: ['./tetris-control-panel.component.scss']
})
export class TetrisControlPanelComponent extends BaseTetrisComponent implements OnInit {

  constructor(
    protected store: Store<ITetrisAppState>
  ) {
    super(store);
  }

  ngOnInit() {
  }

}
