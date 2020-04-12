import { Component, OnInit } from '@angular/core';
import { BaseTetrisComponent } from '@tetris/shared/components/base-tetris-component';

@Component({
  selector: 'app-tetris-info-center',
  templateUrl: './tetris-info-center.component.html',
  styleUrls: ['./tetris-info-center.component.scss']
})
export class TetrisInfoCenterComponent extends BaseTetrisComponent implements OnInit {

  constructor(
  ) {
    super();
  }

  ngOnInit() {
  }

}
