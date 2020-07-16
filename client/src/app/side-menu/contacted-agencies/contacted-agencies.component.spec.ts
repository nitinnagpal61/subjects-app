import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactedAgenciesComponent } from './contacted-agencies.component';

describe('ContactedAgenciesComponent', () => {
  let component: ContactedAgenciesComponent;
  let fixture: ComponentFixture<ContactedAgenciesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ContactedAgenciesComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactedAgenciesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
