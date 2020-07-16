import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InvestigationHeaderComponent } from './investigation-header.component';

describe('InvestigationHeaderComponent', () => {
  let component: InvestigationHeaderComponent;
  let fixture: ComponentFixture<InvestigationHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [InvestigationHeaderComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InvestigationHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
