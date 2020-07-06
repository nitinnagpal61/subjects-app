import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdditionalInvInfoComponent } from './additional-inv.info.component';

describe('AdditionalInvInfoComponent', () => {
  let component: AdditionalInvInfoComponent;
  let fixture: ComponentFixture<AdditionalInvInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdditionalInvInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdditionalInvInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
