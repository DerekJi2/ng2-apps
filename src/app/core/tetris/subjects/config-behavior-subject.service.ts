import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ITetrisConfig } from '@tetris/shared/models/store/tetris-config.interface';
import { initialSettings, initialData } from '../store/states/tetris-config.state';

const initialConfigData: ITetrisConfig = {
  settings: initialSettings(),
  data: initialData(),
};

@Injectable({
  providedIn: 'root'
})
export class ConfigBehaviorSubjectService extends BehaviorSubject<ITetrisConfig> {
  protected data: ITetrisConfig = Object.assign({}, initialConfigData);

  constructor() {
    super(initialConfigData);
  }

  get value$() { return this.asObservable(); }
  get value() { return Object.assign({}, this.data); }

  read() { this.next(this.data); }

  update(data: ITetrisConfig) {
    this.data = data;
    this.next(data);
  }
}