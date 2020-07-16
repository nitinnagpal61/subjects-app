import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CorporateInvestigationsComponent } from './corporate-investigations.component';

describe('AccountsComponent', () => {
  let component: CorporateInvestigationsComponent;
  let fixture: ComponentFixture<CorporateInvestigationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CorporateInvestigationsComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CorporateInvestigationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
