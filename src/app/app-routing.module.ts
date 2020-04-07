import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TetrisGameComponent } from '@tetris/tetris-game.component';


const routes: Routes = [
  { path: 'tetris', component: TetrisGameComponent },
  { path: '', redirectTo: '/tetris', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
