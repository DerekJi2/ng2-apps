import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-tetris-square-unit',
  templateUrl: './tetris-square-unit.component.html',
  styleUrls: ['./tetris-square-unit.component.scss']
})
export class TetrisSquareUnitComponent implements OnInit, OnChanges {

  @Input() state: 'inactive' | 'active' = 'inactive';

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges) {
    this.ngOnInit();
  }
}
