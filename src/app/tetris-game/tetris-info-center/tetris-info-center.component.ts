import { Component, OnInit } from '@angular/core';
import { BaseTetrisComponent } from '@tetris/shared/components/base-tetris-component';
import { ITetrisAppState } from '@core/tetris/store/states/tetris-app.state';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-tetris-info-center',
  templateUrl: './tetris-info-center.component.html',
  styleUrls: ['./tetris-info-center.component.scss']
})
export class TetrisInfoCenterComponent extends BaseTetrisComponent implements OnInit {

  constructor(
    protected store: Store<ITetrisAppState>
  ) {
    super(store);
  }

  ngOnInit() {
  }

}
