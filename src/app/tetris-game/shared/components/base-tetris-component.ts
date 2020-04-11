import { BaseAppComponent } from '@shared/components/base-app.component';
import { ITetrisAppState } from '@core/tetris/store/states/tetris-app.state';
import { Store, select } from '@ngrx/store';
import { selectTetrisConfig, selectTetrisData } from '@core/tetris/store/selectors/tetris-config.selectors';
import { selectTetrisMatrix } from '@core/tetris/store/selectors/tetris-matrix.selectors';
import { forkJoin } from 'rxjs';
import { ITetrisMatrixState } from '@core/tetris/store/states/tetris-matrix.state';
import { TetrisMatrix } from '../models/tetris-matrix.type';
import { ITetrisConfig } from '@core/tetris/store/models/tetris-config.interface';

export abstract class BaseTetrisComponent extends BaseAppComponent {

  public config$ = this.store.pipe(select(selectTetrisConfig));
  public matrix$ = this.store.pipe(select(selectTetrisMatrix));

  public data$ = forkJoin(this.config$, this.matrix$);

  constructor(
    protected store: Store<ITetrisAppState>
  ) {
    super();
  }
}
