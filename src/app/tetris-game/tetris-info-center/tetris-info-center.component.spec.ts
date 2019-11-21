import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TetrisInfoCenterComponent } from './tetris-info-center.component';

describe('TetrisInfoCenterComponent', () => {
  let component: TetrisInfoCenterComponent;
  let fixture: ComponentFixture<TetrisInfoCenterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TetrisInfoCenterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TetrisInfoCenterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
