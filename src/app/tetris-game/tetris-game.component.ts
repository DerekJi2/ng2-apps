import { Component, OnInit } from '@angular/core';
import { BaseTetrisComponent } from '@tetris/shared/components/base-tetris-component';
import { ITetrisAppState } from '@core/tetris/store/states/tetris-app.state';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-tetris-game',
  templateUrl: './tetris-game.component.html',
  styleUrls: ['./tetris-game.component.scss']
})
export class TetrisGameComponent extends BaseTetrisComponent implements OnInit {

  constructor(
    protected store: Store<ITetrisAppState>
  ) {
    super(store);
  }

  ngOnInit() {
  }

}
