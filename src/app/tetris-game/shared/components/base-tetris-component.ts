import { BaseAppComponent } from '@shared/components/base-app.component';
import { ITetrisAppState } from '@core/tetris/store/states/tetris-app.state';
import { Store } from '@ngrx/store';

export abstract class BaseTetrisComponent extends BaseAppComponent {

  constructor(
    protected store: Store<ITetrisAppState>
  ) {
    super();
  }
}
