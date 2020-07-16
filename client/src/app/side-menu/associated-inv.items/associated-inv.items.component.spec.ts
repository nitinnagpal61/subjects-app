import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AssociatedInvItemsComponent } from './associated-inv.items.component';

describe('AssociatedInvItemsComponent', () => {
  let component: AssociatedInvItemsComponent;
  let fixture: ComponentFixture<AssociatedInvItemsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AssociatedInvItemsComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssociatedInvItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
