import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SuspiciousActivityComponent } from './suspicious-activity.component';

describe('SuspiciousActivityComponent', () => {
  let component: SuspiciousActivityComponent;
  let fixture: ComponentFixture<SuspiciousActivityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SuspiciousActivityComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SuspiciousActivityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
