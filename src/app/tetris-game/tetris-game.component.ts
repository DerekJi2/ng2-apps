import { Component, OnInit } from '@angular/core';
import { BaseTetrisComponent } from '@tetris/shared/components/base-tetris-component';

@Component({
  selector: 'app-tetris-game',
  templateUrl: './tetris-game.component.html',
  styleUrls: ['./tetris-game.component.scss']
})
export class TetrisGameComponent extends BaseTetrisComponent implements OnInit {

  constructor(
  ) {
    super();
  }

  ngOnInit() {
  }

}
