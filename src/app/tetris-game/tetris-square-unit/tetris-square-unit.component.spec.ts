import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TetrisSquareUnitComponent } from './tetris-square-unit.component';

describe('TetrisSquareUnitComponent', () => {
  let component: TetrisSquareUnitComponent;
  let fixture: ComponentFixture<TetrisSquareUnitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TetrisSquareUnitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TetrisSquareUnitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
