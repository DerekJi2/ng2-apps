import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@shared/shared.module';
import { TetrisGameComponent } from './tetris-game.component';



@NgModule({
  declarations: [
    TetrisGameComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
  ],
  exports: [
    TetrisGameComponent,
  ]
})
export class TetrisGameModule { }
