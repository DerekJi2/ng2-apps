import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@shared/shared.module';
import { TetrisGameComponent } from './tetris-game.component';
import { TetrisControlPanelComponent } from '@tetris/tetris-control-panel/tetris-control-panel.component';
import { TetrisScreenComponent } from '@tetris/tetris-screen/tetris-screen.component';
import { TetrisPlayBoardComponent } from '@tetris/tetris-play-board/tetris-play-board.component';
import { TetrisInfoCenterComponent } from '@tetris/tetris-info-center/tetris-info-center.component';


@NgModule({
  declarations: [
    TetrisGameComponent,
    TetrisControlPanelComponent,
    TetrisScreenComponent,
    TetrisPlayBoardComponent,
    TetrisInfoCenterComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
  ],
  exports: [
  ]
})
export class TetrisGameModule { }
