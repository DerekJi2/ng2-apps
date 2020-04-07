import { Injectable } from '@angular/core';
import { ITetrisConfig } from '../store/models/tetris-config.interface';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TetrisConfigService {

  constructor() { }

  getConfig(): Observable<ITetrisConfig> {
    return of(null);
  }
}
