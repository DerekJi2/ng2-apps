import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TetrisPlayBoardComponent } from './tetris-play-board.component';

describe('TetrisPlayBoardComponent', () => {
  let component: TetrisPlayBoardComponent;
  let fixture: ComponentFixture<TetrisPlayBoardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TetrisPlayBoardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TetrisPlayBoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
