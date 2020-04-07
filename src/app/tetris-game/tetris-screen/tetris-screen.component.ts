import { Component, OnInit } from '@angular/core';
import { BaseTetrisComponent } from '@tetris/shared/components/base-tetris-component';
import { ITetrisAppState } from '@core/tetris/store/states/tetris-app.state';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-tetris-screen',
  templateUrl: './tetris-screen.component.html',
  styleUrls: ['./tetris-screen.component.scss']
})
export class TetrisScreenComponent extends BaseTetrisComponent implements OnInit {

  constructor(
    protected store: Store<ITetrisAppState>
  ) {
    super(store);
  }


  ngOnInit() {
  }

}
