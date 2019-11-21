import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@shared/shared.module';
import { TetrisGameComponent } from './tetris-game.component';
import { TetrisControlPanelComponent } from '@tetris/tetris-control-panel/tetris-control-panel.component';
import { TetrisScreenComponent } from '@tetris/tetris-screen/tetris-screen.component';
import { TetrisPlayBoardComponent } from '@tetris/tetris-play-board/tetris-play-board.component';
import { TetrisInfoCenterComponent } from '@tetris/tetris-info-center/tetris-info-center.component';
import { TetrisSquareUnitComponent } from './tetris-square-unit/tetris-square-unit.component';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  declarations: [
    TetrisGameComponent,
    TetrisControlPanelComponent,
    TetrisScreenComponent,
    TetrisPlayBoardComponent,
    TetrisInfoCenterComponent,
    TetrisSquareUnitComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    FlexLayoutModule,
  ],
  exports: [
  ]
})
export class TetrisGameModule { }
