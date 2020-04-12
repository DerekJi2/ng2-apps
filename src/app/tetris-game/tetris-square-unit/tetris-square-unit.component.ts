import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { BaseTetrisComponent } from '@tetris/shared/components/base-tetris-component';

@Component({
  selector: 'app-tetris-square-unit',
  templateUrl: './tetris-square-unit.component.html',
  styleUrls: ['./tetris-square-unit.component.scss']
})
export class TetrisSquareUnitComponent extends BaseTetrisComponent implements OnInit, OnChanges {

  @Input() value: 0 | 1;

  get state() {
    return this.value > 0 ? 'active' : 'inactive';
  }

  constructor(
  ) {
    super();
  }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges) {
    this.ngOnInit();
  }
}
