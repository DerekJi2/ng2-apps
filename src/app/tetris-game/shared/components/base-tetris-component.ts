import { BaseAppComponent } from '@shared/components/base-app.component';
import { ITetrisAppState } from '@core/tetris/store/states/tetris-app.state';
import { Store, select } from '@ngrx/store';
import { selectTetrisConfig, selectTetrisData } from '@core/tetris/store/selectors/tetris-config.selectors';

export abstract class BaseTetrisComponent extends BaseAppComponent {

  public config$ = this.store.pipe(select(selectTetrisConfig));

  constructor(
    protected store: Store<ITetrisAppState>
  ) {
    super();
  }
}
