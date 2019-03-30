import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CraftQuizComponent } from './craft-quiz.component';

describe('CraftQuizComponent', () => {
  let component: CraftQuizComponent;
  let fixture: ComponentFixture<CraftQuizComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CraftQuizComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CraftQuizComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
