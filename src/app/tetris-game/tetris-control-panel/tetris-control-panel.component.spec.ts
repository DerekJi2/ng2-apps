import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TetrisControlPanelComponent } from './tetris-control-panel.component';

describe('TetrisControlPanelComponent', () => {
  let component: TetrisControlPanelComponent;
  let fixture: ComponentFixture<TetrisControlPanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TetrisControlPanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TetrisControlPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
