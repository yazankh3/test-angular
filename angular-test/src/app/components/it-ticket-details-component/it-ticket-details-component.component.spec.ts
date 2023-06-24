import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItTicketDetailsComponentComponent } from './it-ticket-details-component.component';

describe('ItTicketDetailsComponentComponent', () => {
  let component: ItTicketDetailsComponentComponent;
  let fixture: ComponentFixture<ItTicketDetailsComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ItTicketDetailsComponentComponent]
    });
    fixture = TestBed.createComponent(ItTicketDetailsComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
