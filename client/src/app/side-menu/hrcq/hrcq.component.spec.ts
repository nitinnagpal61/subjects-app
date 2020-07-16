import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HRCQComponent } from './hrcq.component';

describe('HRCQComponent', () => {
  let component: HRCQComponent;
  let fixture: ComponentFixture<HRCQComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [HRCQComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HRCQComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
