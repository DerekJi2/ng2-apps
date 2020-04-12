import { Component, OnInit } from '@angular/core';
import { BaseTetrisComponent } from '@tetris/shared/components/base-tetris-component';

@Component({
  selector: 'app-tetris-screen',
  templateUrl: './tetris-screen.component.html',
  styleUrls: ['./tetris-screen.component.scss']
})
export class TetrisScreenComponent extends BaseTetrisComponent implements OnInit {

  constructor(
  ) {
    super();
  }


  ngOnInit() {
  }

}
