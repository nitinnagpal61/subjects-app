import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActualSubjectCardComponent } from './actual-subject-card.component';

describe('ActualSubjectCardComponent', () => {
  let component: ActualSubjectCardComponent;
  let fixture: ComponentFixture<ActualSubjectCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ActualSubjectCardComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActualSubjectCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
