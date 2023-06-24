import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TicketDetailsComponentComponent } from './ticket-details-component.component';

describe('TicketDetailsComponentComponent', () => {
  let component: TicketDetailsComponentComponent;
  let fixture: ComponentFixture<TicketDetailsComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TicketDetailsComponentComponent]
    });
    fixture = TestBed.createComponent(TicketDetailsComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
