import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TetrisScreenComponent } from './tetris-screen.component';

describe('TetrisScreenComponent', () => {
  let component: TetrisScreenComponent;
  let fixture: ComponentFixture<TetrisScreenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TetrisScreenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TetrisScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
