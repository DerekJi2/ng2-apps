import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from '@core/core.module';
import { TetrisGameModule } from '@tetris/tetris-game.module';
import { tetrisAppReducers } from '@core/tetris/store/reducers/tetris-app.reducers';
import { TetrisConfigEffects } from '@core/tetris/store/effects/tetris-config.effects';
import { environment } from '@env';
import { FlexLayoutModule } from '@angular/flex-layout';
import { TetrisMatrixEffects } from '@core/tetris/store/effects/tetris-matrix.effects';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    TetrisGameModule,

    FlexLayoutModule,
    StoreModule.forRoot(tetrisAppReducers),
    EffectsModule.forRoot([TetrisConfigEffects, TetrisMatrixEffects]),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
